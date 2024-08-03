const movies = {
  tollywood: [
      {title: 'Movie T1', reviews: 'Good', cast: 'Actor T1, Actress T1', rating: 4.5, release_year: 2021},
      {title: 'Movie T2', reviews: 'Average', cast: 'Actor T2, Actress T2', rating: 3.0, release_year: 2020},
  ],
  bollywood: [
      {title: 'Movie B1', reviews: 'Excellent', cast: 'Actor B1, Actress B1', rating: 4.8, release_year: 2019},
      {title: 'Movie B2', reviews: 'Good', cast: 'Actor B2, Actress B2', rating: 4.0, release_year: 2021},
  ],
  hollywood: [
      {title: 'Movie H1', reviews: 'Fantastic', cast: 'Actor H1, Actress H1', rating: 4.7, release_year: 2022},
      {title: 'Movie H2', reviews: 'Very Good', cast: 'Actor H2, Actress H2', rating: 4.2, release_year: 2021},
  ],
};

function loadMovies(industry) {
  const moviesSection = document.getElementById('movies-section');
  const movieList = document.createElement('ul');

  movies[industry].forEach(movie => {
      const movieItem = document.createElement('li');
      const movieLink = document.createElement('a');
      movieLink.textContent = `${movie.title} (${movie.release_year})`;
      movieLink.onclick = () => showMovieDetails(industry, movie.title);
      movieItem.appendChild(movieLink);
      movieList.appendChild(movieItem);
  });

  moviesSection.appendChild(movieList);
}

function showMovieDetails(industry, title) {
  const movie = movies[industry].find(movie => movie.title === title);

  document.getElementById('movie-title').textContent = movie.title;
  document.getElementById('movie-release-year').textContent = movie.release_year;
  document.getElementById('movie-cast').textContent = movie.cast;
  document.getElementById('movie-rating').textContent = movie.rating;
  document.getElementById('movie-reviews').textContent = movie.reviews;

  document.getElementById('movieModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('movieModal').style.display = 'none';
}

function bookTicket() {
  alert("Redirecting to ticket booking portal...");
  // You can add actual redirection to a booking portal here
}
