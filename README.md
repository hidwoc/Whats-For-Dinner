# Whats-For-Dinner
A recipe developer for the health-conscious yet under-prepared home cook. Tell us what you have and what's important to you - we'll show you what's good!
# Project Overview
## Project Name
What's For Dinner?
## Project Description
This will allow users to look up ingredients they have and return potential recipes they could make, including a picture, nutritional value, and a link to the recipe.
## API
https://api.edamam.com/search
#### Returns:
- recipes user can make from inputted ingredients
- picture
- nutritional facts (calories, protein, fat, carbs)
### API Snippet
``` JSON
{
  "q": "kimchi",
  "from": 0,
  "to": 10,
  "more": true,
  "count": 779,
  "hits": [
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_233673a880fbbf51712d97e6d992dea4",
        "label": "Kimchi Butter Recipe",
        "image": "https://www.edamam.com/web-img/6b1/6b12a87ea0013d73e658daa4b884d0d2.jpg",
        "source": "Serious Eats",
        "url": "http://www.seriouseats.com/recipes/2016/07/kimchi-butter-recipe.html",
        "shareAs": "http://www.edamam.com/recipe/kimchi-butter-recipe-233673a880fbbf51712d97e6d992dea4/kimchi",
        "yield": 4.0,
        "dietLabels": [
          "Low-Carb"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Low Potassium",
          "Kidney-Friendly",
          "Keto-Friendly",
          "Vegetarian",
          "Pescatarian",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher",
          "Immuno-Supportive"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 stick unsalted butter (4 ounces; 115g), softened",
          "1 1/2 ounces (45g) kimchi with liquid, chopped"
        ],
        "ingredients": [
          {
            "text": "1 stick unsalted butter (4 ounces; 115g), softened",
            "weight": 113.0,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": null
          },
          {
            "text": "1 1/2 ounces (45g) kimchi with liquid, chopped",
            "weight": 42.5242846875,
            "foodCategory": "vegetables",
            "foodId": "food_bduum2lbcapcidb4j4a9jahvsqnt",
            "image": "https://www.edamam.com/food-img/3c4/3c4463c981b8c9e0ecc1a3dd8010120b.jpg"
          }
        ],
        "calories": 822.9672854062501,
        "totalWeight": 155.5242846875,
        "totalTime": 5.0,
        "cuisineType": [
          "japanese"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "starter"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 822.9672854062501,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 91.69682428468751,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 58.05136815700938,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 3.70414,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 23.757131942775004,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 3.4590016566500004,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 2.4789269417812503,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 1.3182528253125,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 0.6206157009375001,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 1.640888555,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 242.95000000000002,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 130.222268584375,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 47.53165665,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 7.362914162500001,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 389.852148384375,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 0.23096899496875,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 0.186748569375,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 45.405442415625004,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 776.747185621875,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0.2976699928125,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.0056500000000000005,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.05542971387500001,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 0.12400371243750002,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.0459142846875,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 21.250199568750002,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 21.250199568750002,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0.0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0.19210000000000002,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 1.6950000000000003,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.672629141625,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 61.44807442156251,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 59.13939620437501,
            "unit": "g"
          }
        },
      },
    }
  ]
}
```
## Wireframes
#### Desktop
![WFD_Wireframe](https://user-images.githubusercontent.com/83293460/121194138-76b37f00-c83c-11eb-95b5-7aa5a6bb8ac0.png)
#### Mobile
![WFD_MobileWireframe](https://user-images.githubusercontent.com/83293460/121207526-59d07900-c847-11eb-9b5a-c93afb5d6662.png)
## MVP/PostMVP
### MVP
- Axios call on Edamam API
- Display recipe results and accompanying nutritional facts and picture on page
- Clear previous results upon secondary search
### PostMVP 
- Calculate nutritional facts for a single serving
- Filter according to Diet and Health Labels
- Allow excluding ingredients in search results
## Priority Matrix
![Priority Matrix](https://user-images.githubusercontent.com/83293460/121194016-5683c000-c83c-11eb-924b-617398745b37.png)
## Daily EOD Goals
| Jun 8| Jun 9 | Jun 10 | Jun 11 | Jun 14 |
| --- | --- | --- | --- | --- |
| Get Project Approved | Link API Results | MVP | Deploy | Present |
| Complete Base HTML & CSS | Complete Results CSS | Add Filter Options | |
| | | Add single serving calculator | |
## Timeframes
| Component | Priority | Estimated Time | Actual Time |
| --- | --- |  --- | --- |
| Initial HTML setup | H | 2hrs| 1hr |
| CSS for basic layout | M | 3hrs| 3hr |
| Axios set up | H | 3hrs| 2hr 15min |
| Render results | H | 3hrs| 2hr |
| CSS for results | H | 3hrs| 4hr 30min |
| Media query | H | 3hrs| 3hr 15min |
| General Research aka Known Unknowns | M | 2hrs| 2hrs |
| Unknown Unknowns | H | 3hrs | 30min |
| Debugging | H | 3hrs| 1hr 30min |
| Other JS | L | 3hrs| 2hr |
| Deploy | H | | 30min |
| MVP Total |  | 28hrs| 22hr 30min |
| (Optional) Single Serving Calculator | L | 1hr | |
| (Optional) Filters/Labels JS | L | 3hrs | 
| (Optional) Filters/Labels CSS | L | 3hrs | |
| PMVP Total |  | 35hrs|  | 

