# 正規表達式操作

參考：[正則表達式(Regular Expression, regex)](https://pjchender.github.io/2017/09/26/js-%E6%AD%A3%E5%89%87%E8%A1%A8%E9%81%94%E5%BC%8F-regular-expression-regex/)

```
mac020:basic mac020$ deno run regexp1.js
matchedResult= [ "name" ]
Found ccc. Next starts at 9.
Found tel. Next starts at 14.
Found email. Next starts at 33.
Found ccckmit. Next starts at 41.
Found gmail. Next starts at 47.
Found com. Next starts at 51.
Found url. Next starts at 56.
Found https. Next starts at 62.
Found misavo. Next starts at 71.
Found com. Next starts at 75.
Found age. Next starts at 80.
mac020:basic mac020$ deno run regexp1.js
error: Uncaught ReferenceError: matchedResult is not defined
console.log('matchedResult=', matchedResult)
                              ^
    at file:///Users/mac020/Desktop/ccc/wp/code/08-app2/basic/regexp1.js:4:31
mac020:basic mac020$ deno run regexp1.js
Found name. Next starts at 4.
Found ccc. Next starts at 9.
Found tel. Next starts at 14.
Found email. Next starts at 33.
Found ccckmit. Next starts at 41.
Found gmail. Next starts at 47.
Found com. Next starts at 51.
Found url. Next starts at 56.
Found https. Next starts at 62.
Found misavo. Next starts at 71.
Found com. Next starts at 75.
Found age. Next starts at 80.
mac020:basic mac020$ git add -A
mac020:basic mac020$ git commit -m "add regexp1.js"
[master 3905baa] add regexp1.js
 1 file changed, 6 insertions(+)
mac020:basic mac020$ git push origin master
Counting objects: 6, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (6/6), done.
Writing objects: 100% (6/6), 643 bytes | 643.00 KiB/s, done.
Total 6 (delta 3), reused 0 (delta 0)
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
To https://github.com/ccccourse/wp.git
   d9755d3..3905baa  master -> master
mac020:basic mac020$ deno run regexp1.js
Found 082. Next starts at 19.
Found 333333. Next starts at 26.
Found 51. Next starts at 83.
mac020:basic mac020$ deno run regexp1.js
Found name:. Next starts at 5.
Found tel:. Next starts at 15.
Found email:. Next starts at 34.
Found url:. Next starts at 57.
Found https:. Next starts at 63.
Found age:. Next starts at 81.
mac020:basic mac020$ deno run regexp1.js
Found name:. Next starts at 5.
Found el:. Next starts at 15.
Found mail:. Next starts at 34.
Found url:. Next starts at 57.
Found https:. Next starts at 63.
Found age:. Next starts at 81.
mac020:basic mac020$ deno run regexp1.js
Found name:. Next starts at 5.
Found Tel:. Next starts at 15.
Found Email:. Next starts at 34.
Found url:. Next starts at 57.
Found https:. Next starts at 63.
Found age:. Next starts at 81.
mac020:basic mac020$ deno run regexp1.js
Found name:. Next starts at 5.
Found Tel:. Next starts at 15.
Found Email:. Next starts at 34.
Found url:. Next starts at 57.
Found https:. Next starts at 63.
Found age:. Next starts at 81.
mac020:basic mac020$ deno
Deno 1.0.0
exit using ctrl+d or close()
> let str = 'name: ccc, Tel: 082-333333, Email:ccckmit@gmail.com, url:https://misavo.com, age:51'
undefined
> split(str, ",")
Uncaught ReferenceError: split is not defined
    at <unknown>:1:1
    at evaluate ($deno$/repl.ts:45:34)
    at Object.replLoop ($deno$/repl.ts:136:13)
> str.split(",")
[
 "name: ccc",
 " Tel: 082-333333",
 " Email:ccckmit@gmail.com",
 " url:https://misavo.com",
 " age:51"
]
> str.split(/,\s+/)
[
 "name: ccc",
 "Tel: 082-333333",
 "Email:ccckmit@gmail.com",
 "url:https://misavo.com",
 "age:51"
]
> str.split(/:/)
[
  "name",
  " ccc, Tel",
  " 082-333333, Email",
  "ccckmit@gmail.com, url",
  "https",
  "//misavo.com, age",
  "51"
]
> str.split(/[:,]/)
[
  "name",
  " ccc",
  " Tel",
  " 082-333333",
  " Email",
  "ccckmit@gmail.com",
  " url",
  "https",
  "//misavo.com",
  " age",
  "51"
]
> str.split(/[:,]\s+/)
[
  "name",
  "ccc",
  "Tel",
  "082-333333",
  "Email:ccckmit@gmail.com",
  "url:https://misavo.com",
  "age:51"
]
```

## ES2019

參考：[正則表達式(Regular Expression, regex)](https://pjchender.github.io/2017/09/26/js-%E6%AD%A3%E5%89%87%E8%A1%A8%E9%81%94%E5%BC%8F-regular-expression-regex/)

ES 2019 新增 /s 的標籤，過去 . 可以用來匹配除了換行符號以外（\n, \r）的所有字元：

// 過去 . 可以匹配到除了「換行符號」以外的所有字元

console.log(/./.test('\n'));    // → false
console.log(/./.test('\r'));    // → false

過去雖然可以使用 [\w\W] 來匹配到換行符號，但這不是最好的做法：

console.log(/[\w\W]/.test('\n'));    // → true
console.log(/[\w\W]/.test('\r'));    // → true

在 ES 2019 中，只要最後有標記 /s 的標籤，如此 . 將也能夠匹配到換行符號：


