export function recipesWithoutAccent(arrayWithAccent) {
    let list =[];
    list = JSON.parse(JSON.stringify(arrayWithAccent));

const accentLetterArray =  ['à','á','â','é','è','ê','ë','ì','í','ï','î','ò','ó','ô','ù','ú','û','ü','ç'];
const withoutletterArray = ['a','a','a','e','e','e','e','i','i','i','i','o','o','o','u','u','u','u','c'];
    for(let t =0; t<list.length; t++){          
        for(let k =0; k<list[t].name.length; k++){

            for(let l=0; l<accentLetterArray.length; l++) {
                
                if (list[t].name.charAt(k)== accentLetterArray[l]) {
                list[t].name =list[t].name.replace(list[t].name[k], withoutletterArray[l]);
                // console.log(list[t].name);
                }
            }
        }
        list[t].name = " "+list[t].name;
    }

    for(let t =0; t<list.length; t++){          
        for(let k =0; k<list[t].description.length; k++){

            for(let l=0; l<accentLetterArray.length; l++) {
                
                if (list[t].description.charAt(k)== accentLetterArray[l]) {
                list[t].description =list[t].description.replace(list[t].description[k], withoutletterArray[l]);
                // console.log(list[t].description);
                }
            }
        }
        list[t].description= " "+list[t].description;
    }


for(let t =0; t<list.length; t++){          
        for(let k =0; k<list[t].ingredients.length; k++){
            for(let m =0; m<list[t].ingredients[k].ingredient.length; m++) {
                for(let l=0; l<accentLetterArray.length; l++) {
                    
                    if (list[t].ingredients[k].ingredient.charAt(m)== accentLetterArray[l]) {
                    list[t].ingredients[k].ingredient =list[t].ingredients[k].ingredient.replace(list[t].ingredients[k].ingredient[m], withoutletterArray[l]);
                    }
                }
            }
            list[t].ingredients[k].ingredient= " "+list[t].ingredients[k].ingredient;
            // console.log(list[t].ingredients[k].ingredient)
        }     
    }
    return list;
}