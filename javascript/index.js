let elemento = document.querySelector('#repo')
let repos = document.querySelector('#repos')

fetch('https://api.github.com/users/santosfernando2377/repos')
.then((response) => response.json())
.then((response) =>{
    arr = response
    console.log(arr)
    arr.map((dados1) => {
        //console.log(dados1.id)
    })
})
.catch((response) =>{
    console.log(response)
})

let arr = []