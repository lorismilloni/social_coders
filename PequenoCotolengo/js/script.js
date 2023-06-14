function validarCheckbox(event) {
var checkboxes = [
    document.getElementById("role-01"),
    document.getElementById("role-02"),
    document.getElementById("role-03"),
    document.getElementById("role-04"),
    document.getElementById("role-05"),
    document.getElementById("role-06"),
    document.getElementById("role-07"),
    document.getElementById("role-08"),
    document.getElementById("role-09"),
    document.getElementById("role-10"),
    document.getElementById("role-11"),
    document.getElementById("role-12"),
]

var algumCheckboxMarcado = false;

for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
        algumCheckboxMarcado = true;
        break;
    }
}

var checkbox = [
    document.getElementById("monday"),
    document.getElementById("tuesday"),
    document.getElementById("wednesday"),
    document.getElementById("thursday"),
    document.getElementById("friday"),
    document.getElementById("saturday"),
    document.getElementById("sunday"),
]

var algumCheckboxMarcado1 = false;

for (var i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
        algumCheckboxMarcado1 = true;
        break;
    }
}

const name = document.getElementById("name");
const address = document.getElementById("address");
const phone = document.getElementById("phone-number");
const ig = document.getElementById("social-ig");
const email = document.getElementById("social-email");
const birthday = document.getElementById("birthday-date");

switch (true) {
    case name.value === "" || !validarNome(name.value):
      alert("Por favor, escreva um nome válido");
      break;

    case  address.value === "" || !validarEndereco(address.value):
      alert("Por favor, escreva um endereço");
      break;

    case  phone.value === "" || !validarTelefone(phone.value):
      alert("Por favor, insira um telefone válido");
      break;

    case  ig.value === "" || !validarInstagram(ig.value):
      alert("Por favor, insira um nome de usuário válido");
      break;

    case  email.value === "" || !validarEmail(email.value):
      alert("Por favor, insira um e-mail válido");
      break;

    case  birthday.value === "" || !validarAniversario(birthday.value):
      alert("Por favor, insira um ano válido");
      break;

    case  !algumCheckboxMarcado1:
        alert("Por favor, marque um horário");
        break;

    case  !algumCheckboxMarcado:
        alert("Por favor, marque uma área de atuação");
        break;
      
    default:
      alert("Enviado com sucesso!");
}


function validarNome(name){
  return  /^[\p{L}\s']+$/u.test(name);
}
function validarEndereco(address) {
    return /^[a-zA-Z0-9\s.,-]+$/.test(address);
  }

  function validarTelefone(phone) {
    return /^([14689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}$/.test(phone);
  }
  
  function validarInstagram(ig){
    return /(?:@)([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)/.test(ig);
  }

  function validarEmail (email){
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
  }

  function validarAniversario (birthday) {
    return /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(birthday);
  }
}


