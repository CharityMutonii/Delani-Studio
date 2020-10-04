$(document).ready(function(){
    $(".im1").click(function(){
        
        $(".im1").hide();

        $(".desi").show();
    })
    $(".desi").click(function(){
        
        $(".desi").hide();

        $(".im1").show();
    })
    $(".im2").click(function(){
        
        $(".im2").hide();

        $(".devel").show();
    })
    $(".devel").click(function(){
        
        $(".devel").hide();

        $(".im2").show();
    })

    $(".im3").click(function(){
        
        $(".im3").hide();

        $(".produ").show();
    })
    $(".produ").click(function(){
        
        $(".produ").hide();

        $(".im3").show();
    })

    $("form").submit(function () {
        var namee = $(".inname").val();
        alert(namee+" we have received your message. Thank you for reaching out to us. ");
        
    })

})
