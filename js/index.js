$(function(){
    var bg=$(".bg");
    var right=$(".right");
    var color=["#CB70E0","#A68962","#FF8200","#FF2A6B","#67DC3A","#1BAEF8","#F7CA00"];
    bg.css("height",$(window).height());
    right.css({"width":$(window).width()-460+"px","height":$(window).height()});
    $(".lists .list").eq(0).addClass("active");
    $(".color-lists .color-list").eq(0).addClass("active");
    $(".search").on("click",function(){
        $(this).addClass("active");
        return false;
    });
    $("body").on("click",function(){
        $(".search").removeClass("active");
    });
    $(".color-list").on("click",".color",function(){
        var index=$(this).closest(".color-list").index();
        $(".color-list").removeClass("active");
        $(this).closest(".color-list").addClass("active");
        $(".xuan-content input").css("color",color[index]);
    })

    $(".xuanxiang").on("click",function(){
        $(".xuan-Box").toggle();
    })
    $(".xuan-box .quxiao").on("click",function(){
        $(".xuan-Box").css("display","none");
    })
});
