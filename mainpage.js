import { universities } from "./data.js";

const mainPage = document.querySelector(".main-body");
const uniSearch = document.querySelector(".uni-search");
const searchBtn = document.querySelector(".search-btn");
const typeFilter = document.querySelector(".uni-type-filter");
const FAVORITES_KEY = "favoriteUniversities";

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

function toggleFavorite(universityName) {
  const favorites = getFavorites();
  const index = favorites.indexOf(universityName);

  if (index === -1) {
    favorites.push(universityName);
  } else {
    favorites.splice(index, 1);
  }

  saveFavorites(favorites);
  return index === -1;
}

function displayUniversities(list) {
  mainPage.replaceChildren();

  if (list.length === 0) {
    mainPage.innerHTML = '<p class="empty-state">No universities found.</p>';
    return;
  }

  const favorites = getFavorites();
  list.forEach((university) => {
    const card = document.createElement("article");
    const isFavorite = favorites.includes(university.name);
    card.className = "university-card";
    card.tabIndex = 0;
    card.setAttribute("role", "link");
    card.innerHTML = `
      <p class="uni-name">${university.name}</p>
      <button class="fav ${isFavorite ? "favourites" : ""}" aria-label="${isFavorite ? "Remove from" : "Add to"} favorites">
        ${isFavorite ? "★" : "☆"}
      </button>
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
    card.querySelector(".fav").addEventListener("click", (event) => {
      event.stopPropagation();
      const nowFavorite = toggleFavorite(university.name);
      const star = card.querySelector(".fav");
      star.classList.toggle("favourites", nowFavorite);
      star.textContent = nowFavorite ? "★" : "☆";
      star.setAttribute("aria-label", `${nowFavorite ? "Remove from" : "Add to"} favorites`);
    });
    mainPage.appendChild(card);
  });
}

function applyFilters() {
  const keyword = uniSearch.value.trim().toLowerCase();
  const selectedType = typeFilter.value;
  const results = universities.filter((university) => {
    const matchesName = university.name.toLowerCase().includes(keyword);
    const matchesType = selectedType === "all" || university.type === selectedType;
    return matchesName && matchesType;
  });
  displayUniversities(results);
}

displayUniversities(universities);
searchBtn.addEventListener("click", applyFilters);
typeFilter.addEventListener("change", applyFilters);
uniSearch.addEventListener("keydown", (event) => {
  if (event.key === "Enter") applyFilters();
});
