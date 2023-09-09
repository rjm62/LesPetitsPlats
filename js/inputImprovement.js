export function inputImprovement(result) {
    
    // //--------------------- VERIFICATION DES ESPACES------------------------
    if(result.value.charCodeAt(result.value.length-1)==32 ) {   // Si touche espace cliquée
        if(result.value.length==1 || result.value.charCodeAt(result.value.length-2)==32) { 
        result.value = result.value.slice(0, result.value.length-1);
        }
    }
   
    var stringreceived = result.value.toLowerCase().trim();
    const accentLetterArray =  ['à','á','â','é','è','ê','ë','ì','í','ï','î','ò','ó','ô','ù','ú','û','ü','ç'];
    const withoutletterArray = ['a','a','a','e','e','e','e','i','i','i','i','o','o','o','u','u','u','u','c'];
    
    
    for(let k =0; k<stringreceived.length; k++){
        for(let l=0; l<accentLetterArray.length; l++) {
            if (stringreceived.charAt(k)== accentLetterArray[l]) {
                var stringreceived = stringreceived.replace(stringreceived[k], withoutletterArray[l]);
            }
        }
    }

    stringreceived =stringreceived.replace(/[s]\s+/g, " ");
    if(stringreceived.charAt(stringreceived.length-1) == "s") {
        stringreceived = stringreceived.replace(stringreceived.charAt(stringreceived.length-1), "");
    }
    let toto = stringreceived;
    return toto;
}