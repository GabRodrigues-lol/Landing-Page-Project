//JS para SmartFitBand

document.addEventListener("DOMContentLoaded", function () {
    console.log("Página carregada.");
    document.addEventListener("DOMContentLoaded", function () {
      const form = document.getElementById("contactForm");
    
      form.addEventListener("submit", function (e) {
        e.preventDefault(); // Impede o recarregamento da página
    
        // Exibe um pop-up com a mensagem de sucesso
        alert("Cadastro feito com sucesso");
      });
    });
    
  });
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // impede o envio padrão
      popup.style.display = "flex"; // mostra o pop-up
    });
  
    closePopup.addEventListener("click", function () {
      popup.style.display = "none"; // esconde o pop-up
    });
  });
  

