declare class Stringified<T> extends String
{
	private ___stringified: T
}

declare global
{

	interface JSON
	{
		stringify<T>(
			value		: T,
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			replacer?	: ( this: { '': T } | T, key: string, value: T ) => any,
			space?		: string | number
		): T extends Date ? string : string & Stringified<T>
	
		stringify<T>(
			value		: T,
			replacer?	: ( T extends object ? ( keyof T )[] : ( number | string )[] ) | null,
			space?		: string | number
		): T extends Date ? string : string & Stringified<T>
				
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		parse<T, U extends keyof T = keyof T>( text: string | Stringified<T>, reviver?: ( key: U, value: T[ U ] ) => any ): T
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		parse( text: string, reviver?: ( key: any, value: any ) => any ): any
	}
	
	interface Body
	{
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		json<T = any>(): Promise<T>
	}
}


export {}