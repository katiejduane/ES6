// Prototypal Inheritance (not TRUE inheritance) and sub-classes: good for when you're making several 
// things that are very similar but not identical.

class SuperHero {
    constructor(name, strength, speed, weapon, cape) {
        this._name = name;
        this._strength = strength;
        this._speed = speed;
        this._weapon = weapon;
        this._cape = cape;
    }
    powerUp() {
        this._strength += 5;
    }
    get name() {
        console.log('getting name')
    }
    set name(newName) {
        console.log('setting name')
        this._name = newName;
    }
    static goodHero() {
        return true;
    }
}

// example of protypal inheritance
class Human extends SuperHero {
    // so it's EVERYTHING that superhero is, plus it's ow extra stuff
    constructor(healthPoints, ...superHeroStuff){
        super(...superHeroStuff)
        this._healthPoints = healthPoints;
        // if we want to use the keyword 'this' anywhere, we HAVE to call SUPER first!
    }
    set name(newName){
        console.log('special name function for humans');
        this._name = newName
        // the object will use child methods first if you want the methods to be slightly different
        // (even if they have the same name, like 'set'), and if there is none, then it will run the
        // parent method
    }
}

const charlesDetails = [20, 'Charles', 10, 6, "mood-reading", true]
const hero3 = new Human(...charlesDetails);
hero3.name = "sir charles"

console.log(hero3)

const hero1Details = ['Wanda', 10, 5, 'steam stare', true]
const hero2Details = ['Miranda', 15, 20, 'broom', false]
let hero1 = new SuperHero(...hero1Details)
let hero2 = new SuperHero(...hero2Details)

// hero1.powerUp();
// console.log(hero1)
// console.log(hero2)



