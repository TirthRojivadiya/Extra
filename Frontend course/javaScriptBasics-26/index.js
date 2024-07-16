// console.log("kya Haal");

//function declaration
// function run(){
//     console.log('running');
// }

//function call or invoke

// run();

// named function assignment

// let stand= function walk(){
//     console.log('walking');
// };
// stand();

// let jump= stand;
// jump();

// //annonymous function assignment

// let stand2= function(){
//     console.log('walking');
// };
// stand2();

// let x=1;
// x='a';

// console.log(x);

// function sum(){
//     let total=0;
//     for(let value of arguments)
//         total= total+value;
//     return total;
// };
// // console.log(sum(1,2));
// // console.log(sum(1));
// // console.log(sum());
// // console.log(sum(1,2,3,4,5,6));

// let ans= sum(1,2,3,4,5,6);
// console.log(ans);

//Rest Operator

// function sum(a, b, ...args){
//     console.log(args);
// }

// sum(1,2,3,4,5,6);

//default parameter
function interest(p,r=6,y=10){
    return p*r*y/100;
};
//GETTER SETTER

// getter=> acess properties
// setter => change or mutate properties

// console.log(interest(1000,undefined, 8))

// let person= {
//     fName:'Love',
//     lName:'Babbar',

//     get fullName(){
//         return `${person.fName} ${person.lName}`
//     },
//     set fullName(value){
//         if(typeof value != String){
//             throw new Error("You have not sent a string");
//         }
//         let parts= value.split(' ');
//         this.fName= parts[0];
//         this.lName= parts[1];

//     }

// }
// // console.log(person);


// // this is a read only function
// try{
// person.fullName=undefined;
// }
// catch(e){
//     alert(e);
// }

// console.log(person.fullName);

// {
//     var a=5;
  
// }
// console.log(a);

function a(){
    const a=5;
}

function b(){
    const a=5;
}