function validaEmail(inputText) {
  const formatoEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const mensagem = document.getElementById("mensagem");
  const userEmail = document.getElementById("userEmail").value;
  
  if(inputText.value.match(formatoEmail)) {
    alert("E-mail enviado com sucesso! Em breve entraremos em contato");
    mensagem.innerHTML="Seja bem vindx:" + userEmail;
    document.formulario.email.focus();
  } else {
    alert("Digite um e-mail válido");
    document.formulario.email.focus();
    return false;
  }
}

function emConstrucao() {
   alert("Página em construção...");
}