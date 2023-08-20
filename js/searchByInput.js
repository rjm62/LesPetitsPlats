import { createRecipeCards } from "./createRecipeCards.js";
import { recipesWithoutAccent } from "./recipesWithoutAccent.js";
import { arrayImprovement } from "./arrayImprovement.js";
import { filterRecipes } from "./filterRecipes.js";
import { inputImprovement } from "./inputImprovement.js";


export function searchByInput(originList, list, result){

console.log(originList);
console.log(list);
console.log(result);
console.log(list);







    var array1 =[];
    let array =[];
    let stringreceived = inputImprovement(result);

    if(result.value.length>2) {
         array1 = list.filter(recipe => recipe.name.toLowerCase().includes(" "+stringreceived));
        let reduceArrayFirst = list.filter(val =>!array1.includes(val));
        let array2 = reduceArrayFirst.filter(recipe => recipe.description.toLowerCase().includes(" "+stringreceived)) 
        let reduceArraySecond = reduceArrayFirst.filter(val => !array2.includes(val));
        
        array = array1.concat(array2);
        console.log(array);

        reduceArraySecond.forEach(element => {  
            var array3 = element.ingredients.filter(recipe => recipe.ingredient.toLowerCase().includes(" "+stringreceived));
            if (array3.length> 0) {
                array.push(element);
            }
        });

        var newList=[];
        for(let f =0; f<originList.length; f++) {
            for(let d=0; d<array.length; d++) {
                if (originList[f].id == array[d].id) {
                    newList.push(originList[f]);
                    console.log(newList);
                }
            }
        }   
        var newFilter = createRecipeCards(newList, array);
        filterRecipes(newFilter, list, newList);

        // let ereaseTags = document.querySelector(".tagsList");
        // ereaseTags.innerHTML ="";

        // let ereaseInput= [];
        // ereaseInput = document.querySelectorAll("nav form input");
        // for(let i =0; i<ereaseInput.length; i++) {
        // console.log(ereaseInput[0].value);
        // ereaseInput[i].value ="";
        // }
        console.log("c'est là");
    } else {
        // var filterReset =createRecipeCards(originList, list);
        // filterRecipes(filterReset, list);
        // let ereaseTags = document.querySelector(".tagsList");
        // ereaseTags.innerHTML ="";

        // let ereaseInput= [];
        // ereaseInput = document.querySelectorAll("nav form input");
        // for(let i =0; i<ereaseInput.length; i++) {
        // console.log(ereaseInput[0].value);
        // ereaseInput[i].value ="";
        // }
        console.log("ou là");
    } 
     return array; 
}





