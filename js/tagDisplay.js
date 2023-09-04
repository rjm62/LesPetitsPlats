

//--CREATION  DES TAGS QUI S'AFFICHENT SOUS LA BARRE DE "NAV" AVEC ECOUTE POUR SUPPRESSION EVENTUELLE

export function tagDisplay(text) {
    const tagsList = document.querySelector(".tagsList");
    const tagContainer = document.createElement("div");
    tagContainer.className = "tagContainer";
    const choice = document.createElement("p");
    choice.innerText = text;
    const closeIcon = document.createElement("div");
    closeIcon.className ="closeIcon"
    const X = document.createElement("i")
    X.className = "fa-solid fa-x";
    closeIcon.appendChild(X);
    tagContainer.appendChild(choice);
    tagContainer.appendChild(closeIcon);
    tagsList.appendChild(tagContainer);
}
