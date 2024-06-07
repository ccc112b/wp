let dog = {
    say: function () { console.log('旺旺') }
}

let cat = {
    say: function () { console.log('喵喵') }
}

let animals = [ dog, cat, dog, dog]
for (let animal of animals) {
    animal.say()
}
