//FONCTION POUR AMELIORER LES TABLEAUX EN SUPPRIMANT LES DOUBLANTS ET EN CLASSANT DANS L'ORDRE ALPHABETIQUE------------
export function arrayImprovement(array) {
    var firstImprovement = arrayUnique(array); 
     
    function arrayUnique(duplicateRemoved) {        //appel de la fonction "arrayUnique" afin de supprimer les doublons
        let temporaryArrayFirst = new Array;        //création d'un tableau vide pour récupérer les éléments uniques
        duplicateRemoved.forEach(element => {       // test pour chaque elements du tableau initial si déja "pushé" dans le nouveau tableau
            if (temporaryArrayFirst.indexOf(element) ==-1) {
                temporaryArrayFirst.push(element);      // ajout dans le nouveau tableau
            }
        });
        return temporaryArrayFirst;
    }

    let secondImprovement = Array.from(firstImprovement); // on fait une copie du tableau initial
        for (let t=0; t<firstImprovement.length; t++) {
            secondImprovement.sort(function(a,b) {
                return a.split(/\s*[\\,]*\s*/).join("").localeCompare(b.split(" ").join(""));  // test pour mettre dans l'ordre alphabétique             
            });      
        }

    return secondImprovement   // retour du nouveau tableau (sans doublon et en ordre alphabétique)
}
