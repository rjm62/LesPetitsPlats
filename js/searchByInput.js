import { createRecipeCards } from "./createRecipeCards.js";
import { recipesWithoutAccent } from "./recipesWithoutAccent.js";
import { filterRecipes } from "./filterRecipes.js";
import { inputImprovement } from "./inputImprovement.js";


export function searchByInput(originList, list, result){
    var array1 =[];
    let array =[];
    let stringreceived = inputImprovement(result);

    if(result.value.length>2) {
         array1 = list.filter(recipe => recipe.name.toLowerCase().includes(" "+stringreceived));
        let reduceArrayFirst = list.filter(val =>!array1.includes(val));
        let array2 = reduceArrayFirst.filter(recipe => recipe.description.toLowerCase().includes(" "+stringreceived)); 
        let reduceArraySecond = reduceArrayFirst.filter(val => !array2.includes(val));
        
        array = array1.concat(array2);

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
                }
            }
        }   
        var newFilter = createRecipeCards(newList, array);
        var list = recipesWithoutAccent(newList);
        filterRecipes(newFilter, list, newList);
    } 
     return array, newList; 
}





