$(function(){
	
	//这里是下拉菜单
	$("#pullDown").bind('click',function(){
		if($("#pull-select").is(":hidden")){
			$('#pull-select').css("display","block");
			$("#pullDown img").css("transform","rotate(180deg)")
		}else{
			$('#pull-select').css("display","none");
			$("#pullDown img").css("transform","rotate(360deg)")
		}
		$("#pull-select").find('li').on("click",function(){
			$('#pull-down-span').html($(this).html());
		})
	});

	//这里是swiper轮播图
	var mySwiper = new Swiper ('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		spaceBetween: 10,
		centeredSlides: true,
		autoplay: 2500,
		autoplayDisableOnInteraction: false,
		loop:true,
    });

    //这里是倒计时
    function getTimes(){
    	var endTime = new Date('2017/03/10 13:48:00');
	    var nowTimw = new Date();
	    var t = endTime.getTime() - nowTimw.getTime();
	    var d = 0;
	    var h = 0;
	    var m = 0;
	    var s = 0;
	    if(t > 0){
	    	d = Math.floor(t/1000/60/60/24);
	    	h = Math.floor(t/1000/60/60%24);
	    	m = Math.floor(t/1000/60%60);
	    	s = Math.floor(t/1000%60);
	    };
	    $('#title-span1').html(d+"天");
	    $('#title-span2').html(h+"时");
	    $('#title-span3').html(m+"分");
	    $('#title-span4').html(s+"秒");
    }
   setInterval(getTimes,0);

   //加载更多
   // $(".more").on("click",function(){
   // 			$(".addpic").toggle("slow",function(){
   // 				$(".more h4").html("收起更多");
   // 			});

   // 	})
   var more = 1 ;
   $(".more").on("click",function(){
   		if( more == 1 ){
   			$(".addpic").slideDown();
   			$(".more h4").html("收起更多");
   			more = 2 ;
   		}else{
   			$(".addpic").slideUp();
   			$(".more h4").html("查看全部团购");
   			more = 1 ;
   		}
   });




});
