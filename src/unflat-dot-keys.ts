type RequiredKey<T> = { [K in keyof T]-?: object extends Pick<T, K> ? never : K }[keyof T]

type Head<K> = K extends `${infer H}.${string}` ? H : never

/**
 * Picks the `${P}.*` keys of `T`, stripping the `${P}.` prefix. When `P` is `never`, `T` is returned as is.
 *
 * __INTERNAL__
 */
type PickDotKeys<T, P extends string> = [P] extends [never]
	? T
	: { [K in keyof T as K extends `${P}.${infer R}` ? R : never]: T[K] }

/**
 * When `Deep` is `true`, unflattens plain object values, leaving functions, arrays and primitives untouched.
 *
 * __INTERNAL__
 */
type UnflatValue<V, Deep extends boolean> = Deep extends false
	? V
	: // eslint-disable-next-line @typescript-eslint/no-explicit-any
		V extends ((...args: any[]) => unknown) | readonly unknown[]
		? V
		: V extends object
			? Unflat<V, Deep>
			: V

/**
 * Turns dotted keys into nested objects. A nested object is required when at least one of its keys is required.
 *
 * __INTERNAL__
 */
type Unflat<T, Deep extends boolean> = {
	[K in keyof T as K extends `${string}.${string}` ? never : K]: UnflatValue<T[K], Deep>
} & {
	[H in Head<Extract<RequiredKey<T>, string>>]: Unflat<PickDotKeys<T, H>, Deep>
} & {
	[H in Exclude<Head<keyof T>, Head<Extract<RequiredKey<T>, string>>>]?: Unflat<PickDotKeys<T, H>, Deep>
}

/**
 * Turns dotted keys (`"a.b"?: T`) into nested objects (`a?: { b?: T }`).
 *
 * @template T The object interface to work with.
 * @template K The object interface specific key to work with (`${P}.*`).
 */
export type UnflatDotKeys<T, K extends string = never> = Unflat<PickDotKeys<T, K>, false>

/**
 * Same as {@link UnflatDotKeys}, but dotted keys of nested object values are unflattened too.
 *
 * @template T The object interface to work with.
 * @template K The object interface specific key to work with (`${P}.*`).
 */
export type RecursivelyUnflatDotKeys<T, P extends string = never> = Unflat<PickDotKeys<T, P>, true>
