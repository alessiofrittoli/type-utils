export type * from '@/unflat-dot-keys'

/**
 * Get the Type of the Value of a object/array property.
 *
 */
export type ValueOf<T> = T[keyof T]

/**
 * Get the Type of the Value of object/array specific property.
 *
 */
export type ValueOfKey<T, P extends keyof T> = T[P]

/**
 * Make a specific property optional.
 *
 */
export type OptionalKey<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>

/**
 * Recursively set to `readonly` all properties of the given type/interface.
 *
 * @template T The type/interface where each property will be set to `readonly`.
 */
export type ReadOnly<T> = keyof T extends never ? T : { readonly [k in keyof T]: ReadOnly<T[k]> }

/**
 * Make read-only properties of an object recursively writeable.
 *
 */
export type Writeable<T> = keyof T extends never ? T : { -readonly [P in keyof T]: Writeable<T[P]> }

/**
 * Renames a property while inheriting its type and modifiers (`?` and `readonly`).
 *
 * @example
 * ```ts
 * interface User {
 * 	// the user name
 * 	name?: string
 * 	// the user age
 * 	age: number
 * }
 *
 * type ModifiedUser = RenameKey<User, 'name', 'username'>
 * // { username?: string, age: number }
 * ```
 */
export type RenameKey<T, K extends keyof T, R extends PropertyKey> = {
	[P in keyof T as P extends K ? R : P]: T[P]
}

/**
 * Get the Type of a function arguments.
 *
 * @deprecated use `Parameters` instead.
 */
// oxlint-disable-next-line typescript/no-explicit-any
export type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never

/**
 * Recursively convert to optional all properties of the given type/interface.
 *
 * @template T The type/interface where each property will be set as optional.
 */
// oxlint-disable-next-line typescript/no-explicit-any
export type DeepPartial<T> = T extends (...args: any[]) => unknown
	? T
	: T extends object
		? { [P in keyof T]?: DeepPartial<T[P]> }
		: T

/**
 * Makes all 1st level properties of a type required.
 *
 */
export type Full<T> = {
	[P in keyof T]-?: T[P]
}

/**
 * Recursively makes all properties of a type required at all nested levels.
 *
 */
export type DeepFull<T> = {
	[P in keyof T]-?: DeepFull<T[P]>
}

/**
 * Removes `null` and `undefined` from all properties of a type.
 *
 */
export type NonNullableFields<T> = {
	[P in keyof T]: NonNullable<T[P]>
}

/**
 * Get the type of the value of merged enums.
 *
 * @example
 *
 * ```ts
 * enum Mammals {
 * 	Humans,
 * 	Bats,
 * 	Dolphins
 * }
 *
 * enum Reptiles {
 * 	Snakes,
 * 	Alligators,
 * 	Lizards
 * }
 *
 * // merged enums.
 * const Animals = { Mammals, Reptiles }
 * type Animals = typeof Animals
 *
 * type Animal = MergedEnumValueType<typeof Animals>
 *
 * const testAnimal: Animal = 0 as any
 *
 * switch ( testAnimal ) {
 * 	case Animals.Mammals.Humans:
 * 	case Animals.Mammals.Bats:
 * 	case Animals.Mammals.Dolphins:
 * 	case Animals.Reptiles.Snakes:
 * 	case Animals.Reptiles.Alligators:
 * 	case Animals.Reptiles.Lizards:
 * 		break
 * 	default: {
 * 		const invalid = testAnimal // `testAnimal` is type of never
 * 	}
 * }
 * ```
 */
export type MergedEnumValue<T> = {
	[K in keyof T]: {
		[K2 in keyof T[K]]: T[K][K2]
	}[keyof T[K]]
}[keyof T]

/**
 * Builds a discriminated union of `[event, args]` tuples from an event map.
 *
 * Each key of the given map becomes a tuple whose first element is the event name
 * and whose second element is its payload type. Since the tuples are discriminated
 * by the event name, checking `event` narrows `args` to the matching payload.
 *
 * @template M The event map, where each key is an event name and each value is its payload type.
 *
 * @example
 * ```ts
 * interface Events {
 * 	play: { position: number };
 * 	error: Error;
 * }
 *
 * type Args = EventArgs<Events>;
 * // [event: 'play', args: { position: number }] | [event: 'error', args: PlayerError]
 *
 * const onEvent = (...[event, args]: Args) => {
 * 	if (event === "play") {
 * 		console.log(args.position); // `args` is narrowed to `{ position: number }`
 * 	}
 * };
 * ```
 */
export type EventArgs<M> = { [K in keyof M]: [event: K, args: M[K]] }[keyof M]
