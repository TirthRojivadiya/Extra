// console.log('Hello Jee');
// let lastName= 'Babbar';

// let firstName= new String('Love');

// let message= `Hello ${lastName},
// Thanks for the Opportunity

// Regards,
// Babbar`;
// console.log(message)


// let words= message.split('');
// console.log(words)


// let date= new Date();

// let date2= new Date('20 june 1998 07:15 ');

// let date3= new Date(1998, 5, 20, 7);
// console.log(date3);

// date3.setFullYear(1947);
// console.log(date3);

// let numbers = [1,4,5,7];

// //end--> push
// //start--> unshift
// //between--> splice

// //searching
// console.log(numbers);

// console.log(numbers.indexOf(4));

//we want to check if a umber exist in an array

// if(numbers.indexOf(4)!=-1){
//     console.log("present");

//     console.log(numbers.includes(7));
//     console.log(numbers.indexOf(4,2));
// }

// let courses=[
//     {no:1, naam:'Love'},
//     {no:2, naam:'Rahul'}
// ];

// console.log(courses);

//It will not work because it is an object
// console.log(courses.indexOf({no:1, naam:'Love'}));
// console.log(courses.includes({no:1, naam:'Love'}));

// let course= courses.find(function(course){
//     return course.naam==='Love';
// });

// //using arrow function
// let course1= courses.find(course1=> course.naam==='Love');

// console.log(course); 
// console.log(course1); 

//removing elements from array
// let numbers=[1,2,3,4,5,6,7];

// numbers.pop();
// console.log(numbers);

// numbers.shift();
// console.log(numbers);

// numbers.splice(2, 1);
// console.log(numbers);

//deleting all elements of an array

// let numbers= [1,2,3,4,5];
// let numbers2= numbers

// numbers=[];

// numbers.length=0;

// numbers.splice(0, numbers.length);

//using while loop
// while(numbers.length>0){
//     numbers.pop()
// };


// console.log(numbers);
// console.log(numbers2);

//comibining two arrays

// let first=[1,2,3];
// let second=[4,5,6];

// let combined= first.concat(second);
// console.log(combined);

// //slicing arrays
// //slice method includes n-1 elements
// let sliced= combined.slice(2,4);
// console.log(sliced);

// let marks=[10,20,30,40,50,60,70,80];
// //this is called full slicing
// let sliced1= marks.slice();
// // let sliced1= marks.slice(2)
// // let sliced1= marks.slice(2,6);
// console.log(sliced1);

//spread operator
// let first=[1,2,3];
// let second=[4,5,6];

// let combined= [...first,'a',false, ...second,'b', true];
// console.log(combined);

// //coppying elements using spread operator

// let another=[...combined]
// console.log(another)

//iterating an array

// let arr= [10,20,30,40,50];

// //for-of loop
// for(let value of arr){
//     console.log(value);
// }

// //for-each loop
// arr.forEach(function(numbers){
//     console.log(number)
// });

// arr.forEach(number=> console.log(number));

//joining an array

// let numbers=[10,20,30,40,50];
// const joined= numbers.join(',');

// console.log(joined)

//splitting an array

// let message='This is my first message';
// let parts= message.split(' ');
// console.log(parts)

// let joined= parts.join('_');
// console.log(joined);

//sorting an array

// let numbers=[40,20,10,30]
// numbers.sort();

// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

//filtering an array
// let numbers=[1,2,-1,-4];

// let filtered= numbers.filter(function(value){
//     return value>=0;
// });

// let filter= numbers.filter(value=> value>=0);

// console.log(filtered);

//mapping an array
// let numbers=[7,8,9,10];

// let items= numbers.map(function(value){
//     return 'student_no'+value;
// });
// console.log(items);

// let item= numbers.map(value=> 'student_no'+value);
// console.log(item);

//mapping the objects
let numbers=[1,2,-6,-9];
let filtered= numbers.filter(value=> value>=0);

let items= filtered.map(function(num){
    return {value:num};
});
console.log(items);