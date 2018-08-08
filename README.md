# fetch-mock-corejs
> reproducible example for possible issue with `fetch-mock`

## Run the tests

```
npm install
npm test
```

Fails with

```
➜  fetch-mock-corejs npm t

> fetch-mock-corejs@1.0.0 test /home/frederik/projects/fetch-mock-corejs
> mochify fetch.test.js

Error: Cannot find module 'core-js/modules/es7.string.pad-end' from '/home/frederik/projects/fetch-mock-corejs/node_modules/fetch-mock/es5'

npm ERR! Test failed.  See above for more details.
```
