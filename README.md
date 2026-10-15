<h1 align="center">Type Utils ❇️</h1>
<h2 align="center">
  Lightweight TypeScript types utilities
</h2>
<p align="center">
  <a href="https://npmjs.org/package/@alessiofrittoli/type-utils">
    <img src="https://img.shields.io/npm/v/@alessiofrittoli/type-utils" alt="Latest version"/>
  </a>
  <a href="https://socket.dev/npm/package/@alessiofrittoli/type-utils/overview">
    <img src="https://socket.dev/api/badge/npm/package/@alessiofrittoli/type-utils" alt="Socket Security score"/>
  </a>
  <a href="https://npmjs.org/package/@alessiofrittoli/type-utils">
    <img src="https://img.shields.io/npm/dm/@alessiofrittoli/type-utils.svg" alt="npm downloads"/>
  </a>
  <a href="https://bundlephobia.com/package/@alessiofrittoli/type-utils">
    <img src="https://badgen.net/bundlephobia/dependency-count/@alessiofrittoli/type-utils" alt="Dependencies"/>
  </a>
  <a href="https://libraries.io/npm/%40alessiofrittoli%2Ftype-utils">
    <img src="https://img.shields.io/librariesio/release/npm/@alessiofrittoli/type-utils" alt="Dependencies status"/>
  </a>
</p>
<p align="center">
  <a href="https://bundlephobia.com/package/@alessiofrittoli/type-utils">
    <img src="https://badgen.net/bundlephobia/min/@alessiofrittoli/type-utils" alt="minified"/>
  </a>
  <a href="https://bundlephobia.com/package/@alessiofrittoli/type-utils">
    <img src="https://badgen.net/bundlephobia/minzip/@alessiofrittoli/type-utils" alt="minizipped"/>
  </a>
  <a href="https://bundlephobia.com/package/@alessiofrittoli/type-utils">
    <img src="https://badgen.net/bundlephobia/tree-shaking/@alessiofrittoli/type-utils" alt="Tree shakable"/>
  </a>
</p>
<p align="center">
  <a href="https://github.com/sponsors/alessiofrittoli">
    <img src="https://img.shields.io/static/v1?label=Fund%20this%20package&message=%E2%9D%A4&logo=GitHub&color=%23DB61A2" alt="Fund this package"/>
  </a>
</p>

[sponsor-badge]: https://img.shields.io/static/v1?label=Fund%20this%20package&message=%E2%9D%A4&logo=GitHub&color=%23DB61A2
[sponsor-url]: https://github.com/sponsors/alessiofrittoli

### Table of Content

