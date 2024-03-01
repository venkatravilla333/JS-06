//Adding

var para = document.createElement('p')
console.log(para)
para.id = 'myid'

para.className = 'myclass'

// var paraText = document.createTextNode('This is para')

// para.appendChild(paraText)

para.innerHTML = 'This is para'


var parent = document.getElementById('parent')

parent.appendChild(para)

var myh3 = document.createElement('h3')

myh3.id = 'myh3'

myh3.innerHTML = 'This is heading 3'

// parent.appendChild(myh3)

// parent.insertBefore(myh3, para)

//Replacing

// parent.replaceChild(myh3, para)

//Remove

// para.remove()

// parent.removeChild(para)







