let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=mzwyBNtV4DEIALemuvoXOIhMzWSPXZq5"
let api = document.getElementById("api");


// fetch(url)
// .then(response => response.json())
// .then(data => {
// console.log(data);

// data.docs?.map(article => {
//         console.log(article.title);

//     let a = document.createElement("a");
//     a.setAttribute('href', article.url);
//     a.innerHTML = article.title;

//     api.appendChild(a);
//     }) 
// })

$("button").on("click", function(e){
    e.preventDefault();
    fetch(url)
.then(response => response.json())
.then(data => {
console.log(data);

 data.docs.map(docs => {
    console.log(docs.headline);
    console.log("HELLO");
    let a = document.createElement("a");
    a.setAttribute('href', docs.url);
    a.innerHTML = docs.title;

    let p = document.createElement("p");
    p.innerHTML = docs.abstract;

    api.appendChild(p);
    api.appendChild(a);
     }) 
})
    // $(function () {

    //     apikey = $('#api').data('apikey');
    //     $("#api").load("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=" + "mzwyBNtV4DEIALemuvoXOIhMzWSPXZq5");
    //     console.log($("#api"));
    
    //   })
})

// const request = new XMLHttpRequest();
// request.open("GET",
//  'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=mzwyBNtV4DEIALemuvoXOIhMzWSPXZq5' )

// request.setRequestHeader('mzwyBNtV4DEIALemuvoXOIhMzWSPXZq5', 'GIRTfYHE3JAkmzkd');
// request.onreadystatechange = function(){
//     if (this.readyState === 4) {
//         console.log('status:', this.status);
//         console.log('headers:', this.getAllResponseHeaders());
//         console.log('body:', this.responseText)
//     }
// };
// request.send();




//key:
//mzwyBNtV4DEIALemuvoXOIhMzWSPXZq5


//secret:
//GIRTfYHE3JAkmzkd