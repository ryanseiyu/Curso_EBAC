/*function myFunction() {
    document.getElementById("item").style.textDecoration = "line-through";
  }*/

$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const texto = $('#tarefa').val();
        $(`<li id="item">${texto}</li>`).appendTo('ul');
        $('#tarefa').val('')

        $('li').one('click', function() {
            $(this).css("text-decoration","line-through");
        })
    })

    $('li').one('click', function() {
        $(this).css("text-decoration","line-through");
    })
})

