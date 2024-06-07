# deno bundle 

要加 tsconfig.json 檔。

參考： https://github.com/denoland/deno/issues/5507


```
mac020:00-bundle mac020$ deno bundle dom1.ts dom1.js
Bundling file:///Users/mac020/Desktop/ccc/wp/code/04-deno/00-bundle/dom1.ts
error: Uncaught AssertionError: Assertion failed.
    at Object.assert ($deno$/util.ts:33:11)
    at compile ($deno$/compiler.ts:1355:5)
    at async tsCompilerOnMessage ($deno$/compiler.ts:1548:22)
    at async workerMessageRecvCallback ($deno$/runtime_worker.ts:74:9)
mac020:00-bundle mac020$ deno bundle -c tsconfig.json dom1.ts dom1.js
Bundling file:///Users/mac020/Desktop/ccc/wp/code/04-deno/00-bundle/dom1.ts
Emitting bundle to "dom1.js"
2418 bytes emmited.
```