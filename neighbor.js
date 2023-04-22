const restaurantBtn = document.querySelector("#hungry");
const favoriteSection = document.querySelector("#random");

const restaurants = [
  "Highland Noodles",
  "Maharaja",
  "Velvet Taco",
  "The Assie Grind",
  "Hutchins BBQ",
];

const randomRestaurant = () => {
  let randomNum = Math.floor(Math.random() * 5);
  let recommendRestaurant = document.createElement("p");
  recommendRestaurant.textContent = `I pick ${restaurants[randomNum]} for you.`;
  favoriteSection.appendChild(recommendRestaurant);
  setTimeout(realChoice, 3000);
};

const realChoice = () => {
  let recommendRestaurant = document.createElement("p");
  recommendRestaurant.textContent = `WAIT! I changed my mind. YOU HAVE TO TRY ${restaurants[0]}.`;
  favoriteSection.appendChild(recommendRestaurant);
};

restaurantBtn.addEventListener("click", randomRestaurant);
