// "use strict"; // работаем в современном режиме

// let number = 1; // можно менять переменную
// const borderLeft = 5; //нельзя менять переменную. но прямых констант в джс нет
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


// if (4 == 9) {
//     console.log(Ok);
// } else {
//     console.log('Error')
// }

// const num = +prompt('Цифра', '')

// if (num < 49) {
//     alert('Error');
// } else if (num > 50) {
//     alert('много');
// }
//   else {
//     alert('Вы -гений!');
// }

//Циклы

// let num = 50;

// while( num<=60 ) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while(num<55);

// let num = 50;
// for (let i = 1; i<3; i++) {
//     console.log(num);
//     num++;
// }


// for (let i = 1; i<10; i++) {
//     if (i===6) {
//         break;
//     }
//     console.log(i);
// }

for (let i = 1; i<10; i++) {
    if (i===6) {
        continue;
    }
    console.log(i);
}