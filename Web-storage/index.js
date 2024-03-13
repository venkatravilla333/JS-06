


//How to store data

window.localStorage.setItem('name', 'sachin')
window.localStorage.setItem('age', 40)
window.sessionStorage.setItem('name', 'kohli')


//How to use/ get /access storage values in application

console.log(window.localStorage.getItem('name'))
console.log(window.sessionStorage.getItem('name'))


//How to delete storage values

// setTimeout(() => {
//   window.localStorage.removeItem('name')
//   window.sessionStorage.removeItem('name')
//   console.log(window.localStorage.getItem('name'))
//   console.log(window.sessionStorage.getItem('name'))
// }, 5000)

// window.localStorage.clear()

