
$( function() {

    $(".header_container .head .socails ul li.theme").on("click", function(){
        if($(".header_container .head .socails ul li.theme .dark").hasClass("hide")){
            $(".header_container .head .socails ul li.theme .dark").removeClass("hide")
            $(".header_container .head .socails ul li.theme .light").addClass("hide")
            $(".dark-mode").remove()
        }else{
            $(".header_container .head .socails ul li.theme .dark").addClass("hide")
            $(".header_container .head .socails ul li.theme .light").removeClass("hide")
            $("head").append('<link class="dark-mode" rel="stylesheet" href="./assets/css/dark-theme.css" />')
        }
    })

    $(".main_container .nav_bar .menu_list ul li").each(function(){
        if(!$(this).hasClass("title")){
            $(this).on("mouseleave", function(){
                if($(this).hasClass("hovered")){
                    $(this).removeClass("hovered").addClass("blured")
                }
            })
    
            $(this).on("mouseenter", function(){
                if($(this).hasClass("blured")){
                    $(this).removeClass("blured").addClass("hovered")
                }else{
                    $(this).addClass("hovered")
                }
            })
        }
    })

    let nav = $(".main_container .nav_bar")
    let content = $(".main_container .content")

    $(".main_container .nav_bar .menu_btn .btn").on("click", function(){
        if(nav.hasClass("show_nav")){
            nav.removeClass("show_nav").addClass("hide_nav")
            content.removeClass("show_nav").addClass("hide_nav")
        }else{
            nav.removeClass("hide_nav").addClass("show_nav")
            content.removeClass("hide_nav").addClass("show_nav")
        }
    })

    let whatever_world = [ '<span class="console">c</span>',
                '<span class="console">o</span>',
                '<span class="console">n<span class="cursor">|</span><span style="opacity:0.5">sole</span></span>',
                '<span class="console">sole</span>',
                '<span class="symbol">.</span>',
                '<span class="log">l</span>',
                '<span class="log">o</span>',
                '<span class="log">g</span>',
                '<span class="symbol openinig">(</span><span class="cursor">|</span><span class="symbol">)</span>',
                '<span class="text first_quote">"</span><span class="cursor">|</span><span class="text last_quote">"</span>',
                '<span class="text">W</span>',
                '<span class="text">h</span>',
                '<span class="text">a</span>',
                '<span class="text">t</span>',
                '<span class="text">e</span>',
                '<span class="text">v</span>',
                '<span class="text">e</span>',
                '<span class="text">r</span>',
                '<span class="text">&nbsp;</span>',
                '<span class="text">W</span>',
                '<span class="text">o</span>',
                '<span class="text">r</span>',
                '<span class="text">l</span>',
                '<span class="text">d</span>',
                '<span class="text">.</span>',
                '',
                '<span class="symbol">;</span>' ]

    

    let i= 0;
    let inter = setInterval(function(){
        if( i< whatever_world.length){
            $(".header_container .slogo .cursor").remove()
            
            if(i==3){
                $(".header_container .slogo").html('<span class="console">c</span><span class="console">o</span><span class="console">n</span><span class="console">s</span><span class="console">o</span><span class="console">l</span><span class="console">e</span><span class="cursor">|</span>')
            }else{
                if(i==9){
                    $(".header_container .slogo .openinig").after(whatever_world[i]);
                }else{
                    if(i > 9){
                        if( i == whatever_world.length-2){
                            $(".header_container .slogo").append('<span class="cursor">|</span>');
                        }else{
                            if( i == whatever_world.length-1){
                                $(".header_container .slogo").append(whatever_world[i] + '<span class="cursor">|</span>')
                            }else{
                                $(".header_container .slogo .last_quote").before(whatever_world[i] + '<span class="cursor">|</span>');
                            }
                        }
                    }else{
                        $(".header_container .slogo").append(whatever_world[i])

                        if(i != 2 && i != 8 && i != 9){
                            $(".header_container .slogo").append('<span class="cursor">|</span>')
                        }
                    }
                }
               
            }
            i++
        }else{
            $(".slogo").css({
                "padding-left": "0px",
                "text-align": "center"
            })
            clearInterval(inter)
        }
    }, 200, false)



    let age = new Date().getFullYear() - 1995
    $(".age").text(age)



    let inputs = $("form input, textarea")

    inputs.each(function(){
        $(this).on('focus', function(){
            
            if(!$(this).prev().hasClass("active") && $(this).val() == "" ){
                $(this).prev().removeClass("desactive").addClass("active")
            }
            $(this).next().removeClass("desactive").addClass("active")

        })
    
        $(this).on('blur', function(){
            if(!$(this).prev().hasClass("desactive") && $(this).val() == ""){
                $(this).prev().removeClass("active").addClass("desactive")
            }
            $(this).next().removeClass("active").addClass("desactive")
        })

    })

    $(".menu_list li").each(
        function(){
            $(this).on("click", function(){
                if( !$(this).hasClass("title") ){
                    $([document.documentElement, document.body]).animate({
                        scrollTop: $("#" + this.classList[0]).offset().top
                    }, 500, function(){
                        if(nav.hasClass("show_nav")){
                            
                            
                        }
                    });
                }                
            })
        }
    )

    $(".up").on("click", function(){
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#home").offset().top
        }, 500);
    })

    setTimeout(function(){
        $("section.main_container ~ div").remove()
    }, 500)


    // sending the email

    $('form button.send').on("click", function(e){
        name = $('input.name')
        email = $('input.email')
        msg = $('textarea.message')

        if ( email.value == "" || message.value == "" ){
            alertify.error('Please check your entries')
            return false
        }
        else{
            $.ajax({
                method: 'POST',
                url: 'https://formspree.io/amine.griche77@gmail.com',
                data: {message: msg.value},
                datatype: 'json'
            })
            e.preventDefault()
            alertify.success('Message sent')
        }
           
    })

})
