//Asynchrono us and Synchronus Javascript
// console.log("script start");

// for(let i =0; i<10000;i++){
//     console.log("inside for loop")
// }
// console.log("script end")

//----------------------------SET TIMEOUT--------------//
//set Timeout is provided by browser

// console.log("script start");
// setTimeout(() => {
//     console.log("Hello World");
// }, 1000);
// console.log("script end");

//output
//script start
//script end
//hello word

// console.log("x")
// setTimeout(()=>{console.log("timeout1")},1000);
// setTimeout(()=>{console.log("timeout")},1000);  //1 is min time delay it could me more depending upon the situation of the scenario
// for(let i=0;i<100;i++){
//     console.log("...");
// }
// console.log("y")

//output
// x
// ... x 100
// y
// timeout

//set timeout returns an id
//use clear timeout to stop a timeout function before execution...just put the id inside clear timeout and it will stop the execution, we can store the id in the variable

// random example

// const x = document.getElementById("abc");

// const colorChange = (x) => {
//   if (x.style.backgroundColor === "red") {
//     x.style.backgroundColor = "blue";
//     setTimeout(() => colorChange(x), 1000);
//   } else {
//     x.style.backgroundColor = "red";
//     setTimeout(() => colorChange(x), 1000);
//   }
// };

// setTimeout(() => colorChange(x), 1000);

// or

// const x = document.getElementById("abc");

// const colorChange = (x) => {
//   if (x.style.backgroundColor === "red") {
//     x.style.backgroundColor = "blue";
//   } else {
//     x.style.backgroundColor = "red";
//   }
// };

// setInterval(() => {
//   colorChange(x);
// }, 1000);

//-----------------------------------------Set interval---------------------------//
// const abc = document.getElementById("siu");
// let topPosition = 0; // Initial top position

// const moveElement2 = () => {
//   topPosition -= 1;
//   abc.style.top = topPosition + "px";

//   // Stop the movement when reaching the desired bottom position
//   const containerHeight = document.getElementById("v").offsetHeight; // Replace "v" with the actual ID of the container element
//   const elementHeight = abc.offsetHeight;
//   if (topPosition + elementHeight <= 0) {
//     clearInterval(interval2);
//     setInterval(moveElement, 16); // Adjust the interval duration as needed for smooth animation
//   }
// };

// const moveElement = () => {
//   topPosition += 1;
//   abc.style.top = topPosition + "px";

//   // Stop the movement when reaching the desired bottom position
//   const containerHeight = document.getElementById("v").offsetHeight; // Replace "v" with the actual ID of the container element
//   const elementHeight = abc.offsetHeight;
//   if (topPosition + elementHeight >= containerHeight) {
//     clearInterval(intervalId1);
//     const interval2 = setInterval(moveElement2, 16); // Adjust the interval duration as needed for smooth animation
//   }
// };

// const intervalId1 = setInterval(moveElement, 16); // Adjust the interval duration as needed for smooth animation

//------------------------------------CALLBACKS----------------------------//

// const func1 = (callback) => {
//     console.log("func1");
//     callback();
// }

// const myFunc= ()=>{
//     console.log("myfunc");
// }

// func1(myFunc);

//---------------------CALLBACK CALLBACK_HELL PYRAMID_OF_DOM ASYNC PROGRAMMING------------------//

// copy paste file

//--------------------------PROMISES----------------------//
//also called future (not now)
//we make promise if all the conditions met to fullfill the promise then it's status becomes fullfiled and it returns a function/value and if it does not met the conditions required to fullfill the prmoise it returns nothing or it returns reject function

//Promises are produced and consumed
//The consumption is more than the production in programming world

//PRODUCE
// const bucket = ["rice","veg","chicken","salt"];
// const FriedRicePromise = new Promise(
//     (resolve,reject)=>{
//         if(bucket.includes("rice") && bucket.includes("veg") && bucket.includes("salt") ){
//             resolve("Fried Rice");
//         }
//         else{
//             reject("not done");
//         }
//     }
// );
//CONSUME
//use of then
//then takes functions as an input
// FriedRicePromise.then(
//     //jab promise pura hoga
//     ()=>{
//         console.log("done");
//     },

//     //jab promise reject hoga
// (error)=>{
//     console.log(error);
// })

//error callback is optional

//alternate
// FriedRicePromise.then(
//     //jab promise pura hoga
//     ()=>{
//         console.log("done");
//     }).catch((error)=>{
//         console.log(error);
//     });

