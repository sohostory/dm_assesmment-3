const colorBtn = document.querySelector("#color");
const placeBtn = document.querySelector("#place");
const ritualBtn = document.querySelector("#ritual");

const favoriteColor = () => {
  alert("My current favorite color is orange.");
};

const favoritePlace = () => {
  alert("My current favorite place is my home office.");
};

const favoriteRitual = () => {
  alert("My current favorite ritual is my 15 minute workout every morning.");
};

colorBtn.addEventListener("click", favoriteColor);
placeBtn.addEventListener("click", favoritePlace);
ritualBtn.addEventListener("click", favoriteRitual);
