$(window).ready(function () {
    //网页打开公告下滑出现
    $('.message').hide();
    $('.message').slideDown(500);


    //头像的出现隐藏
    $('.faceImg').mouseover(function () {
        $('.faceImg').hide(450,function () {
            $('.faceImg').show(450);
        });
    })


    //鼠标移动nav变大
    $('.nav a').mouseenter(function () {
        $(this).animate({fontSize: '20px',},100);
    })
    //鼠标移开nav缩小
    $('.nav a').mouseleave(function () {
        $(this).animate({fontSize:'18px'},100);
    })
    //鼠标移动右边图片变大
    $('.listImg img').mouseover(function () {
        $(this).animate({width:'+=20px'
        ,height:'+=20px',margin:'-=10px'},100);
    })
    //鼠标移动右边图片变小
    $('.listImg img').mouseout(function () {
        $(this).animate({width:'-=20px'
            ,height:'-=20px',margin:'+=10px'},100);
    });
    $('.getHub img').mouseenter(function () {
        $(this).animate({width:'+=4px',height:'+=4px',margin:'-=2px'},200);
    })
    $('.getHub img').mouseleave(function () {
        $(this).animate({width:'-=4px',height:'-=4px',margin:'+=2px'},200);
    })

    //TAG标签鼠标移动变大缩小
    $('.details span a').mouseover(function () {
        $(this).animate({margin:'0 0 0 +=20px'},200);
    }).mouseout(function () {
        $(this).animate({margin:'0 0 0 -=20px'},200);
    })

    //点击meun弹出
    $('.menuimg').click(function () {
        $('.nav').toggle(200);
    })
    
})