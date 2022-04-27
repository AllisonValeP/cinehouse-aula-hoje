
function listarFilmesEmCartaz(filmes){
    const filmeEmCartaz = filmes.fliter((filme)=>{
        if(filme.emCartaz === true){
            return true;
        }
    });
return filmeEmCartaz
}

console.log(listarFilmesEmCartaz(catalogoObj.data))


// const listarFilmesEmCartaz = (filmes) =>
//   filmes.filter((filme) => filme.emCartaz);

// function listarFilmesEmCartaz(filmes) {
//   return filmes.filter((filme) => filme.emCartaz);
// }
// console.log(listarFilmesEmCartaz(catalogoObj.data));

function alterarStatusEmCartaz(id, filmes) {
    const idxFilme = filmes.findIndex((filme) => {
      if (filme.codigo === id) {
        return true;
      }
    });
    if (idxFilme >= 0) {
      filmes[idxFilme].emCartaz = !filmes[idxFilme].emCartaz;
      return true;
    } else {
      return false;
    }
  }
  
  console.log(alterarStatusEmCartaz(1, catalogoObj.data));
  console.log(catalogoObj.data);

  

