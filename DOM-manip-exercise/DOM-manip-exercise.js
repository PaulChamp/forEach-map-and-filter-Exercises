//1
document.getElementById("container");
//2
document.querySelector("#container");
//3
document.getElementsByClassName('second'); //OR document.querySelector(".second");
//4
document.querySelector('ol .third');
//5
// const container = document.querySelector("#container");
// container.innerText = "hello!";
//6
const footer = document.querySelector(".footer");
footer.classList.add("main");
//7
footer.classList.remove("main");
//8
const newLi = document.createElement("li");
//9
newLi.innerText = "four!";
//10
const secondList = document.querySelector("ul");
secondList.appendChild(newLi);
//11
const inside = document.querySelectorAll("ol li");
for(let inner of inside){
    inner.style.backgroundColor = "green";
}
//12
// const footer = document.querySelector(".footer");
footer.remove();