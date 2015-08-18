        $(document).ready(function () {

            $('.burger a').mouseover(function () {
                $(this).vibrate();
            });

            $(".burger, .icon").click(function () {
                $(".mobilenav").fadeToggle(500);
                $(".top-menu").toggleClass("top-animate");
                $(".mid-menu").toggleClass("mid-animate");
                $(".bottom-menu").toggleClass("bottom-animate");
                return false;
            });
			
			twemoji.parse(document.body,{size:72});

        });