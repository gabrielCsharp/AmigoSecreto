let nome = document.querySelector('#amigo');
let listaAmigos = [];


function adicionarAmigo(){
listaAmigos.push(nome.value);
console.log(listaAmigos);

}


if (nome == "") {
    alert("Por Favor, Insira um nome")
} else {
    console.log()
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

