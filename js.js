define("index:widget/focuswork/focuswork.js",
function(o, e, r) {
    var i = {
        mySwiper: {},
        bindEvent: function() {
            $(".focuswork-wrap").hover(function() {
                i.mySwiper.stopAutoplay(),
                $("#work-left,#work-right").fadeIn()
            },
            function() {
                i.mySwiper.startAutoplay(),
                $("#work-left,#work-right").fadeOut()
            }),
            $("#work-left").click(function() {
                i.mySwiper.swipePrev()
            }),
            $("#work-right").click(function() {
                i.mySwiper.swipeNext()
            }),
            i.mouseStyle("#work-left", "arrow-left", "arrow-left2"),
            i.mouseStyle("#work-right", "arrow-right", "arrow-right2")
        },
        bindSlide: function() {
            i.mySwiper = new Swiper(".focuswork-wrap", {
                loop: !0,
                slidesPerView: 3
            })
        },
        mouseStyle: function(o, e, r) {
            $(o).mouseover(function() {
                $(o).removeClass(e).addClass(r)
            }),
            $(o).mouseout(function() {
                $(o).removeClass(r).addClass(e)
            })
        }
    },
    t = {
        init: function() {
            i.bindEvent(),
            i.bindSlide()
        }
    };
    r.exports = t
});