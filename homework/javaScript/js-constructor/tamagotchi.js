console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchie {
    constructor(name, type){
    this.name = name,
    this.type = type,
    this.foodinTummy = 10,
    this.health = 10,
    this.restedness = 10            // constructor function
};
cry(){
    this.foodinTummy--;
    console.log(this.name + " " + 'is crying! - WAAAH!!!');
    console.log('current food in tummy', + this.foodinTummy);
};
puke(){
    this.health--;
    console.log('Uh-Oh, I feel sick' + ' ' + 'bbbBBUUUUUUUUUIIICCckkkk!');
    console.log(this.name + "'s" +  " " + 'current health', + " " + this.health);
};
yawn(){
    this.restedness--;
    console.log('Yawn!' + " " + "I'm tired");
    console.log(this.name + "'s" + " " + 'current rest level' + " " + this.restedness);
}
};
//create new Tamagotchi - 2 new
let object1 = new Tamagotchie('Larry');
object1.cry();
object1.puke();
object1.yawn();
let object2 = new Tamagotchie('Ned');
object2.cry();
object2.puke();
object2.yawn();

//var object2 = new Tamagotchie('Ned');



//test out your Tamagotchies below via console.log
/*console.log(object1.cry());
console.log(object1.cry());
console.log(object1.puke());*/