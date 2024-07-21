
// function eventFunction(){
//     console.log('I have clicked on the document');
// }


// document.addEventListener('click',eventFunction );
// document.removeEventListener('click', eventFunction);

// const content= document.querySelector('#wrapper');

// content.addEventListener('click', function(babbar){
//     console.log(babbar);
// });

// let links= document.querySelectorAll('a');
// let thirdLink= links[2];

// thirdLink.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log('maza aaya, accha laga');
// });

// let myDiv= document.createElement('div');

// function paraStatus(){
//     console.log('Para' + event.target.textContent);
// }
// myDiv.addEventListener('click', paraStatus );

// for(let i=1; i<=100; i++){
//     let newElement= document.createElement('p');
//     newElement.textContent='This is a para'+i;


//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

let element= document.querySelector('#wrapper');

element.addEventListener('click', function(){
if(event.target.nodeName==='SPAN'){
    console.log('span pr click kiya hei'+ event.target.textContent)
}});