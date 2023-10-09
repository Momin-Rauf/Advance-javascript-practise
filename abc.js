// let firstname = 'momin'
// firstname = 'rauf' (error) //cannot use let two time but var can be used
// console.log(firstname);

// const pi = 3.14;
// pi = 4; //we cannot change it's value since its type is const
//WE USE CONST MOST OF THE TIME, SOMTIMES WE USE LET BUT WE USE VAR VERY LESS

//---------------------------STRING INDEXING
// let name = 'momin';
// console.log(name[3]); //space also counts in lenght

//--------------------------LENGTH
// let name = 'momin';
// console.log(name.length);

//-------------------------STRING METHODS
// let name = '  Mom  in   ';
// // console.log(name.length);
// let name2 = name.trim(); //removes spaces from left and right
// console.log(name2.length);

// let name1 = 'momin';
// let str1 = name1.slice(2);
// const str = name1.slice(0,2)
// console.log(str);
// console.log(str1);

// let age = 5;
// let name = 'momin';
// console.log(typeof age);
// let age = 5;
// let name = 'Momin';
// age =  +'momin';
// const num = -"4";
// console.log(typeof age); //number
// console.log(typeof num) //number
// age = String(age);
// console.log("age:")
// console.log(typeof age); //string
// let age1 =4
// age1 = age1 +"5"; //45
// console.log("age1:"+typeof age1); //
// age1 = 4;
// age1 = age1+ +'6';
// console.log(age1)

//---------------------------CONCAT---------------------------
// let str1 = 'momin'
// let name2 = 'rauf'
// // console.log(str1+" "+name2)

//-------------------------use of $ sign-------------------
// name1 = 'momin'
// name2 = 'rauf'
// let num = 5
// let string1 = `my name is: ${name1} ${typeof(+name2)} and print ${num+=100}`
// console.log(string1) 


// let name1; //undefined
// var name2; //undefined
// const b;
// //we cannot declare const without initializing it

// let name1 = 'momin'
// let name2 = 'rauf'
// num = 23;
// console.log("Names are:"+" "+name1,name2,num)


// let g = true + ""   //string is prefered over bool
// console.log(typeof g)
// let a = null + +''; //number is prefered over null & string is prefered over number
// console.log(typeof a)
// console.log(typeof null)
// ------------------------NULL IS AN OBJECT DATA TYPE
// it is a bug in javascript that typeof null is object

// //-------------------------BIGINT
// let a = BigInt(555513422222384971238947120983478120748012347091234897);
// let b = 2341418923409123481203948n
// console.log(a)
// console.log(b)

// ---------------------------BOOLEAN AND COMAPARISON OPERATOR
// let num1 = 5;
// let num2 = 7;
// console.log(num1>num2)

//--------------------------- == & ===
// // == only checks for values not the data type
// let num1 = 7;
// let num2 = '7';
// console.log(num1===num2); //checks for both datatype and value
// console.log(num1==num2);

//------------------ // if else condition 
// let a = prompt("enter:");
// if(a==5){
//     console.log("ez scene");
// }

//-----------------------ternary operator
// let age = 5;
// let drink = age>=5 ? 'coffee' : 'milk';
// console.log(drink);

//-------------------INTRO TO ARRAYS
// let fruit = [1,2,3,'momin'];
// console.log(fruit[3].slice(3,5))

// let obj = {};
// console.log(Array.isArray(obj))

//------------------POP FROM ARR1 AND PUSH IN ARR2
// let a = [4,5,'s'];
// a.push(+'3');
// let b= a.pop();
// let z=[1,2,3]
// z.push(b);
// console.log(z);

// --------------UNSHIFT
// let a = ['apple','orange']
// a.unshift('mango');
// console.log(a);
// a.shift();
// console.log(a)

//---------------primitive and refernce data type

//----------------primitive
// let num1 =4;
// let num2 =num1;
// console.log(num2)
// num1++;
// console.log(num2) //num2 did not change with num1

//-----------------array is refernce type
// let arr1 = ['item1','item2'];
// let arr2 = arr1;
// console.log(arr1)
// console.log(arr2)
// arr1.pop();
// arr1.push(4);
// console.log(arr2) //arr2 also changed with arr2


//----------HOW TO CLONE TWO ARRAYS AND HOW TO CONCAT
// let x = ['a','b','r'];
// let v = ['a','b','r'];
// console.log(v===x); false

