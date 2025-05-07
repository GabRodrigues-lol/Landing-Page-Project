//JS para SmartFitBand

document.addEventListener("DOMContentLoaded", function () {
    console.log("Página carregada.");
    document.addEventListener("DOMContentLoaded", function () {
      const form = document.getElementById("contactForm");
    });
    
  });
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      popup.style.display = "flex"; 
    });
  
    closePopup.addEventListener("click", function () {
      popup.style.display = "none";
    });
  });
  

