console.log('Chaliye shuru krte hei')

//object create



//factory function

// function createRectangle(len, bre){
//     return rectangle1={
//         length:len,
//         breadth:bre,
    
//         draw:function(){
//             console.log('drawing rectangle');
//         }
    
//     };

// }

// let rectangleObj1= createRectangle(5,4);

//constructor function----> Pascal Notation---> First letter of every word is capital 
//constructot function ---> initialize/Define

function Rectangle(len, bre){
    this.length=len;
    this.breadth=bre;
    this.draw=function(){
        console.log('drawing')
    }
}
//object creation using constructor function

let rectangleObj= new Rectangle(4,6);

rectangleObj.color='Yellow';
console.log(rectangleObj);

delete rectangleObj.color;
console.log(rectangleObj);

let Rectangle1= new Function(
    'length', 'breadth', 
    `this.length=len;
     this.breadth=bre;
    this.draw=function(){
        console.log('drawing');
    }`);

    //object creation using Rectangle1

    let rect= new Rectangle(2);
    console.log(rect);

// rectangle1.length;
// rectangle1.breadth;
// rectangle1.draw();


// const rectangle2={
//     length:1,
//     breadth:2,

//     draw:function(){
//         console.log('draw');
//     }

// };

// let a=10;
// let b=a;

// a++;

// console.log(a);
// console.log(b);

// let a={value:10};
// let b=a;
// a.value++;

// console.log(a.value);
// console.log(b.value);

// let a=10;
// function inc(a){
//     a++;

// }
// inc(a);

// console.log(a);

// let a={value:10};
// function inc(a){
//     a.value++
// };
// inc(a);

// console.log(a);

let rectangle={
    length:2,
    breadth:4
};

//for-in loop

// for(let key in rectangle){
//     //keys are reflected through key variable
//     //values are reflected through rectangle[key]
//     console.log(key,rectangle[key]);
// }

//for-of loop
// for(let key of Object.keys(rectangle)){
//     console.log(key)
// }

// if('length' in Rectangle){
//     console.log('Present');
// }
// else{
//     console.log('Absent');
// }

//object-clone #1
// let src={
//     a:10,
//     b:20,
//     c:30
// };

// let dest={}

// for(let key in src){
//     dest[key]=src[key];
// }
// console.log(dest);

// src.a++;
// console.log(dest);

//object-clone #2

// let src={
//     a:10,
//     b:20,
//     c:30
// };
// let src2={
//     value:25
// }

// let dest= Object.assign({}, src, src2);

// console.log(dest);

// src.a++;
// console.log(dest);

//object-clone #3
let src={
    a:10,
    b:20,
    c:30
};

let dest={...src};
console.log(dest);
src.a++;
console.log(dest);
