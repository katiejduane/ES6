// this is not an object-oriented lecture!
// a silly example:

class NoWay{
    constructor(js, withhh, classes, huh){
        this.person = `disbelief`;
        this.js = js;
        this.withhh;
        this.classes = classes;
        this. huh = huh;
    }

    really(){
        return 'yes'
    }

    reallyReally(){
        return 'yes, well, mostly yes'
    }

    likeJava(){
        return 'yes and no'
    }

    whichIsIt(){
        return 'shut up and use them!'
    }
}

let developersEverywhere = new NoWay(`I`, `can't`, `believe`, `it!`)
console.log(developersEverywhere)

// we simply replace the old 'constructor' function (ES5 and before) with the 'class' keyword!

class SuperHero{
    constructor(name, strength, speed, weapon, cape){
        this.name = name;
        this.strength = strength;
        this.speed = speed;
        this.weapon = weapon;
        this.cape = cape;
    }
    powerUp(){
        this.strength += 5;
    }
}

// this is NOT REALLY  a CLASS like in other programming languages (eg. Java), it is the 'syntactical sugar'
// MDN mentioned. but it's a FAR CLEANER and FRIENDLIER way of coding than the old 'constructor function' way.

let hero1 = new SuperHero('Wanda', 10, 5, 'steam stare', true)
hero1.powerUp();
console.log(hero1)