// let x = ['a','b','r'];
// let v = x;
// console.log(v===x); true

// let x = ['a','b','r'];
// let v = x.slice(0);
// console.log(v===x);  //it clones array 

//------------for loop in array

// let fruits = ['a','b','c']

// for(let i=0;i<=9;i++){
//     console.log(i);
// }
// console.log(fruits.length)

// for(let i=fruits.length-1;i>=0;i--){
//     console.log(fruits[i]);
// }

//SOME ARRAY FUNCTIONS 
// PUSH 
//toUppercase



//HEAP MEMORY ['APPLE','MANGO'] 
/// const fruits = ["apple","mango"];
// fruits.push("bannana"); address is not changed that's why const could be pushed
//console.log(fruits)///
//we cannot do fruits = ['bannana','pineapple']
//we can push pop for const array...we mostly use const array

// const fruits = ["apple","mango","bannana"];
// let i=0;
// while(i<fruits.length){
//     console.log(fruits[i].toUpperCase)
//     i=i+1;
// }


//--------FOR OF LOOP
// const fruits = ["apple","mango","bannana"];
// for (let fruit of fruits){
//     console.log(fruit);
// } //it iterates through the loop and point to each element in the array



//--------------FOR IN LOOP
// const fruits = ["apple","mango","bannana"];
// for(let index in fruits){
//     //it prints index of fruits
//     console.log(index)
// }


//-----------array destructuring
const myarray = ["value1","value2","value3"]
// //we have to make two variable,In one store value1 and in second store value2
// let var1 = myarray[0];
// let var2 = myarray[1];
////alternate--array destructuring
// let [myvar1,myvar2] = myarray; //value1 , value2
// let [myvar1,,myvar2] = myarray // value1 , value3
// let [myvar1] = myarray //value1 and undefined
// let [myvar1,myvar2,...myNewarray] = myarray; 
// let array = [1,2,3,4,5,6,7,8,9,10];
// let [...newArr] = array.slice(5);
// console.log(newArr)


//---------------------OBJECTS----------------
//objects are reference type
//objects are use to store key value pair
//objects don't have index
//how to add key value pair to objects
//how to create objects
//how to access data from objects
//objects don't have index
//arrays are good but not sufficient

// const person = {name:"harshit",age:22}
// const person1 = {"name":"rao","second name":"rauf"} // use person1["second name"] because person1.second name cannt be written
// console.log(person1.name)
// person.name = "momin"; //changing key
// person.gender = "male"; //adding key
// console.log(person)
// console.log(person.name) //way1 of printing
// console.log(person["age"]) //way2 of printing

//------- person["key"] usses key and person[key] usses variable key
// obj1 = {name:"momin"}
// const key = "email";
// // obj1["key"] = "xyz@gmail.com";
// obj1.key = "xyz@gmail.com";
// obj1[key] = "abc@gmail.com";
// console.log(obj1)

//----------------------COMPUTED PROPERTIES
// const key1 = "objKey1"
// const key2 = "objkey2"
// const value1 = "myval1"
// const value2 = "myval2"
// obj = {
//     [key1]:value1,
//     [key2]:value2
// }

// console.log(obj);

// obj ={}
// const key1 = "objKey1"
// const key2 = "objkey2"
// const value1 = "myval1"
// const value2 = "myval2"
// obj[key1] = value1;
// obj[key2] = value2;
// console.log(obj);


//----------------------------SPREAD OPERATOR
// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// const newArr = [...arr1,...arr2,89];
// const newarr1 = [...'12345']
// console.log(newArr);
// console.log(newarr1);

// const obj1 ={
//     key1:"value1",
//     key2:"value2"
// };
// const obj2 = {
//     key1:"unique",
//     key3:"value3",
//     key4:"value4"
// }


//---------------OBJECT DESTRUCTURING
// const newabc = {...obj2,...obj1} //if two keys are common the one which comes after will be considered
// const ewabc = {...[3,4]}
// console.log(ewabc["0"])

//----------------------OBJECT INSIDE ARRAY
// //helpful in real world problems
// const users = [
//     {userId:1,firstName:"Muhammad"},
//     {userId:1,firstName:"Momin"},
//     {userId:1,firstName:"Rauf"}
// ]
// console.log(users[0].firstName)

