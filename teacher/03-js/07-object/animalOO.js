class Dog {
    say() { console.log('旺旺') }
}

class Cat {
    say() { console.log('喵喵') }
}

let animals = [ new Dog(), new Cat(), new Dog(), new Dog()]
for (let animal of animals) {
    animal.say()
}
