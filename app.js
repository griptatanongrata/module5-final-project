let allMovies = [];

async function onSearchChange(event) {
  const Title = event.target.value;
  renderMovies(Title);
}

async function renderMovies(Title) {
  if (!Title) return;

  const movieListEl = document.querySelector(`.movie-list`);
  const loadingEl = document.querySelector(".loading-state");

  loadingEl.classList.add("show");
  movieListEl.innerHTML = "";

  try {
    const movies = await fetch(
      `https://www.omdbapi.com/?apikey=[apikey]&s=${Title}`,
    );

    const movieData = await movies.json();

    if (!movieData.Search) {
      movieListEl.innerHTML = "<p>No movies found.<p>";
      return;
    }

    allMovies = movieData.Search;
    displayMovies(allMovies);
  } catch (error) {
    console.error(error);
  } finally {
    loadingEl.classList.remove("show");
  }
}

function displayMovies(movies) {
  const movieListEl = document.querySelector(`.movie-list`);
  movieListEl.innerHTML = movieData.Search.map((movie) =>
    movieHTML(movie),
  ).join("");
}

function filterByLetter(event) {
  const selectedLetter = event.target.value;
  const filteredMovies = allMovies.filter((movie) =>
    movie.Title.startsWith(selectedLetter),
  );
  displayMovies(filteredMovies);
}

function movieHTML(movie) {
  return `<div class="movie-card">
      <figure class="movie-card--container">
      <img class="movie-poster" src="${movie.Poster}" alt="${movie.Title}"></figure>
      <div class="movie-title">${movie.Title}</div>
      <div class="movie-year">${movie.Year}</div>
      <div class="movie-id">${movie.imdbID}</div>
      </div>
      `;
}

function openMenu() {
  document.body.classList += " menu-open";
}

function closeMenu() {
  document.body.classList.remove("menu-open");
}
