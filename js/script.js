$(document).ready(function(){
    
    var nav = $('#gnb');
    var navBtn = $('#gnb .nav_button a');
        
    navBtn.click(function(e){
        e.preventDefault();
        
        if ($(window).width() < 600) {
            // 디바이스의 width가 600 이하일때 적용
            if ($('.nav_button').hasClass('on')){
                // .nav_button에 on 클래스가 있을 경우 실행
                $('.nav').delay(800).animate({
                    "width":"0",
                    "opacity":"0"},800);
                
                $('.nav ul li a').delay(800).css({
                    "display":"none"});
                
                $('#gnb .nav_img .nav_img_front').animate({
                    "opacity":"0"},800);

                $('.nav_img_back').removeClass('on');
                $('.nav_button').removeClass('on');

                }else {
                // .nav_button 에 on 클래스가 없을 경우 실행
                    $('.nav').animate({
                    "width":"100%",
                    "opacity":"1"},800);
                    
                $('.nav ul li a').css({
                    "display":"block"});
                    
                $('#gnb .nav_img .nav_img_front').animate({
                    "opacity":"1"},800);

                $('.nav_img_back').addClass('on');
                $('.nav_button').addClass('on');
                };
            // 디바이스의 width가 600 이하일때 적용 마침
            
        } else if($(window).width() < 960) {
            // 디바이스의 width가 960 이하일때 적용
            if ($('.nav_button').hasClass('on')){
                // .nav_button에 on 클래스가 있을 경우 실행
                $('.nav').delay(800).animate({
                    "width":"0",
                    "opacity":"0"},800);
                
                $('.nav ul li a').delay(800).css({
                    "display":"none"});
                
                $('.nav_img').animate({
                    "width":"0",
                    "opacity":"0"},800);
                
                $('#gnb .nav_img .nav_img_front').animate({
                    "opacity":"0"},800);
                
                $('#gnb .nav_img .nav_img_front span i').animate({
                    "opacity":"0",
                    "top":"100px"},800);

                $('.nav_img_back').removeClass('on');
                $('.nav_button').removeClass('on');

                }else {
                // .nav_button에 on 클래스가 없을 경우 실행
                    $('.nav').animate({
                    "width":"30%",
                    "opacity":"1"},800);
                    
                $('.nav ul li a').css({
                    "display":"block"});
                    
                $('.nav_img').delay(800).animate({
                    "left":"40%",
                    "width":"100%",
                    "opacity":"1"},800);
                    
                $('#gnb .nav_img .nav_img_front').delay(1600).animate({
                    "opacity":"1"},800);
                    
                $('#gnb .nav_img .nav_img_front span .subname_01').delay(1800).animate({
                    "opacity":"1",
                    "top":"0"},800);
                    
                $('#gnb .nav_img .nav_img_front span .subname_02').delay(2000).animate({
                    "opacity":"1",
                    "top":"0"},800);
                    
                $('#gnb .nav_img .nav_img_front span .subname_03').delay(2200).animate({
                    "opacity":"1",
                    "top":"0"},800);
                    
                $('#gnb .nav_img .nav_img_front span .subname_04').delay(2400).animate({
                    "opacity":"1",
                    "top":"0"},800);
                    
                $('#gnb .nav_img .nav_img_front span .subname_05').delay(2600).animate({
                    "opacity":"1",
                    "top":"0"},800);
                    
                $('#gnb .nav_img .nav_img_front span .subname_06').delay(2800).animate({
                    "opacity":"1",
                    "top":"0"},800);
                    
                $('#gnb .nav_img .nav_img_front span .subname_07').delay(3000).animate({
                    "opacity":"1",
                    "top":"0"},800);
                    
                $('#gnb .nav_img .nav_img_front span .subname_08').delay(3200).animate({
                    "opacity":"1",
                    "top":"0"},800);
                    
                $('#gnb .nav_img .nav_img_front span .subname_09').delay(3400).animate({
                    "opacity":"1",
                    "top":"0"},800);
                    
                $('#gnb .nav_img .nav_img_front span .subname_10').delay(3600).animate({
                    "opacity":"1",
                    "top":"0"},800);
                $('#gnb .nav_img .nav_img_front span .subname_11').delay(3800).animate({
                    "opacity":"1",
                    "top":"0"},800);

                $('.nav_img_back').addClass('on');
                $('.nav_button').addClass('on');
                };
                // 디바이스의 width가 960 이하일때 적용 마침
            
        } else if($(window).width() > 960){
            // 디바이스의 width가 960 이상일때 적용
            if ($('.nav_button').hasClass('on')){
            // .nav_button에 on 클래스가 있을 경우 실행
            $('.nav').delay(800).animate({
                "width":"0",
                "opacity":"0"},800);
                
            $('.nav ul li a').delay(800).css({
                "display":"none"});
                
            $('.nav_img').animate({
                "width":"0",
                "opacity":"0"},800);
                
            $('#gnb .nav_img .nav_img_front').delay(1600).animate({
                "opacity":"0"},800);
                
            $('#gnb .nav_img .nav_img_front span i').delay(1600).animate({
                    "opacity":"0",
                    "top":"100px"},800);

            $('.nav_img_back').removeClass('on');
            $('.nav_button').removeClass('on');

            }else {
            // .nav_button에 on 클래스가 없을 경우 실행
                $('.nav').animate({
                "width":"20%",
                "opacity":"1"},800);
                
            $('.nav ul li a').css({
                "display":"block"});
                
            $('.nav_img').delay(800).animate({
                "left":"30%",
                "width":"100%",
                "opacity":"1"},800);
                
            $('#gnb .nav_img .nav_img_front').delay(1600).animate({
                "opacity":"1"},800);
                
            $('#gnb .nav_img .nav_img_front span .subname_01').delay(1800).animate({
                    "opacity":"1",
                    "top":"0"},800);
                
                $('#gnb .nav_img .nav_img_front span .subname_02').delay(2000).animate({
                    "opacity":"1",
                    "top":"0"},800);
                
                $('#gnb .nav_img .nav_img_front span .subname_03').delay(2200).animate({
                    "opacity":"1",
                    "top":"0"},800);
                
                $('#gnb .nav_img .nav_img_front span .subname_04').delay(2400).animate({
                    "opacity":"1",
                    "top":"0"},800);
                
                $('#gnb .nav_img .nav_img_front span .subname_05').delay(2600).animate({
                    "opacity":"1",
                    "top":"0"},800);
                
                $('#gnb .nav_img .nav_img_front span .subname_06').delay(2800).animate({
                    "opacity":"1",
                    "top":"0"},800);
                
                $('#gnb .nav_img .nav_img_front span .subname_07').delay(3000).animate({
                    "opacity":"1",
                    "top":"0"},800);
                
                $('#gnb .nav_img .nav_img_front span .subname_08').delay(3200).animate({
                    "opacity":"1",
                    "top":"0"},800);
                
                $('#gnb .nav_img .nav_img_front span .subname_09').delay(3400).animate({
                    "opacity":"1",
                    "top":"0"},800);
                
                $('#gnb .nav_img .nav_img_front span .subname_10').delay(3600).animate({
                    "opacity":"1",
                    "top":"0"},800);
                $('#gnb .nav_img .nav_img_front span .subname_11').delay(3800).animate({
                    "opacity":"1",
                    "top":"0"},800);
                
            $('.nav_img_back').addClass('on');
            $('.nav_button').addClass('on');
            };
            // 디바이스의 width가 960 이상일때 적용 마침
        };
    });
        
    var h;
        
    $(window).resize(function(){
        var h = $(window).height();

        $('#section01').css({ height : h });

    });

    $(window).trigger('resize');

    // 윈도우 리사이즈시 section01의 height값 100vh에 맞춰 강제 적용
    
    var navi = $('#gnb .nav ul li a');
    var contents = $('#main > div');
        
    navi.click(function(){
        $('.nav').delay(800).animate({
            "width":"0",
            "opacity":"0"},800);
        
        $('.nav ul li a').delay(800).css({
            "display":"none"});
        
        $('.nav_img').animate({
            "width":"0",
            "opacity":"0"},800);
        
        $('#gnb .nav_img .nav_img_front').delay(1600).animate({
            "opacity":"0"},800);
        
        $('#gnb .nav_img .nav_img_front span i').animate({
            "opacity":"0",
            "top":"100px"},800);
        
        $('.nav_button').removeClass('on');
    });
    
    // nav 메뉴 클릭 시 메뉴가 닫히는 스크립트
    
    $('.mouse_down a').click(function(e){
        e.preventDefault();
        
        var mouseContent = $('#section02');
        var mouseMoveContent = mouseContent.offset().top;
        
        $('html, body').animate({ scrollTop : mouseMoveContent },800);
    });
    
    // 상단 마우스 아이콘 클릭 시 스크롤 이벤트 스크립트
    
    var cont02 = $('#section02');
    var cont02Offset = cont02.offset().top;
    var cont02BoxLine = $('#section02 .box_line');
    
    $(window).scroll(function(){
        var winScroll = $(this).scrollTop();
        
        if (winScroll > cont02Offset - 400){
            cont02BoxLine.addClass('on');
        };
    });
    
    // section02 높이에 닿았을 경우 클래스 추가 스크립트
    
    var portImgBox = $('.port_box .port_img');
    
    portImgBox.mouseover(function(){
        var portImg = $(this).find('img');
        
        portImg.each(function(){
            $(this).stop().animate({"bottom":"0"},3000);
            $(this).css({"top":""});
        });
    });
    
    portImgBox.mouseleave(function(){
        var portImg = $(this).find('img');
        
        portImg.each(function(){
            $(this).stop().animate({"top":"0"},3000);
            $(this).css({"bottom":""});
        });
    });
    
    //  포트폴리오 마우스오버시 스크롤 이벤트 스크립트
    
    var formBtn = $('.cont_box .cont_letter .button');
    var formBox = $('.cont_box .cont_letter .form_box');
    
    formBtn.click(function(){
        
        formBox.each(function(){
        var formVal = $(this).val();
        
        if (!formVal){
            $(this).addClass('error');
            $('.letter').attr("action","");
        } else {
            $(this).removeClass('error');
            $('.letter').attr("action","https://formspree.io/since_1996@naver.com");
        }
        });
    });
    
    formBox.focusout(function(){
        
        formBox.each(function(){
        var formVal = $(this).val();
        
        if (!formVal){
            $(this).addClass('error');
        } else {
            $(this).removeClass('error');
        }
        });
    });
    
    // 폼 입력, 포커스 시 값이 없을 경우 에러 표시 스크립트
    
    var top = $('.top_btn a');
    
    top.click(function(e){
        e.preventDefault();
        
        $('html, body').animate({scrollTop : 0}, 800);
    });

    // top 버튼 클릭시 위로 가기 애니메이션 스크립트
    
    var scrollAnimation01 = $('.about_box .about_left');
    var scrollAnimation02 = $('.about_box .about_right');
    var scrollAnimation03 = $('.cont_box .cont_box_number');
    var scrollAnimation04 = $('.cont_box .cont_letter');

    $(window).scroll(function(){
        var winScroll = $(this).scrollTop();

        if(winScroll > scrollAnimation01.offset().top - 800) {
            scrollAnimation01.addClass('on');
        };
        if(winScroll > scrollAnimation02.offset().top - 800) {
            scrollAnimation02.addClass('on');
        }; 
        if(winScroll > scrollAnimation03.offset().top - 800) {
            scrollAnimation03.addClass('on');
        };
        if(winScroll > scrollAnimation04.offset().top - 800) {
            scrollAnimation04.addClass('on');
        };
    });
    
    // (PC화면에서만) 애니메이션 적용
    
    /* $($('#worklist > ul > li').get().reverse()).each(function(index){
        var listnb = $(this);

        listnb.click(function(index){
            //console.log(listnb);
            $('.open').show();
            $('.open .img').html('<img src="./img/list/a/' + index + '.png">');
        });

        $('.open .close').click(function(){
            $('.open').hide();
        });
    });
    
    // 작업물 목록을 클릭하면 이미지가 역순으로 표시되는 스크립트 */
});