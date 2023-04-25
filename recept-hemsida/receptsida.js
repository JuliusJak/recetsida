const portionInput = document.querySelector('.portion-input')
const ingredientsList = document.querySelector('.Ingredients') 
const items = document.querySelectorAll(".Ingredients li");
const reviewInput = document.querySelector('input[name="user-review"]');
const reviewList = document.querySelector('.submitted-user-reviews');

const pageTitle = document.title;
let portionsize;

console.log(portionsize)
function redirectToMainPage() {
    window.location.href = 'landningssida.html';
}

portionInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    this.blur();
  }
});


function updateIngredients() {
  let portions = portionInput.value;
  let ingredients;

  if (pageTitle.includes('brownie')) {
    portionsize = 24;
    ingredients = browni = [
      `Svenskt smör ${(250 / portionsize * portions).toFixed(1)}g`,
      `Kakao ${(2 / portionsize * portions).toFixed(1)}dl`,
      `Ägg ${(4 / portionsize * portions).toFixed(1)}st`,
      `Strösocker ${(4.5 / portionsize * portions).toFixed(1)}dl`,
      `Salt ${(0.5 / portionsize * portionsize).toFixed(1)}tsk`,
      `Vaniljpulver ${(2 / portionsize  * portionsize).toFixed(1)}krm`,
      `Vetemjöl ${(3 / portionsize * portions).toFixed(1)}dl`,
      `Bakpulver ${(0.5 / portionsize * portionsize).toFixed(1)}tsk`
    ];
    
  } else if (pageTitle.includes('kladdkaka')) {
    portionsize = 12;
    ingredients =  kladdkaka = [
      `Svenskt smör ${(100 / portionsize * portions).toFixed(1)}g`,
      `Kakao ${(3 / portionsize * portions).toFixed(1)}msk`,
      `Ägg ${(2 / portionsize * portions).toFixed(1)}st`,
      `Strösocker ${(2.5 / portionsize * portions).toFixed(1)}dl`,
      `Vetemjöl ${(1 / portionsize * portions).toFixed(1)}dl`,
      `Vaniljsocker ${(1 / portionsize * portions).toFixed(1)}tsk`
    ];
  
  } else if (pageTitle.includes('hallongrotta')) {
    portionsize = 22;
    ingredients = hallongrotta = [
      `Svenskt smör ${(200 / portionsize * portions).toFixed(1)}g`,
      `Strösocker ${(1 / portionsize * portions).toFixed(1)}dl`,
      `Vaniljsocker ${(2 / portionsize  * portionsize).toFixed(1)}tsk`,
      `Vetemjöl ${(4.5 / portionsize * portions).toFixed(1)}dl`,
      `Bakpulver ${(1 / portionsize * portionsize).toFixed(1)}tsk`,
      `Fast hallonsylt ${(1 / portionsize * portionsize).toFixed(1)}dl`
    ];
  
  }

  ingredientsList.innerHTML = '';

  ingredients.forEach(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    ingredientsList.appendChild(li);
  });
}


portionInput.addEventListener('input', updateIngredients);
updateIngredients()

reviewInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const reviewText = event.target.value.trim();
      if (reviewText) { 
        const newReview = document.createElement('li');
        newReview.textContent = reviewText;
        reviewList.appendChild(newReview);
        event.target.value = '';
      }
    }
});

function redirectToNewPage(url) {
  window.location.href = url;
}