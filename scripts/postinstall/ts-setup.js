const fs		= require( 'fs' )
const path		= require( 'path' )
const project	= require( '../../package.json' )


const tsSetup = () => {

	const projectName	= project.name.replace( '@alessiofrittoli/', '' )
	const projectRoot	= process.env.INIT_CWD || process.cwd()
	const typesFilename	= `${ projectName }.d.ts`

	if ( projectRoot.endsWith( projectName ) ) {
		console.log( `Skip "postinstall" script. Running in ${ project.name }` )
		return
	}
	if ( ! projectRoot ) {
		console.error( 'INIT_CWD is not set. This script must be run during pnpm install.' )
		process.exit( 1 )
	}

	const tsconfigPath = path.resolve( projectRoot, typesFilename )

	const data = [
		`/// <reference types="${ project.name }" />`,
		'// NOTE: This file should not be edited'
	].join( '\n\n' )

	try {
		fs.writeFileSync( tsconfigPath, data )
		console.log( `"${ typesFilename }" has been created at the root of your project.` )
		console.log( 'Please update your tsconfig.json to add this file in your "include" property of your tsconfig.json file.' )
	} catch ( error ) {
		console.error( `An error occured while creating "${ typesFilename }" at the root of your project. Some global types may not working as expect.`, error )
		process.exit( 1 )
	}

}

module.exports = tsSetup