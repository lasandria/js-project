// "use strict"; // работаем в современном режиме

// let number = 1; // можно менять переменную
// const borderLeft = 5; 
// let numberOne  = 4;

// // alert('ПРивет')

// const result = confirm('Как жизнь?');
// console.log(result);
// const answer = +prompt('Вам есть 18?', '18 мне уже');
// console.log(typeof(answer));


// const answers = [];

// answers[0] = prompt('Как ваше мя', '');
// answers[1] = prompt('Как ваше мя', '');
// answers[2] = prompt('Как ваше мя', '');


// console.log(0);

// const user = "ivan";

// alert(`hello, ${user}`);
// let incr = 10,
//     decr = 10;
// incr++;
// decr--;
// console.log (incr, decr);

// console.log(5%2, 4746%2, 8%2);




// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = prompt('На сколько оцените его?', '');




// personalMovieDB.movies[a] = b;
// console.log(personalMovieDB);

// Циклы

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


 

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    personalMovieDB.movies[a] = b;

    if (a != null && b!=null&& a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

console.log(personalMovieDB);   
