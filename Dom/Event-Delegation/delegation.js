var parent = document.getElementById('parent')
console.log(parent)


function tableClick(e) {
  console.log('click')
  console.log(e.target)
}

parent.addEventListener('click', tableClick)