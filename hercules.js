"use strict";


function runGameReal(decision, firstPath, correctPath, deathPath, wrongChoice, correctChoice, monsterARunGame, monsterHRunGame){
  while(decision === false){
    alert("GAME OVER!")
    alert("Welcome Hercules! Click OK to begin your Quest for King Eurystheus");
    decision = choice(firstPath, correctPath, deathPath, wrongChoice, correctChoice);
  }let outcome = runGame(decision, monsterARunGame, monsterHRunGame);
    while(outcome === false){
    alert("GAME OVER!")
    alert("Welcome Hercules! Click OK to begin your Quest for King Eurystheus");
    decision = choice(firstPath, correctPath, deathPath, wrongChoice, correctChoice);
    outcome = runGame(decision, monsterARunGame, monsterHRunGame);
    }
}

function runGame(scenario, monsterBattle, monsterHealthBattle){
  if(scenario === true){
    let monsterAttack = monsterBattle;
    let heroAttack = randomAttack(hercAttackThree.damage);
    let firstBattle = attack(hercHealth, monsterHealthBattle, monsterAttack);
      if(firstBattle[1] <= firstBattle[0]){
      alert("You are vitorious!");
      }else{
      alert("You have died in battle!"); 
      return false;
      }
  }else{
    alert("GAME OVER!")
    return false; 
  }return
}

function choice(choiceOne, resultOne, resultTwo, secondChoice, secondResult){
    let cOne = window.confirm(choiceOne);
    if(cOne === true){
        let rOne = window.confirm(resultOne);
        if(rOne === true){
          alert(secondChoice);
          cOne = false;
        }else{
          alert(secondResult);
        }
    }else{
      alert(resultTwo);
      
    }return cOne;
}

function randomAttack(theArray){
  let result = theArray[Math.floor(Math.random()*theArray.length)];
  return result;
}

function chooseAttack(object, objectThree){
  let choose = window.confirm("To choose the Sword attack click Cancel.\n To choose the Special attack click OK.");
    if(choose === true){
    let result = randomAttack(objectThree);
    return result;
    }else{
     let result = randomAttack(object);
     return result;
     }return result;
}


function attack(heroHealth, monsterHealth, monsterAttack){
  while(heroHealth >= 0 && monsterHealth >= 0){
    let heroAttack = chooseAttack(hercAttack.damage, hercAttackThree.damage)
    monsterHealth -= heroAttack;
    let monstersAttacks = randomAttack(monsterAttack);
    heroHealth -= monstersAttacks;
    alert("Hero health is " + heroHealth + "\n Monster health is " + monsterHealth);
    console.log("Hero " + heroHealth + "Monster " + monsterHealth);
  }return [heroHealth, monsterHealth]; 
}

let lionAttack = [5, 5, 5, 5, 5, 10, 10, 10, 15, 15, 15, 15, 20];
let hydraAttack = [10, 15, 15, 15, 20, 20, 20, 20, 30, 30];
let cerberusAttack = [15, 20, 25,25, 25, 25, 25, 40, 40, 40];
let lionHealth = 40;
let hydraHealth = 60;
let cerberusHealth = 80;
let hercHealth = 80;
let hercAttack = {
  name: "Spear",
  damage: [5, 5, 5, 5, 10, 10, 10, 15, 15]
}
let hercAttackTwo = {
  name: "Sword",
  damage: [5, 10, 15, 20]
}
let hercAttackThree = {
  name: "Special",
  damage: [30, 15, 45, 5, 10, 10, 10, 20, 25, 25, 25, 35, 35, 35, 40],
}

alert("Welcome Hercules! Click OK to begin your Quest for King Eurystheus");


