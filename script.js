$(document).ready(function () {
    $(".fa-bars").click(function () {
        $("header nav").css("left", "0");
    });
    $(".closse").click(function () {
        $("header nav").css("left", "-100vw");
    });

    $(".sortheader a").click(function () {
        event.preventDefault();
        let data = $(this).attr("data");
        if (data == "all") {
            $("#sort figure").show(500);
        } else {
            $("#sort figure").hide(500);
            $("#sort ." + data).show(500);
        }
    });

         $(".v-modal").click(function(){
            event.preventDefault();
            $(".modal-bg").css("display", "flex");
            let title = $(this).html();
            $(".v-content h3").html(title);
         });

         $(".v-close").click(function(){
             $(".modal-bg").hide();
         });

    $(".owl-carousel").owlCarousel({
        // items: 1.8,
        margin: 10,
        padding: 0,
        loop: true,
        nav: true,
        center: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            1022: {
                items: 2.8
            }
        }
    });
    $(window).paroller();
});