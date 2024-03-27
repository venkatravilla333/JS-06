let value1 = '10.1234';


let value2 = 10.1234;

console.log(typeof value1)
// let x = parseInt(value)
let x = parseFloat(value1)
console.log(x, typeof x)

console.log(typeof value2)

let y = value2.toFixed()
// let y = value2.toString()

console.log(y, typeof y)


let jsObj = {
  name: 'sachin',
  age: 40,
  play: function () {
    
  }
}

console.log(jsObj)
let jsonObj = JSON.stringify(jsObj)
console.log(jsonObj)

let myjsObj = JSON.parse(jsonObj)

console.log(myjsObj)


let obj = {
  name: 'kohli'
}
console.log(obj)

let arr = [1, 2, 3]
console.log(arr)

