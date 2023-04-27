const portionInput = document.querySelector('.portion-input')
const ingredientsList = document.querySelector('.Ingredients') 
const items = document.querySelectorAll(".Ingredients li");
const reviewInput = document.querySelector('input[name="user-review"]');
const reviewList = document.querySelector('.submitted-user-reviews');

const pageTitle = document.title;
let portionsize;
let randomName;

const firstNames = [
  "Sophia", "Liam", "Olivia", "Noah", "Emma", "Jackson","Ava",  "Lucas",  "Isabella",  "Aiden",  
  "Mia", "Caden",  "Charlotte",  "Grayson",  "Amelia",  "Elijah",  "Harper",  "Logan",  "Evelyn",
  "Carter",  "Abigail",  "Mason",  "Emily",  "Ethan",  "Avery",  "Landon",  "Sofia",  "Oliver",
  "Madison",  "Levi"
];
const lastNames = ["Smith", "Johnson", "Brown", "Taylor", "Miller", "Davis", "Garcia", "Rodriguez",
 "Martinez", "Hernandez", "Lopez", "Gonzalez", "Perez", "Sanchez", "Ramirez", "Flores", "Rivera", 
 "Torres", "Gomez", "Reyes", "Washington", "Lee", "Chen", "Wang", "Liu", "Singh", "Kim", "Nguyen",
  "Ali", "Khan"
];

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
      generateRandomName()
      event.preventDefault();
      const reviewText = event.target.value.trim();
      if (reviewText) { 
        const newReview = document.createElement('li');
        newReview.textContent = reviewText + ' -'+randomName;
        reviewList.appendChild(newReview);
        event.target.value = '';
      }
    }
});

function redirectToNewPage(url) {
  window.location.href = url;
}



function generateRandomName(){
  const randomIndex = Math.floor(Math.random() * lastNames.length);
  const randomLastName = lastNames[randomIndex];
  const randomFirstName = firstNames[randomIndex];
  
  console.log(randomFirstName +' '+ randomLastName);
  randomName = randomFirstName +' '+ randomLastName 
}
