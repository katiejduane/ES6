
// STATIC METHODS ARE RUN AGAINST THE CLASS INSTEAD OF AGAINST THE OBJECT
// this is useful when you don't needobject data (the class doens't have access to specific object data)

class SuperHero {
    constructor(name, strength, speed, weapon, cape) {
        this._name = name;
        this._strength = strength;
        this._speed = speed;
        this._weapon = weapon;
        this._cape = cape;
    }
    powerUp() {
        this.strength += 5;
    }
    get name() {
        console.log('getting name')
    }
    set name(newName) {
        console.log('setting name')
        this._name = newName;
    }
    static goodHero(){
        return true;
    }
}

const hero1Details = ['Wanda', 10, 5, 'steam stare', true]
const hero2Details = ['Miranda', 15, 20, 'broom', false]
let hero1 = new SuperHero(...hero1Details)
let hero2 = new SuperHero(...hero2Details)

hero1.powerUp();
console.log(hero1)

// because it's a STATIC method, you can't call 'hero1.goodHero' because it belongs to the parent class,
// not the actual object, so you must call:
console.log(SuperHero.goodHero())

// another example (silly and super simple), if you wanted to write a bunch of functions that do, say,
// basic math, they're going to have very generic variable names. to keep them from wrecking the global
// scope, you can PUT THEM IN A CLASS and make them all STATIC methods; and they become neatly packaged
// utility methods we can pass around! see --->

class DoMath{
    static add(x,y){
        return x + y
    }
    static subract(x, y) {
        return x - y
    }
    static square(x) {
        return x * x
    }
}

console.log(DoMath.add(4, 5))
console.log(DoMath.subract(88, 46))
console.log(DoMath.square(56))
