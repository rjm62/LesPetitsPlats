export function filterRecipes(list) {
    console.log("TOTO");
    var array= list
    const searchBarInput = document.querySelector(".searchBar input");
searchBarInput.addEventListener('change', function(event) {
    var letter = event.target.value;
    console.log(letter);
    if(letter>2) {
      array = array.filter(recipe => recipe.name.includes(letter));
    }
    console.log(`filterRecipes: ${array}`);
    return array;
});
    return array;

}