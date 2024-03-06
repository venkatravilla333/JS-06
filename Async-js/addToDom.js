


// function apiCall() {
//   var res = fetch('https://jsonplaceholder.typicode.com/todos')
//   return res
// }

// apiCall().then(function convert(res) {
//     return res.json();
//   }).then(function displayData(data) {
//     console.log(data);
//   });




fetch('https://jsonplaceholder.typicode.com/todos')
  .then((res) => {
    return res.json() 
  }).then((data) => {
    // console.log(data)
    var todos = data
    console.log(todos)
    var rows  = ''

    todos.forEach((todo) => {
      return rows += `<tr>
      <td>${todo.id}</td>
      <td>${todo.userId}</td>
      <td>${todo.title}</td>
      <td>${todo.completed}</td>
      </tr>`
    });
  document.getElementById('tablerows').innerHTML = rows;
   

    

})





