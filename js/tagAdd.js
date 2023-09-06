import {createRecipeCards} from "./createRecipeCards.js";

export function tag(dataArray, newDataArray, arrayIngredients, arrayAppliances, arrayUstensils, item){
newDataArray =[];

switch(item) {
    case "firstArray":
        for(let i =0; i<dataArray.length; i++){
            for(let j =0; j<dataArray[i].ingredients.length; j++) {
                if(dataArray[i].ingredients[j].ingredient.toLowerCase() == arrayIngredients[arrayIngredients.length-1].toLowerCase()) {
                    newDataArray.push(dataArray[i]);
                    dataArray.pop;                
                }
            }
        }     
        break;
        
    case "secondArray":
        for(let i =0; i<dataArray.length; i++) {
            if (dataArray[i].appliance.toLowerCase() == arrayAppliances[arrayAppliances.length-1].toLowerCase()){
                newDataArray.push(dataArray[i]);
                dataArray.pop
            }
        }
        break;
        
        case "thirdArray":
            for(let i =0; i<dataArray.length; i++){
               for(let j =0; j<dataArray[i].ustensils.length; j++) {
                if(dataArray[i].ustensils[j].toLowerCase() == arrayUstensils[arrayUstensils.length-1].toLowerCase()) {
                    newDataArray.push(dataArray[i]);
                    dataArray.pop
                }
             }
         }
    break;
}
createRecipeCards(newDataArray);
return newDataArray
}