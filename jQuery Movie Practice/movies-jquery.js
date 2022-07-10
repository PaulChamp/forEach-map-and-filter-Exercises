let currentId = 0;
let moveieList = [];


$(function() {
    $(".heading").on("submit", function(e){
        e.preventDefault();
        let title = $(".title").val();
        let rating = $(".rating").val();

        let movieInfo = {title, rating, currentId};
        const HTML = createMovieDataHTML(movieInfo);

        currentId++
        moveieList.push(movieInfo);

        $("#table-body").append(HTML);
        console.log(HTML)
        $("#form").trigger("reset");
    });

    $("tbody").on("click", ".delte-btn", function(e) {
        let removeThis = moveieList.findIndex(movie => movie.currentId === +$(e.target).data("deleteId"))

        moveieList.splice(removeThis, 1)

        $(e.target).closest("tr").remove();
    });

 })

function createMovieDataHTML(data) {
    console.log(data)
    return `
      <tr>
        <td>${data.title}</td>
        <td>${data.rating}</td>
        <td>
          <button class="delte-btn" data-delete-id=${data.currentId}>
            Delete
          </button>
        </td>
      <tr>
    `;
  }