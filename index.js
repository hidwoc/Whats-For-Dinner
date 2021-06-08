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

// addEventListener on 'click' to #submit to findRecipeCards
// addEventListener on [ENTER] to #ingredients-input to append value to ingredientsList?

// // Back to Top function?
