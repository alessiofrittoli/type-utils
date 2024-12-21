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

---

### `Full<T>`

The `Full<T>` utility type is a TypeScript mapped type that transforms all optional properties of a given type `T` into required properties by 1 level.\
It ensures that every property in the resulting type is non-optional.

#### Usage

```ts
type User = {
	id?		: number
	name?	: string
	profile?: {
		age?: number
	}
}

type FullUser = Full<User>

const user: FullUser = {
	id		: 1,		// Now required
	name	: 'John',	// Now required
	profile	: {			// Now required
		age: 18 // Still optional
	}
}
```

---

### `DeepFull<T>`

The `DeepFull<T>` utility type is a recursive TypeScript type that ensures all properties of a given type `T`, including nested properties, are required.\
It applies the `Full` transformation to every property of `T`, traversing deeply into any nested objects.

#### Usage

```ts
type User = {
	id?		: number
	name?	: string
	profile?: {
		age?: number
	}
}

const user: DeepFull<User> = {
	id		: 1,		// Now required
	name	: 'John',	// Now required
	profile	: {
		age: 18 // Now required
	},
}
```

---

### `NonNullableFields<T>`

The `NonNullableFields<T>` utility type removes `null` and `undefined` from all properties of a given type `T`.\
This ensures that every property of the resulting type cannot hold `null` or `undefined` values.

⚠️ Optional properties marked with `?` will be still optional! ⚠️

#### Usage

```ts
type User = {
	id		: number | null
	name	: string | undefined
	age?	: number
}

const user: NonNullableFields<User> = {
	id	: 1,		// `null` removed
	name: 'John',	// `undefined` removed
	age	: 30,		// Still optional property
}


const user: NonNullableFields<Full<User>> = {
	id	: 1,		// `null` removed
	name: 'John',	// `undefined` removed
	age	: 30,		// Now required
}
```

---

### `MergedEnumValue<T>`

The `MergedEnumValue<T>` utility extracts the value type from merged enums. It is particularly useful when working with multiple enums that are grouped together, allowing you to derive a type representing all possible values across the enums.

#### Usage

```ts
// Define two enums
enum Mammals {
	Humans,
	Bats,
	Dolphins
}

enum Reptiles {
	Snakes,
	Alligators,
	Lizards
}

// Merge the enums
const Animals = { Mammals, Reptiles }
type Animals = typeof Animals

// Derive the type for all possible enum values
type Animal = MergedEnumValue<typeof Animals>

// Example usage
const testAnimal: Animal = 0 as any

switch ( testAnimal ) {
	case Animals.Mammals.Humans:
	case Animals.Mammals.Bats:
	case Animals.Mammals.Dolphins:
	case Animals.Reptiles.Snakes:
	case Animals.Reptiles.Alligators:
	case Animals.Reptiles.Lizards:
		// Valid cases
		break;
	default: {
		// `testAnimal` will be of type `never` here, ensuring exhaustive checks
		const invalid = testAnimal
	}
}
```