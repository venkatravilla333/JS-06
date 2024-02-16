


// var a = 10


// function test(a) {
//   var b = 10
// }
// test(1)

// var x = function test(a) {
//   var b = 20
// };
 
// x(2)

// var y = function (a) {
// var b = 30
// };
 
// y(3)

// var z = (a) => {
//   var b = 40
// };

// z(4)


// param vs arguments and default param

// function test(a, b, c = 3) {
//   var x = 10
//  console.log(a)
//  console.log(b)
//  console.log(c)
//  console.log(x)
// }

// test(1, 2,)

// varying no of params / arguments

// function test(a, b, c) {
//   console.log(a,b, c)
//   console.log(arguments)
//   console.log(typeof arguments)
//   console.log(Array.isArray(arguments))
  // console.log(arguments[0])
  
//   var sum=0
//   for (var value of arguments) {
//     console.log(value)
//     sum = sum += value
//   }
//   return sum
// }
// var result = test(1, 2,)
// console.log(result)

//rest parameter


// var test = (a,b,...rest)=> {
//   console.log(a)
//   console.log(b)
//   console.log(rest)
  // var sum = 0
  // for (var value of rest) {
  //   sum = sum += value
  // }
  // return sum

//  return rest.reduce((cum, cur) => {
//     return cum+cur
//   })
// }
// var result = test(1, 2, 3, 4, 5)
// console.log(result)



function test() {
  // console.log(100)
  var x = 100
  console.log(x)
  return x
}
console.log(test())


