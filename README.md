
# Everse
 
[![Build Status](https://travis-ci.org/fullstackforger/enverse.svg?branch=master)](https://travis-ci.org/fullstackforger/enverse)
[![Coverage Status](https://coveralls.io/repos/github/fullstackforger/enverse/badge.svg?branch=master)](https://coveralls.io/github/fullstackforger/enverse?branch=master)
[![Code Climate](https://codeclimate.com/github/fullstackforger/enverse/badges/gpa.svg)](https://codeclimate.com/github/fullstackforger/enverse)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f2cd6507e33244f8ab9b3e5ca65cf410)](https://www.codacy.com/app/fullstackforger/enverse?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=fullstackforger/enverse&amp;utm_campaign=Badge_Grade)
[![npm](https://img.shields.io/npm/v/enverse.svg)](https://www.npmjs.com/package/enverse)  
[![dependencies Status](https://david-dm.org/fullstackforger/enverse/status.svg)](https://david-dm.org/fullstackforger/enverse)
[![devDependencies Status](https://david-dm.org/fullstackforger/enverse/dev-status.svg)](https://david-dm.org/fullstackforger/enverse?type=dev)
[![peerDependencies Status](https://david-dm.org/fullstackforger/enverse/peer-status.svg)](https://david-dm.org/fullstackforger/enverse?type=peer)

![enverse](https://cloud.githubusercontent.com/assets/10958238/19784539/0d637de0-9c8e-11e6-970d-f1e501bd1418.jpg)

## Environment checks for isomorphic apps
Enverse is super simple library providing some environment checks usefull in isomorphic (universal) application development.   
It has tiny footprint and no external dependencies.

## Example

```
import env from `enverse`

if (env.is.browser) {
    // do some browser stuff
} else {
    // do some server stuff
}
```

## Checks

Default `everse` object exposes `is` and `has` properties with following checks.
All bellow keys return `Boolean` values.

* `is.browser`
* `is.server`
* `has.document`
* `has.navigator`
* `has.localStorage`
* `has.sessionStorage`
* `has.global`
* `has.process`

## What next?

There is no futher plan of action if you however have an idea please feel free to
[submit an issue](https://github.com/fullstackforger/enverse/issues/new).

### Enjoy!
