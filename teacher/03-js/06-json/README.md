
```
(base) nqucsie2022@Teacher-nqucsie2022deiMac 06-json % deno
Deno 1.29.1
exit using ctrl+d, ctrl+c, or close()
REPL is running with all permissions allowed.
To specify permissions, run `deno repl` with allow flags.
> var ccc = { name: 'ccc', age: 53 }
undefined
> c
Uncaught ReferenceError: c is not defined
    at <anonymous>:2:1
> ccc
{ name: "ccc", age: 53 }
> ccc.weight = 65
65
> ccc
{ name: "ccc", age: 53, weight: 65 }
> ccc.age
53
> ccc.name
"ccc"
> ccc.weight
65
> ccc.xxx
undefined
> var snoopy = { name:'snoopy', age:3}
undefined
> snoopy
{ name: "snoopy", age: 3 }
> ccc.friends = []
[]
> ccc
{ name: "ccc", age: 53, weight: 65, friends: [] }
> ccc.friends[0] = snoopy
{ name: "snoopy", age: 3 }
> ccc
{ name: "ccc", age: 53, weight: 65, friends: [ { name: "snoopy", age: 3 } ] }
> ccc.friends[0]
{ name: "snoopy", age: 3 }
> ccc.friends[0].age
3
```
