# eslint-plugin-orbisunt-base

Plugin for Orbis UND

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-orbisunt-base`:

```
$ npm install eslint-plugin-orbisunt-base --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-orbisunt-base` globally.

## Usage

Add `orbisunt-base` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "orbisunt-base"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "orbisunt-base/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





