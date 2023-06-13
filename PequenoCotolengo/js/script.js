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

  if (!algumCheckboxMarcado) {
    event.preventDefault();  
    alert("Por favor, marque uma area de atuação");
 
  } else if (!algumCheckboxMarcado1) {
    alert("Por favor, marque um hotario");
  }
  else{
    alert("Enviado com sucesso");
  }
}
