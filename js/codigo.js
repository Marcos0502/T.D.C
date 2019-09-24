$(document).ready(
    function ()
    {
              $(".fondo").fadeIn(3000);
              $("tituloh4").bin("click",mostrarOcultarTitulo)
    }
);
function mostrarOcultarTitulo(){
    $("#TituloIndex").fadeToggle();
}