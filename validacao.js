function validarSenha() {
  let pwd = document.getElementById('pwd');
  let pwdconfirm = document.getElementById('pwdconfirm');
  if (pwd.value != pwdconfirm.value) {
    pwdconfirm.setCustomValidity("Senhas diferentes!");
    pwdconfirm.reportValidity();
    return false;
  } else {
    pwdconfirm.setCustomValidity("");
    return true;
  }
}