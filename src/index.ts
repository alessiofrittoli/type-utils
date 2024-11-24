// /**
//  * Get the Type of the Value of a object/array property.
//  */
// export type ValueOf<T> = T[ keyof T ]


// /**
//  * Get the Type of the Value of object/array specific property.
//  */
// export type ValueOf2<T, P extends keyof T> = T[ P ]


// /**
//  * Make a specific property Optional.
//  */
// export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>


// /**
//  * Make read-only properties of an object writeable.
//  */
// export type Writeable<T> = { -readonly [ P in keyof T ]: T[ P ] }


// /**
//  * Make read-only properties of an object recursively writeable.
//  */
// export type DeepWriteable<T> = { -readonly [ P in keyof T ]: DeepWriteable<T[ P ]> }

// /**
//  * Renames a property while inheriting its type.
//  */
// export type RenameKey<T, K extends keyof T, R extends PropertyKey> = Omit<T, K> & { [ P in R ]: T[ K ] }


// /** Get the Type of a function arguments. */
// // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type, @typescript-eslint/no-explicit-any
// export type ArgumentTypes<F extends Function> = F extends ( ...args: infer A ) => any ? A : never

export type DoNotUse = never

export type * from './globals'