//PROMISE WORK ASYNCLY
//PROMISE IS AN OBJECT
//.THEN IS EXECUTED BY BROWSER
//.THEN IS ADDED IN MISCROTASK QUEUE JUST LIKE SETTIMEOUT IS ADDED IN CALLBACK QUEUE
//.MICROTASK QUE HAS HIGHER PRIORITY OVER CALLBACKQUE AGAR SETTIMEOUT AND PROMISE DONO HAIN PROMISE PEHEL EXECUTE HOGA SET_TIMEOUT SE
// //example script// :
// console.log("start");
// const bucket = ["rice", "veg", "chicken", "salt"];
// const FriedRicePromise = new Promise((resolve, reject) => {
//   if (
//     bucket.includes("rice") &&
//     bucket.includes("veg") &&
//     bucket.includes("salt")
//   ) {
//     resolve("Fried Rice");
//   } else {
//     reject("not done");
//   }
// });
// setTimeout(() => {
//   console.log("Set_Timeout");
// });
// FriedRicePromise.then(
//   //jab promise pura hoga
//   () => {
//     console.log("done");
//   }
// ).catch((error) => {
//   console.log(error);
// });
// console.log("End");


//---------------------------------PROMISE AND SET_TIMEOUT TOGETHER--------//


// function mypromise () {
//     return new Promise((resolve,reject)=>{
//         const val = true;
//         setTimeout(()=>
//         {
//             if(val){
//                 resolve();
//             }
//             else{
//                 reject();
//             }
//         },3000);
//     });
// }

// mypromise().then(()=>{
//     console.log("resolved");
// });



//-------------promise chain-------------------//
// then method always return promise which helps in making the chain

//import from course


//---------------------HTTP REQUEST------------------------//
//using xmlhttp oldest way 
// const xhr  = new XMLHttpRequest();
// xhr.open("GET",URL);
// //ready states are 0 1 2 3 4
// //0 is before open 1 is after open 4 is at end 2 3 are remaining 
// //.onreadystatechange is built in function which executes when ready state changes
// //onload is called when ready state becomes 4 
// //At ready state 4 the request is DONE
// xhr.onload = function (){
    //     const response = xhr.response;  //response is json file we get in string
    //     const data = JSON.parse(response);  //parse convert string into object 
    //     console.log(data);
    
    
    // }
    // xhr.onerror=()=>{
        //     console.log("network error");
        // }
        // xhr.send();
        
        //posts/1 means post having id 1
        
        
        //-----------------------------xhr using promises----------------------//
        // function sendRequest(method,url){
            //     return new Promise(function(resolve,reject){
                //         const xhr = new XMLHttpRequest();
                //         xhr.open(method,url);
                
                //         xhr.onload = function(){
                    //             if(xhr.status>=200 && xhr.status<=300){
                        //                 resolve(xhr.response);
                        //             }
                        //             else{
                            //                 reject(new error("something went wrong"));
                            //             }
                            //         };
                            
                            //         xhr.send();
                            
                            //     })
// };


// const request = sendRequest("GET",URL);

// request
//     //response is xhr.response which we gave in resolve above
//     .then(response=>{
    //         const data = JSON.parse(response);
    //         return data; //this is json
    //     })
    //     .then(data =>{
        //         let id = data[3].id;
        //         return id;
        //     }
        //     )
        //     .then(
            //         id =>{
                //             console.log("chaining");
                //             const url = `${URL}/${id}`;
                //             return sendRequest("GET",url);
                //         }
                //     )
                //     .then(
                    //         newResponse => {
                        //             console.log(newResponse);
                        //             const newData = JSON.parse(newResponse);
                        //             console.log(newData);
                        //         }
//     )


//----------------------------------------------FETCH-----------------------//

// const URL = "https://jsonplaceholder.typicode.com/posts";

// const x = fetch(URL); // x is a promise 
// x.then(response=>response.json())
//  .then(data=>console.log(data));


//SOMETIMES RESPONSE.OK IS FALSE AND IT GIVE ERROR BUT NOT IN REJECT BUT IN RESOLVE TO DEAL WITH IT PUT A CONDITION THAT IS RESPONSE.OK IS TRUE THEN PROCEED

//-------------------async await--------------------//
// const getPosts = async() =>{}; 
//or

// async function getPosts(){
//     const response = await fetch(URL);
//     const data = await response.json();
//     return data; //promise is returned
// };
// //by adding async it does not remain normal function
// //but!!!!!
// //it becomes a promise

// getPosts().then(data=>console.log(data));