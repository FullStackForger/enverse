
# 

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

`everse` exposes 2 properties `is` and `has`

* `is.browser`
* `is.server`
* `has.document`
* `has.navigator`
* `has.localStorage`
* `has.sessionStorage`
* `has.global`
* `has.process`
