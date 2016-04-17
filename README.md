# Comp

Code change validation testing framework

## About

Comp lets you easily produce a static description of your code and declare
invariants that should be true across two of its versions - base and changed.

Similar to your favourite unit testing framework, `comp` lets you write a suite
of _descriptors_ - small scripts producing static, serialisable description
of your code (e.g. a list of your public API methods). The collected descriptions,
called _fingerprint_ should be committed to your codebase.

In order to check the validity of changes, you write a second set of scripts,
called _invariants_. Invariants are given two versions of the fingerprint, the
base and changed one. For the public API case, your invariant might check no
public API method was removed.

To run the invariants you use the `comp` command:

```
comp describe ./**/*.desc.js > fingerprint.json
comp check ./comp-checks/*.js --base [revspec] < fingerprint.json
```

First command will run the descriptors and produce the fingerprint. Second one
will check out the fingerprint of the base case (`revspec` being a git revision
spec that also contains the `fingerprint.json` file.) and give both to your
(current) invariants to check.

## Example cases you can check with comp

*  Public API changes to match semver updates
*  Test coverage not dropping between versions
*  Specific public interface update rules, e.g. disallowing braking changes via
   deprecation of inputs instead of removing them (like
   [GraphQL](https://facebook.github.io/graphql/#sec-Object-Field-deprecation))
*  Visual comparisons for applications

## Contributing

Comp is written in ES2015 and transpiled using `babel`. You will need node.js
and npm to make changes.

Clone the repository and run `npm install` to install all the dependencies.

When done, open a pull Request with your changes, or, if they are larger changes, discuss
them in an issue first.

Don't forget to run run `npm test` and write tests for your changes before
submitting the pull request.

## License

[MIT](./LICENSE)
