import {arrayImprovement} from "./arrayImprovement.js";
import { inputImprovement } from "./inputImprovement.js";
import { tagDisplay } from "./tagDisplay.js";
import {display} from "./mainPage.js";

export function filterRecipes(listWithAcccent, listNoAccent, recipesByMainInput) {
    console.log(recipesByMainInput);
    console.log(listWithAcccent);
    console.log(listNoAccent);
    var arrays = [];
    var arraysNoAccent = [];
    arrays[0] = arrayImprovement(listWithAcccent[0]);
    console.log(arrays[0]);
    arrays[1] = arrayImprovement(listWithAcccent[1]);
    arrays[2] = arrayImprovement(listWithAcccent[2]);


    let mickey =[];
    mickey[0]= [];
    mickey[1] =[]; 
    mickey[2] =[];

    console.log(listNoAccent);
    for(let i =0; i< listNoAccent.length; i++) {
        for(let j =0; j<listNoAccent[i].ingredients.length; j++) {
            mickey[0].push(listNoAccent[i].ingredients[j].ingredient);
        }   
    }
    for(let i =0; i<listNoAccent.length; i++) {
        mickey[1].push(listNoAccent[i].appliance);
    }
    for(let i =0; i< listNoAccent.length; i++) {
        for(let j =0; j<listNoAccent[i].ustensils.length; j++){
            mickey[2].push(listNoAccent[i].ustensils[j]);
        }
    }


    arraysNoAccent[0] = arrayImprovement(mickey[0]);
    arraysNoAccent[1] = arrayImprovement(mickey[1]);
    arraysNoAccent[2] = arrayImprovement(mickey[2]);


    var containers = [];
    containers[0] = document.querySelector(".firstArray");
    containers[1] = document.querySelector(".secondArray");
    containers[2] = document.querySelector(".thirdArray");

    var previousArryLength=0;
    // tagDisplay

    for (let r=0; r<3; r++ ) {
        console.log(recipesByMainInput)
        display(arrays[r], containers[r], recipesByMainInput );
    }

    //   //-------Mise en place des - ingrédients - appareils - ustensiles, dans les filtres de recherches --------------
    // function display (array, container) {
    //     container.innerHTML ="";
    //     for(let w = 0; w<array.length; w++){
        
    //         var li = document.createElement("li");
    //         li.innerText= array[w];

    //         container.appendChild(li);

    //         li.addEventListener("click", function addTag(event) { // écoute si click pour creation d'un tag
    //             let textTag = event.target;
    //             tagDisplay(textTag.innerText); // appel de la fonction tagDisplay pour afficher le tag
    //         });
    //     }
    // }

    const searchInput= document.querySelectorAll(".search input");
    for(let s=0; s<3; s++) {
        searchInput[s].addEventListener("keyup", function(event) {
            let result= event.target;
            let stringreceived = inputImprovement(result);
            console.log(stringreceived);
            if (stringreceived.length>2 || previousArryLength-1 ==stringreceived.length){
                previousArryLength = stringreceived.length;
                let temporaryArraysort = new Array;
                temporaryArraysort = arraysNoAccent[s].filter(element => {
                    return element.toLowerCase().includes(" "+stringreceived);
                });
                // console.log(temporaryArraysort);
                // console.log(temporaryArraysort[0].toLowerCase().trim());
                // console.log(arrays[s][0].toLowerCase().trim());

                var arraysort = [];
                for(let i =0; i<temporaryArraysort.length; i++) {
                    for (let j =0; j<arraysNoAccent[s].length; j++) {
                        console.log(temporaryArraysort[i].toLowerCase().trim());
                        console.log(arraysNoAccent[s][j].toLowerCase().trim());
                        if (temporaryArraysort[i].toLowerCase().trim() == arraysNoAccent[s][j].toLowerCase().trim()) {
                        arraysort.push(arrays[s][j]);
                        console.log(arraysort);
                        }
                    }
                }
                console.log(recipesByMainInput);
                display(arraysort, containers[s], recipesByMainInput);
            }
        });
    }

    var openOrCloseArrayDisplay = document.querySelectorAll(".titleAndButton button ");
    for(let z=0; z<3; z++) {
        openOrCloseArrayDisplay[z].addEventListener("click", function arrayDisplay(event) {
            let choiceArray = event.target;
            event.stopImmediatePropagation(); 
            let getParent = choiceArray.parentNode.parentNode;
            console.log(getParent.classList[1]);
            var display = getParent.querySelector(".search");
            var chevronDirection = getParent.querySelector(".titleAndButton button");
            var getStyle = getComputedStyle(display);
            console.log(getStyle.display)
            
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