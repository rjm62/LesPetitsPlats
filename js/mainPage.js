import recipes from '../data/recipes.js'; //récupération des recettes depuis le fichier recipes.js
import {tagDisplay} from "./tagDisplay.js";
import {createRecipeCards} from "./createRecipeCards.js";
import {searchByInput} from './searchByInput.js';
import {recipesWithoutAccent} from './recipesWithoutAccent.js'
import { filterRecipes } from './filterRecipes.js';
import {tag} from "./tagAdd.js";

var arrayIngredientsTag =[];
var arrayApplianceTag = [];
var arrayUstensilsTag = [];
var newArrayRecipes =[];
var firstMainInput=[];
var selectedRecipes =[];
var ArraysForFilters =[];
var recipesButWithoutAccent =[];

init();

function init() {
//--------------------- mise en place de toutes les recettes------------------------------
    selectedRecipes = recipes;
    ArraysForFilters = createRecipeCards(recipes);
    recipesButWithoutAccent = recipesWithoutAccent(recipes);
    filterRecipes(ArraysForFilters,recipesButWithoutAccent);
}

//-------------écoute si entrée de caractères dans le input de la barre centrale-------------------
const searchBarInput = document.querySelector(".searchBar input");
searchBarInput.addEventListener("keyup", function(event) {
    let removedByX = document.querySelector(".searchBar i");
    removedByX.style.display ="flex";
    let result= event.target;
    firstMainInput =searchByInput(selectedRecipes,recipesButWithoutAccent,result);
});

//--------écoute si suppression de la demande dans l'input de la barre centrale--------------------
let removedByX = document.querySelector(".searchBar i");
removedByX.addEventListener("click", function() {
    let value = document.querySelector(".searchBar input");
    value.value= "";
    removedByX.style.display="none";  // suppression de la croix
    init();
    reinitTag();
});

function reinitTag() {   //de ce fait remise à jour des filtres et choix par Tag
  
//reintégration des tags précédemment sélectionnés-----------------------------------------------

//pour ingrédients
     var reintegrationOfIngredientsTag =[];
     reintegrationOfIngredientsTag = JSON.parse(JSON.stringify(arrayIngredientsTag));//copie profonde tableau
    if(1<=reintegrationOfIngredientsTag.length) {  // si au moins un tag existe dans ingredients
        do {     //demande d'un nouveau tableau incluant le tag
            selectedRecipes = tag(selectedRecipes,newArrayRecipes, reintegrationOfIngredientsTag, arrayApplianceTag, arrayUstensilsTag,"firstArray");
            reintegrationOfIngredientsTag.pop(); //on supprime le tag dans le tableau profond
        } while(reintegrationOfIngredientsTag.length!=0); // tant que le tableau profond n'est pas vide
        createRecipeCards(selectedRecipes);  // affichage des recettes selectionnées par les tags

    }

 // pour appareils
    var reintegrationOfApplianceTag=[];
    reintegrationOfApplianceTag = JSON.parse(JSON.stringify(arrayApplianceTag));
    if(1<=reintegrationOfApplianceTag.length) {
        do {
        selectedRecipes =tag(selectedRecipes,newArrayRecipes, reintegrationOfIngredientsTag, reintegrationOfApplianceTag, arrayUstensilsTag,"secondArray");
        reintegrationOfApplianceTag.pop();
        } while(reintegrationOfApplianceTag!=0);
        createRecipeCards(selectedRecipes);
    }

//pour ustensils
    var reintegrationOfUstensilsTag =[];
    reintegrationOfUstensilsTag = JSON.parse(JSON.stringify(arrayUstensilsTag));
    if(1<=reintegrationOfUstensilsTag.length) {
        do {
        selectedRecipes =tag(selectedRecipes,newArrayRecipes, reintegrationOfIngredientsTag, reintegrationOfApplianceTag, reintegrationOfUstensilsTag,"thirdArray");
        reintegrationOfUstensilsTag.pop();
        } while(reintegrationOfUstensilsTag!=0);
        createRecipeCards(selectedRecipes);
    }
  
    return selectedRecipes;
}

