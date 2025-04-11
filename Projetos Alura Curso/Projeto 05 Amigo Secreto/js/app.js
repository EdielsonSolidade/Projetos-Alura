let arrayDeAmigos = [];

function adicionar() {
  let amigo = document.getElementById("nome-amigo");

  if (amigo.value == "") {
    alert("Informe um nome");
    return;
  }

  if (arrayDeAmigos.includes(amigo.value)) {
    alert("nome ja adicionado");
    amigo.value = "";
    return;
  }

  let listaAmigos = document.getElementById("lista-amigos");

  if (listaAmigos.textContent == "") {
    listaAmigos.textContent += amigo.value;
  } else {
    listaAmigos.textContent = listaAmigos.textContent + ", " + amigo.value;
  }
  arrayDeAmigos.push(amigo.value);
  amigo.value = "";
}

function sortear() {
  if (arrayDeAmigos.length < 4) {
    alert("coloque no minimo 4 pessoas");
    return;
  }

  embaralha(arrayDeAmigos);
  let sorteio = document.getElementById("lista-sorteio");

  for (let i = 0; i < arrayDeAmigos.length - 1; i++) {
    if (i == arrayDeAmigos.length) {
      sorteio.innerHTML = sorteio.innerHTML + arrayDeAmigos[i] + "-->" + arrayDeAmigos[0] + "<br>";
    } else sorteio.innerHTML = sorteio.innerHTML + arrayDeAmigos[i] + "-->" + arrayDeAmigos[i + 1] + "<br>";
  }
}

function embaralha(lista) {
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);

    [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
  }
}

function reiniciar() {
  let amigo = document.getElementById("nome-amigo");
  let listaAmigos = document.getElementById("lista-amigos");
  let listaSorteio = document.getElementById("lista-sorteio");
  listaAmigos.textContent = "";
  amigo.value = "";
  listaSorteio.innerHTML = "";
  arrayDeAmigos = [];
}
