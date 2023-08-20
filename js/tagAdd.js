import {createRecipeCards} from "./createRecipeCards.js";

export function tag(dataArray, newDataArray, arrayIngredients, arrayAppliances, arrayUstensils, item){
console.log("coucou je suis arrivée !!!!!")
newDataArray =[];

console.log(item);

switch(item) {
    case "firstArray":
        console.log("première case");
        console.log(dataArray);
        console.log(newDataArray);
        console.log(arrayIngredients);
        console.log(arrayAppliances);
        console.log(arrayUstensils);


        for(let i =0; i<dataArray.length; i++){
            for(let j =0; j<dataArray[i].ingredients.length; j++) {
                    console.log(arrayIngredients[arrayIngredients.length-1])
                    if(dataArray[i].ingredients[j].ingredient == arrayIngredients[arrayIngredients.length-1]) {
                        newDataArray.push(dataArray[i]);
                        dataArray.pop;                     
                    }
            }
        }     
        // console.log(newDataArray);   
        // console.log(dataArray);
        break;
        
    case "secondArray":
        console.log(arrayAppliances);
        console.log("deuxième case");
        for(let i =0; i<dataArray.length; i++) {
            if (dataArray[i].appliance == arrayAppliances[arrayAppliances.length-1]){
                newDataArray.push(dataArray[i]);
                dataArray.pop
            }
        }
        // console.log(newDataArray);   
        // console.log(dataArray);
        break;
        
        case "thirdArray":
            console.log(arrayUstensils);
            console.log("troisième case");
            for(let i =0; i<dataArray.length; i++){
               for(let j =0; j<dataArray[i].ustensils.length; j++) {
                if(dataArray[i].ustensils[j] == arrayUstensils[arrayUstensils.length-1]) {
                    newDataArray.push(dataArray[i]);
                    dataArray.pop
                }
             }
         }
          // console.log(newDataArray);   
        // console.log(dataArray);
    break;
}
createRecipeCards(newDataArray);
return newDataArray
}