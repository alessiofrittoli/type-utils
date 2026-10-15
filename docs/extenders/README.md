# Extenders types

[🔙 Back](../../README.md)

Extenders augment built-in global interfaces to improve their type safety.\
They are the only types globally declared by this package and they are exposed through the `@alessiofrittoli/type-utils/globals` types entry.

The `postinstall` script automatically adds the following reference to the `globals.d.ts` file at the root of your project (see [Getting started](../../README.md#getting-started)):

```ts
/// <reference types="@alessiofrittoli/type-utils/globals" />
```

💡 If you don't want to use the global extenders, simply remove the line above from your `globals.d.ts` file. Exported [utility types](../utils/README.md) will keep working since they don't rely on globals.

### Table of Content

- [JSON](#json)
  - [JSON.stringify\<T\>()](#jsonstringifyt)
  - [JSON.parse\<T\>()](#jsonparset)
- [Body](#body)
  - [Body.json\<T\>()](#bodyjsont)

---

### [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)

The [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) interface has been extended to improve the type safety of the [JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) and [JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) methods.

By allowing a type argument, these methods can now work with strongly-typed objects, providing better type inference and reducing the need for manual type casting.

#### [JSON.stringify\<T\>()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

- [JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) can now accept a type argument `T`, making it possible to work with specific object types, ensuring better type inference and safety when serializing objects.
- Returns a `string` branded with `Stringified<T>` (`string & Stringified<T>`) to indicate it's a serialized value of type `T`. The returned value can still be used anywhere a `string` is expected.
- When `T` is a `Date`, a plain `string` is returned since dates are serialized to ISO strings and cannot be parsed back to `Date` objects.
- The `replacer` argument is typed too: as a function, its `this` and `value` are bound to `T`; as an array, keys of `T` are suggested by your IDE.

##### Example

```ts
interface MyObj {
  name: string
  age: number
}

const data: MyObj = { name: 'Name', age: 27 }

// Stringifying with inferred type
const stringifiedData = JSON.stringify(data)
// Type inferred as string & Stringified<MyObj>

// Explicitly setting the type
const stringifiedData2 = JSON.stringify<MyObj>(data)
// The result is a stringified object of type MyObj.

// Replacer array with suggested keys
const nameOnly = JSON.stringify(data, ['name'])

// Dates are stringified as plain strings
const date = JSON.stringify(new Date()) // string
```

#### [JSON.parse\<T\>()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

- [JSON.parse\<T\>()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) can now accept `Stringified<T>` as input, maintaining the type information of the parsed object.
- The method can infer the type of the parsed object if it was previously serialized using `stringify` with the same type argument.\
  ⚠️ For some reason, when using these types in an external project, the Type cannot be automatically inferred from the stringified data. If so, explicitly set it's types as in the example below.
- The `reviver` argument is typed too: `key` is a key of `T` and `value` is the type of `T[key]`.
- When no type argument is given and the type cannot be inferred, `unknown` is returned instead of `any`, forcing you to narrow the parsed value before using it.

##### Example

```ts
// Parsing a previously stringified object
const parsedData = JSON.parse(stringifiedData)
// Type inferred as MyObj

// Explicitly setting the type during parsing
const parsedData2 = JSON.parse<MyObj>('{"name":"Name","age":27}')
// Explicitly infers the type as MyObj

// No type argument
const unknownData = JSON.parse('{"name":"Name","age":27}')
// Type inferred as unknown
```

##### Why those enhancements?

By allowing a type argument for `stringify` and `parse`, you can:

- Ensure that serialized and deserialized objects maintain their correct types.
- Improve type safety and eliminate the need for type assertions or casting when working with JSON data.
- Automatically infer the type when working with objects, making your code more predictable and reliable.

---

### `Body`

#### [Body.json\<T\>()](https://developer.mozilla.org/en-US/docs/Web/API/Response/json)

The `Body.json()` method is augmented to support a generic type `T` (defaults to `any`), which ensures that the parsed response is strongly typed.

When calling `Body.json()`, you can explicitly define the type of the response data, providing type safety when dealing with server responses, especially when using the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

Since both [Request](https://developer.mozilla.org/en-US/docs/Web/API/Request) and [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) implement the `Body` interface, the type argument is available on both `request.json<T>()` and `response.json<T>()`.

##### Example

```ts
interface MyObj {
  name: string
  age: number
}

const response = await fetch( ... )

// Explicitly setting the response type
const data = await response.json<MyObj>()
// Type inferred as MyObj
```

##### Why This Enhancement?

- Type Safety: The type argument ensures the response body is parsed into the expected type, eliminating the need for manual type casting.
- Improved Inference: Automatically infers the correct response type when the API or response structure is known, making the code cleaner and reducing runtime errors related to type mismatches.
