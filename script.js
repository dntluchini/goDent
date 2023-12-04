// Gallery slides

document.addEventListener("DOMContentLoaded", function () {
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



// Change active header 

const homeH = document.getElementById("homeHeader");
const staffH = document.getElementById("staffHeader");
const faqH = document.getElementById("faqHeader");
const contactH = document.getElementById("contactHeader");
const vecHeader = document.querySelectorAll(".info");


vecHeader.forEach(headerElement => {
  headerElement.addEventListener("click", () => {


    vecHeader.forEach(btn => {
      btn.classList.remove("active");
    });
    headerElement.classList.add("active");
  });
});


// Show FAQ anwers 
const faqs = document.querySelectorAll(".faqSons");
const btnShow = document.querySelectorAll(".btnFaq");
const answers = document.querySelectorAll(".answer");

btnShow.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    answers[index].classList.toggle("visible");
    const faq = faqs[index];
    if (faq.style.maxHeight === "180px") {
      faq.style.maxHeight = null;
      btn.textContent = "+"; // Cambiar el texto del botón a "Mostrar +"
    } else {
      faq.style.maxHeight = "180px";
      btn.textContent = "-"; // Cambiar el texto del botón a "Ocultar -"
    }
  });
});
