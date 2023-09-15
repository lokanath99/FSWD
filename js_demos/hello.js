// a = 10;
// var a = 10;
// let a = 10;
// const a = 10;
// var a = 9;
// var a = 90;
// a = 8;
// let a = 93;
// a = 56;
// console.log(a);

// operators in java script

// arthematic operators

// a = 10;
// b = 6;
// console.log( a  ); //11^2

// assignment operator
// var a = 9;
// // a = a-2;
// a **= 2;//
// console.log(a);

// comparision operators
// a = 5;
// b = 5;
// console.log(a === b);//return true if the number is eiter less than or equl to

//logical operators
// and && or || not !
// var a = 20;
// var b = 3;
// //             p        q
// console.log( !(false) );

// var a = 1;
// // a++;//post incrementation
// // ++a;//pre incrementation

// console.log( ++a );
// console.log( a );

// var a = 10.556955696366;
// var str = `hello 'lokanath"s' """  ''''' bye `;//'' "" ``
// var arr = [2,5,6,5,9,5,6];
// console.log(arr[1]);
// var t_f = false;
// var a = undefined;
// console.log(typeof(a));

// Data types
// Numeric
// String
// undifined
// Null
// bigint (not needed)
// symbol (not needed)
// Object
//    An Object(JSON)
//    arrays
//    date

// Arrays
// var num = [5, 6, 9, 85, 7, 8, 5, 22, 6, "hi", "hello", [5,6,9,3]];
// num[5] = 99;

// // num2 = num.concat([5, 6, 9, 8]);

// // num.pop(5)
// console.log(num[11][1]);

// var car = {
//     brand: "toyota",//property: val
//     modelName: "supra",
//     color: "cyan",
//     engineCylinders: "v8",
//     topSpeed: 255,
//     fuelTankCapacity: 10,
//     seatingCapacity: [2,4],
//     engine:{
//         cylinders: 8,
//         cc: 6000,
//         turbo: true
//     },
//     drive: function() {
//         console.log("wroom....");
//     }
// }

// console.log(car.engine.turbo);

// Functions
// function print(){
//     // statement
//     console.log('Hello form print...');
// }

// print()

// function add(a, b) {
//     // console.log(a + b);
//     return a + b;
// }
// ret = add(5, 9);
// console.log(ret);

// conditional statements
// let num = 5;
// if (num === 0) {
//     console.log("Hay its whole");
// } else if (num === 2) {
//     console.log("First Even num");
// } else if (num % 2 === 0) {
//     console.log("Hay its even");
// } else {
//     console.log("its ODD");
// }

// a = 3;

// switch (a) {
//     case 1:
//         console.log("its 1");
//         break;

//     case 2:
//         console.log("its 2");
//         break;

//     default:
//         console.log("its nothing "+ a);
//         break;
// }

// looping statements
// while
// i = 5;//initialise
// do {//condition checking brekout conditions
//     // statements
//     console.log("hello do while");
//     i++; //incremention of counter
// }while (i < 5);

// while (i < 5){//condition checking brekout conditions
//     // statements
//     console.log("hello just while");
//     i++; //incremention of counter
// }

let a = [5, 6, 9, 8, 4, 5, 2, 6];
// for (i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }

// for (let e in a){
//     console.log(e);
// }

// a.forEach(ele => {
//     console.log(ele);
// })

// for (let e of a){
//     console.log(e);
// // }
// a = 2;
// b = "2";

// console.log(a === b);

// var add = (a, b) => {
//     return a + b;
// };

// console.log(add(4,50));

// function displayer(some) {
//     console.log('form displayer '+some);
// }
// function yourdisplayer(num, blabla) {
//     console.log("inside your disp "+num);
//     blabla(num, num+5);
// }

// yourdisplayer(5, (a, b)=>{
//     console.log("inside anonymous func "+a+b);
// });

// function promise() {
//     return "Hello From Promise";
// }

// async function mydisplay(){
//     var Message = await promise();//5sec
//     console.log(Message);//1 sec
// }

// mydisplay()