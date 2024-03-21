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