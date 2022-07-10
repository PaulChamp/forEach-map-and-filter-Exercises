const tForm = document.getElementById("topbox");
const bForm = document.getElementById("bottombox");
const fullForm = document.getElementById("formdiv");
const createBtn = document.getElementById("createbtn");
const newImg = document.getElementById("img");
const urlForm = document.getElementById("urlbox");

createBtn.addEventListener('click', function(e){ //image & delete created
    let val = urlForm.value;
    // console.log(val)
    let src = val;
    // console.log(src)
    let img = document.createElement('img');

    img.src = src;

    let delBtn = document.createElement('button');
    const memeDiv = document.getElementById("memes");
    // document.body.append(delBtn);
    // document.body.append(img);
    memeDiv.append(delBtn)
    memeDiv.append(img)

    let top = document.createElement('div');
    let bottom = document.createElement('div');
    let topValue = tForm.value;
    let bottomValue = bForm.value;

    // console.log(topValue);
    // console.log(bottomValue);
    // document.body.appendChild(top);
    // document.body.appendChild(bottom);
    memeDiv.append(top);
    memeDiv.append(bottom);
    top.innerText = topValue;
    bottom.innerHTML = bottomValue;

    top.classList.add("created");
    bottom.classList.add("createdbtm");
    img.classList.add("memeImg")

    delBtn.classList.add("created");
    delBtn.innerHTML = "Remove Meme"
    delBtn.addEventListener("click", function(){
        img.remove();
        delBtn.remove();
        top.remove();
        bottom.remove();
    });

});

// createBtn.addEventListener("click", function(){ //text created
//     let top = document.createElement('div');
//     let bottom = document.createElement('div');
//     let topValue = tForm.value;
//     let bottomValue = bForm.value;

//     // console.log(topValue);
//     // console.log(bottomValue);
//     document.body.appendChild(top);
//     document.body.appendChild(bottom);
//     top.innerText = topValue;
//     bottom.innerHTML = bottomValue;

//     top.classList.add("created");
//     bottom.classList.add("createdbtm");
// });

createBtn.addEventListener("click", function(){ //clears form after submit
    document.getElementById("Uform").reset();
    document.getElementById("Tform").reset();
    document.getElementById("Bform").reset();
});