class Alligator {
    constructor(
        name = '',
        color = '',
        gender = '',
        weight = 0,
        tailLengthInch = 0,
        teethSize = '',
    ) {
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
    }
    eat(food) {
        console.log(`Chomp chomp all the ${food}ies.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }
}
//export default Alligator;
let ally = new Alligator("Ally", "Green", "F", 200, 60, "big");
console.log(ally)
class Beaver {
    constructor(
        name = '',
        color = '',
        gender = '',
        weight = 0,
        tailLengthInch = 0,
        teethSize = '',
    ){
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
    }   
}

let beaverOne = new Beaver("Beverly", "brown", "female", 20, 8, "huge")
console.log(beaverOne)

class Cat {
    constructor(
        name = '',
        color = '',
        gender = '',

    ){
        this.name = name;
        this.color = color;
        this.gender = gender;
    }
}

let kittenOne = new Cat("Edward Scissor Paws", "Orange and White", "Male")
let kiittenTwo = new Cat("Nicole", "Black", "Female")
let kittenThree = new Cat("Mouser", "Grey", "Male")
console.log(Cat)
let cats = [kittenOne,kiittenTwo,kittenThree]
console.log(cats)
document.getElementById("cats").innerHTML = `${kittenOne}`
class Dragon {
    constructor(
        name = '',
        color = '',
        castlesBurned = 0,
    ){
        this.name = name;
        this.color = color;
        this.castlesBurned = castlesBurned;
    }
}

let dragonOne = new Dragon("Smog","Blue and Gold", 100)
let dragonTwo = new Dragon("Old One Eye", "Green", 33.3)
console.log(dragonOne,dragonTwo)

class Elephant{
    constructor(
        name = '',
        color = '',
        trunkSize = 0,
        age = 0,
    ){
        this.name = name;
        this.color = color;
        this.trunkSize = trunkSize;
        this.age = age;
    }
}

let elephantOne = new Elephant("Ganesh", "Blue", 750, 3000)
console.log(elephantOne)

class Fox{
    constructor(
        name = '',
        color = '',
        tails = 0,
    ){
        this.name = name;
        this.color = color;
        this.tails =tails;
    }
}

let foxOne = new Fox("Kumiho","Fire Orange", 9)
let foxTwo = new Fox("Jack","Orange and White", 1)
console.log(foxOne)

class Gorilla{
    constructor(
        name = '',
        age = 0,
        color = '', 
        weight = 0,
    ){
        this.name = name;
        this.age = age;
        this.color = color;
        weight = weight;

    }
}

let gorillaOne = new Gorilla("Kong", 500, "Black and Grey", 9999999999.9)
console.log(gorillaOne.name)

class Havlena{
    constructor(
        name = '',
        age = 0,
        houseMadeOf = '',
    ){
        this.name = name;
        this.age = age;
        this.houseMadeOf = houseMadeOf;
    }
}

let littlePigOne = new Havlena("Hams", 5, "Straw")
let littePigTwo = new Havlena("Kevin", 7, "Sticks")
let littlePigThree = new Havlena("Porky", 9, "Brick")
let threeLilPigs = [littlePigOne,littePigTwo,littlePigThree]
console.log(threeLilPigs)
 document.getElementById("pigs").innerHTML = `${threeLilPigs}`
