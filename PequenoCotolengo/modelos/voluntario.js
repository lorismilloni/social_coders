document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#vol').addEventListener('submit', function() {
        let name = document.querySelector('#nome').value;
        alert('Fica esperto ' + name);
    })
})

// se o script estiver embaixo não precisa da linha DOMContentLoaded