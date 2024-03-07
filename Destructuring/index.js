
//Object

var obj = {
  name: 'sachin',
  age: 40,
  color: 'red',
  play: function () {
    console.log('play')
  }
}

//without destructuring

console.log(obj)
console.log(obj.name)
console.log(obj.age)
console.log(obj.color)
obj.play()

//with destructuring

var { name, age, color, play } = obj

console.log(name)
console.log(age)
console.log(color)
play()



//Arrays

var array = ['sachin', 'kohli', 40, 'rahul', false]

console.log(array)

//without destructuring

console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])

//with destructuring

var [value1, value2, value3, value4, value5] = array

console.log(value1)
console.log(value2)
console.log(value3)
console.log(value4)
console.log(value5)



// combination of object with array

var person = {
  name: 'sachin',
  age: 40,
  address: { road: 201 },
  properties: [{cars: ['bmw', 'ferary', 'audi'] }, {bikes: ['pulsar', 'rayal enfield']}, {cash: 1000000}]
}

console.log(person)


//without destructuring

console.log(person.name)
console.log(person.age)
console.log(person.address.road)
console.log(person.properties[0].cars[0])
console.log(person.properties[0].cars[1])
console.log(person.properties[0].cars[2])
console.log(person.properties[1].bikes[0])
console.log(person.properties[1].bikes[1])
console.log(person.properties[2].cash)

var { name, age, address: { road }, properties: [{ cars: [c1, c2, c3] }, { bikes: [b1, b2] }, { cash }] } = person

console.log(name)
console.log(age)
console.log(road)
console.log(c1)
console.log(c2)
console.log(c3)
console.log(b1)
console.log(b2)
console.log(cash)

//with destructuring

// var { name, age, address, properties } = person

// var { road } = address

// var [obj1, obj2, obj3] = properties

// var { cars } = obj1

// var { bikes } = obj2

// var { cash } = obj3

// var [c1, c2, c3] = cars

// console.log(c1)

// console.log(c2)

// console.log(c3)

// var [b1, b2] = bikes

// console.log(b1)

// console.log(b2)

// console.log(cash)

// console.log(name)

// console.log(age)

// console.log(road)





