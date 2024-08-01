// function sync(){
//     console.log('first');
// }
// sync();
// console.log('second');

//Async code
// setTimeout(function(){
//     console.log('third');
// }, 3000)
// function sync(){
// console.log('first');

// }
// sync();
// console.log('second');





//promise
// let meraPromise= new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('I am inside Promise');
//     }, 5000);
//     //resolve(2233);
//     reject(new Error('Bhaisahab error aye hei !'))
// });
// console.log('Pehla');

// let meraPromise1= new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('I am inside Promise1');
//     }, 5000);
// });
// let meraPromise2= new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('I am inside Promise2');
//     }, 3000);
// });
// console.log('pehla');

// let meraPromise1= new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('I am inside Promise1');
//     }, 5000);
//     // resolve(2233);
//     reject(new Error('Bhaisahab Error aya hei !'))
// });
// meraPromise1.then((value)=>{
//     console.log(value);
// });
// meraPromise1.catch((error)=>{
//     console.log('Recieved an error !')

// })
// console.log('pehla');

// let waadaa1= new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log("settimeout started")
//     }, 2000);
//     resolve(true);
// })

// let output=waadaa1.then(()=>{
//     let waadaa2= new Promise(function(resolve, reject){
//         setTimeout(()=>{
//             console.log('settimeout2 started')
//         }, 3000)
//         resolve("waadaa 2 resolved")
//     })
//     return waadaa2;
// })
// output.then((value)=>console.log(value));




//async function
// async function abcd(){
//     return 'babbar';
// }

// async function utility(){

//     let delhiMausam= new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("Delhi me bhot garmi hei");
//         }, 1000);
//     });
    
//     let hyderabadMausam= new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("Hyderabad is cool");
//         }, 20000);
//     });

//     let dm= await delhiMausam;
//     let hm= await hyderabadMausam;

//     return[dm, hm];

// }





//fetching an API
// async function utility(){
//     let content= await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let output= await content.json();
//     console.log(output);
// }
// utility();

//POST call
// async function helper(){
//     let options= {  method: 'POST',
//         body: JSON.stringify({
//           title: 'foo',
//           body: 'bar',
//           userId: 1,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       };
    
//       let content= await fetch('https://jsonplaceholder.typicode.com/posts', options);
//       let response= content.json();
//       return response;
// }


// async function utility(){
//     let ans= await helper();
//     console.log(ans);
// }
// utility();



//Closures
let name= 'Sher'
function init(){
    // let name="Mozilla";
    {
        let name="Pawan"
    }
    function displayName(){
        let name= 'babbar';
        console.log(name);
    }
    return displayName();
}
let a= init();
a();

