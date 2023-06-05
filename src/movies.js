// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  } else {
    const totalScore = moviesArray
      .filter((movie) => movie.score)
      .map((movie) => movie.score)
      .reduce((acc, curr) => acc + curr);

    // console.log(totalScore);

    return Number((totalScore / moviesArray.length).toFixed(2));
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );

  if (dramaMovies.length === 0) {
    return 0;
  }

  const dramaScore = moviesArray
    .filter((movie) => movie.genre.includes("Drama"))
    .map((movie) => movie.score)
    .reduce((acc, curr) => acc + curr);

  //   console.log(dramaScore);

  return Number((dramaScore / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let orderedArray = moviesArray
    .map((movie) => movie)
    .sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));

  //   console.log(orderedArray);
  return orderedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let orderedArray = moviesArray
    .slice(0, 20)
    .map((movie) => movie.title)
    .sort();

  //   console.log(orderedArray);

  return orderedArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const arr = moviesArray.map((movie) => {});

  console.log(arr);
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
