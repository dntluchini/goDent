// Gallery slides

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
  
// Open modal
const fulImgBox = document.getElementById("fulImgBox");
const fulImg = document.getElementById("fulImg");

function openFullImg(reference) {
  fulImgBox.style.display = "flex";
  fulImg.src = reference;
}

function closeImg() {
  fulImgBox.style.display = "none";
}

// No gallery

window.addEventListener('DOMContentLoaded', function() {
    var check = document.getElementById('check');
    var gallery = document.querySelector('.gallery');
  
    check.addEventListener('change', function() {
      if (this.checked) {
        gallery.style.display = 'none';
      } else {
        gallery.style.display = 'block';
      }
    });
  });

  
// Change active header 

const homeH = document.getElementById("homeHeader");
const staffH = document.getElementById("staffHeader");
const faqH = document.getElementById("faqHeader");
const contactH = document.getElementById("contactHeader");
const vecHeader = document.querySelectorAll(".info");
const titleElement = document.getElementById("tittleH");

vecHeader.forEach(headerElement => {
    headerElement.addEventListener("click", () => {

        const newTitle = headerElement.textContent;
        titleElement.textContent = newTitle;
        vecHeader.forEach(btn => {
            btn.classList.remove("active");
        });
        headerElement.classList.add("active");
    });
});
