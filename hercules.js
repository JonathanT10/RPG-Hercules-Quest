"use strict";
//function health()




//function creature(name, attack){
    //let creature = {};
    //creature.name = name;
    //creature.attack = attack;

//}
function choice(choiceOne, resultOne, resultTwo, secondChoice, secondResult){
    let cOne = window.confirm(choiceOne);
    if(cOne === true){
        let rOne = window.confirm(resultOne);
        if(rOne === true){
           alert(secondChoice);
           location.reload();
        }else{
          let live = alert(secondResult);
        }
    }else{
      alert(resultTwo);
      location.reload();
    }
}

function randomAttack(theArray){
  let result = theArray[Math.floor(Math.random()*theArray.length)];
  return result;
}

function chooseAttack(object, objectTwo){
  let choose = window.confirm("To choose the Sword attack click OK.\n To choose the Special attack click Cancel.");
if(choose === false){
   let result = randomAttack(objectTwo);
  return result;
}else{
   let result = randomAttack(object);
   return result;
}return result;
}


function attack(heroHealth, monsterHealth, monsterAttack){
  while(heroHealth >= 0 && monsterHealth >= 0){
    let heroAttack = chooseAttack(hercAttack.damage, hercAttackTwo.damage)
    monsterHealth -= heroAttack;
    randomAttack(monsterAttack);
    heroHealth -= monsterAttack;
    alert("Hero health is " + heroHealth + "\n Monster health is " + monsterHealth);
    console.log("Hero " + heroHealth + "Monster " + monsterHealth)

    
  }
    
}

let lionAttack = [5, 10, 15, 20];
let hydraAttack = [10, 15, 20, 30];
let cerberusAttack = [15, 20, 25, 40];
let lionHealth = 40;
let hydraHealth = 60;
let cerberusHealth = 80;
let hercHealth = 80;
let hercAttack = {
  name: "Spear",
  damage: [5, 10, 15]
}
let hercAttackTwo = {
  name: "Sword",
  damage: [5, 10, 15, 20]
}
let hercAttackThree = {
  name: "Special",
  damage: [30, 15, 45, 5, 10, 20, 25, 35, 40],
}

alert("Welcome Hercules! Click OK to begin your Quest for King Eurystheus");


let firstChoice = ("Your first choice!\n Click OK to track down the Vicious Nemean Lion, or Click Cancel to search for the Nine-headed Lernaen Hydra.");
let choiceLion = ("You head to the plains of Nemean to track down the great Lion.\n Do you take the low ground or the high ground? Click Ok for High and Cancle for low.");
let choiceHigh = ("You were ambused by the vicious lion on the way to the high grough...\n You have been killed...");
let choiceLow = ("You have managed to slip around the Lion and take up good position to attack!");
let choiceHydra = ("You head towards the swap of Lern to search for the Hydra.\n You are ambushed!\n You did not survive the battle...");


let firstDecision = choice(firstChoice, choiceLion, choiceHydra, choiceHigh, choiceLow);

let monsterAttack = randomAttack(lionAttack);
let heroAttack = randomAttack(hercAttackThree.damage);
let firstBattle = attack(hercHealth, lionHealth, monsterAttack);




