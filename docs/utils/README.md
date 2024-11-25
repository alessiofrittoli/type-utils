# Utility types

The following types are globally declared so there is no need to import them.

[🔙 Back](../../README.md)

### `ValueOf`

Retrieves the type of the value of an object or array property.\
This type is useful when you want to get the type of a value from any property of a given object.

#### Usage

```ts
interface MyObj
{
	name: string
	age	: number
}

type NameType = ValueOf<MyObj> // string | number (Union of all value types)
```

---

### `ValueOfKey`

Retrieves the type of a specific property value from an object or array.\
This type takes a property `P` as a parameter and returns the type of that specific property.

#### Usage

```ts
interface MyObj
{
	name: string
	age	: number
}

type AgeType = ValueOfKey<MyObj, 'age'> // number
```

---

### `OptionalKey`

Makes a specific property of an object type optional.\
This is useful when you need to modify the type of a single property but leave the others unchanged.

#### Usage

```ts
interface MyObj
{
	name: string
	age	: number
}

type OptionalAge = Optional<MyObj, 'age'>; // { name: string; age?: number }
```

---

### `Writeable`

Recursively makes all properties of an object and its nested properties writable, even if the properties are marked as readonly. This is useful for deep mutations.

#### Usage

```ts
interface MyObj
{
	readonly name	: string
	readonly nested	: {
		readonly age: number
	}
}

type WriteableMyObj = Writeable<MyObj>; // { name: string; nested: { age: number } }

```

---

### `RenameKey`

Renames a property of an object while keeping its type intact. This is useful when you need to refactor or update property names but keep the types consistent.

#### Usage

```ts
interface MyObj
{
	name: string
	age	: number
}

type Renamed = RenameKey<MyObj, 'name', 'fullName'> // { fullName: string; age: number }
```

---

### `ArgumentTypes`

Extracts the types of the arguments of a function.\
This type is useful when you want to infer or manipulate the types of parameters from a given function.

#### Usage

```ts
const foo = ( x: string, y: number ) => {}

// Extract argument types
type FooArguments = ArgumentTypes<typeof foo> // [ string, number ]
```