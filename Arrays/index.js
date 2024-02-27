
//How to create an array

// var arr = [2, 3, 4,]

// console.log(arr)

//How to add new item to array

// Starting

// arr.unshift(1)

// console.log(arr)

//Ending

// arr.push(5)

// console.log(arr)

//Any where

// arr.splice(0, 0, 'Hi')
// arr.splice(arr.length, 0, 'Bye')
// arr.splice(3, 0, 'sachin')
// console.log(arr)

//How to remove array items

// var arr = [1,2,3,4,5]

//Staring

// arr.shift()

//Ending

// arr.pop()

//Any where

// arr.splice(0, 2)

//How to remove all items in array

// var arr1 = [1, 2, 3, 4, 5]

// var arr2 = arr1

// console.log(arr1)
// console.log(arr2)

// arr1.length = 0
// arr1.splice(0, arr1.length)
// arr1 = []
// console.log(arr1)
// console.log(arr2)

//How to find array elements

//Primitives

// var arr = [1, 2, 3, 4, 5]

// console.log(arr.indexOf(2))
// console.log(arr.indexOf(20))
// console.log(arr.lastIndexOf(2))
// console.log(arr.lastIndexOf(20))
// console.log(arr.includes(2))
// console.log(arr.includes(20))

//Reference

// var arr = [
//   { course: 'react' },
//   { course: 'java' },
//   { course: 'css' },
//   { course: 'react' },
// ]

// These methods does not work for reference

// console.log(arr.indexOf({ course: 'react' }));
// console.log(arr.lastIndexOf({ course: 'react' }));
// console.log(arr.includes({ course: 'react' }));


// var x = arr.find((obj) => {
//  return obj.course === 'nodejs'
// })
// var y = arr.findIndex((obj) => {
//  return obj.course === 'nodejs'
// })

// console.log(x)
// console.log(y)


//How to merge arrays into one array

// var arr1 = [1, 2, 3, 4, 5]
// var arr2 = [6, 7, 8, 9, 10]

// var combineArr = arr1.concat(arr2)
// var combineArr = [...arr1, ...arr2];
// console.log(combineArr)

//Copy

//Primitives

// var a = 10

// var b = a

// b = 20

// console.log(a)
// console.log(b)

//Reference

// var lodash = require('lodash')

// var originalarr = ['sachin', { road: 101 }, () => { }]

// var copiedArr = originalarr // Normal copy
// var copiedArr = Object.assign([], originalarr) // shallow copy
// var copiedArr = originalarr.slice() // shallow copy
// var copiedArr = [...originalarr] // shallow copy

// var copiedArr = JSON.parse(JSON.stringify(originalarr)) // deep copy
// var copiedArr = lodash.cloneDeep(originalarr) //deep copy


// copiedArr[0] = 'kohli'

// copiedArr[1].road = 201

// console.log(originalarr)
// console.log(copiedArr)

//How to iterate array

// var arr = [1,2,3,4,5]

//for of loop

//  for (var value of arr) {
//   console.log(value)
// }

//forEach method

// var valueFromForeach = arr.forEach((v, i) => {
//   console.log(v, i)
//   // return 100
// })

// console.log(valueFromForeach)

// var valueFrommap = arr.map((v) => {
//   return v
// })

// console.log(valueFrommap)


//Join method

// var arr = [1, 2, 3, 4, 5]

// console.log(arr, typeof arr)

// var x = arr.join()
// console.log(x, typeof x)

// var y = x.split(' ')

// console.log(y, typeof y)


// Testing of array items

// var arr = [1, 2, 3, 4, 5, -2]

// var someresult = arr.some((item) => {
//  return item > 0
// })

// console.log(someresult)

// var everyresult = arr.every((item) => {
//  return item > 0
// })

// console.log(everyresult)

//filter method

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(arr)

// var filterResult = arr.filter((item) => {
//   return item > 5
// })

// console.log(filterResult)

//map method

// var arr = [1, 2, 3, 4, 5]

// console.log(arr)
// var mapResult = arr.map((item) => {
//   return item*100
// })

// console.log(mapResult)


// var foreachResult = arr.forEach((item, index) => {
//   return item
// })

// console.log(foreachResult)


//reduce method

// var arr = [1, 2, 3, 4, 5]

// var reduceResult = arr.reduce((cum, cur) => {
//   // console.log(cum, cur)
//   return cum+cur
// }, 0)

// console.log(reduceResult)


//Flattening of array

// var arr = [1, 2, [3, 4, [5, 6, [7,8,9,10]]]]

// console.log(arr)

// var fallattenArr = arr.flat(Infinity)

// console.log(fallattenArr)

// var fallattenArr = []

// function flatteningArray(arr) {
//   for (var value of arr) {
//     console.log(value)
//     if(Array.isArray(value)){
//       flatteningArray(value)
//     } else {
//       fallattenArr.push(value)
//     }
//   }
// }

// flatteningArray(arr)


// console.log(fallattenArr)


//How to remove duplicates in array

// var arr = [1, 2, 3, 4, 3, 5, 6, 5, 7, 5]

// var uniqueValues = [...new Set(arr)]

// var uniqueArr = []

// function findingUniqueValues(arr) {
//   for (var value of arr) {
//     console.log(value)
//     if (uniqueArr.indexOf(value) === -1) {
//         uniqueArr.push(value)
//   }
//   }
// }

// findingUniqueValues(arr)
// console.log(uniqueArr)


//Array.from()


// function test() {
//   console.log(arguments)
//   console.log(Array.isArray(arguments))
//   var x = Array.from(arguments)
//   console.log(x, typeof x)
//   console.log(Array.isArray(x))
// }

// test(1,2,3,4,5)

//Sorting

//primitives => single value

// var arr = [7, 2, 6, 4, 9]

//primitives => double values

var arr = [70, 12, 6, 4, 19]


//ascending

// var assortResult = arr.sort()
// console.log(assortResult)
//descending
// var dssortResult = arr.reverse()

// console.log(dssortResult)

//double value

// var asresult = arr.sort((a,b) => {
//   return a-b
// })
var dsresult = arr.sort((a,b) => {
  return b-a
})

// console.log(asresult)
console.log(dsresult)














