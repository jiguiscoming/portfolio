$(function(){

    // menu color change by scroll height
    $(window).scroll(function () {
    var height = $(document).scrollTop();
    //console.log(height);

     if(height < 732.4444580078125){
         // home
         $("#home-link").css("color", "#346751");
         $("#about-link").css("color", "white");
         $("#project-link").css("color", "white");
     } else if(height < 1648){
         //about
         $("#home-link").css("color", "white");
         $("#about-link").css("color", "#346751");
         $("#project-link").css("color", "white");
     } else if(height < 4000){
         //project
         $("#home-link").css("color", "white");
         $("#about-link").css("color", "white");
         $("#project-link").css("color", "#346751");
     }

    })


    // filp my img
    let filp = true;
    $("#me-img").click(function(){
        if(filp){
            $(".emoji-img").css("opacity", "0").stop().attr("src", "img/pic.jpg").animate({opacity:1},2000);
        }else{
            $(".emoji-img").css("opacity", "0").stop().attr("src", "img/me.gif").animate({opacity:1},2000);
        }
        filp = !filp;
    });


    //마우스 move 이벤트가 발생하면 
     $("#me-img").mousemove(function(e){

        //console.log($(".img-tooltip").css("display"));

         //console.log("e.clientX : "+e.clientX);
         //console.log("e.clientY : "+e.clientY);

        //e.clientX의 값이 현재 위치의 마우스 포인터의 x 좌표 값
        //마우스를 움직이면 tooltipTxt(툴팁 박스)의 왼쪽 좌표를 마우스 포인터의 현재 x좌표로 지정
        $(".img-tooltip").css("display", "block");
        $(".img-tooltip").css("left", (e.clientX + 5) + "px");
        $(".img-tooltip").css("top", (e.clientY + 5) + "px");
        //툴팁 박스의 높이를 지정
        //툴팁 박스 안에 표시될 글자를 마우스의 현재 위치 x 좌표 값
        //tooltipTxt.innerHTML = "ID : " + e.clientX;
    });
    $("#me-img").mouseout(function(){
        $(".img-tooltip").css("display", "none"); 
    });

    let i;
    let slideIndex = 1;
    let n;

    $(".prev").click(function(){
      n = -1;
      slideIndex += n;
      n = slideIndex;
      let slides = $(this).siblings();
      if (n > slides.length - 1) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length - 1}
      for (i = 0; i < slides.length - 1; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex-1].style.display = "block";
    })

    $(".next").click(function(){
      n = 1;
      slideIndex += n;
      n = slideIndex;
      let slides = $(this).siblings();
      if (n > slides.length - 1) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length - 1}
      for (i = 0; i < slides.length-1; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex-1].style.display = "block";
    })



});


// let slideIndex = 1;
// showSlides(slideIndex);

// //Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }


// function showSlides(n) {
//   console.log(n);
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//     console.log(i);
//   }
//   console.log(slideIndex);
//   slides[slideIndex-1].style.display = "block";
// }