//----------Mise en place des - ingrédients - appareils - ustensiles, dans les filtres de recherches --------------
export function display (array, container, recipesByMainInput) {
    var selectedRecipesByMainInput = recipesByMainInput;
    container.innerHTML ="";
    for(let w = 0; w<array.length; w++){
        var li = document.createElement("li");
        li.innerText= array[w];
        container.appendChild(li);
    
  // écoute si click pour creation d'un tag          
        li.addEventListener("click", function addTag(event) { 
            let textTag = event.target;
            let position = textTag.parentNode.classList.value;
            tagDisplay(textTag.innerText); // appel de la fonction tagDisplay pour afficher le tag  
            if(position =="firstArray"){
                arrayIngredientsTag.push(textTag.innerText);
            }
            if(position =="secondArray"){
                arrayApplianceTag.push(textTag.innerText);
            }
            if(position =="thirdArray"){
                arrayUstensilsTag.push(textTag.innerText);
            }

            let tago= document.querySelectorAll(".tagContainer .closeIcon")
            let rara = document.querySelector(".searchBar input");
            console.log(rara.value);
            console.log(tago.length);
            if( rara.value!= "" && tago.length==1) {
                selectedRecipes = firstMainInput;
            }
            else {
                selectedRecipes== recipes;
            }

        var tagCreated = tag(selectedRecipes,newArrayRecipes, arrayIngredientsTag, arrayApplianceTag, arrayUstensilsTag, position); 
            selectedRecipes = tagCreated;
            ArraysForFilters = createRecipeCards(selectedRecipes);
            recipesButWithoutAccent = recipesWithoutAccent(selectedRecipes);
            filterRecipes(ArraysForFilters, recipesButWithoutAccent, recipesByMainInput);
        });
    }

    //écoute de toutes les croix "X" de suppression des conteneurs de tags
    var tagRemoved = document.querySelectorAll(".tagContainer .closeIcon");
    for(let s=0; s<tagRemoved.length; s++) {
        tagRemoved[s].addEventListener("click", function removeTag(event){ 
        let removeTag = event.target;
        event.stopImmediatePropagation(); 

        
        let check = document.querySelector(".searchBar input");
        if(check==undefined || check =="") {
            selectedRecipes=recipes;
        }
        else {
            selectedRecipes = searchByInput(selectedRecipes,recipesButWithoutAccent,check);
        }

        let removeContainer = removeTag.parentNode.parentNode; // récupération du texte du container
        removeContainer.style.display = "none"; 
        tagRemoved[s].remove(); // suppression du tag

        const index = arrayIngredientsTag.indexOf(removeContainer.innerText);
        if(index!=-1) {
            arrayIngredientsTag.splice(index, 1);
        }
        else {
            const index = arrayApplianceTag.indexOf(removeContainer.innerText);
            if(index!=-1){
                arrayApplianceTag.splice(index, 1);
            }
            else {
                const index = arrayUstensilsTag.indexOf(removeContainer.innerText);
                if(index!=-1) {
                    arrayUstensilsTag.splice(index, 1);
                }
            }
        }
        var positions = ["firstArray", "secondArray", "thirdArray"];
        var arrayIngredientsReduce = [];
        var arrayApplianceReduce = [];
        var arrayUstensilsReduce = [];
        var tagReduced = 0;
        if(selectedRecipesByMainInput==undefined) {
            selectedRecipes=recipes;
        }
        else {
        selectedRecipes = selectedRecipesByMainInput;
        }
        for(let j =0; j<arrayIngredientsTag.length; j++) {
            arrayIngredientsReduce.push(arrayIngredientsTag[j]);
            tagReduced = tag(selectedRecipes,newArrayRecipes,arrayIngredientsReduce, arrayApplianceReduce, arrayUstensilsReduce, positions[0]);
            selectedRecipes = tagReduced;
        }

        for(let j =0; j<arrayApplianceTag.length; j++) {
            arrayApplianceReduce.push(arrayApplianceTag[j]);
            tagReduced = tag(selectedRecipes,newArrayRecipes,arrayIngredientsReduce, arrayApplianceReduce, arrayUstensilsReduce, positions[1]);
            selectedRecipes = tagReduced;
        }

        for(let j =0; j<arrayUstensilsTag.length; j++) {
            arrayUstensilsReduce.push(arrayUstensilsTag[j]);
            tagReduced = tag(selectedRecipes,newArrayRecipes,arrayIngredientsReduce, arrayApplianceReduce, arrayUstensilsReduce, positions[2]);
            selectedRecipes = tagReduced;
        }
        ArraysForFilters = createRecipeCards(selectedRecipes);
        recipesButWithoutAccent = recipesWithoutAccent(selectedRecipes);
            filterRecipes(ArraysForFilters, recipesButWithoutAccent);
            selectedRecipes = searchByInput(selectedRecipes,recipesButWithoutAccent,check);
        
        });
    }   
}

