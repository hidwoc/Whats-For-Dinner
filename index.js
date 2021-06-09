// declare global variable recipeBox for container recipes will be appended to
const recipeBox = document.querySelector("#recipe-box");

// create function to findRecipeCards
const findRecipeCards = (event) => {
  event.preventDefault();
  const ingredientInput = document.querySelector("#ingredients-input");
  const ingredientSearch = ingredientInput.value;
  // take #ingredients-input values to search API for results
  const url = `https://api.edamam.com/search?q=${ingredientSearch}&app_id=610593b2&app_key=c3fe8717d94ed5f74e0c0bce360bb3ca`
  axios.get(ur)
    .then((res) => {
      // declare variable recipes = results.data.hits
      const recipes = res.data.hits;
      // recipes.forEach((recipe) => createRecipeCard(recipe))
      recipes.forEach((recipe) => createRecipeCard(recipe))
    }
    )
  // // // account for filter options - OR TOGGLE RESULTS???
  // clear #ingredients-input box
  ingredientInput.value = "";
}


// create function to createRecipeCard (to be used in .forEach())
const createRecipeCard = (recipe) => {
  // // create div element with class .recipeCard
  const recipeCard = document.createElement('div');
  recipeCard.className = 'recipeCard';
  // // create h4 element and assign it recipes.recipe.label
  const label = document.createElement('h4');
  label.value = recipes.recipe.label;
  // // // account for "recipe" in label and remove?
  // // create anchor element and assign its href to recipes.recipe.url
  
  // // make sure this opens to blank webpage
  // // append anchor element to h4
  // // create img element and assign its src to recipes.recipe.image
  // // create details element and assign it recipes.recipe.ingredientLines
  // // create summary element, set innerText = "Ingredients"
  // // append summary element to details element
  // // // oof, this might be overkill. May have to switch tactics to focus on health/dietLabels
  // // create p element with class .energy
  // // const bigE = recipes.recipe.totalNutrients.ENERC_KCAL.quantity
  // // const smallE = bigE.toFixed(2)
  // // assign innerText = `Energy: ${smallE} ${recipes.recipe.totalNutrients.ENERC_KCAL.unit}`
  // // create p element with class .protein
  // // const bigP = recipes.recipe.totalNutrients.PROCNT.quantity
  // // const smallP = bigP.toFixed(2)
  // // assign innerText = `Protein: ${smallP} ${recipes.recipe.totalNutrients.PROCNT.unit}`
  // // create p element with class .fat
  // // const bigF = recipes.recipe.totalNutrients.FAT.quantity
  // // const smallF = bigF.toFixed(2)
  // // assign innerText = `Fat: ${smallF} ${recipes.recipe.totalNutrients.FAT.unit}`
  // // create p element with class .carbs
  // // const bigC = recipes.recipe.totalNutrients.CHOCDF.quantity
  // // const smallC = bigC.toFixed(2)
  // // assign innerText = `Carbs: ${smallC} ${recipes.recipe.totalNutrients.CHOCDF.unit}`
  // // // might also consider totalDaily for percentage of daily intake rather than straight numbers from totalNutrients???
  // // // in which case I should definitely calculate for a SINGLE SERVING
  // // append elements to .recipeCard
  // // append .recipeCard to recipeBox
}
  
// addEventListener on 'submit' to #submit to findRecipeCards
const form = document.querySelector('.form-container');
form.addEventListener('submit', findRecipeCards);
// addEventListener on [ENTER] to #ingredients-input to append value to ingredientsList?

// // Back to Top function?
