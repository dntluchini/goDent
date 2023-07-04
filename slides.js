document.addEventListener("DOMContentLoaded", function() {
    const img = document.querySelectorAll(".gallerygoDent img");
    const fulImg = document.getElementById("fulImg");
    let currentSrc = fulImg.src;
  
    function prevImg() {
      for (let i = 0; i < img.length; i++) {
        if (img[i].src === currentSrc) {
          const prevIndex = (i - 1 + img.length) % img.length;
          fulImg.src = img[prevIndex].src;
          currentSrc = img[prevIndex].src;
          break;
        }
      }
    }
  
    function nextImg() {
      for (let i = 0; i < img.length; i++) {
        if (img[i].src === currentSrc) {
          const nextIndex = (i + 1) % img.length;
          fulImg.src = img[nextIndex].src;
          currentSrc = img[nextIndex].src;
          break;
        }
      }
    }
  
    const rightArrow = document.querySelector(".arrow.right");
    const leftArrow = document.querySelector(".arrow.left");
  
    rightArrow.addEventListener("click", nextImg);
    leftArrow.addEventListener("click", prevImg);
  });
  