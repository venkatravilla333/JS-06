

var button = document.createElement('button')
// console.log(button)

button.id = 'btn'

button.innerHTML = 'click'

var parent = document.getElementById('parent')

parent.appendChild(button)

//How to attach events to dom elements

function btnClick(event) {
  console.log('btn clicked')
  console.log(event)
}

button.addEventListener('click', btnClick )