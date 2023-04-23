const portionInput = document.querySelector('.portion-input')
const ingredientsList = document.querySelector('.Ingredients') 
const items = document.querySelectorAll(".Ingredients li");
const reviewInput = document.querySelector('input[name="user-review"]');
const reviewList = document.querySelector('.submitted-user-reviews');


function redirectToNewPage() {
    window.location.href = 'landningssida.html';
}

portionInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    this.blur();
  }
});


function updateIngredients() {
  let portions = portionInput.value;
  const additionalText = [
    ` ${(250 / 24 * portions).toFixed(2)}g`,
    ` ${(2 / 24 * portions).toFixed(2)}dl`,
    ` ${(4 / 24 * portions).toFixed(2)}st`,
    ` ${(4.5 / 24 * portions).toFixed(2)}dl`,
    ` ${(0.5 / 24 * portions).toFixed(2)}tsk`,
    ` ${(2 / 24 * portions).toFixed(2)}krm`,
    ` ${(3 / 24 * portions).toFixed(2)}dl`,
    ` ${(0.5 / 24 * portions).toFixed(2)}tsk`,
  ];

  items.forEach((item, index) => {
    item.textContent = item.textContent.split(':')[0] + ': ' + additionalText[index];
  });
}

portionInput.addEventListener('input', updateIngredients);

updateIngredients();


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
