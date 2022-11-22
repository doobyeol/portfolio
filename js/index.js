//index.js
    $(function(){
        var btn = $('.hdrWrap .menu .icon'),
		lnb = $('.navWrap'),
        flag = true;
        
    btn.on('click',function(){
        
        if(flag){
            lnb.animate({marginLeft:0});
            flag=false;
        }else{
            lnb.animate({marginLeft: -380});
            flag=true;
        }
        
    });
        
    lnb.mouseleave(function(){
        lnb.animate({marginLeft : -380});
	});
     
});
    
    


//intro

$(function(){
    var play = $('.introWrap>.illust>.play'),
        stop = $('.introWrap>.illust>.stop'),
        btnB = $('.introWrap>.btnB'),
        btnA = $('.introWrap>.btnA'),
        intro = $('.introWrap'),
        txt = $('.introWrap>.txt');
    
    btnB.on('click',function(){
        stop.css({display : 'block'}),
            btnB.css({display : 'none'}),
            btnA.css({display : 'block'}),
            txt.css({display : 'none'}),
            intro.delay(6000).animate({marginTop: -100+'vh'});
    });
    
    txt.on('click',function(){
        stop.css({display : 'block'}),
            btnB.css({display : 'none'}),
            btnA.css({display : 'block'}),
            txt.css({display : 'none'}),
            intro.delay(6000).animate({marginTop: -100+'vh'});
    });
});





