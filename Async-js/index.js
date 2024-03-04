// console.log('one')
// console.log('two')

// setTimeout(() => {
//   console.log('timer-1')
// }, 2000)

// console.log('three')

// Promise.resolve().then(() => console.log('pr-1')).then(() => console.log('pr-2'))

// setTimeout(() => {
//   console.log('timer-2')
// }, 0)

// console.log('bye')

// callback function

// function fetchData(num, displayData ) {
//   setTimeout(() => {
//     // var data = {
//     //   pName: 'Apple',
//     //   pPrice: 100
//     // }
//    var data = num*num
//     displayData(data)
//   }, 4000)
// }

// function displayData(data, multifly) {
//   console.log(data)
//   console.log(multifly)
// }

// fetchData(2, (data1) => {
//   console.log(data1)
//   fetchData(data1, (data2) => {
//     console.log(data2)
//     fetchData(data2, (data3) => {
//       console.log(data3);
//       fetchData(data3, (data4) => {
//         console.log(data4);
//         fetchData(data4, (data5) => {
//           console.log(data5);
//           fetchData(data5, (data6) => {
//             console.log(data6);
//           });
//         });
//       });
//     });
//   })
// })


// Promises

// function fetchData(num) {
//   var Pr = new Promise((res, rej) => {
//    setTimeout(() => {
//       // var data = { pName: 'Apple', pPrice: 100 };
//       var data = num*num
//      // console.log(data);
//      res(data)
//     }, 4000);
//   })
//   return Pr
  
// }
// fetchData(2).then((data1) => {
//   console.log(data1)
//  return fetchData(data1)
// }).then((data2) => {
//   console.log(data2)
//  return fetchData(data2)
// }).then((data3) => {
//   console.log(data3)
//   return fetchData(data3)
// }).then((data4) => {
//   console.log(data4)
// })

//Async await

function fetchData(num) {
  var prResult = new Promise((res, rej) => {
    setTimeout(() => {
      // var data = { pName: 'Apple', pPrice: 100 }
      var data = num*num
      res(data)
    }, 4000)
  })
  return prResult
}



async function displayData() {
  var data1 = await fetchData(2); //4000 //async
  console.log(data1); //syc
  var data2 = await fetchData(data1); //4000 //async
  console.log(data2); //syc
  var data3 = await fetchData(data2); //4000 //async
  console.log(data3); //syc
  var data4 = await fetchData(data3); //4000 //async
  console.log(data4); //syc
}
displayData()