//-----------------------NESTED DESTRUCTURING
// const users = [
//         {userId:1,firstName:"Muhammad"},
//         {userId:2,firstName:"Momin"},
//         {userId:3,firstName:"Rauf"}
//     ]
// const [user1,user2,user3] = users;
// const [{firstName},{userId}] = users
// console.log(user1);
// console.log(firstName);


//----------------------FUNCTION DECLARATION
// function abc(name){
//     return name;
// }

// var1 = abc("momin")
// function sing(var1){
//     console.log("happy birthday...."+var1)
// }
// sing(var1);
// const f1 = function(){
//     return "hello worlld";
// }



// //arrow functions
// const a2 = number1 => number1+2;
// const a3 = () => {
//     return number2;
// } 

// const a1 = (a,b) =>a+b;
// a1(2,4);
// console.log(a1(2,4))

//------------------------------HOISTING
// hello();
// function hello(){
//     console.log("hello world")
// }                                   //possible



// hello1()
// const hello1 = function(){
//     return 3+4;
// }       //not possible



//------------FUNCTIONS INSIDE FUNCTIONS

// function app(){
//     function appInside(){
//         return 5;
//     }
//     function appinside2(a){
//         return a+3;
//     }
//     a = appInside();
//     return appinside2(a);
// }
// console.log(app());


//----------------------LEXICAL SCOPE
// const myVar = "value1";
// function myApp(){
    
//     const myFunc = ()=>{
//         // const myVar = "val59";
//         console.log("inside myFunc",myVar);
    
//     function myFunc2(){
//         console.log("INSIDE FUNC2",myVar)
//     }
//     myFunc2();
// }
//     // const myFunc3 = function(){}
//     console.log(myVar);
//     myFunc();
// /*JS CHECKS IF MYVAR PRESENT INSIDE MYFUNC() FUNCTION,IF PRESENT THEN IT WILL PRINT IT
// OTHERWISE IT WILL CHECK IT IN MYAPP() FUNCTION AND PRINT THAT ONE IT IS LEXICAL SCOPE
// myAPP() AND myfUNC() WILL CHECK IF IT IS PRESENT IN GLOBAL THEN USE IT FROM THERE 
// */

// /*function jahan bna hota hai wo uska lexical scope hota hai*/

// }

// myApp(); 



//---------------------------BLOCK SCOPE-VS-FUNCTION SCOPE
/*LET AND CONST ARE BLOCK SCOPE, VAR IS FUNCTION SCOPE*/

//{
    //block1
    // var firstName = "momin"
    // const secondName = "rauf"
/*i cannot access let and const outsde the block in which they are declared*/
//}
// console.log(firstName); // right
// console.log(secondName); //wrong
//{
    // block2
    ////we can declare same variable using const/let in diff scope but not in 
    ////same scope 
    // const secondName = "abc"
    // console.log(secondName);
//}

/*
let firstname = "rauf"
function myApp(abc){
    if(true){
        abc = "momin";
        console.log(abc);
    }
    // console.log(firstname);

}
myApp(firstname);*/


//--------------------DEFAULT PARAMETERS
// function addTwo(a,c){
//     return a+b;
// }
// // const ans  = addTwo(3); //Nan

/*function addTwo(a,b){
    if(typeof b==="undefined")
    {
        b=0;
    }
    return a+b;
}
const ans = addTwo(2,undefined);
const ans2 = addTwo(3);
console.log(ans,ans2)*/


// ---------------------REST PARAMETER------------------

/*function myFunc(a,b,c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
    console.log(`d is ${d}`); //d is not defined-output

}
myFunc(3,4,5,6,7,8,9); //rest of the paras are ignored only those are concerned whichare used inside the function
*/


// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
//     // console.log(`d is ${d}`);//d is still not defined
// }
// myFunc(3,4,5,6,7,8,9);  //the above issue is solved by spread operator

/*function addAll(...numbers){
    console.log(numbers)
    let total = 0 ;
    for(let number of numbers){
        total =total+number;
        
    }    
    return total;
}

//...numbers is an array

const a = addAll(1,2,4); //jitne marzi numbers add krlo
console.log(a);*/


//--------------------------------------------PARAM DESTRUCTURING------------------------
//object
//react


//BOTH ARE THE CORRRECT WAYS OF DOING IT
// const person ={
//     firsName: "momin",
//     gender: "male"
// }
// function printDetails(obj){
//     console.log(obj.firsName);
//     console.log(obj.gender);
//     console.log(obj.age);
// }

