

let person = {
  name: 'sachin',
  address: {
    road: 101,
  }
  ,
  play: function () {
    console.log('play')
  }
}

console.log(person)
// console.log( person.address1.road)

// old syntax 

// console.log(person.address1 && person.address1.road)

//optional chaining
console.log(person.address1?.road)