

// normal function

function normal() {
  
  return 100
  return 200
  console.log('hello')
  
}

// console.log(normal())

//gen function

function* genFuc() {
  try {
    console.log('hello')
    yield 100
    
  }
  finally {
    console.log('bye')
    yield 200
    
  }
}

let genObj = genFuc()
console.log(genObj)
console.log(genObj.next())
console.log(genObj.return())
console.log(genObj.next())

// for (var value of genObj) {
//   console.log(value)
// }