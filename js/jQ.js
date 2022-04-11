$(function(){
    $(".topbar .download").hover(function(){
        $(this).children(".erweima").stop().show()
    },function(){
        $(this).children(".erweima").stop().hide()
    })

    $(".topbar .download .erweima").hover(function(){
        $(this).stop().show()
    },function(){
        $(this).stop().hide()
    })

    $(".topbar .shopcar").hover(function () {
        $(this).css("backgroundColor","#fff")
        $(this).css("color","#ff6700")
    },function () {
        $(this).css("backgroundColor","#424242")
        $(this).css("color","#b0b0b0")
    })

    $(".topnav .nav-item").hover(function () {
        $(this).children(".item-la").stop().slideDown(200)
    },function () {
        $(this).children(".item-la").stop().slideUp(200)
    })
})