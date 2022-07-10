const API_KEY = "mzwyBNtV4DEIALemuvoXOIhMzWSPXZq5"; // NYT api key
let numRecords; // number of records to show


// get the search parameter from the user input field
function getSearchParam() {
    let $search = $('#searchTerm');
    return $search.val().trim();
}
// get the number of articles to show from the drop down field
function getNumArticles() {
    let $numArticles = $('#recordNum');
    return $numArticles.val().trim();
}

// adds results to the page
function showResults(res) {
    $('.topArticles').show();
    let $results = $('.results');

    for (let i = 0; i < getNumArticles(); i++) {
        let title = res.response.docs[i].headline.main;
        let snippet = res.response.docs[i].snippet;
        let link = res.response.docs[i].web_url;

        let $article = $('<div>');
        let $articleBody = $('<div>');
        let $articleLink = $('<a>').attr({
            'href': link,
            'target': '_blank'
        });

        $articleLink.append($('<h4>').text(`${i+1}.` + title));
        $articleLink.append($('<p>').text(snippet));
        $article.append($articleBody.append($articleLink));
        $results.append($article);
        $results.append($('<hr>'));
    }
}

// clear the results from the page
function clearResults() {
    let $results = $('.results');
    $results.empty();
    $('.topArticles').hide();

}

// fetch query results from the NYT API
function runApi() {
    apiParam = {
        'api-key': API_KEY,
        'q': getSearchParam()
    };

    var urlAPI = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + $.param(apiParam);
    $.ajax({
        url: urlAPI,
        method: "GET",
        success: function (res) {
            clearResults();
            showResults(res);
        },
        error: function () {
            console.log('API ERROR');
        }
    });
}

// DOCUMENT READY
$(function () {
    clearResults();
    $('form').submit(function (e) {
        e.preventDefault();
    });
    $('#searchBtn').click(function (e) {
        e.preventDefault();
        runApi();
    });
    $('#clearBtn').click(function (e) {
        e.preventDefault();
        clearResults();
    });
});