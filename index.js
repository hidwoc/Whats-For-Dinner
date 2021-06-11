// declare global variable recipeBox for container recipes will be appended to
const recipeBox = document.querySelector("#recipe-box");

// =====================================================
// additive form code from workshop with Soleil!
const fieldset = document.querySelector('fieldset');
const addButton = document.querySelector('#add');
// =====================================================


const toggleButtonAbility = () => {
  // creating elements and styling accordingly
  if (fieldset.children.length >= 5) {
    addButton.disabled = true;
  } else {
    addButton.disabled = false;
  }
}

const removeInput = (event) => {
  // prevent default
  event.preventDefault();
  // remove the parent node
  event.target.parentNode.remove();
  toggleButtonAbility();
}

const addInput = (event) => {
  // preparing for selection / cancelling events
  event.preventDefault();
  toggleButtonAbility();
  const inputContainer = document.createElement('div');
  inputContainer.classList.add('input-container');
  
  const input = document.createElement('input');
  input.type = "text";
  input.name = "ingredient";
  input.autocomplete = "off";
  
  const button = document.createElement('button');
  button.className = "subtract";
  button.innerText = "-";
  button.addEventListener('click', removeInput);
  
  // append our elements to the container
  inputContainer.append(input, button);
  // append our container to our fieldset
  fieldset.appendChild(inputContainer);
}

// create function in case of no recipes found
const noRecipesFound = () => {
  const tryAgain = document.createElement('h2');
  tryAgain.className = "no-recipes";
  tryAgain.innerText = "No Recipes Found :("
  recipeBox.append(tryAgain);
}

// create function to findRecipeCards
const findRecipeCards = (event) => {
  event.preventDefault();
  // clear recipeBox of previous search results
  if (recipeBox != null) {
    recipeBox.innerHTML = '';
  }
  // take input of fieldset
  const inputs = document.querySelectorAll("input");
  // Array.from() // https://stackoverflow.com/questions/32765157/filter-or-map-nodelists-in-es6
  const ingredients = Array.from(inputs).map((input) => input.value);
  
  const ingredientSearch = ingredients.join(' ');
  // take input values to search API for results
  const url = `https://api.edamam.com/search?q=${ingredientSearch}&app_id=610593b2&app_key=c3fe8717d94ed5f74e0c0bce360bb3ca`
  
  axios.get(url)
  .then((res) => {
    // declare variable recipes = results.data.hits
    const recipes = res.data.hits;
    console.log(recipes);
    if (recipes.length === 0) {
      noRecipesFound();
    } else {
      recipes.forEach((i) => createRecipeCard(i));
    }
  }
  )
  // // // account for filter options - OR TOGGLE RESULTS???
  // clear #ingredients-input box
  fieldset.innerHTML = '';
}


// create function to createRecipeCard (to be used in .forEach())
const createRecipeCard = (i) => {
  // create div element with class .recipeCard
  const recipeCard = document.createElement('div');
  recipeCard.className = 'recipeCard';
  
  // create h4 element and assign it i.recipe.label
  const label = document.createElement('h4');
  // create anchor element and assign its href to i.recipe.url
  const labelLink = document.createElement('a');
  labelLink.innerText = i.recipe.label;
  labelLink.href = i.recipe.url
  // make sure this opens to blank webpage
  labelLink.setAttribute("target", "_blank");
  // append anchor element to h4
  label.appendChild(labelLink);
  
  // create img element and assign its src to i.recipe.image
  const recipeImg = document.createElement('img');
  recipeImg.src = i.recipe.image;
  // DEFAULT PIC IN CASE OF NO PIC!
  const setDefaultPic = () => {
    recipeImg.src = "https://thumbs.dreamstime.com/b/cute-stick-figure-chef-cooking-recipe-lineart-icon-dinner-preparation-pictogram-communication-restaurant-meal-illustration-186228511.jpg";
    recipeImg.width = "300";
  }

  recipeImg.onerror = setDefaultPic; 

  // create details element and set innerText to i.recipe.ingredientLines
  const recipeIngredients = document.createElement('details');
  ingredientLines = i.recipe.ingredientLines;
  recipeIngredients.innerText = ingredientLines.join(' ');
  // create summary element, set innerText = "Ingredients"
  const recipeIngredientsSummary = document.createElement('summary');
  recipeIngredientsSummary.innerText = "Ingredients";
  // append summary element to details element
  recipeIngredients.appendChild(recipeIngredientsSummary);
  
  // create p element with class .energy
  const energy = document.createElement("p");
  energy.className = "energy";
  // assign innerText = `Energy: ${smallE} ${i.recipe.totalNutrients.ENERC_KCAL.unit}`
  const bigE = i.recipe.totalNutrients.ENERC_KCAL.quantity;
  const smallE = bigE.toFixed(2);
  energy.innerText = `Energy\n${smallE} ${i.recipe.totalNutrients.ENERC_KCAL.unit}`;
  
  // create p element with class .protein
  const protein = document.createElement("p");
  protein.className = "protein";
  // assign innerText = `Protein: ${smallP} ${i.recipe.totalNutrients.PROCNT.unit}`
  const bigP = i.recipe.totalNutrients.PROCNT.quantity;
  const smallP = bigP.toFixed(2);
  protein.innerText = `Protein\n${smallP} ${i.recipe.totalNutrients.PROCNT.unit}`;
  
  // create p element with class .fat
  const fat = document.createElement("p");
  fat.className = "fat";
  // assign innerText = `Fat: ${smallF} ${i.recipe.totalNutrients.FAT.unit}`
  const bigF = i.recipe.totalNutrients.FAT.quantity;
  const smallF = bigF.toFixed(2);
  fat.innerText = `Fat\n${smallF} ${i.recipe.totalNutrients.FAT.unit}`;
  
  // create p element with class .carbs
  const carbs = document.createElement("p");
  carbs.className = "carbs";
  // assign innerText = `Carbs: ${smallC} ${i.recipe.totalNutrients.CHOCDF.unit}`
  const bigC = i.recipe.totalNutrients.CHOCDF.quantity;
  const smallC = bigC.toFixed(2);
  carbs.innerText = `Carbs\n${smallC} ${i.recipe.totalNutrients.CHOCDF.unit}`;
  
  // append elements to recipeCard
  recipeCard.append(label,recipeImg,recipeIngredients,energy,protein,fat,carbs);
  // append .recipeCard to recipeBox
  recipeBox.appendChild(recipeCard);
}

// =====================================================
// additive form code from workshop with Soleil!
addButton.addEventListener('click', addInput);
document.querySelector('form').addEventListener('submit', (e) => e.preventDefault());
// =====================================================

// addEventListener on 'submit' to #submit to findRecipeCards
const button = document.querySelector('#submit');
button.addEventListener('click', (e) => {
  findRecipeCards(e);
  addInput(e)});

// // Back to Top function?
