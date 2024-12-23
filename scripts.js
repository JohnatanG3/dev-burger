const list = document.querySelector("ul");
const buttonMostrarTudo = document.querySelector(".mostrar-tudo");
const buttonMapear = document.querySelector(".mapear");
const somarValores = document.querySelector(".somar");
const filtrarVeganos = document.querySelector(".filtrar");

// Mostra todos os intens na tela
function mostrarTudo(array) {
    let myLi = ''; // Limpa a variável a cada vez que a função é chamada

    array.forEach(product => {
        myLi += `
            <li>
                <img src="${product.src}" alt="${product.name}">
                <p>${product.name}</p>
                <p class="item-price">R$ ${product.price.toFixed(2)}</p>
            </li>
        `;
    });

    list.innerHTML = myLi;
}

// Mapeia os valores de todos os produtos e da desconto de 10%
function mapearItens() {
    // Aplica 10% de desconto em cada preço
    const newPrices = menuOptions.map(product => {
        return {
            ...product, // Mantém os outros dados do produto
            price: product.price * 0.9 // Atualiza o preço com desconto de 10%
        };
    });

    // Atualiza a lista de produtos com o novo preço
    mostrarTudo(newPrices);
}

// Somar todos os preços dos itens
function somarTodosOsItens () {
    const valorTotal = menuOptions.reduce((acumulador, atual) => acumulador + atual.price, 0);

    list.innerHTML = `
    <li>
        <p class="item-price">O Valor Total dos Intens É R$ ${valorTotal.toFixed(2)}</p>
    </li>
    `;
}

// Filtrar hamburgers Veganos
function filtrarVeganosItens() {
    const hamburguerVegano = menuOptions.filter(product => product.vegan === true);
    mostrarTudo(hamburguerVegano);
}

buttonMostrarTudo.addEventListener("click", () => mostrarTudo(menuOptions)); // Referência para a função
buttonMapear.addEventListener("click", mapearItens);
somarValores.addEventListener("click", somarTodosOsItens);
filtrarVeganos.addEventListener("click", filtrarVeganosItens);