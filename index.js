// // for loop
// let arr = ["noor","iqra","bilal","hani","rubab"]
// for(let i = 0; i<=4;i++){
//     console.log(arr[i]); 
// }

// //function + loop + condition   here is the code tp print only strings and ignore numbers 
// function mystring(num1,num2,num3,num4){
//     let array=[]
//     for (let i= 0; i < 1; i++) {
//         {
//             if(typeof (num1)=="string"){
//                 array.push(num1)
            
//         }
//         if(typeof (num2)=="string"){
//             array.push(num2)
        
//     }
//         if(typeof (num3)=="string"){
//             array.push(num3)
        
//     }
//     if(typeof (num4)=="string"){
//         array.push(num4)
    
//     }
// }
//     }
//  console.log(array);
 
// }
// mystring("hira",3,"Ali",6)

// // funtion  create  a for loop   star pattern 

//   // for (let i = 1; i < 9; i++) {
//   //    let col = '*';
//   //   for (let j = 1; j < i; j++) {
//   //     col+='*';
      
//   // //   }
//   //   console.log(col);
//   // }
//    // simple for loop

  
// for (let a = 1; a < 5; a++) {
//    let box = '*';
//    for (let j = 1; j < a; j++) {
//     box +='*';
//    }
//    console.log(box);
// }

  
// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'english', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
// ];

//   let book = books.filter(function(item){
//     return item.genre=="History";
//  })
//   console.log(book); 

// let boo = books.filter(function(item){
//     return item.publish >="2000"
// })
// console.log(boo);

// let date = books.filter(function(array){
//     return (array.publish> 2000 && array.genre=="english")
// })
// console.log(date);


//map example 
// let  num = ["numbers",1,2,3,4,5,6,7,8,9]
// let doublenum = num
// console.log(doublenum.map(doublenum=>doublenum+4));


// let array = [
//         {   username: "harry",
//             age :   34,
//             address : "central london",
//             email : "harry321@gmail.com"
//         },
//         {   username: "petter",
//             age :   38,
//             country :" USA",
//             email : "petter781@gmail.com"
//         },
//          {
//             username : "dom",
//             age : 23,
//             country: "Dubai", 
//             email : "dom99@gmail.com"
//          },
//          {
//             username : "jerry",
//             age : 13,
//             country: "paris", 
//             email : "jerry891@gmail.com"
//          },
//          {
//          username : "potter",
//             age : 13,
//             country: "paris", 
//             email : "potter891@gmail.com"
//          },
//     ]
    
//      console.log(array.map(obj=>obj.username));
//      console.log(array.map(obj=>obj.age));
//      console.log(array.map(obj=>obj.email));
     
 

// let array = [
//    {   username: "harry",
//        age :   34,
//        address : "central london",
//        email : "harry321@gmail.com"
//    },
//    {   username: "petter",
//        age :   38,
//        country :" USA",
//        email : "petter781@gmail.com"
//    },
//     {
//        username : "dom",
//        age : 23,
//        country: "Dubai", 
//        email : "dom99@gmail.com"
//     },
//     {
//        username : "jerry",
//        age : 13,
//        country: "paris", 
//        email : "jerry891@gmail.com"
//     },
//     {
//     username : "potter",
//        age : 13,
//        country: "paris", 
//        email : "potter891@gmail.com"
//     },
// ]





