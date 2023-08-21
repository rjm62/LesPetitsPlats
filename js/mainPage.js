import recipes from '../data/recipes.js'; //récupération des recettes depuis le fichier recipes.js
//console.log(recipes);

import {tagDisplay} from "./tagDisplay.js";
import {arrayImprovement} from "./arrayImprovement.js";
import { inputImprovement } from './inputImprovement.js';
import {createRecipeCards} from "./createRecipeCards.js";
import {searchByInput} from './searchByInput.js';
import {recipesWithoutAccent} from './recipesWithoutAccent.js'
import { filterRecipes } from './filterRecipes.js';
import {tag} from "./tagAdd.js";
import { tagRemov } from './tagRemove.js';

var arrayIngredientsTag =[];
var arrayApplianceTag = [];
var arrayUstensilsTag = [];
var newArrayRecipes =[];
var recip = recipes;

var asterix = createRecipeCards(recipes);
var obelix = recipesWithoutAccent(recipes);

console.log(asterix);
console.log(obelix);

var titi = filterRecipes(asterix,obelix);
console.log(titi);

const searchBarInput = document.querySelector(".searchBar input");
searchBarInput.addEventListener("keyup", function(event) {
    let result= event.target;
    var toutou =searchByInput(recip,obelix,result);
    console.log(toutou);
});


      //-------Mise en place des - ingrédients - appareils - ustensiles, dans les filtres de recherches --------------
    export function display (array, container, milou) {
        var coco = milou;
        console.log(coco);
        container.innerHTML ="";
        for(let w = 0; w<array.length; w++){
            
            var li = document.createElement("li");
            li.innerText= array[w];
            
            container.appendChild(li);
        
  // écoute si click pour creation d'un tag          
            li.addEventListener("click", function addTag(event) { 
                let textTag = event.target;
                let position = textTag.parentNode.classList.value
                console.log(position);
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
                console.log(arrayIngredientsTag);
                console.log(arrayApplianceTag);
                console.log(arrayUstensilsTag);
               var toto =  tag(recip,newArrayRecipes, arrayIngredientsTag, arrayApplianceTag, arrayUstensilsTag, position); 
                   recip = toto;
                   console.log(recip);
                   asterix = createRecipeCards(recip);
                   obelix = recipesWithoutAccent(recip);
                    filterRecipes(asterix, obelix, milou);
            });
        }

        //écoute de toutes les croix "X" de suppression des conteneurs de tags
        var tagRemoved = document.querySelectorAll(".tagContainer .closeIcon");
        console.log(tagRemoved);
        for(let s=0; s<tagRemoved.length; s++) {
            console.log(s);
            console.log("coucou");
            tagRemoved[s].addEventListener("click", function removeTag(event){ 
            let removeTag = event.target;
            event.stopImmediatePropagation();  
            recip = recipes; 
            console.log(recipes);
            console.log(coco); 
            let removeContainer = removeTag.parentNode.parentNode; // récupération du texte du container
            removeContainer.style.display = "none";   // suppression du tag
            console.log(removeContainer.innerText);

            const index = arrayIngredientsTag.indexOf(removeContainer.innerText);
            if(index!=-1) {
            // console.log(index);
            // console.log(arrayIngredientsTag);
            // console.log(removeContainer.innerText)
                // console.log(arrayIngredientsTag);
                arrayIngredientsTag.splice(index, 1);
                // console.log(arrayIngredientsTag);
            }
            else {
                const index = arrayApplianceTag.indexOf(removeContainer.innerText);
                if(index!=-1){
                    // console.log(arrayApplianceTag);
                    arrayApplianceTag.splice(index, 1);
                    // console.log(arrayApplianceTag);
                }
                else {
                    const index = arrayUstensilsTag.indexOf(removeContainer.innerText);
                    if(index!=-1) {
                        // console.log(arrayUstensilsTag);
                        arrayUstensilsTag.splice(index, 1);
                        // console.log(arrayUstensilsTag);
                    }
                }
            }
            console.log(recip);
            var positions = ["firstArray", "secondArray", "thirdArray"];
            var arrayIngredientsReduce = [];
            var arrayApplianceReduce = [];
            var arrayUstensilsReduce = [];
            var toto = 0;
            if(coco==undefined) {
                recip=recipes;
            }
            else {
            recip = coco;
            }
            console.log(arrayIngredientsTag);
            for(let j =0; j<arrayIngredientsTag.length; j++) {
                arrayIngredientsReduce.push(arrayIngredientsTag[j]);
                console.log(arrayIngredientsReduce) ;
                console.log(recip);
                toto = tag(recip,newArrayRecipes,arrayIngredientsReduce, arrayApplianceReduce, arrayUstensilsReduce, positions[0]);
                recip = toto;
                console.log(toto);
            }

            console.log(arrayApplianceTag);
            for(let j =0; j<arrayApplianceTag.length; j++) {
                arrayApplianceReduce.push(arrayApplianceTag[j]);
                console.log(arrayApplianceReduce) ;
                console.log(recip)
                toto = tag(recip,newArrayRecipes,arrayIngredientsReduce, arrayApplianceReduce, arrayUstensilsReduce, positions[1]);
                recip = toto;
                console.log(toto);
            }

            console.log(arrayUstensilsTag);
            for(let j =0; j<arrayUstensilsTag.length; j++) {
                arrayUstensilsReduce.push(arrayUstensilsTag[j]);
                console.log(arrayUstensilsReduce) ;
                console.log(recip)
                toto = tag(recip,newArrayRecipes,arrayIngredientsReduce, arrayApplianceReduce, arrayUstensilsReduce, positions[2]);
                recip = toto;
                console.log(toto);
            }

            asterix = createRecipeCards(recip);
            obelix = recipesWithoutAccent(recip);
             filterRecipes(asterix, obelix);
           
         });
        }   
    }

