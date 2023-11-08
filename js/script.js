function getMovieDetails() {
    document.getElementById("main").style.display = "block";
    let movieName = document.getElementById("movie-name").value;
    let img = document.getElementById("poster");
    $.ajax({
        url: `https://omdbapi.com/?t=${movieName}&apikey=b28746cd`,
        method: "get",
        success: (res) => {
            console.log(res);
            img.src = res.Poster;
            document.getElementById("title").innerHTML = res.Title;
            document.getElementById("rating").innerHTML = res.imdbRating + "⭐";
            document.getElementById("year").innerHTML = res.Year;
            document.getElementById("runtime").innerHTML = res.Runtime;
            document.getElementById("plot").innerHTML = res.Plot;
            document.getElementById("actors").innerHTML = res.Actors;
            document.getElementById("director").innerHTML = res.Director;
            document.getElementById("genre").innerHTML = res.Genre;
        },
    });
}

document.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        getMovieDetails();
    }
});
