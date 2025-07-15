class Animal {
    constructor(name){
        this.name = name;
    }

    sound(){
        console.log("emite un sonido");
    }
}

class Dog extends Animal {
    //queremos que herede 

    run(){
        console.log("guau guau");
    }

    //redefinimos el metodo de la superclase
    sound(){
        console.log("grrrrr")

    }
}

class Fish extends Animal {
    //queremos que herede y ademas meter mas propiedades
    constructor(name, size){
        super(name)
        this.size = size
    } 

    swim(){
        console.log("glu glu glu");
    }
}

let myDog = new Dog("javiDog");
let myFish = new Fish("pececito",234);
myDog.run();
myDog.sound();
myFish.swim();