let firstChoice = ("Level One: \nYour first choice!\n Click OK to track down the Vicious Nemean Lion, or Click Cancel to search for the Nine-headed Lernaen Hydra.");
let choiceLion = ("You head to the plains of Nemean to track down the great Lion.\n Do you take the low ground or the high ground? Click Ok for High and Cancel for low.");
let choiceHigh = ("You were ambushed by the vicious lion on the way to the high grough...\n You have been killed...");
let choiceLow = ("You have managed to slip around the Lion and take up good position to attack!");
let choiceHydra = ("You head towards the swap of Lern to search for the Hydra.\n You are ambushed!\n You did not survive the battle...");
let roadToHydra = ("Level Two: \nYou now begin your journey to the swap of Lern. \n You can take the road, or cut through the dark forrest to save time. \n Click OK for the road and Cancel for the dark forrest");
let hydraChoice = ("As you approach the hydra's swap, you contemplate your strategy... \n Do you lure the creature out to fight on dry land, or charge into the swap? \n Click Cancel to charge in and click OK to lure out");
let hydraForrest = ("You decide to cut through the dark forrest \n After some time, you hear russelling in the foilage around you.... \n You are attacked from the rear by a pack of giant worlves... \n You do not survive the battle...");
let choiceLure = ("You attempt to lure the hydra to dry ground, but the creature is to smart. \n The hydra circles around to attack you from behind. \n You have been killed in battle with the hydra...");
let choiceCharge = ("You charge straight in to attack the hydra..\n You catch the creature off guard, but it will still be a tough battle.");
let finalDestination = ("Level Three: \nYou now set out to capture the guard dog of the underworl! \n You must choose your path to the underworld:\n To travel through the caves at the base of Mount Ossa: Click OK\n To travel through the portal in the shallows of Lake Prespa: Click Cancel ");
let mountOssa = ("As you travel through the caves below Mount Ossa, you come to a fork. Do you go left or right?\n Click OK for left and Cancel for right.")
let wrongWay = ("You continue down the cave, it becomes warmer and warmer the further you go. \n Before you can react a rock comes loose, and you begin to fall! \n You fall into a massive lava pit, from which there is no escape!");
let lakePrespa = ("You wade into the lake were the portal to the underworld is hidden. \n You enter the portal, you are immediatly transported to the underworld. \n You quickly discover that the portal is no longer secret, as an army of the dead are there to meet you!");
let pathToGlory = ("As you travel through the cave, you begin to hear the panting of Cerberus.\n This will be quite the battle, you must defeat Cerberus to capture the creature!")


// let firstDecision = choice(firstChoice, choiceLion, choiceHydra, choiceHigh, choiceLow);
// while(firstDecision === false){
//   alert("GAME OVER!")
//   alert("Welcome Hercules! Click OK to begin your Quest for King Eurystheus");
//   firstDecision = choice(firstChoice, choiceLion, choiceHydra, choiceHigh, choiceLow);
// }
// runGame(firstDecision, lionAttack, lionHealth);
// let secondDecision = choice(roadToHydra, hydraChoice, hydraForrest, choiceCharge, choiceLure);
// let stopRunning = runGame(secondDecision, hydraAttack, hydraHealth);
// console.log(stopRunning);
// let thirdDecision = choice(finalDestination,  mountOssa, lakePrespa, wrongWay, pathToGlory);
//runGame(thirdDecision, cerberusAttack, cerberusHealth);


let firstDecision = choice(firstChoice, choiceLion, choiceHydra, choiceHigh, choiceLow);
let levelOne = runGameReal(firstDecision, firstChoice, choiceLion, choiceHydra, choiceHigh, choiceLow, lionAttack, lionHealth)
let secondDecision = choice(roadToHydra, hydraChoice, hydraForrest, choiceLure, choiceCharge);
let levelTwo = runGameReal(secondDecision, roadToHydra, hydraChoice, hydraForrest, choiceLure, choiceCharge, hydraAttack, hydraHealth);
let thirdDecision = choice(finalDestination,  mountOssa, lakePrespa, wrongWay, pathToGlory);
let levelThree = runGameReal(thirdDecision, finalDestination, mountOssa, lakePrespa, wrongWay, pathToGlory, cerberusAttack, cerberusHealth)
alert("You now return to King Eurystheus's Court, with the mighty Cerberus as tirbute. \n King Eurystheus: Hercules, you will be rewarderd greatly for your amazing deeds!");







