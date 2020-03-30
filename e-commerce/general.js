/*Slide show  */

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length){
    slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

/*Filter */
 /*Adding 250px of margin when opening the side bar*/
 function openSlideMenu(){
  document.getElementById('menu').style.width = '250px' ; 
  document.getElementById('content').style.marginLeft = '250px' ;
}

function closeSlideMenu(){
  document.getElementById('menu').style.width = '0px' ; 
  document.getElementById('content').style.marginLeft = '0px' ;
}