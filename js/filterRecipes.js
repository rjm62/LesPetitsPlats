import {arrayImprovement} from "./arrayImprovement.js";
import { inputImprovement } from "./inputImprovement.js";
import { tagDisplay } from "./tagDisplay.js";
import {display} from "./mainPage.js";

export function filterRecipes(listWithAcccent, listNoAccent, recipesByMainInput) {
    var coco = recipesByMainInput;
    var arrays = [];
    var arraysNoAccent = [];
    arrays[0] = arrayImprovement(listWithAcccent[0]);
    arrays[1] = arrayImprovement(listWithAcccent[1]);
    arrays[2] = arrayImprovement(listWithAcccent[2]);


    let temporaryArrays =[];
    temporaryArrays[0]= [];
    temporaryArrays[1] =[]; 
    temporaryArrays[2] =[];

    for(let i =0; i< listNoAccent.length; i++) {
        for(let j =0; j<listNoAccent[i].ingredients.length; j++) {
            temporaryArrays[0].push(listNoAccent[i].ingredients[j].ingredient);
        }   
    }
    for(let i =0; i<listNoAccent.length; i++) {
        temporaryArrays[1].push(listNoAccent[i].appliance);
    }
    for(let i =0; i< listNoAccent.length; i++) {
        for(let j =0; j<listNoAccent[i].ustensils.length; j++){
            temporaryArrays[2].push(listNoAccent[i].ustensils[j]);
        }
    }


    arraysNoAccent[0] = arrayImprovement(temporaryArrays[0]);
    arraysNoAccent[1] = arrayImprovement(temporaryArrays[1]);
    arraysNoAccent[2] = arrayImprovement(temporaryArrays[2]);


    var containers = [];
    containers[0] = document.querySelector(".firstArray");
    containers[1] = document.querySelector(".secondArray");
    containers[2] = document.querySelector(".thirdArray");

    var previousArryLength=0;

    //appel de la fonction d'affichage--------------------------------------------------
    for (let r=0; r<3; r++ ) {
        display(arrays[r], containers[r], recipesByMainInput );
    }


    //----------------------écoute si entrée dans input------------------------------------
    const searchInput= document.querySelectorAll(".search input");
    const displayX = document.querySelectorAll(".search i");
    for(let s=0; s<3; s++) {
        let stringreceived =[];
        searchInput[s].addEventListener("keyup", function(event) {
            let result= event.target;
            event.stopImmediatePropagation(); 
            stringreceived = inputImprovement(result);
            displayX[s].style.display = "flex";
        
            if (stringreceived.length>2){
                previousArryLength = stringreceived.length;
                let temporaryArraysort = new Array;
                temporaryArraysort = arraysNoAccent[s].filter(element => {
                    return element.toLowerCase().includes(" "+stringreceived);
                });
               
                var arraysort = [];
                for(let i =0; i<temporaryArraysort.length; i++) {
                    for (let j =0; j<arraysNoAccent[s].length; j++) {
                        if (temporaryArraysort[i].toLowerCase().trim() == arraysNoAccent[s][j].toLowerCase().trim()) {
                        arraysort.push(arrays[s][j]);
                        }
                    }
                }
  
                display(arraysort, containers[s], recipesByMainInput);
            }
        });
        stringreceived=[];
    }

    //--------------suppression de la valeur de l'entrée input par la croix-----------------------------
    const closeFilterByX= document.querySelectorAll(".search i");
    for(let s=0; s<3; s++) {
        closeFilterByX[s].addEventListener("click", function(event) { //écoute des 3 croix
            let value = document.querySelectorAll(".search input"); 
            value[s].value = "";                                  //effacement de l'entrée
            closeFilterByX[s].style.display = "none";             // suppression de la croix
            display(arrays[s], containers[s], recipesByMainInput); // remise en place des élements avant entrée

        });
    }

    //écoute des "chevrons" pour ouverture ou fermeture des menus déroulants
    var openOrCloseArrayDisplay = document.querySelectorAll(".titleAndButton button ");
    for(let z=0; z<3; z++) {
        openOrCloseArrayDisplay[z].addEventListener("click", function arrayDisplay(event) {
            let choiceArray = event.target;
            event.stopImmediatePropagation(); 
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
    } 
    return arraysNoAccent;
}