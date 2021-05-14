
let slide = document.querySelectorAll(".slider_container > .slide");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let count = 0;
showSlides(count);

prev.onclick = prevSlide;
next.onclick = nextSlide;


function showSlides(n){
  for(let i=0; i<slide.length; i++){
    slide[i].style.display = "none";
  }
  slide[n].style.display = "block";
}

function prevSlide(){
  if(count > 0){
    count -= 1;
  }else{
    count = slide.length-1;
  }
  showSlides(count);
  
}

function nextSlide(){
  if(count < slide.length-1){
    count += 1;
  }else{
    count = 0;
  }
  showSlides(count);
}



