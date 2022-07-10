document.addEventListener("DOMContentLoaded", function(){
const form = document.querySelector('form')
const list = document.querySelector('#list')
const newBtn = document.createElement('button');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const text = document.querySelector('#todo')
    const newLi = document.createElement("li");

    newLi.innerText = text.value;
    newBtn.innerText = " Completed ";

    list.appendChild(newLi);
    newLi.appendChild(newBtn);

    form.reset();
})

list.addEventListener('click', function(e){
    if (e.target.tagName.toLowerCase() === 'li') {
        e.target.style.textDecoration = 'line-through';
    }else if (e.target.tagName.toLowerCase() === 'button'){
        e.target.parentNode.remove();
    }
    });
});
