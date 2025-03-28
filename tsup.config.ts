import { defineConfig } from 'tsup'

export default defineConfig( {
	entry		: [ 'src/index.ts' ],
	format		: [ 'cjs', 'esm' ],
	dts			: true,
	splitting	: false,
	shims		: false,
	skipNodeModulesBundle: true,
	clean		: true,
	treeshake	: true,
	minify		: true,
	sourcemap	: true,
} )