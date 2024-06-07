function fib(n) {
    if (n===1) return 1
    if (n===2) return 1
    return fib(n-1)+fib(n-2)
}

for (let i=1; i<=10; i++)
  console.log('fib[', i, ']=', fib(i))
