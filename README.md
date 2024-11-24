# Type Utils ❇️

Version 0.1.0

## Lightweight TypeScript types utilities

### Table of Contents

- [Getting started](#gettingstarted)
- Utility types
	- [ValueOf](https://github.com/alessiofrittoli/type-utils/blob/master/docs/utils/README.md#valueof)
	- [ValueOfKey](https://github.com/alessiofrittoli/type-utils/blob/master/docs/utils/README.md#valueofkey)
	- [OptionalKey](https://github.com/alessiofrittoli/type-utils/blob/master/docs/utils/README.md#optionalkey)
	- [Writeable](https://github.com/alessiofrittoli/type-utils/blob/master/docs/utils/README.md#writeable)
	- [RenameKey](https://github.com/alessiofrittoli/type-utils/blob/master/docs/utils/README.md#renamekey)
	- [ArgumentTypes](https://github.com/alessiofrittoli/type-utils/blob/master/docs/utils/README.md#argumenttypes)
- Extenders types
	- [JSON](https://github.com/alessiofrittoli/type-utils/blob/master/docs/extenders/README.md#json)
		- [JSON.stringify\<T\>()](https://github.com/alessiofrittoli/type-utils/blob/master/docs/extenders/README.md#jsonstringifyt)
		- [JSON.parse\<T\>()](https://github.com/alessiofrittoli/type-utils/blob/master/docs/extenders/README.md#jsonparset)
	- [Body](https://github.com/alessiofrittoli/type-utils/blob/master/docs/extenders/README.md#body)
		- [Body.json\<T\>()](https://github.com/alessiofrittoli/type-utils/blob/master/docs/extenders/README.md#bodyjsont)
- [ESLint](#eslint)
- [Security](#security)
- [Credits](#made-with-)

---

### Getting started

Run the following command to start using `type-utils` in your projects:

```bash
npm i @alessiofrittoli/type-utils
```

or using `pnpm`

```bash
pnpm i @alessiofrittoli/type-utils
```

This tiny library defines some global types which are not imported in your IDE by default.\
After installation a `postinstall` scritp is executed to create the `type-utils.d.ts` file at the root of your project.
Please make sure to add it in the array of the "include" property in your `tsconfig.json`.

```json
{
	"compilerOptions": {
		...
	},
	"include": [ ..., "type-utils.d.ts" ],
}
```

You can skip this process if `*.ts` is already in your "include" array.

---

### [ESLint](https://www.npmjs.com/package/eslint)

warnings / errors check.

```bash
pnpm lint
```

### Security

If you believe you have found a security vulnerability, we encourage you to **_responsibly disclose this and NOT open a public issue_**. We will investigate all legitimate reports. Email `security@alessiofrittoli.it` to disclose any security vulnerabilities.

### Made with ☕

<table style='display:flex;gap:20px;'>
	<tbody>
		<tr>
			<td>
				<img src='https://avatars.githubusercontent.com/u/35973186' style='width:60px;border-radius:50%;object-fit:contain;'>
			</td>
			<td>
				<table style='display:flex;gap:2px;flex-direction:column;'>
					<tbody>
						<tr>
							<td>
								<a href='https://github.com/alessiofrittoli' target='_blank' rel='noopener'>Alessio Frittoli</a>
							</td>
						</tr>
						<tr>
							<td>
								<small>
									<a href='https://alessiofrittoli.it' target='_blank' rel='noopener'>https://alessiofrittoli.it</a> |
									<a href='mailto:info@alessiofrittoli.it' target='_blank' rel='noopener'>info@alessiofrittoli.it</a>
								</small>
							</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
	</tbody>
</table>