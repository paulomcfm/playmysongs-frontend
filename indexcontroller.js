function buscaMusicas(){
    const musica = document.getElementsByName("musica")[0].value;
    const tag = document.getElementById('musicas');

    let endpoint="http://localhost:8080/apis/get-musicas/"+musica;
    fetch(endpoint)
    .then(response=>{return response.json})
    .then(json=>{
        let lista = "";
        for(let e of json){
            lista+=`<audio controls>
                        <source src="${e}" type="audio/mpeg">
                    </audio>
                    <p>${e}</p>`
        }
        tag.innerHTML=lista
    }).catch(Err=>{tag.innerHTML=`<li>Erro: ${Err}</li>`})
}