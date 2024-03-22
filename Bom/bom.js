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


var openbtn = window.document.getElementById('open')
var closebtn = window.document.getElementById('close')
var movebtn = window.document.getElementById('move')
var resizebtn = window.document.getElementById('resize')

var mywindow

function openWindow() {
 mywindow = window.open('', 'hello', 'width=200,height=100');
}

function closeWindow() {
  mywindow.close();
}

function moveWindow() {
 return mywindow.moveTo(600, 500);
}

function resizeWindow() {
 return mywindow.resizeTo(600,100);
}

openbtn.addEventListener('click', openWindow)
closebtn.addEventListener('click', closeWindow)
movebtn.addEventListener('click', moveWindow)
resizebtn.addEventListener('click', resizeWindow)


//window obj properties
// console.log(window.innerWidth)
// console.log(window.innerHeight)

//screen object properties
// console.log(window.screen.width)
// console.log(window.screen.height)