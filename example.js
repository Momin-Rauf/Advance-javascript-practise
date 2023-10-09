console.log("This is our HTML CSS JS website lessgo")



//when html file is given to browser it makes an object of that html file called document 


//---------------GET ELEMENT BY ID----------------//

//is used only to select elements by id

//selecting element using (get element by id) function of doc

// document.getElementById("main-heading");  //this returns object
// console.log(document.getElementById("main-heading"));  // return object with object representation
// console.dir(document.getElementById("main-heading"));  //return object but with element representation to understand

// const mainHeadingDocument = document.getElementById("main-heading");
// console.dir(mainHeadingDocument);

//-------------------QUERY SELECTOR-----------//

//used for both classes and ids

// const mainHeadingDocument = document.querySelector("#main-heading");
// console.log(mainHeadingDocument);


// const navItem = document.querySelector(".nav-item");
// console.log(navItem);  //it gives just first element of class nav-item


// const navItem = document.querySelectorAll(".nav-item");
// console.log(navItem);  //it gives all elements of class nav-item



//---------------------TEXT CONTENT & INNER TEXT--------------------

//TO CHANGE TEXT OF ELEMENT

// const heading = document.getElementById("main-heading");
// console.log(heading.textContent);
// heading.textContent = "This has been changed";
// setInterval(()=>{
//     if(
// heading.style.color === 'blue'){
//     heading.style.color = 'yellow';
//     console.log("yellow");
// }
// else if(heading.style.color === 'yellow'){
//     heading.style.color = 'blue';
//     heading.style.textShadow="black";

// }
// else{heading.style.color = 'yellow'}
    
// },1000)

    

// console.log(heading.textContent); 
// console.log(heading.innerText);  //unlike text_content it does not show/print  (a part can be hide by display:block)  the hidden part in the console

//------------------------------------Change the styles of the elements-----------------------------//


//selecting specific element
// const heading  = document.querySelector("div.headline h2");



// console.log(heading.textContent); //check the style (it is also an object)

// const heading  = document.querySelector(".headline");
// heading.style.backgroundColor = "blue";





//--------------------------------------------------GET AND SET ATTRIBUTE----------------------//

// const link = document.querySelector("a");
// link.setAttribute("href","www.facebook.com");
// console.log(link.getAttribute("href"));


//-------------------------------------Query selectorAll and GetElementbyClass

// const navItems = document.getElementsByClassName("nav-item"); //Html collection
// console.log(navItems);


// let navItems = document.getElementsByTagName("a"); //Html collection
// console.log(navItems);

// const NavItems = document.querySelectorAll(".nav-item"); //NodeList
// console.log(NavItems);

// console.log(navItems.length);

// both act as array like data structure but they are not arrays array indexing can be applied on it and also methods but they are objects (Array like objects)


//--------------------------------------loop-------------------------------//

// loop can be used to differentitate

//types of loop
//simple for loop
//for of loop
//for each method

//we can not use for each method to iterate HTML collection

// for(let i=0;i<navItems.length;i++){
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// // or

// //for of loop
// for (let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "black";
//     navItem.style.fontWeight = "bold";
// }

//for each method cannot be used because it is not array


//to convert html collection into array
// navItems = Array.from(navItems);
// console.log(typeof navItems);  //array
// console.log(Array.isArray(navItems))



//we can use all loops with nodelist


//----------------------------------------INNER HTML------------------------------//



//---------------------dom traversing----------------------------//
// spaces in document are also parsed
// use style property white-space:pre to allow parse the spaces in web/html doc
// key functions- getRootNode() childNodes() nextElementSibling parentNode

//for traverse.html
// const ele = document.getRootNode();
// const a = ele.childNodes[0];
// const b = a.childNodes[2];
// const c = b.childNodes[1];
// const x = b.childNodes[1].childNodes[1];


// setInterval(()=>{
//     setTimeout(()=>{
//         b.childNodes[1].style.backgroundColor = 'red';
//         b.childNodes[1].style.color = 'white';
//         b.childNodes[0].textContent = 'This is space';
//     },500);
    
    
//     setTimeout(()=>{
//         b.childNodes[1].style.backgroundColor = 'red';
//         b.childNodes[1].style.color = 'white';
//         x.style.margin = '20px';
//     },1000);
    
//     setTimeout(()=>{
//         x.style.backgroundColor = 'blue';
//         x.style.color = 'wheat';
//         x.style.margin = '20px';
    
//     },1500);
    
//     setTimeout(()=>{
//         const y = x.childNodes[1];
//         console.log(y);
//         y.style.backgroundColor = 'yellow';
//         y.style.color = 'gray';
//         y.style.margin = '40px';
    
//     },2000);

    
//     setInterval(()=>{
//         setTimeout(()=>{
//             b.childNodes[1].style.backgroundColor = 'red';
//             b.childNodes[1].style.color = 'white';
//             b.childNodes[0].textContent = 'This is space';
//         },500);
        
        
//         setTimeout(()=>{
//             b.childNodes[1].style.backgroundColor = 'purple';
//             b.childNodes[1].style.color = 'whaet';
//             x.style.margin = '20px';
//         },1000);
        
//         setTimeout(()=>{
//             x.style.backgroundColor = 'orange';
//             x.style.color = 'black';
//             x.style.margin = '20px';
        
//         },1500);
        
//         setTimeout(()=>{
//             const y = x.childNodes[1];
//             console.log(y);
//             y.style.backgroundColor = 'white';
//             y.style.color = 'gray';
//             y.style.margin = '40px';
        
//         },2000);
//     },3000)
// },10000)


// const x = document.getElementById('a');

// const clickHandler = ()=>{
//     if(x.classList[1]==='class2'){

//         x.classList.remove("class2");
//         b.childNodes[0].textContent = 'white';
//         console.log(2)
//     }
//         else{
//             x.classList.add("class2");
//             b.childNodes[0].textContent = 'black';
//             console.log(1)
//         }
// }

