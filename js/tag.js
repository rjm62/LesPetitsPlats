//--CREATION  DES CHOIX QUI S'AFFICHE SOUS LA BARRE DE "NAV" AVEC ECOUTE POUR SUPPRESSION EVENTUELLE

export function choiceDisplay(text) {
    const choicesList = document.querySelector(".choicesList");
    const choiceContainer = document.createElement("div");
    choiceContainer.className = "choiceContainer";
    const choice = document.createElement("p");
    choice.innerText = text;
    const closeIcon = document.createElement("div");
    closeIcon.className ="closeIcon"
    const X = document.createElement("i")
    X.className = "fa-solid fa-x";
    closeIcon.addEventListener("click", function removeChoice(event){
        let removeChoice = event.target;
        let removeContainer = removeChoice.parentNode.parentNode;
        removeContainer.style.display = "none";
       });

    closeIcon.appendChild(X);
    choiceContainer.appendChild(choice);
    choiceContainer.appendChild(closeIcon);
    choicesList.appendChild(choiceContainer);
}
