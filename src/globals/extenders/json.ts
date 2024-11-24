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
			replacer?	: ( key: string, value: any ) => any,
			space?		: string | number
		): string & Stringified<T>
		
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		parse<T>( text: string | Stringified<T>, reviver?: ( key: any, value: any ) => any ): T
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