// 변수 선언
const defaultGenre = "Unknown";
let movies = [];


// 영화 객체 생성 함수
function createMovie(title = "Unknown", director = "Unknown", year = 0, genre = defaultGenre) {
    return {
        title: title,
        director: director,
        year: year,
        genre: genre
    };
}


// 영화 3개 만들기
let movie1 = createMovie("The Greatest Showman", "Michael Gracey", 2017, "Drama");
let movie2 = createMovie("The Curious Case Of Benjamin Button", "David Fincher", 2009, "Fantasy");
let movie3 = createMovie("August Rush", "Kirsten Sheridan", 2007, "Drama");

//  배열에 저장
movies.push(movie1);
movies.push(movie2);
movies.push(movie3);


//  출력함수
function printMovies(movieList = []) {
    console.log("Movie Collection:");

    for (let i = 0; i < movieList.length; i++) {
        let movie = movieList[i];

        if (!movie.title) movie.title = "Unknown";
        if (!movie.director) movie.director = "Unknown";
        if (!movie.year) movie.year = 0;
        if (!movie.genre) movie.genre = defaultGenre;

        console.log(
            (i + 1) + ". Title: " + movie.title +
            ", Director: " + movie.director +
            ", Year: " + movie.year +
            ", Genre: " + movie.genre
        );
    }

    var count = movieList.length;
    console.log("Total Movies: " + count);
}



// 특정 장르 영화만 출력하는 함수 추가

function printMoviesByGenre(movieList = [], genre = defaultGenre) {
    console.log(genre + " Movies: ");

    let found = false;
    var index = 1;

    for(let i = 0; i < movieList.length; i++) {
        let movie = movieList[i];

        if(movie.genre === genre) {
            console.log(
                index + ". Title: " + movie.title +
                ", Director: " + movie.director +
                ", year: " + movie.year +
                ", Genre: " + movie.genre
            );
            index++;
            found = true;
        }
    }
    if (!found) {
        console.log("No movies found for genre: " + genre + ".");
    }
}

//  평균 연도 계산 함수 추가
const calculateAverageYear = function(movieList = []) {
    if (movieList.length === 0) {
        return 0;
    }
    var total = 0;

    for(let i = 0; i<movieList.length; i++) {
        total += movieList[i].year;
    }
    return total / movieList.length;
};

// 가장 최신 영화 찾기 (화살표 함수)

const findNewestMovie = (movieList = []) => {
    if (movieList.length === 0) {
        return null;
    }
    let newestMovie = movieList[0];
    for (let i = 1; i < movieList.length; i++) {
        if (movieList[i].year > findNewestMovie.year) {
            newestMovie = movieList[i];
        }
    }
    return newestMovie;
}


// ...rest로 여러 영화 한번에 추가하기
function addMovies(...newMovies) {
    for (let i = 0; i < newMovies.length; i++) {
        movies.push(newMovies[i]);
    }
}

printMovies(movies);

printMoviesByGenre(movies, "Drama");

console.log("Statistics:");
console.log("Average Year: " + calculateAverageYear(movies));

let newestMovie = findNewestMovie(movies);
console.log("Newest Movie: " + newestMovie.title + " (" + newestMovie.year + ")");

// 새 영화 2개 만들어서 추가해보기
let movie4 = createMovie ("La La Land", "Damien Chazelle", 2016, "Musical");
let movie5 = createMovie ("Interstellar", "Christopher Nolan", 2014, "Sci-fi");

addMovies(movie4, movie5);

console.log("Updated Movie Collection:");
printMovies(movies);




