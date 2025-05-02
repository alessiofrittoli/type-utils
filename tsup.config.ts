import { defineConfig } from 'tsup'

const enableSourcemap = process.env.NODE_ENV !== 'production'

export default defineConfig( {
	entry		: [ 'src/index.ts' ],
	format		: [ 'cjs', 'esm' ],
	dts			: true,
	splitting	: false,
	shims		: false,
	skipNodeModulesBundle: true,
	clean		: true,
	minify		: true,
	sourcemap	: enableSourcemap,
} )