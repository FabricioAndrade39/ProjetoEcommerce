import { catalogo } from "./utilidades";
import { adicionarAoCarrinho } from "./menuCarrinho";

export function renderizarCatalogo () {
    for (const produtoCatalogo of catalogo) {
        const cartaoProduto = `<div class= "w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group ${produtoCatalogo.feminino ? "feminino" : "masculino"}" id="card-produto-${produtoCatalogo.id}">
        <img class= "group-hover:scale-110 duration-300 my-3 rounded-lg" src="./assets/images/${produtoCatalogo.nomeArquivoImagem}">
        <p class= "text-sm">${produtoCatalogo.marca}</p>
        <p class= "text-sm">${produtoCatalogo.nome}</p>
        <p class= "text-sm">R$ ${produtoCatalogo.preco}</p>
        <button id='adicionar-${produtoCatalogo.id}' class= "bg-slate-950 text-slate-200 hover:bg-slate-700"><i class="fa-solid fa-cart-plus"></i></button>
        </div>`;
    
        document.getElementById("container-product").innerHTML += cartaoProduto;
    }

    for (const produtoCatalogo of catalogo) {
      document
      .getElementById(`adicionar-${produtoCatalogo.id}`)
      .addEventListener("click", () => adicionarAoCarrinho(produtoCatalogo.id));
    }
}

