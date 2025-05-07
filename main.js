//JS para SmartFitBand

document.addEventListener("DOMContentLoaded", function () {
    console.log("Página carregada.");

  });

$(document).ready(function(){
  $('form').on('submit', function(event){
      event.preventDefault();
      const $mensagemSucesso = $(
'#mensagem-sucesso');

        setTimeout(function(){
          $mensagemSucesso.removeClass(
'd-none');
            setTimeout(function(){
              $mensagemSucesso.addClass(
'd-none');

            }, 3000);
        }, 1500);
  });
});
  