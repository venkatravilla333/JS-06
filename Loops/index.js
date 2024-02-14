

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
  address: 'Mumbai'
}


console.log(obj)

var iterableObj = [1,2,3,4,5]

// var iteratorObj = iterableObj[Symbol.iterator]()

// console.log(iteratorObj.next())
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())

for (var x of iterableObj) {
  console.log(x)
}