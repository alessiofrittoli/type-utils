# Extenders types

[🔙 Back](../../README.md)

### [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)

The [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) interface has been extended to improve the type safety of the [JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) and [JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) methods.

By allowing a type argument, these methods can now work with strongly-typed objects, providing better type inference and reducing the need for manual type casting.

#### [JSON.stringify\<T\>()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

- [JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) can now accept a type argument `T`, making it possible to work with specific object types, ensuring better type inference and safety when serializing objects.
- Returns a string, but with the additional type information from `Stringified<T>` to indicate it’s a serialized object of type `T`.

##### Example

```ts
interface MyObj
{
	name: string
	age: number
}

const data: MyObj = { name: 'Name', age: 27 }

// Stringifying with inferred type
const stringifiedData = JSON.stringify( data )
// Type inferred as string & Stringified<MyObj>

// Explicitly setting the type
const stringifiedData2 = JSON.stringify<MyObj>( data )
// The result is a stringified object of type MyObj.
```

#### [JSON.parse\<T\>()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

- [JSON.parse\<T\>()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) can now accept `Stringified<T>` as input, maintaining the type information of the parsed object.
- The method can infer the type of the parsed object if it was previously serialized using `stringify` with the same type argument.\
	⚠️ For some reason, when using these types in an external project, the Type cannot be automatically inferred from the stringified data. If so, explicitly set it's types as in the example below.

##### Example

```ts
// Parsing a previously stringified object
const parsedData = JSON.parse( stringifiedData ) 
// Type inferred as MyObj

// Explicitly setting the type during parsing
const parsedData2 = JSON.parse<MyObj>( "{\"name\":\"Name\",\"age\":27}" ) 
// Explicitly infers the type as MyObj
```

##### Why those enhancements?

By allowing a type argument for `stringify` and `parse`, you can:

- Ensure that serialized and deserialized objects maintain their correct types.
- Improve type safety and eliminate the need for type assertions or casting when working with JSON data.
- Automatically infer the type when working with objects, making your code more predictable and reliable.

---

### `Body`

#### [Body.json\<T\>()](https://developer.mozilla.org/en-US/docs/Web/API/Response/json)

The `Body.json()` method is augmented to support a generic type `T`, which ensures that the parsed response is strongly typed.

When calling `Body.json()`, you can explicitly define the type of the response data, providing type safety when dealing with server responses, especially when using the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

##### Example

```ts
interface MyObj
{
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