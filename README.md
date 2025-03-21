# Type Utils ❇️

[![NPM Latest Version][version-badge]][npm-url] [![Socket Status][socket-badge]][socket-url] [![NPM Monthly Downloads][downloads-badge]][npm-url] [![Dependencies][deps-badge]][deps-url]

[![GitHub Sponsor][sponsor-badge]][sponsor-url]

[version-badge]: https://img.shields.io/npm/v/%40alessiofrittoli%2Ftype-utils
[npm-url]: https://npmjs.org/package/%40alessiofrittoli%2Ftype-utils
[socket-badge]: https://socket.dev/api/badge/npm/package/@alessiofrittoli/type-utils
[socket-url]: https://socket.dev/npm/package/@alessiofrittoli/type-utils/overview
[downloads-badge]: https://img.shields.io/npm/dm/%40alessiofrittoli%2Ftype-utils.svg
[deps-badge]: https://img.shields.io/librariesio/release/npm/%40alessiofrittoli%2Ftype-utils
[deps-url]: https://libraries.io/npm/%40alessiofrittoli%2Ftype-utils

[sponsor-badge]: https://img.shields.io/static/v1?label=Fund%20this%20package&message=%E2%9D%A4&logo=GitHub&color=%23DB61A2
[sponsor-url]: https://github.com/sponsors/alessiofrittoli

## Lightweight TypeScript types utilities

### Table of Contents

- [Getting started](#getting-started)
- [Utility types](https://github.com/alessiofrittoli/type-utils/blob/master/docs/utils/README.md)
  - [ValueOf](https://github.com/alessiofrittoli/type-utils/blob/master/docs/utils/README.md#valueof)
  - [ValueOfKey](https://github.com/alessiofrittoli/type-utils/blob/master/docs/utils/README.md#valueofkey)
  - [OptionalKey](https://github.com/alessiofrittoli/type-utils/blob/master/docs/utils/README.md#optionalkey)
  - [Writeable](https://github.com/alessiofrittoli/type-utils/blob/master/docs/utils/README.md#writeable)
  - [RenameKey](https://github.com/alessiofrittoli/type-utils/blob/master/docs/utils/README.md#renamekey)
  - [ArgumentTypes](https://github.com/alessiofrittoli/type-utils/blob/master/docs/utils/README.md#argumenttypes)
- [Extenders types](https://github.com/alessiofrittoli/type-utils/blob/master/docs/extenders/README.md)
  - [JSON](https://github.com/alessiofrittoli/type-utils/blob/master/docs/extenders/README.md#json)
    - [JSON.stringify\<T\>()](https://github.com/alessiofrittoli/type-utils/blob/master/docs/extenders/README.md#jsonstringifyt)
    - [JSON.parse\<T\>()](https://github.com/alessiofrittoli/type-utils/blob/master/docs/extenders/README.md#jsonparset)
  - [Body](https://github.com/alessiofrittoli/type-utils/blob/master/docs/extenders/README.md#body)
    - [Body.json\<T\>()](https://github.com/alessiofrittoli/type-utils/blob/master/docs/extenders/README.md#bodyjsont)
- [Development](#development)
  - [Install depenendencies](#install-depenendencies)
  - [Build the source code](#build-the-source-code)
  - [ESLint](#eslint)
- [Contributing](#contributing)
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
After installation a `postinstall` script is executed to create the `alessiofrittoli-env.d.ts` file at the root of your project.
This script will try to update your `tsconfig.json` file.

If that fail, please, make sure to add `alessiofrittoli-env.d.ts` in the array of the "include" property in your `tsconfig.json`.

```json
{
    "compilerOptions": {
        ...
    },
    "include": [ ..., "alessiofrittoli-env.d.ts" ],
}
```

You can skip this process if `*.ts` is already in your "include" array.

⚠️ If the `alessiofrittoli-env.d.ts` file creation fails you can run the following command to manually execute the script:

```bash
node node_modules/@alessiofrittoli/type-utils/scripts/postinstall/index.js
```

---

### Development

#### Install depenendencies

```bash
npm install
```

or using `pnpm`

```bash
pnpm i
```

#### Build the source code

Run the following command to test and build code for distribution.

```bash
pnpm build
```

#### [ESLint](https://www.npmjs.com/package/eslint)

warnings / errors check.

```bash
pnpm lint
```

---

### Contributing

Contributions are truly welcome!

Please refer to the [Contributing Doc](./CONTRIBUTING.md) for more information on how to start contributing to this project.

Help keep this project up to date with [GitHub Sponsor][sponsor-url].

[![GitHub Sponsor][sponsor-badge]][sponsor-url]

---

### Security

If you believe you have found a security vulnerability, we encourage you to **_responsibly disclose this and NOT open a public issue_**. We will investigate all legitimate reports. Email `security@alessiofrittoli.it` to disclose any security vulnerabilities.

### Made with ☕

<table style='display:flex;gap:20px;'>
  <tbody>
    <tr>
      <td>
        <img alt="avatar" src='https://avatars.githubusercontent.com/u/35973186' style='width:60px;border-radius:50%;object-fit:contain;'>
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
