
// there's no way to make variables totally 'private' in javascript, most things can be changed, including
// with classes/objects (eg: the speed, or weapon, etc in this case), but we can still use 'getters' and 'setters'

// getters and setters help manage variables well--it can be more typing and code up front, but ideally 
// saves you tons of time on the backend because you won't have to troubleshoot as much.

// they essentially manage how variables in an object are or can be accessed!

class SuperHero{
    constructor(name, strength, speed, weapon, cape){
        this._name = name;
        // the underscore before 'name' is a convention and it means that it's a 'private' variable,
        // and prevents an infinite loop when 'setting name' when the constructor runs
        this.strength = strength;
        this.speed = speed;
        this.weapon = weapon;
        this.cape = cape;
    }
    powerUp(){
        this.strength += 5;
    }
    get name(){
        console.log('getting name')
    }
    set name(newName){
        console.log('setting name')
        this._name = newName;
        // underscore here does the same thing as above, stopping an infinite loop from running
    }
}

const hero1Details = ['Wanda', 10, 5, 'steam stare', true]
let hero1 = new SuperHero(...hero1Details)

hero1.powerUp();
console.log(hero1)