// function details({firsName,gender}){
//     console.log(firsName);
//     console.log(gender);
// }
// details(person);
// printDetails(person);



//-----------------------callback functions
// function MYfUNC(a){
//     console.log(a);
//     console.log("hello world");
// }

// function func2(){
//     console.log("inside func2")
//     return 4;
// }
// MYfUNC({name:"we"});
// MYfUNC();

// MYfUNC(func2());  THERE ARE TWO WAYYS OF CALLING WITH DIFF OUTPUT
//MYfUNC(func2);
//so FUNCTION CALLING ANOTHER FUNCTION INSIDE PARAMETER IS CALL CALLBACK FUNCTION
//it can be called by func or func() 
//if we use func simply then after that we need to use a(); or callback();

// function MYfUNC(a){
//     console.log(a);
//     a();
//     console.log("hello world");
// }

//---Both of these approaches are important

// function MYfUNC(callback){
//     // console.log(a);
//     // a();
//     callback();
//     console.log("hello world");
// }

// function func2(){
//     console.log("inside func2")
// }
// MYfUNC(func2);

// function abc(name){
//     console.log("inside abc");
//     console.log("Name:",name);

// }

// function xyz(callback){
//     console.log("helo there in xyz");
//     callback("momin");//calling abc("momin")
// }



//-------------function returning function------------












//---------------------------PART - 2 OF COURSE ----------------------------//
 

//COMPILATION
//CODE EXECUTION
//HOW JAVASCRIPT CODE EXECUTES
//WHAT IS GLOBAL EXECUTION CONTEXT ?
//WHAT IS LOCAL EXECUTION CONTEXT ?
//CLOSURE


//NOTES
//First js comppile all the code and then executes it 
// 1-compile
// 2-execute
//Compilation phase is divided into three parts (Tokenization/lexing, Parsing & Code Generation) 

//tokenization divide code into small parts
//parsing (AST)

//In ES docs it is written there should be early error checking
//The scope of varaibles must be known before execution 
//conclusion--Our code complie first than execute


//js code executes in global execution context---1-First it creates---2-then it executes

//js is single threaded and Synchronous programing language


//in GM it first binds all the varaibles then execution takes place all varaibles are undefined before being declared in execution



                    //in execution phase
//console.log(thiis)    //undefined
//console.log(window)    //undefined
//console.log(FirstName)  //undefined
//var FirstName  = "Momin";   //updated to momin
//console.log(FirstName);  //Momin




//---------------------------------------HOISTING-----------------------------------//

//hoisting means storage of things before execution

// console.log(this);
// console.log(window);
// myFunction();
// console.log(myFunction);
// console.log(fullName);
// function myFunction(){
//     console.log('this is my function')

// }

// var firstName = "Momin";
// var secondName = "Rauf";
// var fullName = firstName + " " + secondName;
// console.log(fullName)

//after execution the GEC removes from the stack 

//------------------------------SAME BUT USING FUNCTION EXPRESSION INSTEAD OF FUNCTION DECLARATION---------------------------//


//now it will work as a var variable not function
// console.log(myFunction);  //output undefined  since it consider it a var

// var myFunction = function(){
//     console.log("This is my function");
// }



//------------------------------SAME USING LET AND CONST---------------------------//

//incase of let and const --in our global execution code the variable is not undefined after compilation  but uninitialised (declared but not initialised)

//yes hoisting is present in let and const

//temporal dead zone  the time period in which before being initialised varaible is uninitialized or undefined 
     

//GEC (Globalisation execution context)
// let foo = "foo";
// console.log(foo);


// //function execution context
// function getFullName(firstName,lastName) {
//     console.log(arguments);
//     let myVar = "var inside func";
//     console.log(myVar)
//     const fullName = firstName + " " + lastName;
//     return fullName;
// }

// const personName = getFullName("Momin","Rauf");
// console.log(personName);

//--------------------------------------CLOSURE-----------------------------------//

//function can return functions

// function outerFunc(){
        // const a = 'a';
//     function innerFunc(){
//         console.log("hello world",a)
//     } 
//     return innerFunc;
// }

// const ans = outerFunc();
// console.log(ans);
// ans();
//function k lexical me jo functions/variables hote hain wo apne sat leke return hota hai