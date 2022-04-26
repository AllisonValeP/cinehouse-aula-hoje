
function listarFilmesEmCartaz(filmes){
    const filmeEmCartaz = filmes.fliter((filme)=>{
        if(filme.emCartaz === true){
            return true;
        }
    });
return filmeEmCartaz
}

console.log(listarFilmesEmCartaz(catalogoObj.data))
