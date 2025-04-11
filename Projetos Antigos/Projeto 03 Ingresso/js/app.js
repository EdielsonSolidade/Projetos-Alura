function comprar() {
  let tipoDoIngresso = document.getElementById("tipo-ingresso");
  let qtd = parseInt(document.getElementById("qtd").value);

  if (tipoDoIngresso.value == "pista") {
    comprarIngressos(qtd);
  } else if (tipoDoIngresso.value == "superior") {
    comprarSuperior(qtd);
  } else {
    comprarInferior(qtd);
  }
}
function comprarSuperior(qtd) {
  let qtdSuperior = parseInt(
    document.getElementById("qtd-superior").textContent
  );
  if (qtd > qtdSuperior) {
    alert("Quantidade indisponível para tipo superior");
  } else {
    qtdSuperior = qtdSuperior - qtd;
    document.getElementById("qtd-superior").textContent = qtdSuperior;
    alert("Compra realizada com sucesso!");
  }
}
function comprarInferior(qtd) {
  let qtdInferior = parseInt(
    document.getElementById("qtd-inferior").textContent
  );
  if (qtd > qtdInferior) {
    alert("Quantidade indisponível para tipo inferior");
  } else {
    qtdInferior = qtdInferior - qtd;
    document.getElementById("qtd-inferior").textContent = qtdInferior;
    alert("Compra realizada com sucesso!");
  }
}

function comprarIngressos(qtd) {
  let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
  let decrementandoPista = document.getElementById("qtd-pista");

  if (qtd > qtdPista.textContent) {
    alert("Quantidade Indisponivel");
  } else {
    qtdPista = qtdPista - qtd;
    decrementandoPista.textContent = qtdPista;
    alert("compra realizada");
  }
}
