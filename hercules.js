
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
          result = live;
        }
    }else{
      alert(resultTwo);
      location.reload();
    }return result;
}


alert("Welcome Hercules! Click OK to begin your Quest for King Eurystheus");


let firstChoice = ("Your first choice!\n Click OK to track down the Vicious Nemean Lion, or Click Cancel to search for the Nine-headed Lernaen Hydra.");
let choiceLion = ("You head to the plains of Nemean to track down the great Lion.\n Do you take the low ground or the high ground? Click Ok for High and Cancle for low.");
let choiceHigh = ("You were ambused by the vicious lion on the way to the high grough...\n You have been killed...");
let choiceLow = ("You have managed to slip around the Lion and take up good position to attack!");
let choiceHydra = ("You head towards the swap of Lern to search for the Hydra.\n You are ambushed!\n You did not survive the battle...");
let firstDecision = choice(firstChoice, choiceLion, choiceHydra, choiceHigh, choiceLow);






let counter = 100
for(i = counter; i > 0; i--){
    
}
console.log(counter);