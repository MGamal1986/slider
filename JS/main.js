$(function(){
    
    
    var numOfImg = $('.galary .thumb').children().length,
        marginBetweenThmb = '0.5',
        totalMargin = (numOfImg - 1) * marginBetweenThmb,
        widthOfImgThumb = (100 - totalMargin) / numOfImg;
    $('.galary .thumb img').css({
        'width': widthOfImgThumb + '%',
        'margin-right' : marginBetweenThmb + '%'
    }).last().css({
        'margin-right': 0
    });
    
    
    console.log(12);
    
    $('.galary .thumb img').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.master-img img').hide().attr('src',$(this).attr('src')).fadeIn(500);
    });
    
    $('.galary .master-img .fa-chevron-left').click(function(){
        if($('.galary .thumb img.selected').is(':first-child')){
            
            $('.galary .thumb img:last-child').click();
            
        }else{
            $('.galary .thumb img.selected').prev().click();
        }
    });
    
    $('.galary .master-img .fa-chevron-right').click(function(){
        if($('.galary .thumb img.selected').is(':last-child')){
            
            $('.galary .thumb img').eq(0).click();
            
        }else{
            $('.galary .thumb img.selected').next().click();
        }
    });
});