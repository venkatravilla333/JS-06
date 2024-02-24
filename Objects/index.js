

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

// var lodash = require('lodash')



// var obj1 = {
//   name: 'Sachin',
//   address: { road: 101 },
//   play: function () {
//     console.log('Play')
//   }
// }

// var obj2 = obj1 //normal copy

// var obj2 = Object.assign({}, obj1) //shallow copy
// var obj2 = {...obj1} //shallow copy

// var obj2 = JSON.parse(JSON.stringify(obj1)) //deep copy
// var obj2 = lodash.cloneDeep(obj1) //deep copy

// var obj2 = Object.assign({}, obj1) //shallow copy es-5
// var obj2 = {...obj1} //shallow copy es-6 spread operator
// console.log(obj1===obj2)

// obj2.name = 'kohli'
// obj2.address.road = 201
// console.log(obj1)
// console.log(obj2)

// console.log(obj1.name === obj2.name)
// console.log(obj1.address === obj2.address)
// obj2.name = 'kohli'
// obj2.address.road = 201


// console.log(obj1)
// console.log(obj2)
// console.log(obj1 === obj2)


//Math object
// var x = 2
// var y = 8
// var z = 9.5
// console.log(Math.min(x,y))
// console.log(Math.max(x,y))
// console.log(Math.ceil(z))
// console.log(Math.floor(z))
// console.log(Math.round(z))
// console.log(Math.random())
// console.log(Math.random()*10)
// console.log(Math.random()*100)
// console.log(Math.pow(x, y))
// console.log(Math.sqrt(25))


//Date object

// var now = new Date()
// var date1 = new Date(2002, 11, 30, 9)
// var date2 = new Date('2020 10 10 2:30:10')
// console.log(date2)
// console.log(now)
// console.log(now.getFullYear())
// console.log(now.getDate())
// console.log(now.getDay())
// console.log(now.getMonth())
// console.log(now.getHours())
// console.log(now.getHours())
// now.setFullYear(2050)
// console.log(now)

//Template string (ES-6)

// var name = 'sachin'
   
// var age = 40

// console.log('Hi this is' + ' ' + name + ' ' + 'my age is' + ' ' + age)
// console.log(`Hi This is ${name} My age is ${age}`)


//String object

var msg = 'Hi how are you'
console.log(msg)

//length

// console.log(msg.length)

//How to remove empty space

// console.log(msg.trim().length)
// console.log(msg.trimStart().length)
// console.log(msg.trimEnd().length)

//How to eaxtract or copy specific/part of string

//slice

// var x = msg.slice()
// var x = msg.slice(0)
// var x = msg.slice(2, 6)
// var x = msg.slice(-14)

//subString

// var x = msg.substring(-3)

//subStr

// var x = msg.substr(0, 14)

//How to extract a string character

// var x = msg.charAt(1)
// var x = msg.charCodeAt(1)

//How to replace a string content

// console.log(msg.replace('you', 'me'))
// console.log(x)

//How to convert string

// var x = msg.toUpperCase()
// var y = msg.toLowerCase()
// console.log(x)
// console.log(y)

//How to add new content to end of string

// console.log(msg.concat(' sachin'))

//How to add content at staring and ending of string

// var myMsg = 'sachin'

// console.log(myMsg.padStart(10, 5))
// console.log(myMsg.padEnd(10, 10))
// console.log(myMsg.padStart(10, 'kohli'))

//How to split string content

// var x = msg.split('')
// console.log(x)

//How to find specific string
// var msg = 'Hi how are you Hi'


// console.log(msg.indexOf('Hi'))
// console.log(msg.indexOf('z'))
// console.log(msg.lastIndexOf('Hi'))
// console.log(msg.lastIndexOf('z'))
// console.log(msg.includes('Hi'))
// console.log(msg.includes('z'))
// console.log(msg.startsWith('Hi'))
// console.log(msg.endsWith('Hi'))













