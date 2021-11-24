$(function(){
    $('.dingwei').hover(function(){
        $(this).find(".fl").stop().slideDown(500);
    },function(){
        $(this).find(".fl").stop().slideUp(100);
    })
});

$(function(){
    $('.i-a').hover(function(){
        $(this).find("#no").stop().slideDown(500);
    },function(){
        $(this).find("#no").stop().slideUp(100);
    })
});

$(function(){
    $('._itm').hover(function(){
        $(this).find(".er").stop().slideDown(500);
    },function(){
        $(this).find(".er").stop().slideUp(100);
    })
});
$(document).ready(function(){
var ag=0;
$('.imgs').click(function(){
ag++;
$('.num').css({"display":"inherit"}).html(ag);

$('.click').fadeIn(200);
setTimeout(function(){
    $('.click').fadeOut(100);
},1000);
});
});