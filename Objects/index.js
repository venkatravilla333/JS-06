

//How to create an object

//Object literal

// var obj1 = {
//   name: 'sachin',
//   play: function () {
//     console.log('cricketor')
//   }
// }
// console.log(obj1)
// obj1.play()

// var obj2 = {
//   name: 'kohli',
//   play: function () {
//     console.log('cricketor')
//   }
// }
// console.log(obj2)
// obj2.play()

//factory function way

// function factory(name) {
//   return {
//     name: name,
//     play: function () {
//       console.log('cricketor')
//     }
//   }
// }

// var obj1 = factory('sachin')
// obj3.play()
// var obj2 = factory('kohli')
// obj4.play()


//constructor function way

// function Construct(name) {
//   this.name = name;
//   this.play = function () {
//     console.log('Cricketor')
//   }
  
// }

// var obj1 = new Construct('sachin')
// obj1.play()
// var obj2 = new Construct('kohli')
// obj2.play()


//clasical way

// class myClass{
//   constructor(name) {
//     this.name = name;
//     this.play = function () {
//       console.log('cricketor')
//     }
//   }
// }

// var obj1 = new myClass('sachin')
// obj1.play()
// var obj2 = new myClass('kohli')
// obj2.play()

//Objects are dynamic

// var obj = {
//   firstName: 'sachin',
//   lastName: 'tendulkar',
//   age: 40,
//  get fullName () {
//     console.log(`${this.firstName} ${this.lastName}`)
//   },
//  set fullName(value) {
//     var words = value.split(' ')
//     this.firstName = words[0]
//     this.lastName = words[1]
    
//  }
// }
// console.log(obj)

//How to access obj properties

// console.log(obj['firstName'])
// console.log(obj['lastName'])
// console.log(obj.age)
// console.log(obj.fullName)
// obj.fullName

//How to add new properties to obj

// obj.color = 'red'
// obj.play = function () {
//   console.log('play')
// }

// console.log(obj)

//How to update obj existing properties

// obj.age = 50

// obj.fullName = 'virat kohli'



//how to delete existing obj properties

// delete obj.color
// delete obj.play
// console.log(obj)

// How to iterate object properties


// var obj = {
//   name: 'sachin',
//   age: 40,
//   play() {
//     console.log('play')
//   }
// }
// console.log(obj)

// for in loop
// for (var key in obj) {
//   console.log(key)
// }

// Object.keys

// var keys = Object.keys(obj)
// console.log(keys)
// var values = Object.values(obj)
// console.log(values)
// var entries = Object.entries(obj)
// console.log(entries)


// Copy or clone

// Primitives

// var x = 10

// var y = x

// y = 20

// console.log(x)
// console.log(y)

//Reference (Object)

var obj1 = {
  name: 'Sachin',
  address: { road: 101 },
  play: function () {
    console.log('Play')
  }
}

// var obj2 = obj1 //normal copy
// var obj2 = Object.assign({}, obj1) //shallow copy
var obj2 = {...obj1} //shallow copy

obj2.name = 'kohli'
obj2.address.road = 201

console.log(obj1)
console.log(obj2)