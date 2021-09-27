
//Handling mouseenter and mouseleave events
$('#right-arrow').on('mouseenter', function(){
    $('#right-arrow i').css('color','lightskyblue');
});
$('#right-arrow').on('mouseleave', function(){
    $('#right-arrow i').css('color', 'lightgray');
    })
$('#left-arrow').on('mouseenter', function(){
    $('#left-arrow i').css('color', 'lightskyblue');
});
$('#left-arrow').on('mouseleave', function(){
    $('#left-arrow i').css('color', 'lightgray');
})


//-----Making slider work------------------
$('#right-arrow').click(function() {
    direction = 1;
    mainWidth = $('.slider-1 .img:nth-child(7)').width();
    $('.slider-1').css('transform', `translate(calc(${mainWidth}px - 2.35%))`);
    $('.slider-2').css('transform', `translate(${-mainWidth}px)`);
});

$('#left-arrow').click(function() {
    direction = -1;
    mainWidth = $('.slider-1 .img:nth-child(7)').width();
    $('.slider-1').css('transform', `translate(calc(${-mainWidth}px - 2.35%))`);
    $('.slider-2').css('transform', `translate(${mainWidth}px)`);
});

$('.slider-1').on('transitionend', function() {
    if(direction === -1){
        $('.slider-1').append($('.slider-1 .img:first-child'));
    } else if(direction === 1){
        $('.slider-1').prepend($('.slider-1 .img:last-child'));
    }
    $('.slider-1').css({
        transition: 'none',
        transform: 'translate(-2.35%)'
    });
    setTimeout(function() {
        $('.slider-1').css('transition', 'all 0.5s');
    })
})

$('.slider-2').on('transitionend', function() {
    if(direction === 1){
        $('.slider-2').append($('.slider-2 .img:first-child'));
    } else if(direction === -1){
        $('.slider-2').prepend($('.slider-2 .img:last-child'));
    }
    $('.slider-2').css({
        transition: 'none',
        transform: 'translate(0)'
    });
    setTimeout(function() {
        $('.slider-2').css('transition', 'all 0.5s');
    })
})