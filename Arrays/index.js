
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

var arr = [1,2,3,4,5]

//for of loop

 for (var value of arr) {
  console.log(value)
}

//forEach method

var valueFromForeach = arr.forEach((v, i) => {
  console.log(v, i)
  // return 100
})

console.log(valueFromForeach)

var valueFrommap = arr.map((v) => {
  return v
})

console.log(valueFrommap)







