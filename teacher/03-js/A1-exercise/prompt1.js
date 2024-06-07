let name;
do {
  name = prompt("What is your name?");
} while (!confirm(`Is your name ${name}?`));
alert(`Hello, ${name}!`);