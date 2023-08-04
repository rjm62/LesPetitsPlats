import recipes from './data/recipes.js'; //récupération des recettes depuis le fichier recipes.js
//console.log(recipes);

import {choiceDisplay} from "./utils/tag.js";
import {arrayImprovement} from "./utils/arrayImprovement.js";
import {createRecipeCards} from "./utils/createRecipeCards.js";
// import {filterRecipes} from './utils/filterRecipes.js';
import {inputSearchBar} from './utils/inputSearchBar.js';


var ingredientsArray = new Array();
var applianceArray = new Array();
var ustensilsArray = new Array();
var applianceWithoutDoublons = new Array();
// let filteredRecipes = (recipes);

// let fufu= [];
//  fufu = createRecipeCards(recipes);
// console.log(fufu);
// filteredRecipes = filterRecipes(filteredRecipes);
// const searchBarInput = document.querySelector(".searchBar input");
    // searchBarInput.addEventListener("keyup", inputSearchBar());
createRecipeCards(recipes);
 inputSearchBar(recipes);
console.log(`555555555+filterRecipes: ${recipes}`);

/*async function init(data) {
    inputSearchBar(data);
    createRecipeCards(recipes);
}

init(); 
console.log(recipes);*/





console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
/*
//------------------CREATION DES FICHES RECETTES---------------------
for(let i=0; i<recipes.length; i++) {
    const data = recipes[i];
    //console.log (data);
const recipeCard = document.createElement("div");        // conteneur général de la fiche
    recipeCard.className = "recipeCard";
    recipeCard.setAttribute("id",data.id);
    recipeCard.style.display = "flex";
    recipeCard.style.flexDirection = "column";
    recipeCard.style.width = "100%";
    recipeCard.style.alignItems = "start";

    const img = document.createElement("img");         // image + titre
    img.src = "./assets/Photos des plats/"+data.image;
    img.style.width = "100%";
    const figcaption = document.createElement("figcaption");
    figcaption.innerText = data.name;

    const timeContainer = document.createElement("div");
    timeContainer.className = "timeContainer";
    const time = document.createElement("p");
    time.className = "time";
    time.innerText = data.time+"min";
    timeContainer.appendChild(time);

    const recipeDescription = document.createElement("div");   // conteneur description
    recipeDescription.className = "recipeDescription";
    const descriptionName = document.createElement("h5")
    descriptionName.className = "descriptionName";
    descriptionName.innerText = "RECETTE";
    const descriptionText = document.createElement("p");
    descriptionText.className = "descriptionText";
    descriptionText.innerText = data.description;
    recipeDescription.appendChild(descriptionName);
    recipeDescription.appendChild(descriptionText);

    const ingredientsTitle = document.createElement("h5");       
    ingredientsTitle.className = "ingredientsTitle"
    ingredientsTitle.innerText = "INGREDIENTS"

    const ingredientsContainer = document.createElement("div");  // conteneur ingrédients et quantités
    ingredientsContainer.className = "ingredientsContainer";
    
    for(let j=0; j<data.ingredients.length; j++) {
        const ingredientAndQuantityContainer = document.createElement("div");
        ingredientAndQuantityContainer.className = "ingredientAndQuantityContainer"
        const ingredientName = document.createElement("p");
        ingredientName.className = "ingredientName";
        ingredientName.innerText = data.ingredients[j].ingredient;
        //console.log( data.ingredients[j].ingredient);
        ingredientsArray.push(data.ingredients[j].ingredient);
        const ingredientQuantity = document.createElement("div");
        ingredientQuantity.className = "ingredientQuantity";
        const quantity = document.createElement("p"); 
        if(data.ingredients[j].quantity!= undefined) {
            quantity.innerText = data.ingredients[j].quantity;
        }
        const unit = document.createElement("p");
        if(data.ingredients[j].unit!= undefined) {
            unit.innerText = data.ingredients[j].unit;
        }
    

        ingredientAndQuantityContainer.appendChild(ingredientName);
        ingredientAndQuantityContainer.appendChild(ingredientQuantity);
        ingredientQuantity.appendChild(quantity);
        ingredientQuantity.appendChild(unit);
        ingredientsContainer.appendChild(ingredientAndQuantityContainer);
    }

        for(let j=0; j<data.ustensils.length; j++) {
            ustensilsArray.push(data.ustensils[j]);
        }

        applianceArray.push(data.appliance);

    const containerRecipes = document.querySelector(".containerRecipes"); // intégration des enfants dans l'élément parent
    containerRecipes.appendChild(recipeCard);
    recipeCard.appendChild(img);
    recipeCard.appendChild(figcaption);
    recipeCard.appendChild(timeContainer);
    recipeCard.appendChild(recipeDescription);
    recipeCard.appendChild(ingredientsTitle);
    recipeCard.appendChild(ingredientsContainer);
} 

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