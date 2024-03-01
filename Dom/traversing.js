

var targetElement = document.getElementById('target')
console.log(targetElement)
// targetElement.style.background = 'yellow'

//How to move to parent

var parentElement = targetElement.parentElement
console.log(parentElement)
parentElement.style.background = 'red'
parentElement.style.color = 'white'

//How to move to siblings

var previousSib = targetElement.previousElementSibling

previousSib.style.color = 'blue'

var nextSib = targetElement.nextElementSibling

nextSib.style.color = 'black'

//How to move to childs

var fChild = targetElement.firstElementChild

fChild.style.color = 'yellow'

var lChild = targetElement.lastElementChild

lChild.style.color = 'green'

var childs = targetElement.children

console.log(childs)

childs[0].style.background = 'black'
childs[1].style.background = 'grey'
childs[2].style.fontSize = '100px'
childs[2].style.background = 'orange'