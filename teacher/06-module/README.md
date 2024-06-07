# Module Import/Export
# module 的用法

* https://stackoverflow.com/questions/69888029/how-to-call-a-function-declared-in-a-javascript-module-type-module-from-an-htm

First of all you have to explicitly export you function:

```js
export function greet() {
  alert("Hello from module");
}
```

Secondly, a module has it's own scope (this is the whole point of modules) thus you need to add the function to the global scope. So, to do it you have to run a script which imports the function and adds it to the window object:

<script type="module">
  import { greet } from "./app.js";
  window.greetFromModule = greet;
</script>
