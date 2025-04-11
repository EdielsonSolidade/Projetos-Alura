const btnLimpar = document.querySelector(".botao-form.botao-limpar");
const adicionarProdutos = document.querySelector(".botao-form.botao-adicionar");

let totalPreco = 0;
adicionarProdutos.addEventListener("click", () => {
  let produtos = document.getElementById("produto").value;
  let nomeProduto = produtos.split("-")[0];
  let valorUnitario = produtos.split("R$")[1];
  let quantidade = document.getElementById("quantidade").value;
  let precoDosProdutos = quantidade * valorUnitario;
  let carrinho = document.getElementById("lista-produtos");

  let campoTotal = document.getElementById("valor-total");

  carrinho.innerHTML =
    carrinho.innerHTML +
    `<section class="carrinho__produtos__produto">
  <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R${precoDosProdutos}</span>
</section>`;

  totalPreco = totalPreco + precoDosProdutos;
  campoTotal.textContent = `Total ${totalPreco}`;
});

btnLimpar.addEventListener("click", () => {
  totalPreco = 0;
  document.getElementById("lista-produtos").innerHTML = "";
  document.getElementById("valor-total").textContent = "R$ 0";
});
