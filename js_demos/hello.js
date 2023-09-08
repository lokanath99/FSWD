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

function add(a, b) {
    // console.log(a + b);
    return a + b;
}
ret = add(5, 9);
console.log(ret);
