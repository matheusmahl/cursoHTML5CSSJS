$(document).ready(function(){
    //alert("jQuery Ok");
    $("#logotipo").on("mouseover", function() {
        $("#banner h1").addClass("efeito");
    }).on("mouseout", function(){
        $("#banner h1").removeClass("efeito");
    });

    $("#input-search").on("focus", function(){
        $("li.search").addClass("ativo");
    }).on("blur", function(){
        $("li.search").removeClass("ativo");
    });

    $('.owl-carousel').owlCarousel({
        items: 4,
        loop: true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true
    });
});