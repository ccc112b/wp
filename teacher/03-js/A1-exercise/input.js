import { readLines } from "https://deno.land/std/io/mod.ts";

async function main() {
  console.log("what's your name:");
  const data = await readLines(Deno.stdin).next();
  console.log("welcome ", data.value);
}

await main();
