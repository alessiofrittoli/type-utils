const fs		= require( 'fs' )
const path		= require( 'path' )
const project	= require( '../../package.json' )


const tsSetup = () => {

	const projectRoot = process.env.INIT_CWD || process.cwd()

	if ( ! projectRoot || projectRoot.endsWith( project.name ) ) {
		console.error( 'INIT_CWD is not set. This script must be run during pnpm install.' )
		process.exit( 1 )
	}

	const tsconfigPath = path.resolve( projectRoot, 'type-utils.d.ts' )

	const data = [
		`/// <reference types="${ project.name }" />`,
		'// NOTE: This file should not be edited'
	].join( '\n\n' )

	try {
		fs.writeFileSync( tsconfigPath, data )
		console.log( '"type-utils.d.ts" has been created at the root of your project.' )
		console.log( 'Please update your tsconfig.json to add this file in your "include" property of your tsconfig.json file.' )
	} catch ( error ) {
		console.error( 'An error occured while creating "type-utils.d.ts" at the root of your project. Some global types may not working as expect.', error )
		process.exit( 1 )
	}

}

module.exports = tsSetup