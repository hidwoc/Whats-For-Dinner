// declare global variable recipeBox for container recipes will be appended to
const recipeBox = document.querySelector("#recipe-box");

// create function to findRecipeCards
const findRecipeCards = (event) => {
  event.preventDefault();
  const ingredientInput = document.querySelector("#ingredients-input");
  const ingredientSearch = ingredientInput.value;
  // take #ingredients-input values to search API for results
  const url = `https://api.edamam.com/search?q=${ingredientSearch}&app_id=610593b2&app_key=c3fe8717d94ed5f74e0c0bce360bb3ca`
  axios.get(url)
    .then((res) => {
      // declare variable recipes = results.data.hits
      const recipes = res.data.hits;
      console.log(recipes);
      recipes.forEach((i) => createRecipeCard(i))
   
    }
    )
  // // // account for filter options - OR TOGGLE RESULTS???
  // clear #ingredients-input box
  ingredientInput.value = "";
}


// create function to createRecipeCard (to be used in .forEach())
const createRecipeCard = (i) => {
  // // create div element with class .recipeCard
  const recipeCard = document.createElement('div');
  recipeCard.className = 'recipeCard';

  // // create h4 element and assign it i.recipe.label
  const label = document.createElement('h4');
  // // // account for "recipe" in label and remove?
  // // create anchor element and assign its href to i.recipe.url
  const labelLink = document.createElement('a');
  labelLink.innerText = i.recipe.label;
  labelLink.href = i.recipe.url
  // // make sure this opens to blank webpage
  labelLink.setAttribute("target", "_blank");
  // // append anchor element to h4
  label.appendChild(labelLink);

  // // create img element and assign its src to i.recipe.image
  const recipeImg = document.createElement('img');
  recipeImg.src = i.recipe.image;
  // // // DEFAULT PIC IN CASE OF NO PIC!

  // // create details element and set innerText to i.recipe.ingredientLines
  const recipeIngredients = document.createElement('details');
  recipeIngredients.innerText = i.recipe.ingredientLines;
  // // create summary element, set innerText = "Ingredients"
  const recipeIngredientsSummary = document.createElement('summary');
  recipeIngredientsSummary.innerText = "Ingredients";
  // // append summary element to details element
  recipeIngredients.appendChild(recipeIngredientsSummary);
  // // // oof, this might be overkill. May have to switch tactics to focus on health/dietLabels
  
  // // create p element with class .energy
  const energy = document.createElement("p");
  energy.className = "energy";
  // // assign innerText = `Energy: ${smallE} ${i.recipe.totalNutrients.ENERC_KCAL.unit}`
  const bigE = i.recipe.totalNutrients.ENERC_KCAL.quantity;
  const smallE = bigE.toFixed(2);
  energy.innerText = `Energy: ${smallE} ${i.recipe.totalNutrients.ENERC_KCAL.unit}`;
  
  // // create p element with class .protein
  const protein = document.createElement("p");
  protein.className = "protein";
  // // assign innerText = `Protein: ${smallP} ${i.recipe.totalNutrients.PROCNT.unit}`
  const bigP = i.recipe.totalNutrients.PROCNT.quantity;
  const smallP = bigP.toFixed(2);
  protein.innerText = `Protein: ${smallP} ${i.recipe.totalNutrients.PROCNT.unit}`;
  
  // // create p element with class .fat
  const fat = document.createElement("p");
  fat.className = "fat";
  // // assign innerText = `Fat: ${smallF} ${i.recipe.totalNutrients.FAT.unit}`
  const bigF = i.recipe.totalNutrients.FAT.quantity;
  const smallF = bigF.toFixed(2);
  fat.innerText = `Fat: ${smallF} ${i.recipe.totalNutrients.FAT.unit}`;
  
  // // create p element with class .carbs
  const carbs = document.createElement("p");
  carbs.className = "carbs";
  // // assign innerText = `Carbs: ${smallC} ${i.recipe.totalNutrients.CHOCDF.unit}`
  const bigC = i.recipe.totalNutrients.CHOCDF.quantity;
  const smallC = bigC.toFixed(2);
  carbs.innerText = `Carbs: ${smallC} ${i.recipe.totalNutrients.CHOCDF.unit}`;
  // // // might also consider totalDaily for percentage of daily intake rather than straight numbers from totalNutrients???
  // // // in which case I should definitely calculate for a SINGLE SERVING
  
  // // append elements to recipeCard
  recipeCard.append(label,recipeImg,recipeIngredients,energy,protein,fat,carbs);
  // // append .recipeCard to recipeBox
  recipeBox.appendChild(recipeCard);
}
  
// addEventListener on 'submit' to #submit to findRecipeCards
const form = document.querySelector('.form-container');
form.addEventListener('submit', findRecipeCards);
// addEventListener on [ENTER] to #ingredients-input to append value to ingredientsList?

// // Back to Top function?
