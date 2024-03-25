function validarCampos() {
    var nome = document.getElementById('nome').value;
    var artista = document.getElementById('artista').value;
    var fileInput = document.getElementById('file');

    if (nome === '' || artista === '') {
        alert('Por favor, preencha todos os campos antes de fazer o upload.');
        return false;
    }

    if (fileInput.files.length === 0) {
        alert('Por favor, selecione um arquivo antes de fazer o upload.');
        return false;
    }

    addMusica();
}

function addMusica(){
    const URL = "http://localhost:8080/apis/add-musica";
    var fdados = document.getElementById("fdados");
    fetch(URL, {method:'post', body: new FormData(fdados)})
    .then(response => { return response.text(); })
        .then(string => {
             alert(string);
             fdados.reset();
        })
        .catch(error => { console.error(error); });
}