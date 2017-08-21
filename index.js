$(document).ready(function() {

    $("#web_search_header").bind({
        focus: function() {
            $(".hot-words").css({ display: "none" })
            $(".search-btn").addClass("search-btn2")
        },
        blur: function() {
            $(".hot-words").css({ display: "block" })
            $(".search-btn").removeClass("search-btn2")
        }
    });
    // $(".navbox").bind({
    // 	mouseover:function(){
    // 		$(".navpanel").css("display","block")
    // 	},
    // 	mouseout:function(){
    // 		$(".navpanel").css("display","none")
    // 	}
    // })
    $(".navbox").hover(function() {
        $(".navpanel").css("display", "block")
    }, function() {
        $(".navpanel").css("display", "none")
    })


    $(".navbox a").mouseover(function() {
        $(".navpanel>li").css("background-color", "")
        $(".navpanel>li").eq($(this).index() - 1).css({ "background-color": "rgb(247,247,247)" })
        $(".navpanel>li .angle").css({ "display": "none" })
        $(".navpanel>li[style] .angle").css({ "display": "block" })
        if ($(this).index() == 0) {
            $(".navpanel>li").css("background-color", "")
            $(".navpanel>li .angle").css({ "display": "none" })
        }
    });

    $(".navpanel .panel-item").mouseover(function() {
        $(".navpanel .panel-item .angle").eq($(this).index()).css({ "display": "block" })
    });
    $(".navpanel .panel-item").mouseout(function() {
        $(".navpanel .panel-item .angle").eq($(this).index()).css({ "display": "none" })
    });
    // $(".navpanel .panel-item").hover(function() {
    //     $(".navpanel .panel-item .angle").eq($(this).index()).css({ "display": "block" })
    // }, function() {
    //     $(".navpanel .panel-item .angle").eq($(this).index()).css({ "display": "none" })
    // });


    //banner-box-top
    var i = 0;
    var clone = $(".banner-box .img li").first().clone();
    $(".banner-box .img").append(clone);
    var size = $(".banner-box .img li").size()
    $(".img").css({ width: size * 560 });

    //var size = $(".banner-box .img li").size();

    for (var j = 0; j < (size - 1); j++) {
        $(".banner-box .num").append("<li></li>");
    }
    $(".banner-box .num li").first().addClass("on");

    //鼠标滑过banner显示按钮
    $(".banner-box").hover(function() {
        $(".banner-box .btn").stop().fadeIn()
    }, function() {
        $(".banner-box .btn").stop().fadeOut()
    });
    //鼠标滑过圆点
    $(".banner-box .num li").hover(function() {
        var index = $(this).index();
        $(".banner-box .img").stop().animate({ left: -index * 560 }, 800);
        $(this).addClass("on").siblings().removeClass("on");
    });
    //定时器
    var t = setInterval(function() {
        i++
        mover();
    }, 5000);
    //定时器鼠标移入banner-box停止
    $(".banner-box").hover(function() {
            clearInterval(t);
        }, function() {
            t = setInterval(function() {
                i++
                mover();
            }, 5000);
        })
    //鼠标点击左边
    $("#banner-left").click(function() {
        i--
        mover();
    });
    //鼠标点击右边
    $("#banner-right").click(function() {
        i++
        mover();
    });

    function mover() {
        if (i == size) {
            $(".banner-box .img").css({ left: 0 });
            i = 1;
        };
        if (i == -1) {
            $(".banner-box .img").css({ left: -(size - 1) * 560 });
            i = size - 2;
        };
        $(".banner-box .img").stop().animate({ left: -i * 560 }, 800);
        if (i == size - 1) {
            $(".banner-box .num li").eq(0).addClass("on").siblings().removeClass("on");
        } else {
            $(".banner-box .num li").eq(i).addClass("on").siblings().removeClass("on");
        };
    };

    //banner-box-bottom
    var clo3 = $(".lesson-list li").eq(2).clone();
    var clo4 = $(".lesson-list li").eq(3).clone();
    var clo5 = $(".lesson-list li").eq(4).clone();

    var clo1 = $(".lesson-list li").eq(0).clone();
    var clo2 = $(".lesson-list li").eq(1).clone();
    var clo33 = $(".lesson-list li").eq(2).clone();

    $(".lesson-list").prepend(clo3, clo4, clo5);
    $(".lesson-list").append(clo1, clo2, clo33);

    $(".swiper-slide").width(560 / 3);
    var swiWid = $(".swiper-slide").width();
    var lessonSize = $(".swiper-slide").size()

    $(".lesson-list").width(swiWid * lessonSize);
    $(".swiper-slide").height(100); //这个声明有点多余


    $(".lesson-list").css({ "height": "100", "transition-duration": "0s", "-webkit-transition-duration": "0s" });
    $(".lesson-list").css({ "transform": "translate3d(-560px, 0px, 0px)", "-webkit-transform": "translate3d(-560px, 0px, 0px)" });

    //鼠标滑过banner_bottom显示左右按钮
    $("#banner_box_bottom").hover(function() {
        $(".btn_bottom").stop().fadeIn()
    }, function() {
        $(".btn_bottom").stop().fadeOut()
    });


    // $("#banner-btn-left").mouseover(function(){
    // 	$(this).addClass("btn_bottom_left2");
    // });
    // $("#banner-btn-left").mouseout(function(){
    // 	$(this).removeClass("btn_bottom_left2");
    // });

    //左按钮
    $("#banner-btn-left").hover(function() {
            $(this).addClass("btn_bottom_left2");
        }, function() {
            $(this).removeClass("btn_bottom_left2");
        })
    //右按钮
    $("#banner-btn-right").hover(function() {
        $(this).addClass("btn_bottom_right2");
    }, function() {
        $(this).removeClass("btn_bottom_right2");
    })

    var n = 3
    
    //var m = 560

    //点击左边
    $("#banner-btn-left").click(function() {
    	n--;
    	if (n==0) {
    		Le_lf = n*$(".swiper-slide").width()+'px';
    		$(".lesson-list").css({"-webkit-transition-duration":"0.3s","transition-duration":"0.3s"});
    		$(".lesson-list").css({"-webkit-transform":"translate3d(-"+Le_lf+",0px,0px)","transform":"translate3d(-"+Le_lf+",0px,0px)"});
    	};
    	if (n==-1) {
    		n = 5
    		Le_lf = n*$(".swiper-slide").width() +'px';
    		$(".lesson-list").css({"-webkit-transition-duration":"0s","transition-duration":"0s"});
    		$(".lesson-list").css({"-webkit-transform":"translate3d(-"+Le_lf+",0px,0px)","transform":"translate3d(-"+Le_lf+",0px,0px)"});

    		n--
    		Le_lf = n*$(".swiper-slide").width() +'px';
    		$(".lesson-list").css({"-webkit-transition-duration":"0.3s","transition-duration":"0.3s"});
    		$(".lesson-list").css({"-webkit-transform":"translate3d(-"+Le_lf+",0px,0px)","transform":"translate3d(-"+Le_lf+",0px,0px)"});
    	};
    	var Le_lf = n*parseFloat(560 / 3)+'px';
    	$(".lesson-list").css({"-webkit-transition-duration":"0.3s","transition-duration":"0.3s"});
        $(".lesson-list").css({"-webkit-transform":"translate3d(-"+Le_lf+",0px,0px)","transform":"translate3d(-"+Le_lf+",0px,0px)"});
        
    });

    
    //点击右边
    $("#banner-btn-right").click(function() {
    	//var show = parseFloat(560 / 3);
    	n++;
    	if (n==8) {
    		
    		Le_lf = n*$(".swiper-slide").width()+'px';
    		$(".lesson-list").css({"-webkit-transition-duration":"0.3s","transition-duration":"0.3s"});
    		$(".lesson-list").css({"-webkit-transform":"translate3d(-"+Le_lf+",0px,0px)","transform":"translate3d(-"+Le_lf+",0px,0px)"});	
    	};
    	if (n==9) {
    		n = 3
    		Le_lf = n*$(".swiper-slide").width() +'px';
    		$(".lesson-list").css({"-webkit-transition-duration":"0s","transition-duration":"0s"});
    		$(".lesson-list").css({"-webkit-transform":"translate3d(-"+Le_lf+",0px,0px)","transform":"translate3d(-"+Le_lf+",0px,0px)"});

    		n++
    		Le_lf = n*$(".swiper-slide").width() +'px';
    		$(".lesson-list").css({"-webkit-transition-duration":"0.3s","transition-duration":"0.3s"});
    		$(".lesson-list").css({"-webkit-transform":"translate3d(-"+Le_lf+",0px,0px)","transform":"translate3d(-"+Le_lf+",0px,0px)"});
    	};
    	var Le_lf = n*parseFloat(560 / 3)+'px';
    	$(".lesson-list").css({"-webkit-transition-duration":"0.3s","transition-duration":"0.3s"});
        $(".lesson-list").css({"-webkit-transform":"translate3d(-"+Le_lf+",0px,0px)","transform":"translate3d(-"+Le_lf+",0px,0px)"});        
    });


    //banner右下

    $("li[node-type='recommend-move-event']").on("mouseover",function(){
            $(".start-list").hide()
            $(".move-list").show()
    })

    $(".move-list").on("mouseleave",function(){
            $(".start-list").show()
            $(".move-list").hide()
            //$("li[node-type='recommend-move-event']").off("mouseover");


    })

    $(".type-list li").mouseover(function(){
        $(".type-list li").removeClass("active")
        $(this).addClass("active")

        $(".content .tab-content").css("display","none")

        $(".content .tab-content").eq($(this).index()).css("display","block")
    })


    

    











});
