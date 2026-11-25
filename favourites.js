import { universities } from "./data.js";

const FAVORITES_KEY = "favoriteUniversities";
const favouritesPage = document.querySelector(".favourites-body");

function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
  } catch {
    return [];
  }
}

function saveFavorites(favorites) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

function displayFavorites() {
  const favoriteNames = getFavorites();
  const favoriteUniversities = universities.filter((university) => favoriteNames.includes(university.name));
  favouritesPage.replaceChildren();

  if (favoriteUniversities.length === 0) {
    favouritesPage.innerHTML = '<p class="empty-state">You have no favourite universities yet.</p>';
    return;
  }

  favoriteUniversities.forEach((university) => {
    const card = document.createElement("article");
    card.className = "university-card";
    card.innerHTML = `
      <p class="uni-name">${university.name}</p>
      <button class="fav favourites" aria-label="Remove ${university.name} from favorites">★</button>
    `;
    const openDetails = () => {
      window.location.href = `specific.html?name=${encodeURIComponent(university.name)}`;
    };
    card.addEventListener("click", openDetails);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openDetails();
      }
    });
    card.tabIndex = 0;
    card.setAttribute("role", "link");
    card.querySelector(".fav").addEventListener("click", (event) => {
      event.stopPropagation();
      const updatedFavorites = getFavorites().filter((name) => name !== university.name);
      saveFavorites(updatedFavorites);
      displayFavorites();
    });
    favouritesPage.appendChild(card);
  });
}

displayFavorites();
