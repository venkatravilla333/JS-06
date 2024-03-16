

// var obj = {}
// console.log(obj)

// var arr = []
// console.log(arr)

// var string = new String('hi how are you')
// console.log(string)

// function test() {
//   console.log(arguments)
// }
// test(1, 2, 3, 4, 5)

// var mymap = new Map()
// console.log(mymap)

// var myweakmap = new WeakMap()
// console.log(myweakmap)

// var myset = new Set()
// console.log(myset)

// var myweakset = new WeakSet()
// console.log(myweakset)


// var arr = [1, 2, 3, 4, 5]

// function createIteratorobj(arr) {
//   var count = 0
  
//   var next = () => {
//     if (count < arr.length) {
//       return {value: arr[count++] , done: false }
//     } else {
//       return {value: undefined, done: true}
//     }
//   }
//   return {next}
  
// }
// var iteratorObj  = createIteratorobj(arr)
// console.log(iteratorObj)
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())


// var obj = {
//   name: 'sachin',
//   age: 40,
//   color: 'red'
// }
// console.log(obj)

// obj[Symbol.iterator] = function () {
//   var count = 0
//   var arr = Object.keys(obj)

//   var next = () => {
//     if (count < arr.length) {
//       return {value: obj[arr[count++]], done: false}
//     } else {
//       return {value: undefined, done: true}
//     }
//   }
//   return {next}
// }


// for (var value of obj) {
//   console.log(value)
// }
// console.log(obj)



