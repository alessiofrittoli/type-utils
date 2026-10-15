# Utility types

[🔙 Back](../../README.md)

Utility types are exported from the package entry point, so they need to be imported where used.

```ts
import type { ValueOf, DeepPartial, UnflatDotKeys } from '@alessiofrittoli/type-utils'
```

### Table of Content

- [ValueOf](#valueof)
- [ValueOfKey](#valueofkey)
- [OptionalKey](#optionalkey)
- [ReadOnly](#readonly)
- [Writeable](#writeable)
- [RenameKey](#renamekey)
- [DeepPartial](#deeppartial)
- [Full](#full)
- [DeepFull](#deepfull)
- [NonNullableFields](#nonnullablefields)
- [MergedEnumValue](#mergedenumvalue)
- [UnflatDotKeys](#unflatdotkeys)
- [RecursivelyUnflatDotKeys](#recursivelyunflatdotkeys)
- [ArgumentTypes](#argumenttypes) (deprecated)

---

### `ValueOf`

Retrieves the type of the value of an object or array property.\
This type is useful when you want to get the type of a value from any property of a given object.

#### Type parameters

| Parameter | Description               |
| --------- | ------------------------- |
| `T`       | The object or array type. |

#### Usage

```ts
import type { ValueOf } from '@alessiofrittoli/type-utils'

interface MyObj {
  name: string
  age: number
}

type MyObjValue = ValueOf<MyObj> // string | number (Union of all value types)
type ArrayItem = ValueOf<string[]> // string | (other Array members)
```

💡 To get the item type of an array prefer `T[number]`, since `ValueOf` also includes the types of the array methods/properties.

---

### `ValueOfKey`

Retrieves the type of a specific property value from an object or array.\
This type takes a property `P` as a parameter and returns the type of that specific property.

#### Type parameters

| Parameter | Description                   |
| --------- | ----------------------------- |
| `T`       | The object or array type.     |
| `P`       | The property key (`keyof T`). |

#### Usage

```ts
import type { ValueOfKey } from '@alessiofrittoli/type-utils'

interface MyObj {
  name: string
  age: number
}

type AgeType = ValueOfKey<MyObj, 'age'> // number
```

---

### `OptionalKey`

Makes one or more specific properties of an object type optional, leaving the others unchanged.

#### Type parameters

| Parameter | Description                                                             |
| --------- | ----------------------------------------------------------------------- |
| `T`       | The object type.                                                        |
| `K`       | The property key(s) to make optional (a union of `keyof T` is allowed). |

#### Usage

```ts
import type { OptionalKey } from '@alessiofrittoli/type-utils'

interface MyObj {
  name: string
  age: number
  email: string
}

type OptionalAge = OptionalKey<MyObj, 'age'> // { name: string; age?: number; email: string }
type OptionalAgeAndEmail = OptionalKey<MyObj, 'age' | 'email'> // { name: string; age?: number; email?: string }
```

---

### `ReadOnly`

Recursively makes all properties of an object and its nested properties `readonly`.\
This is the deep counterpart of the built-in `Readonly<T>` type.

#### Type parameters

| Parameter | Description                                                       |
| --------- | ----------------------------------------------------------------- |
| `T`       | The type/interface where each property will be set to `readonly`. |

#### Usage

```ts
import type { ReadOnly } from '@alessiofrittoli/type-utils'

interface Config {
  name: string
  nested: {
    tags: string[]
  }
}

declare const config: ReadOnly<Config>

config.name = 'new' // ❌ Error: read-only property
config.nested.tags = [] // ❌ Error: read-only property
config.nested.tags.push('tag') // ❌ Error: `tags` is a `readonly string[]`
```

---

### `Writeable`

Recursively makes all properties of an object and its nested properties writable, even if the properties are marked as `readonly`.\
This is useful for deep mutations and it is the opposite of [`ReadOnly`](#readonly).

#### Type parameters

| Parameter | Description                                                    |
| --------- | -------------------------------------------------------------- |
| `T`       | The type/interface where `readonly` modifiers will be removed. |

#### Usage

```ts
import type { Writeable } from '@alessiofrittoli/type-utils'

interface MyObj {
  readonly name: string
  readonly nested: {
    readonly age: number
  }
}

type WriteableMyObj = Writeable<MyObj> // { name: string; nested: { age: number } }
```

---

### `RenameKey`

Renames a property of an object while inheriting its type and modifiers (`?` and `readonly`).\
This is useful when you need to refactor or update property names but keep the types consistent.

#### Type parameters

| Parameter | Description                             |
| --------- | --------------------------------------- |
| `T`       | The object type.                        |
| `K`       | The property key to rename (`keyof T`). |
| `R`       | The new property key.                   |

#### Usage

```ts
import type { RenameKey } from '@alessiofrittoli/type-utils'

interface MyObj {
  readonly name?: string
  age: number
}

type Renamed = RenameKey<MyObj, 'name', 'fullName'> // { readonly fullName?: string; age: number }
```

---

### `DeepPartial`

Recursively makes all properties of an object and its nested properties optional.\
This is the deep counterpart of the built-in `Partial<T>` type. Functions are left untouched.

#### Type parameters

| Parameter | Description                                                     |
| --------- | --------------------------------------------------------------- |
| `T`       | The type/interface where each property will be set as optional. |

#### Usage

```ts
import type { DeepPartial } from '@alessiofrittoli/type-utils'

interface Settings {
  theme: {
    color: string
    fontSize: number
  }
  onChange: () => void
}

const settings: DeepPartial<Settings> = {
  theme: {
    color: 'red', // `fontSize` can be omitted
  },
  // `onChange` can be omitted
}
```

---

### `Full`

Transforms all optional properties of a given type `T` into required properties by 1 level.\
It ensures that every 1st level property in the resulting type is non-optional (nested properties are left untouched).\
Use [`DeepFull`](#deepfull) to make nested properties required too.

#### Type parameters

| Parameter | Description      |
| --------- | ---------------- |
| `T`       | The object type. |

#### Usage

```ts
import type { Full } from '@alessiofrittoli/type-utils'

type User = {
  id?: number
  name?: string
  profile?: {
    age?: number
  }
}

type FullUser = Full<User>

const user: FullUser = {
  id: 1, // Now required
  name: 'John', // Now required
  profile: {
    // Now required
    age: 18, // Still optional
  },
}
```

---

### `DeepFull`

Recursively ensures that all properties of a given type `T`, including nested properties, are required.\
It applies the [`Full`](#full) transformation to every property of `T`, traversing deeply into any nested objects.

#### Type parameters

| Parameter | Description      |
| --------- | ---------------- |
| `T`       | The object type. |

#### Usage

```ts
import type { DeepFull } from '@alessiofrittoli/type-utils'

type User = {
  id?: number
  name?: string
  profile?: {
    age?: number
  }
}

const user: DeepFull<User> = {
  id: 1, // Now required
  name: 'John', // Now required
  profile: {
    age: 18, // Now required
  },
}
```

---

### `NonNullableFields`

Removes `null` and `undefined` from all 1st level properties of a given type `T`.\
This ensures that every property of the resulting type cannot hold `null` or `undefined` values.

⚠️ Optional properties marked with `?` will be still optional! Combine it with [`Full`](#full) to make them required too. ⚠️

#### Type parameters

| Parameter | Description      |
| --------- | ---------------- |
| `T`       | The object type. |

#### Usage

```ts
import type { Full, NonNullableFields } from '@alessiofrittoli/type-utils'

type User = {
  id: number | null
  name: string | undefined
  age?: number
}

const user: NonNullableFields<User> = {
  id: 1, // `null` removed
  name: 'John', // `undefined` removed
  age: 30, // Still optional property
}

const fullUser: NonNullableFields<Full<User>> = {
  id: 1, // `null` removed
  name: 'John', // `undefined` removed
  age: 30, // Now required
}
```

---

### `MergedEnumValue`

Extracts the value type from merged enums.\
It is particularly useful when working with multiple enums that are grouped together, allowing you to derive a type representing all possible values across the enums.

#### Type parameters

| Parameter | Description                                           |
| --------- | ----------------------------------------------------- |
| `T`       | The type of the object grouping the enums (`typeof`). |

#### Usage

```ts
import type { MergedEnumValue } from '@alessiofrittoli/type-utils'

// Define two enums
enum Mammals {
  Humans,
  Bats,
  Dolphins,
}

enum Reptiles {
  Snakes,
  Alligators,
  Lizards,
}

// Merge the enums
const Animals = { Mammals, Reptiles }

// Derive the type for all possible enum values
type Animal = MergedEnumValue<typeof Animals> // Mammals | Reptiles

// Example usage
const testAnimal: Animal = 0 as any

switch (testAnimal) {
  case Animals.Mammals.Humans:
  case Animals.Mammals.Bats:
  case Animals.Mammals.Dolphins:
  case Animals.Reptiles.Snakes:
  case Animals.Reptiles.Alligators:
  case Animals.Reptiles.Lizards:
    // Valid cases
    break
  default: {
    // `testAnimal` will be of type `never` here, ensuring exhaustive checks
    const invalid = testAnimal
  }
}
```

---

### `UnflatDotKeys`

Turns dotted keys (`"a.b"?: T`) of an object type into nested objects (`a?: { b?: T }`).

- Keys without a dot are kept as they are.
- A nested object is required when at least one of its keys is required, otherwise it is optional.
- Dotted keys of nested object values are left untouched. Use [`RecursivelyUnflatDotKeys`](#recursivelyunflatdotkeys) to unflat them too.

#### Type parameters

| Parameter | Description                                                                                                                                   |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `T`       | The object type to work with.                                                                                                                 |
| `K`       | (Optional) A key prefix. When provided, only the `${K}.*` keys are picked and the `${K}.` prefix is stripped. Defaults to `never` (all keys). |

#### Usage

```ts
import type { UnflatDotKeys } from '@alessiofrittoli/type-utils'

interface Options {
  name: string
  'cache.enabled'?: boolean
  'cache.ttl': number
  'log.level'?: 'info' | 'debug'
}

type NestedOptions = UnflatDotKeys<Options>
// {
//   name: string
//   cache: { enabled?: boolean; ttl: number } // required since `cache.ttl` is required
//   log?: { level?: 'info' | 'debug' } // optional since all `log.*` keys are optional
// }

type CacheOptions = UnflatDotKeys<Options, 'cache'>
// { enabled?: boolean; ttl: number }
```

---

### `RecursivelyUnflatDotKeys`

Same as [`UnflatDotKeys`](#unflatdotkeys), but dotted keys of nested plain object values are unflattened too.\
Functions, arrays and primitive values are left untouched.

#### Type parameters

| Parameter | Description                                                                                                                                   |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `T`       | The object type to work with.                                                                                                                 |
| `K`       | (Optional) A key prefix. When provided, only the `${K}.*` keys are picked and the `${K}.` prefix is stripped. Defaults to `never` (all keys). |

#### Usage

```ts
import type { RecursivelyUnflatDotKeys } from '@alessiofrittoli/type-utils'

interface Options {
  'cache.ttl': number
  nested?: {
    'a.b': string
  }
}

type NestedOptions = RecursivelyUnflatDotKeys<Options>
// {
//   cache: { ttl: number }
//   nested?: { a: { b: string } }
// }
```

---

### `ArgumentTypes`

> ⚠️ **Deprecated**: use the built-in [`Parameters<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype) utility type instead.

Extracts the types of the arguments of a function.\
This type is useful when you want to infer or manipulate the types of parameters from a given function.

#### Usage

```ts
import type { ArgumentTypes } from '@alessiofrittoli/type-utils'

const foo = (x: string, y: number) => {}

// Extract argument types
type FooArguments = ArgumentTypes<typeof foo> // [ x: string, y: number ]
// same as
type FooParameters = Parameters<typeof foo> // [ x: string, y: number ]
```
