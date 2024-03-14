

//first class function

// var x  = function fcf() {
//   return function test() {
    
//   }
// }

// x(function cb(){})

//Heigher oerder function

// function hof() {
//   return function test() {
    
//   }
// }

// x(function cb(){})


//Pure vs impure functions

// function pure(a,b,c) {
//   console.log(a+b+c)
// }

// pure(1, 2, 3)


// function impure(a,b,c) {
//   var d = Math.random() * 100
//   console.log(a+b+c+d)
// }

// impure(1,2,3)



// Recursion function

// function factorial(num) {

//   if (num <= 0) {
//     return 1
//   } else {
//     return num*factorial(num-1)
//   }
  
// }

// console.log(factorial(3))


//Function currying


// function withoutCurry(a,b,c) {
//   console.log(a+b+c)
// }

// withoutCurry(1, 2, 3)


// function withCurryA(a) {
//   return function withCurryB(b){
//     return function withCurryC(c) {
//       console.log(a+b+c)
//     }
//   }
// }

// withCurryA(1)(2)(3)



// function calculateDis(price, dis) {
//   console.log(price*dis)
// }

// calculateDis(1000, 0.1)
// calculateDis(1000, 0.2)
// calculateDis(1000, 0.3)
// calculateDis(1000, 0.4)
// calculateDis(1000, 0.5)


// function calprice(price) {
//   return function caldiscount(dis) {
//     console.log(price*dis)
//   }

// }

// var x = calprice(1000)
// console.log(caldiscount)
// caldiscount(.1)
// caldiscount(.2)
// caldiscount(.3)
// caldiscount(.4)
// caldiscount(.5)


//IIFE


// var b = 200;

// (() => {
//   var a = 100
//   console.log(a)
// })()

// console.log(b)
// console.log(a)