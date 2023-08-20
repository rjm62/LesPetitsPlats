export function recipesWithoutAccent(arrayWithAccent) {
    let list =[];
    list = JSON.parse(JSON.stringify(arrayWithAccent));

    const accentLetterArray =  ['à','á','â','É','È','é','è','ê','ë','ì','í','ï','î','ò','ó','ô','ù','ú','û','ü','ç'];
    const withoutletterArray = ['a','a','a','E','E','e','e','e','e','i','i','i','i','o','o','o','u','u','u','u','c'];
    for(let t =0; t<list.length; t++){          
        for(let k =0; k<list[t].name.length; k++){

            for(let l=0; l<accentLetterArray.length; l++) {
                
                if (list[t].name.charAt(k)== accentLetterArray[l]) {
                list[t].name =list[t].name.replace(list[t].name[k], withoutletterArray[l]);
                }
            }
        }
        list[t].name = " "+list[t].name+" ";
        list[t].name = list[t].name.replace(/[s]\s+/g, " ");
    }

    for(let t =0; t<list.length; t++){          
        for(let k =0; k<list[t].description.length; k++){

            for(let l=0; l<accentLetterArray.length; l++) {
                
                if (list[t].description.charAt(k)== accentLetterArray[l]) {
                list[t].description =list[t].description.replace(list[t].description[k], withoutletterArray[l]);
                }
            }
        }
        list[t].description= " "+list[t].description+" ";
        list[t].description = list[t].description.replace(/[s]\s+/g, " ");
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
            list[t].ingredients[k].ingredient= " "+list[t].ingredients[k].ingredient+" ";
        }     

    }


    for(let t =0; t<list.length; t++){          
        for(let k =0; k<list[t].appliance.length; k++){

            for(let l=0; l<accentLetterArray.length; l++) {
                
                if (list[t].appliance.charAt(k)== accentLetterArray[l]) {
                list[t].appliance =list[t].appliance.replace(list[t].appliance[k], withoutletterArray[l]);
                }
            }
        }
        list[t].appliance = " "+list[t].appliance+" ";
    }

    for(let t =0; t<list.length; t++){          
        for(let k =0; k<list[t].ustensils.length; k++){
            for(let v =0; v<list[t].ustensils[k].length; v++){

            for(let l=0; l<accentLetterArray.length; l++) {
                
                if (list[t].ustensils[k].charAt(v)== accentLetterArray[l]) {
                list[t].ustensils[k] =list[t].ustensils[k].replace(list[t].ustensils[k][v], withoutletterArray[l]);
                }
            }
        }
        list[t].ustensils[k] = " "+list[t].ustensils[k]+" ";
    }
}

    console.log(list);
    return list;
}