var parent = document.getElementById('parent')
var child = document.getElementById('child')
var subchild = document.getElementById('subchild')


function parentClick(e) {
  console.log('parent')
  console.log(e)
}
function childClick(e) {
  console.log('child')
  console.log(e)
  e.stopPropagation()
}
function subchildClick(e) {
  console.log('subchild')
  console.log(e)
  // console.log(e.target)
  // console.log(e.clientX)
  // console.log(e.clientY)
  // console.log(e.offsetX)
  // console.log(e.offsetY)
}

//Bubbling

parent.addEventListener('click', parentClick, false)
child.addEventListener('click', childClick, false)
subchild.addEventListener('click', subchildClick, false)

// capturing 
// parent.addEventListener('click', parentClick, true)
// child.addEventListener('click', childClick, true)
// subchild.addEventListener('click', subchildClick, true)