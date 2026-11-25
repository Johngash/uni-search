import { universities } from "./data.js";

const detailsPage = document.querySelector(".details-page");
const FAVORITES_KEY = "favoriteUniversities";
const universityName = new URLSearchParams(window.location.search).get("name");
const university = universities.find((item) => item.name === universityName);

function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
  } catch {
    return [];
  }
}

function setFavorite(isFavorite) {
  const favorites = getFavorites().filter((name) => name !== university.name);
  if (isFavorite) favorites.push(university.name);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

if (!university) {
  detailsPage.innerHTML = `
    <section class="details-card">
      <h1>University not found</h1>
      <a href="mainpage.html">Return to universities</a>
    </section>
  `;
} else {
  const isFavorite = getFavorites().includes(university.name);
  detailsPage.innerHTML = `
    <section class="details-card">
      <div class="details-heading">
        <div>
          <p class="details-label">UNIVERSITY DETAILS</p>
          <h1>${university.name}</h1>
        </div>
        <button class="details-favorite" aria-label="${isFavorite ? "Remove from" : "Add to"} favorites">
          ${isFavorite ? "★" : "☆"}
        </button>
      </div>
      <div class="details-meta">
        <p><strong>Location</strong><span>${university.location}</span></p>
        <p><strong>Type</strong><span>${university.type}</span></p>
        <p><strong>Population</strong><span>${university.population ?? "Not available"}</span></p>
      </div>
      <h2>Courses</h2>
      <div class="course-list">
        ${university.courses.map((course) => `
          <article class="course-card">
            <h3>${course.name}</h3>
            <p>${course.description}</p>
            <small>${course.code} · ${course.duration}</small>
          </article>
        `).join("")}
      </div>
    </section>
  `;

  const favoriteButton = detailsPage.querySelector(".details-favorite");
  favoriteButton.addEventListener("click", () => {
    const nowFavorite = !getFavorites().includes(university.name);
    setFavorite(nowFavorite);
    favoriteButton.textContent = nowFavorite ? "★" : "☆";
    favoriteButton.setAttribute("aria-label", `${nowFavorite ? "Remove from" : "Add to"} favorites`);
  });
}
