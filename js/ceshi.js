gsap.to('.word', {
    duration: 1,
    repeat: 2,
    yoyo: true,
    delay: 0.5,
    ease: 'power1.out',
});
const container = document.querySelector('.sequence-container');
const images = document.querySelectorAll('.sequence-image');
let currentIndex = 0;
 
function playSequence() {
  images[currentIndex].classList.add('active');
  
  setTimeout(() => {
    images[currentIndex].classList.remove('active');
    
    if (currentIndex < images.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    
    playSequence();
  }, 100); // 每帧间隔100毫秒
}
 
container.addEventListener('mouseenter', function() {
  playSequence();
});
 
container.addEventListener('mouseleave', function() {
  images[currentIndex].classList.add('active'); // 恢复到第一帧
});