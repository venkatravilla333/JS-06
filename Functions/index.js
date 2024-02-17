


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
//   console.log(arguments[0])
  
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



// function test() {
  // console.log(100)
//   var x = 100
//   console.log(x)
//   return x
// }
// console.log(test())

//6 Scope

//Global storage
// var a = 1
// let b = 2
// const c = 3

//Access in Global
// console.log(a)
// console.log(b)
// console.log(c)


// function test() {

  //Storage in functional
  // var d = 4
  // let e = 5
  // const f =6
  // Access in functional scope 
  // console.log(a)
  // console.log(b)
  // console.log(c)
  // console.log(d)
  // console.log(e)
  // console.log(f)

  // if (true) {
    //storage in block
    // var g = 7
    // let h = 8
    // const i = 9

    //Access in block
    // console.log(a);
    // console.log(b);
    // console.log(c);
    // console.log(d);
    // console.log(e);
    // console.log(f);
    // console.log(g)
    // console.log(h)
    // console.log(i)
  // }
  //  console.log(g);
  //  console.log(h);
  //  console.log(i);
// }
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);
// console.log(h);
// console.log(i);

// test()

// console.log(a)
// let a = 10
// console.log(a)
// console.log(a)
// let a = 10

function test() {
  console.log(a)
  let a = 100
  console.log(a)
} 
test()












