//toggle
$(document).ready(function(){
	$(".toggle-btn").click(function(){
		$(".toggle1").toggle("slow");
	});
	$("button.toggle-btn").css({"color":"black", "border":"2px solid black"});
	
	$(".toggle-btn2").click(function(){
		$("img").toggle("slowly");
	});
});
//<button type="button" class="toggle-btn2"><span style="color:black"><b>Show me</b></span></button>

//slide photo
var slideIndex = 0;
showSlides();

function showSlides() {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) {
    	slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}
	for (i = 0; i < dots.length; i++) {
    	dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
	setTimeout(showSlides, 5000);
}

// When the user scrolls down 80px 
		window.onscroll = function() {scrollFunction()};

		function scrollFunction() {
		  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
			document.getElementById("header").style.padding = "10px 10px";
			document.getElementById("header").style.backgroundColor = "#000";
			document.getElementById("header").style.color = "#fff";
			document.getElementById("header").style.boxShadow = "2px 2px 0px 2px yellow";
		  } else {
			document.getElementById("header").style.padding = "15px 10px";
			document.getElementById("header").style.backgroundColor = "transparent";
			document.getElementById("header").style.color = "#fff";
			document.getElementById("header").style.boxShadow = "0px 0px 0px 0px transparent";
		  }
		}