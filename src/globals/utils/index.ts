declare global
{
	/**
	 * Get the Type of the Value of a object/array property.
	 */
	type ValueOf<T> = T[ keyof T ]


	/**
	 * Get the Type of the Value of object/array specific property.
	 */
	type ValueOfKey<T, P extends keyof T> = T[ P ]


	/**
	 * Make a specific property optional.
	 */
	type OptionalKey<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>
	

	/**
	 * Make read-only properties of an object recursively writeable.
	 */
	type Writeable<T> = { -readonly [ P in keyof T ]: Writeable<T[ P ]> }

	/**
	 * Renames a property while inheriting its type.
	 */
	type RenameKey<T, K extends keyof T, R extends PropertyKey> = Omit<T, K> & { [ P in R ]: T[ K ] }


	/** Get the Type of a function arguments. */
	// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type, @typescript-eslint/no-explicit-any
	type ArgumentTypes<F extends Function> = F extends ( ...args: infer A ) => any ? A : never


	/**
	 * Makes all 1st level properties of a type required.
	 */
	type Full<T> = {
		[ P in keyof T ]-?: T[ P ]
	}


	/**
	 * Recursively makes all properties of a type required at all nested levels.
	 */
	type DeepFull<T> = {
		[ P in keyof T ]-?: DeepFull<T[ P ]>
	}


	/**
	 * Removes `null` and `undefined` from all properties of a type.
	 */
	type NonNullableFields<T> = {
		[ P in keyof T ]: NonNullable<T[ P ]>
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
	type MergedEnumValue<T> = {
		[ K in keyof T ]: {
			[ K2 in keyof T[ K ] ]: T[ K ][ K2 ]
		}[ keyof T[ K ] ]
	}[ keyof T ]
}


export {}