

//Conditonal loops

// 1) for loop

// var name = 'Sachin'

// for (var num = 1; num <= 100; num++){
//   if (num === 50) continue
//   console.log(num, name)
// }

//2) while loop


// var num = 1

// while (num <= 100) {
//   if (num === 50) {
//     num++
//     continue
//   }
//   console.log(num, name)
//   num++
// }


//3) do while

// var num = 1

// do {
//    if (num === 50) {
//     num++
//     continue
//   }
//   console.log(num)
//   num++
// }while(num<=100)


// Un conditional loops

var obj = {
  name: 'Sachin',
  age: 40,
  state: 'Mumbai',

}
// console.log(obj)
// console.log(obj.name)
// console.log(obj.age)
// console.log(obj.state)

// for (var key in obj) {
//   console.log(key, obj[key])
// }

var arr = [1, 2, 3, 4, 5]
// console.log(arr)

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

// for (var index in arr) {
//   console.log(index, arr[index])
// }

// var iteratorObj = arr[Symbol.iterator]()
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())


// for (var value of arr) {
//   console.log(value)
// }

