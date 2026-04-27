// const PI = 3.14;
// let radius = 3;

// let area = radius * radius * PI;

// console.log(area);

// radius = 20
// area = radius * radius * PI;

// console.log(area);

// const one = 1;
// const two = '2';

// let result = one * two;

// console.log(result);

// // Type coersion
// result = one + Number(two);
// console.log(result);

// // Scope
// let course = "CSE131"; //global scope
// if (true) {
//     let student = "John";
//     console.log(course);  //works just fine, course is global
//     console.log(student); //works just fine, it's being accessed within the block
// }
// console.log(course); //works fine, course is global
// console.log(student); //does not work, can't access a block variable outside the block

let selectElem = document.querySelector("#select");
let logo = document.querySelector("img");

selectElem.addEventListener("change", changeTheme);

function changeTheme() {
  let current = selectElem.value;
  if (current == "dark") {
    // code for changes to colors and logo
    document.body.style.backgroundColor = "#222222";
    document.body.style.color = "white";
    // This will change the font to white.
    document.querySelector("#paragraph").style.color = "white";
    // Will change the logo to white when the body will change to dark.
    logo.src = "./image/byui-logo-white.png";
  } else {
    // code for changes to colors and logo
    document.body.style.backgroundColor = "white";
    // This will change the font to black.
    // document.querySelector("#paragraph").style.color = "black";
    document.body.style.color = "black";
    document.querySelector("#paragraph").style.color = "#035f9c";
    // Will change the logo to blue when the body will change to white.
    logo.src = "./byu-i_img/byui-logo-blue.webp";
  }
}
