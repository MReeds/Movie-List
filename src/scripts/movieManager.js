const movieFactory = (movie) => {
    return `
    <section class="movie">
        <div>Title: ${movie.title}</div>
        <div>Date: ${movie.year}</div>
    </section>
    `
};
const renderMovies = (movies) => {
    const container = document.getElementById("movie-container");
    movies.forEach(movie => {
        const movieHtml = movieFactory(movie);
        container.innerHTML += movieHtml;
    });
};