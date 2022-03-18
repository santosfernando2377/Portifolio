async function exibirAno(){
    let Ano = await Data()
    document.getElementById('Ano').innerText = `© ${Ano} FHD Dev, Inc`
}

function Data() {
   let Data = new Date()
   let Ano = Data.getFullYear()
   return Ano
}

exibirAno()