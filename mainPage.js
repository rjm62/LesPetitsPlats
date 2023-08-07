import recipes from './data/recipes.js'; //récupération des recettes depuis le fichier recipes.js
//console.log(recipes);

import {choiceDisplay} from "./utils/tag.js";
import {arrayImprovement} from "./utils/arrayImprovement.js";
import {createRecipeCards} from "./utils/createRecipeCards.js";
// import {filterRecipes} from './utils/filterRecipes.js';
import {inputSearchBar} from './utils/inputSearchBar.js';
import {recipesWithoutAccent} from './utils/createRecipesWithoutAccent.js'


var ingredientsArray = new Array();
var applianceArray = new Array();
var ustensilsArray = new Array();
var applianceWithoutDoublons = new Array();

const arrayWithoutAccent =recipesWithoutAccent(recipes);
createRecipeCards(recipes);
 inputSearchBar(recipes,arrayWithoutAccent);

//  var tutu = [];
//  tutu = [1, 2, 3, 4, 5, 7, 8, 9]
// console.log(`555555555 filterRecipes: ${tutu}`);


/*

var arrays = [];
arrays[0] = arrayImprovement(ingredientsArray);
arrays[1] = arrayImprovement(ustensilsArray);
arrays[2] = arrayImprovement(applianceArray);
console.log(arrays[0]);

var containers = [];
containers[0] = document.querySelector(".firstArray");
containers[1] = document.querySelector(".secondArray");
containers[2] = document.querySelector(".thirdArray");

var previousArryLength=0;

for (let r=0; r<3; r++ ) {
    display(arrays[r], containers[r]);
}


function display (array, container) {
    container.innerHTML ="";
for(let w = 0; w<array.length; w++){
  
    var li = document.createElement("li");
    li.innerText= array[w];

    container.appendChild(li);
    li.addEventListener("click", function addChoice(event) {
        let textChoice = event.target;
        choiceDisplay(textChoice.innerText);
    });
    }
}
/*
const searchInput= document.querySelectorAll(".search input");
for(let s=0; s<3; s++) {
searchInput[s].addEventListener("keyup", function(event) {
   let result= event.target;
   let stringreceived = result.value.toLowerCase();
   if (stringreceived.length>2 || previousArryLength-1 ==stringreceived.length){
    previousArryLength = stringreceived.length;
    let length = stringreceived.length;
   let temporaryArraysort = new Array;
   temporaryArraysort = arrays[s].filter(element => {
    return element.toLowerCase().includes(stringreceived);
   });
 console.log(temporaryArraysort);
 display(temporaryArraysort, containers[s]);
   }
});
}

var openOrCloseArrayDisplay = document.querySelectorAll(".titleAndButton button ");
for(let z=0; z<3; z++) {
    openOrCloseArrayDisplay[z].addEventListener("click", function arrayDisplay(event) {
    let choiceArray = event.target;
    let getParent = choiceArray.parentNode.parentNode;
    var display = getParent.querySelector(".search");
    var chevronDirection = getParent.querySelector(".titleAndButton button");
    var getStyle = getComputedStyle(display);
    
    if (getStyle.display==="flex"){
        display.style.display = "none";
        chevronDirection.className = "";
        chevronDirection.className = "fa-solid fa-chevron-down";
    }
    else {
        display.style.display = "flex"; 
        chevronDirection.className = ""; 
        chevronDirection.className = "fa-solid fa-chevron-up";

    }
});
} */