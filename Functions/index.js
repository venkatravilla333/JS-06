


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
// var a = 10
// function test() {
//   console.log(a)
//    a = 20
  // console.log(a)
  // var a = 30
  // console.log(a)
// } 
// test()


//Hoisting

//all variables 


// console.log(a)
// const a = 'Hari'
// console.log(a)

// console.log(b)
// var b = 20
// console.log(b)

// console.log(c)
// var c = true
// console.log(c)

// console.log(d)
// var d 
// console.log(d)

// console.log(e)
// var e = null
// console.log(e)

// console.log(f)
// var f = { name: 'Sachin' }
// console.log(f)

// console.log(g)
// var g = [1,2,3]
// console.log(g)

// // console.log(h)
// // h()     
// let h = function test() {
//   console.log('named fun exp')
// }
// console.log(h)
// h()

// console.log(i)
// var i = function () {
//   console.log('Ananymous fun exp')
// }
// console.log(i)

// console.log(j)
// var j = () => {
//   console.log('Arrow fun exp')
// }
// console.log(j)

// //Function declaration

// console.log(dec)
// dec()

// function dec() {
//   console.log('Fun declaration')
// }

// // console.log(dec)

// dec()


// var vs let vs const 

// re-dec

// var a = 10
// console.log(a)
// var a = 20
// console.log(a)

// let a = 10
// console.log(a)
// const a = 20
// console.log(a)

//re-assign

// var a = 10
// console.log(a)
// a=20
// console.log(a)

// let a = 10
// console.log(a)
// a=20
// console.log(a)

// const a = 10
// console.log(a)
// a=20
// console.log(a)

//Initialization

// const a
// console.log(a)


// function outer() {
//   var x = 100
//   return function inner() {
//   var y = 200
//   console.log(x)
//     return function subInner() {
//    console.log(x)
//    console.log(y)
    
//   }
//   }
// }

// var inner = outer()

// var subInner = inner()

// subInner()


//This key word

// console.log(this)


// function normal() {
//   console.log(this)
// }
// normal()

// var arrow = ()=>{
//   console.log(this)
// }
// arrow()

// Object literal way 

// var obj = {
//   name: 'sachin',
//   normal: function () {
//     console.log(this)
//   return  normalInner = ()=> {
//       console.log(this)
//     }
//     // normalInner()
//   },
//   arrow: () => {
//     console.log(this)
//     var arrowInner = () => {
//       console.log(this)
//     }
//     return arrowInner
//     // arrowInner()
//   }
// }

// var normalInner = obj.normal()
// normalInner()
// normalInner.call(obj)
// normalInner.apply(obj)
// normalInner.bind(obj)()
// var arrowInner = obj.arrow()
// arrowInner()


//Factory function way

// function factory() {
//   return {
//     name: 'sachin',
//     normal: function () {
//       console.log(this)
//       function normalInner() {
//         console.log(this)
//       }
//       normalInner()
//     },
//     arrow: () => {
//       console.log(this)
//       var arrowInner = () => {
//         console.log(this)
//       }
//       arrowInner()
//     }
//   }
// }

// var obj = factory()

// obj.normal()
// obj.arrow()


//constructor function way

// function Construct() {
//   console.log(this)
//   this.name = 'sachin';
//   this.normal = function () {
//     console.log(this)
//     function normalInner() {
//       console.log(this)
//     }
//     normalInner()
//   };
//   this.arrow = () => {
//     console.log(this)
//     var arrowInner = () => {
//       console.log(this)
//     }
//     arrowInner()
//   }
// }

// var obj = new Construct()

// obj.normal()
// obj.arrow()

//Classical way

class myClass{
  constructor() {
    console.log(this)
    this.name = 'sachin';
    this.normal = function () {
      console.log(this)
    var normalInner = ()=> {
        console.log(this)
      }
      normalInner()
    };
    this.arrow = () => {
      console.log(this)
      var arrowInner = () => {
        console.log(this)
      }
      arrowInner()
    }
}
}

// console.log(typeof myClass)
var obj = new myClass()

obj.normal()
obj.arrow()


//Changing of this reference

// function play(a,b,c) {
//   console.log(this)
//   console.log(a,b,c)
// }

// var person = {
//   name: 'sachin'
// }

// play(1, 2, 3)
// play.call(person, 1,2,3)
// play.apply(person, [1, 2, 3])
// play.bind(person)(1,2,3)












