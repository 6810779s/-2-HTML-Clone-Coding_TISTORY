let slides = document.querySelector('.slides');
slide_info = document.querySelectorAll('.slides li');
currentIdx = 0;
slideCount = slide_info.length;
prevBtn = document.querySelector('.prev_info');
nextBtn = document.querySelector('.next_info');
slideWidth = 300;
slideMargin = 30;

slides.style.width = (slideWidth + slideMargin)*slideCount - slideMargin + "px";

function moveSlide(num){
  slides.style.left = -num * 330 + "px";
  currentIdx = num; 
}

prevBtn.addEventListener('click', function(){
  if(currentIdx !== 0) moveSlide(currentIdx - 1);
});

nextBtn.addEventListener('click',function(){
  if(currentIdx !== slideCount-1) moveSlide(currentIdx + 1);
});