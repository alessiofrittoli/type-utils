const tsSetup = require( './ts-setup.js' )

/** @type {(() => void | Promise<void>)[]} */
const scripts = [ tsSetup ]

const executePostInstall = async () => {
	await Promise.all( scripts.map( async script => {
		await script()
	} ) )
}

executePostInstall()