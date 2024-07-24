// // adding 100 para
// const t1= performance.now();

// for(let i=1; i<100; i++){
//     let newElement= document.createElement('p');
//     newElement.textContent= 'This is para'+i;

//     document.body.appendChild(newElement);
// }
// const t2= performance.now();
// console.log("This took"+(t2-t1)+"ms");

// //optimizing a bit
// const t3= performance.now();
// let myDiv= document.createElement('div');

// for(let i=1; i<=100; i++){
//     let element= document.createElement('p');
//     element.textContent='This is a Para'+i;

//     myDiv.appendChild(element);
// }
// document.body.appendChild(myDiv);

// const t4= performance.now();
// console.log("This took"+(t4-t3)+"ms");

// docuemnt fragment which has 1 reflow and 1 repaint
// let fragment= document.createDocumentFragment();
// for(let i=1; i<100; i++){
//     let newElement= document.createElement('p');
//     newElement.textContent= 'This is para'+i;

//     fragment.appendChild(newElement);
// }
// document.body.appendChild(fragment); //1 reflow 1 repaint


// single-threading

// function addPara(){
//     let para= document.createElement('p');
//     para.textContent="Js is Single";
//     document.body.appendChild(para);
// }

// function appendNewMessage(){
//     let para= document.createElement('p');
//     para.textContent="Kya haal Chal";
//     document.body.appendChild(para);
// }
// addPara();
// appendNewMessage();

// document.addEventListener('click', function(){
//     console.log('Hello Didi');
// });