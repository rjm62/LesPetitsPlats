import { createRecipeCards } from "./createRecipeCards.js";

export function inputSearchBar(list){
    let array =[];
    const searchBarInput = document.querySelector(".searchBar input");
    searchBarInput.addEventListener("keyup", function(event) {
        let result= event.target;
        var stringreceived = result.value.toLowerCase();
        if(stringreceived.length>2) {
            array = list.filter(recipe => recipe.name.toLowerCase().includes(stringreceived)
                 || recipe.description.toLowerCase().includes(stringreceived));
                 
            list.forEach(element => {  
                for(let i = 0; i<element.ingredients.length; i++) {
                    const ingredient = element.ingredients[i].ingredient;
                    if(ingredient.toLowerCase().includes(stringreceived) && !array.includes(element)) {
                        array.push(element);
                        // console.log("33", element);
                    }
                }
            });
            createRecipeCards(array);
        } else {
            createRecipeCards(list);
        }
    });  
}
// console.log(roro); 

/*
export function inputSearchBar(recipesArray){
    var essai = [];
    let previousArryLength;
//const searchBarInput = document.querySelector(".searchBar input");
    searchBarInput.addEventListener("keyup", function(event) {
        let result= event.target;
        //console.log(result);
        var stringreceived = result.value.toLowerCase();
        console.log(stringreceived);
        if (stringreceived.length>2 || previousArryLength-1 ==stringreceived.length){
            previousArryLength = stringreceived.length;
            var temporaryArrayInput = new Array;
            var tintin=0;
            for(let s=0; s<recipesArray.length; s++) {  
                tintin=0;  
                if(recipesArray[s].name.toLowerCase().includes(stringreceived) 
                ||recipesArray[s].description.toLowerCase().includes(stringreceived)) {
                temporaryArrayInput.push(recipesArray[s]);
                tintin=1;
                console.log(temporaryArrayInput);
                }
                else if(tintin==0) {
                    for (let u=0; u<recipesArray[s].ingredients.length; u++) {
                        let picsou = recipesArray[s].ingredients[u].ingredient;
                        if(picsou.toLowerCase().includes(stringreceived)) {
                            console.log((recipesArray[s].ingredients[u].ingredient));
                            temporaryArrayInput.push(recipesArray[s]);
                            console.log(temporaryArrayInput);
                        }
                    }
                }
            }
            console.log(temporaryArrayInput);           
        } 
        console.log("333333"+temporaryArrayInput); 
        essai = temporaryArrayInput;

    });
    console.log("1"+essai); 
    return (essai);
}
// console.log(roro); 

*/




