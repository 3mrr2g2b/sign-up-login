 
$(document).ready(function(){
  $(".sign_in").click(function(){
    //$(".box_sign_up").css("margin-left","100%");
    $(".box_sign_up").hide(500);
    $(".box_sign_in").show(500);
    $(".sign_in").css("background","#7C4DFF");
    $(".sign_up").css("background","#fff");
    $(".sign_up").css("box-shadow","0px 0px 0px #fff");
    $(".sign_in").css("box-shadow","5px 5px 50px #b3b3b3");
    $(".con").css("height","280px");
    $(".box_sign_in").css("height","280px");
    
  });
  $(".sign_up").click(function(){
    //$(".box_sign_up").css("margin-left","100%");
    $(".box_sign_in").hide(500);
    $(".box_sign_up").show(500);
    $(".sign_up").css("background","#7C4DFF");
    $(".sign_in").css("background","#fff");
    $(".sign_in").css("box-shadow","0px 0px 0px #fff");
    $(".sign_up").css("box-shadow","5px 5px 50px #b3b3b3");
    $(".con").css("height","400px");
    $(".box_sign_up").css("height","400px");
    //$(".box_sign_in").css("margin-left","100%");
    
  });
});
	//code of show page loader
		var page;
        var content = document.getElementById("circle");
		 window.onload= function(){
        page = setTimeout(showPage, 4000);
    };
      function  showPage() {
        $("#main_circle").hide(100);
        $(".con").fadeIn(500);
  }
  
