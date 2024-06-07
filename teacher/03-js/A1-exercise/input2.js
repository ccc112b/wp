// 參考 -- https://deno.land/x/get_stdin
import { getStdin } from 'https://deno.land/x/get_stdin/mod.ts';

console.log("what's your name?")
var name = await getStdin()
console.log("welcome ", name)
