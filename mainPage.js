import recipes from './data/recipes.js'; //récupération des recettes depuis le fichier recipes.js
console.log(recipes);

var ingredientsArray = new Array();
var applianceArray = new Array();
var ustensilsArray = new Array();
var applianceWithoutDoublons = new Array();

//------------------CREATION DES FICHES RECETTES---------------------
for(let i=0; i<recipes.length; i++) {
    const data = recipes[i];
    console.log (data);
const recipeCard = document.createElement("div");        // conteneur général de la fiche
    recipeCard.className = "recipeCard";
    recipeCard.style.display = "flex";
    recipeCard.style.flexDirection = "column";
    recipeCard.style.width = "100%";
    recipeCard.style.alignItems = "start";

    const img = document.createElement("img");         // image + titre
    img.src = "./assets/Photos des plats/"+data.image;
    img.style.width = "100%";
    const figcaption = document.createElement("figcaption");
    figcaption.innerText = data.name;

    const timeContainer = document.createElement("div");
    timeContainer.className = "timeContainer";
    const time = document.createElement("p");
    time.className = "time";
    time.innerText = data.time+"min";
    timeContainer.appendChild(time);

    const recipeDescription = document.createElement("div");   // conteneur description
    recipeDescription.className = "recipeDescription";
    const descriptionName = document.createElement("h5")
    descriptionName.className = "descriptionName";
    descriptionName.innerText = "RECETTE";
    const descriptionText = document.createElement("p");
    descriptionText.className = "descriptionText";
    descriptionText.innerText = data.description;
    recipeDescription.appendChild(descriptionName);
    recipeDescription.appendChild(descriptionText);

    const ingredientsTitle = document.createElement("h5");       
    ingredientsTitle.className = "ingredientsTitle"
    ingredientsTitle.innerText = "INGREDIENTS"

    const ingredientsContainer = document.createElement("div");  // conteneur ingrédients et quantités
    ingredientsContainer.className = "ingredientsContainer";
    
    for(let j=0; j<data.ingredients.length; j++) {
        const ingredientAndQuantityContainer = document.createElement("div");
        ingredientAndQuantityContainer.className = "ingredientAndQuantityContainer"
        const ingredientName = document.createElement("p");
        ingredientName.className = "ingredientName";
        ingredientName.innerText = data.ingredients[j].ingredient;
        console.log( data.ingredients[j].ingredient);
        ingredientsArray.push(data.ingredients[j].ingredient);
        const ingredientQuantity = document.createElement("div");
        ingredientQuantity.className = "ingredientQuantity";
        const quantity = document.createElement("p"); 
        if(data.ingredients[j].quantity!= undefined) {
            quantity.innerText = data.ingredients[j].quantity;
        }
        const unit = document.createElement("p");
        if(data.ingredients[j].unit!= undefined) {
            unit.innerText = data.ingredients[j].unit;
        }
    

        ingredientAndQuantityContainer.appendChild(ingredientName);
        ingredientAndQuantityContainer.appendChild(ingredientQuantity);
        ingredientQuantity.appendChild(quantity);
        ingredientQuantity.appendChild(unit);
        ingredientsContainer.appendChild(ingredientAndQuantityContainer);
    }

        for(let j=0; j<data.ustensils.length; j++) {
            ustensilsArray.push(data.ustensils[j]);
        }

        applianceArray.push(data.appliance);

    const containerRecipes = document.querySelector(".containerRecipes"); // intégration des enfants dans l'élément parent
    containerRecipes.appendChild(recipeCard);
    recipeCard.appendChild(img);
    recipeCard.appendChild(figcaption);
    recipeCard.appendChild(timeContainer);
    recipeCard.appendChild(recipeDescription);
    recipeCard.appendChild(ingredientsTitle);
    recipeCard.appendChild(ingredientsContainer);
}

var arrays = [];
arrays[0] = arrayImprovement(ingredientsArray);
arrays[1] = arrayImprovement(ustensilsArray);
arrays[2] = arrayImprovement(applianceArray);
console.log(arrays[0]);

var containers = [];
containers[0] = document.querySelector(".firstArray");
containers[1] = document.querySelector(".secondArray");
containers[2] = document.querySelector(".thirdArray");

for (let r=0; r<3; r++ ) {
    display(arrays[r], containers[r]);
}


function display (array, container) {
for(let w = 0; w<array.length; w++){
    var li = document.createElement("li");
    li.innerText= array[w];
    container.appendChild(li);
    }
}

//------FONCTION POUR AMELIORER LES TABLEAUX EN SUPPRIMANT LES DOUBLANTS ET EN CLASSANT DANS L'ORDRE ALPHABETIQUE------------
function arrayImprovement(array) {
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

const searchInput = document.querySelector(".search input");
searchInput.addEventListener("keyup", function(event) {
   let result= event.target;
   let titi = result.parentNode.parentNode;
   let tata = titi.classList[0];
   console.log(tata);
   let stringreceived = result.value.toLowerCase();
   console.log(stringreceived);
   let temporaryArraysort = new Array;
   console.log(ingredientsOrderedWithoutDuplicatesArray);
   temporaryArraysort = ingredientsOrderedWithoutDuplicatesArray.filter(element => {
    return element.toLowerCase().startsWith(stringreceived);
   });
 console.log(temporaryArraysort);
});

var openOrCloseArrayDisplay = document.querySelectorAll(".titleAndButton button ");
for(let z=0; z<3; z++) {
    openOrCloseArrayDisplay[z].addEventListener("click", function arrayDisplay(event) {
    console.log("coucou");
    let choiceArray = event.target;
    let getParent = choiceArray.parentNode.parentNode;
    var display = getParent.querySelector(".search");
    var chevronDirection = getParent.querySelector(".titleAndButton button");
    var getStyle = getComputedStyle(display);
    
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