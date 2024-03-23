// console.log(window)

// window.setTimeout(()=>{}, 2000)
// window.setInterval(()=>{}, 2000)
// window.clearTimeout()
// window.clearInterval()

// window.alert('hello')
// let value = window.prompt('enter name')

// if (value) {
//   console.log(value)
// } else {
//   console.log(value)
// }

// let value = window.confirm()

// if (value) {
//   console.log(value)
// } else {
//   console.log(value)
// }


// var openbtn = window.document.getElementById('open')
// var closebtn = window.document.getElementById('close')
// var movebtn = window.document.getElementById('move')
// var resizebtn = window.document.getElementById('resize')

// var mywindow

// function openWindow() {
//  mywindow = window.open('', 'hello', 'width=200,height=100');
// }

// function closeWindow() {
//   mywindow.close();
// }

// function moveWindow() {
//  return mywindow.moveTo(600, 500);
// }

// function resizeWindow() {
//  return mywindow.resizeTo(600,100);
// }

// openbtn.addEventListener('click', openWindow)
// closebtn.addEventListener('click', closeWindow)
// movebtn.addEventListener('click', moveWindow)
// resizebtn.addEventListener('click', resizeWindow)


//window obj properties
console.log(window.innerWidth)
console.log(window.innerHeight)

//screen object properties
console.log(window.screen.width)
console.log(window.screen.height)

//Navigator object

// console.log(window.navigator.appName)
// console.log(window.navigator.platform)
// console.log(window.navigator.language)
// console.log(window.navigator.onLine)

//Screen object

// console.log(window.screen.width)
// console.log(window.screen.height)

//Location object

// console.log(window.location.href)
// console.log(window.location.hostname)
// console.log(window.location.pathname)
// console.log(window.location.protocol)
// console.log(window.location.port)

//History object

console.log(window.history)


let forwardbtn = document.getElementById('forward')
console.log(forwardbtn)

function forwardFun() {
//  console.log(window.history.length)
 console.log(window.history.forward('./forward.html'))
}

// forwardbtn.addEventListener('click', forwardFun)

let backBtn = document.getElementById('back')

function backFun() {
 console.log(window.history.back('./bom.html'))
}

backBtn.addEventListener('click', backFun)