- [Getting started](#getting-started)
  - [Utility types usage](#utility-types-usage)
  - [Global extenders setup](#global-extenders-setup)
- [Development](#development)
  - [Local development](#local-development)
  - [Production build](#production-build)
  - [Lint](#lint)
  - [Contributing](#contributing)
  - [Security](#security)
- [Utility types](https://github.com/alessiofrittoli/type-utils/blob/master/docs/utils/README.md)
  - [ValueOf](https://github.com/alessiofrittoli/type-utils/blob/master/docs/utils/README.md#valueof)
  - [ValueOfKey](https://github.com/alessiofrittoli/type-utils/blob/master/docs/utils/README.md#valueofkey)
  - [OptionalKey](https://github.com/alessiofrittoli/type-utils/blob/master/docs/utils/README.md#optionalkey)
  - [ReadOnly](https://github.com/alessiofrittoli/type-utils/blob/master/docs/utils/README.md#readonly)
  - [Writeable](https://github.com/alessiofrittoli/type-utils/blob/master/docs/utils/README.md#writeable)
  - [RenameKey](https://github.com/alessiofrittoli/type-utils/blob/master/docs/utils/README.md#renamekey)
  - [DeepPartial](https://github.com/alessiofrittoli/type-utils/blob/master/docs/utils/README.md#deeppartial)
  - [Full](https://github.com/alessiofrittoli/type-utils/blob/master/docs/utils/README.md#full)
  - [DeepFull](https://github.com/alessiofrittoli/type-utils/blob/master/docs/utils/README.md#deepfull)
  - [NonNullableFields](https://github.com/alessiofrittoli/type-utils/blob/master/docs/utils/README.md#nonnullablefields)
  - [MergedEnumValue](https://github.com/alessiofrittoli/type-utils/blob/master/docs/utils/README.md#mergedenumvalue)
  - [UnflatDotKeys](https://github.com/alessiofrittoli/type-utils/blob/master/docs/utils/README.md#unflatdotkeys)
  - [RecursivelyUnflatDotKeys](https://github.com/alessiofrittoli/type-utils/blob/master/docs/utils/README.md#recursivelyunflatdotkeys)
  - [ArgumentTypes](https://github.com/alessiofrittoli/type-utils/blob/master/docs/utils/README.md#argumenttypes) (deprecated)
- [Extenders types](https://github.com/alessiofrittoli/type-utils/blob/master/docs/extenders/README.md)
  - [JSON](https://github.com/alessiofrittoli/type-utils/blob/master/docs/extenders/README.md#json)
    - [JSON.stringify\<T\>()](https://github.com/alessiofrittoli/type-utils/blob/master/docs/extenders/README.md#jsonstringifyt)
    - [JSON.parse\<T\>()](https://github.com/alessiofrittoli/type-utils/blob/master/docs/extenders/README.md#jsonparset)
  - [Body](https://github.com/alessiofrittoli/type-utils/blob/master/docs/extenders/README.md#body)
    - [Body.json\<T\>()](https://github.com/alessiofrittoli/type-utils/blob/master/docs/extenders/README.md#bodyjsont)
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

#### Utility types usage

Utility types are exported from the package entry point and can be imported where needed:

```ts
import type { DeepPartial, ValueOf } from '@alessiofrittoli/type-utils'
```

See the [Utility types docs](https://github.com/alessiofrittoli/type-utils/blob/master/docs/utils/README.md) for the full list.

#### Global extenders setup

[Extenders types](https://github.com/alessiofrittoli/type-utils/blob/master/docs/extenders/README.md) augment built-in global interfaces (such as `JSON` and `Body`) and they are the only global types defined by this library. Global types are not loaded by your IDE by default.

After installation a `postinstall` script is executed to create (or update) the `globals.d.ts` file at the root of your project, adding the following globals types reference:

```ts
/// <reference types="@alessiofrittoli/type-utils/globals" />
```

If the file get ignored by the TypeScript program of your project, please, manually add `globals.d.ts` in the array of the "include" property in your `tsconfig.json`.

```json
{
    "compilerOptions": {
        ...
    },
    "include": [ ..., "globals.d.ts" ],
}
```

You can skip this process if `*.ts` is already in your "include" array.

⚠️ If the `globals.d.ts` file creation fails you can run the following command to manually execute the script:

```bash
node node_modules/@alessiofrittoli/type-utils/scripts/postinstall/index.cjs
```

💡 If you don't want to use the global extenders, simply remove the reference above from your `globals.d.ts` file. Utility types will keep working since they are imported explicitly.

---

### Development

Run the following to start development

```shell
nvm use

pnpm i
```

#### Local development

Run the following

```shell
pnpm dev
```

This will generate unminified output code, sourcemaps and will enable source file watcher.

---

#### Production build

Run the following to create a local production build

```shell
pnpm build
```

This will lint and type-check the source code, then generate minified output code without sourcemaps.

---

#### Lint

Run warnings and errors checks with [oxlint](https://oxc.rs/docs/guide/usage/linter):

```shell
pnpm lint
```

---

#### Contributing

Contributions are truly welcome!

Please refer to the [Contributing Doc](./CONTRIBUTING.md) for more information on how to start contributing to this project.

Help keep this project up to date with [GitHub Sponsor][sponsor-url].

[![GitHub Sponsor][sponsor-badge]][sponsor-url]

---

#### Security

If you believe you have found a security vulnerability, we encourage you to **_responsibly disclose this and NOT open a public issue_**. We will investigate all legitimate reports. Email `security@alessiofrittoli.it` to disclose any security vulnerabilities.

---

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
