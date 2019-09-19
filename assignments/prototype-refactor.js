/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday  *************************************

*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
// function GameObject(object) {
//     this.createdAt = object.createdAt,
  
//       this.name = object.name,
  
//       this.dimensions = object.dimensions
//   }
  
//   GameObject.prototype.destroy = function () {
//     return `${this.name} was removed from the game.`;
//   }
  
//   /*
//     === CharacterStats ===
//     * healthPoints
//     * takeDamage() // prototype method -> returns the string '<object name> took damage.'
//     * should inherit destroy() from GameObject's prototype
//   */
  
//   function CharacterStats(stats) {
//     GameObject.call(this, stats),
  
//       this.healthPoints = stats.healthPoints
//   }
  
//   CharacterStats.prototype = Object.create(GameObject.prototype);
  
//   CharacterStats.prototype.takeDamage = function () {
//     return `${this.name} took damage`;
//   }
  
//   /*
//     === Humanoid (Having an appearance or character resembling that of a human.) ===
//     * team
//     * weapons
//     * language
//     * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
//     * should inherit destroy() from GameObject through CharacterStats
//     * should inherit takeDamage() from CharacterStats
//   */
  
//   function Humanoid(human) {
//     CharacterStats.call(this, human),
  
//       this.team = human.team,
  
//       this.weapons = human.weapons,
  
//       this.language = human.language
//   }
  
//   Humanoid.prototype = Object.create(CharacterStats.prototype);
  
//   Humanoid.prototype.greet = function () {
//     return `${this.name} offers a greeting in ${this.language}`;
//   }
  
  
//   /*
//    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
//    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
//    * Instances of CharacterStats should have all of the same properties as GameObject.
//    */
  
//   // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
//   const mage = new Humanoid({
//     createdAt: new Date(),
//     dimensions: {
//       length: 2,
//       width: 1,
//       height: 1,
//     },
//     healthPoints: 5,
//     name: 'Bruce',
//     team: 'Mage Guild',
//     weapons: [
//       'Staff of Shamalama',
//     ],
//     language: 'Common Tongue',
//   });
  
//   const swordsman = new Humanoid({
//     createdAt: new Date(),
//     dimensions: {
//       length: 2,
//       width: 2,
//       height: 2,
//     },
//     healthPoints: 15,
//     name: 'Sir Mustachio',
//     team: 'The Round Table',
//     weapons: [
//       'Giant Sword',
//       'Shield',
//     ],
//     language: 'Common Tongue',
//   });
  
//   const archer = new Humanoid({
//     createdAt: new Date(),
//     dimensions: {
//       length: 1,
//       width: 2,
//       height: 4,
//     },
//     healthPoints: 10,
//     name: 'Lilith',
//     team: 'Forest Kingdom',
//     weapons: [
//       'Bow',
//       'Dagger',
//     ],
//     language: 'Elvish',
//   });
  
//   console.log(mage.createdAt); // Today's date
//   console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
//   console.log(swordsman.healthPoints); // 15
//   console.log(mage.name); // Bruce
//   console.log(swordsman.team); // The Round Table
//   console.log(mage.weapons); // Staff of Shamalama
//   console.log(archer.language); // Elvish
//   console.log(archer.greet()); // Lilith offers a greeting in Elvish.
//   console.log(mage.takeDamage()); // Bruce took damage.
//   console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  

// 2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them. **********************




// Making the GameObject class with ***********************
// * createdAt
// * name
// * dimensions (These represent the character's size in the video game)
// * destroy() // prototype method that returns: `${this.name} was removed from the game.`

 class GameObject{
    constructor(gameAttributes){
        this.createdAt = gameAttributes.createdAt,
        this.name      = gameAttributes.name,
        this.dimensions= gameAttributes.dimensions
    } //constructor end here


    //methods of GameObject
    destroy(){
        return `${this.name} was removed from the game.`;
    }
 }  //********************* GameObject class end here


//  Making the CharacterStats that extends to GameObject *************************
//   CharacterStats class are
// * healthPoints
// * takeDamage() //  method -> returns the string '<object name> took damage.'
// * should inherit destroy() from GameObject's 

 class CharacterStats extends GameObject{
     constructor(characterAttr){
        super(characterAttr)
        
        this.healthPoints = characterAttr.healthPoints         
     }//constructor end here

    //methods of CharacterStats
    takeDamage(){
        return `${this.name} took damage`;
    }
 } //********************* CharacterStats class end here


//  Making the Humanoid that extends to CharacterStats *************************
// Humanoid class are
// * team
// * weapons
// * language
// * greet() //  method -> returns the string '<object name> offers a greeting in <object language>.'
// * should inherit destroy() from GameObject through CharacterStats
// * should inherit takeDamage() from CharacterStats

 class Humanoid extends CharacterStats{
     constructor(humanAttr){
        super(humanAttr);
        this.team     = humanAttr.team,
        this.weapons  = humanAttr.weapons,
        this.language = humanAttr.language 
     }//constructor end here

    //methods of Humanoid
    greet(){
        return `${this.name} offers a greeting in ${this.language}`;
    }

 }//********************* Humanoid class end here


//The 3 Objects to test my code **************************************
const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});




console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.