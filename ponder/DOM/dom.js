const title = document.querySelector("h1");

console.log(title);

title.textContent = "Web page Component";

// Two ways to display the same thing

// let topics = document.querySelector('#topics');
// topics.style.color = 'red';

// document.querySelector('#topics').style.color = 'red';

/*Secleting Id instead of using the '#' for the id.*/
document.getElementById("topics").style.color = "green";

let list = document.querySelector(".list");

list.style.border = "1px, solid black";

let para = document.querySelector("p");

// para.style.backgroundColor = "lightblue";

/*By using the classList.add will get it from the CSS file to apply it to the webpage*/
para.classList.add("background");

// document.querySelector('body').classList.add('background');

const image = document.querySelector("img");
image.setAttribute("src", "images/web.png");

let selectElem = document.getElementById("webdevlist");
selectElem.addEventListener("change", function () {
  let codeValue = selectElem.value;
  console.log(codeValue);
  document.getElementById(codeValue).style.color = 'red';
});
