
let listaAmigos = [];


function adicionarAmigo() {
    let nome = document.querySelector('#amigo').value;
    if (nome == "") {
        alert("Por Favor, Insira um nome")
        return;
    }
    listaAmigos.push(nome.value);
    console.log(listaAmigos);
    atualizarLista();
    limparCampo();
}

    function atualizarLista() {
        let lista = document.querySelector('#listaAmigos');
        lista.innerHTML = '';
        for (let i = 0; i < listaAmigos.length; i++) {
            let item = document.createElement('li');
            item.textContent = listaAmigos[i];
            lista.appendChild(item);
        }
    }



    function limparCampo() {
        chute = document.querySelector("input");
        chute.value = "";
    }
    // odeio o cliff S2


    if (nome == "") {
        alert("Por Favor, Insira um nome")
    } else {
        console.log()
    }

    function limparCampo() {
        chute = document.querySelector("input");
        chute.value = "";
    }
























