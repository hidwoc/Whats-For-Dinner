// declare global variable recipeBox for container recipes will be appended to
const recipeBox = document.querySelector("#recipe-box");

// create function to findRecipeCards
// event.preventDefault()
// take #ingredients-input values to search API for results
// // // account for filter options - OR TOGGLE RESULTS???
// declare variable recipes = results.data.hits
// recipes.forEach((recipe) => createRecipeCard(recipe))

// use recipes.forEach() to iterate creation of recipeCard
// // create div element with class .recipeCard
// // create h4 element and assign it recipes.recipe.label
// // // account for "recipe" in label and remove?
// // create anchor element and assign its href to recipes.recipe.url
// // make sure this opens to blank webpage
// // append anchor element to h4
// // create img element and assign its src to recipes.recipe.image
// // create section element and assign it recipes.recipe.ingredientLines
// // // oof, this might be overkill. May have to switch tactics to focus on health/dietLabels
// // // handle .quantity to have only 2 decimal places!
// // create p element with class .energy
// // assign innerText = `Energy: ${recipes.recipe.totalNutrients.ENERC_KCAL.quantity} ${recipes.recipe.totalNutrients.ENERC_KCAL.unit}`
// // create p element with class .protein
// // assign innerText = `Protein: ${recipes.recipe.totalNutrients.PROCNT.quantity} ${recipes.recipe.totalNutrients.PROCNT.unit}`
// // create p element with class .fat
// // assign innerText = `Fat: ${recipes.recipe.totalNutrients.FAT.quantity} ${recipes.recipe.totalNutrients.FAT.unit}`
// // create p element with class .carbs
// // assign innerText = `Carbs: ${recipes.recipe.totalNutrients.CHOCDF.quantity} ${recipes.recipe.totalNutrients.CHOCDF.unit}`
// // // might also consider totalDaily for percentage of daily intake rather than straight numbers from totalNutrients???
// // // in which case I should definitely calculate for a SINGLE SERVING
// // append elements to .recipeCard
// // append .recipeCard to recipeBox

// addEventListener on 'click' to #submit to findRecipeCards
// addEventListener on [ENTER] to #ingredients-input to append value to ingredientsList?

// // Back to Top function?
