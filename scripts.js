const list = document.querySelector("ul");
const buttonMostrarTudo = document.querySelector(".mostrar-tudo");
const buttonMapear = document.querySelector(".mapear");
const somarValores = document.querySelector(".somar");
const filtrarVeganos = document.querySelector(".filtrar");

// Mostra todos os itens na tela
function mostrarTudo(array) {
    let myLi = ''; // Limpa a variável a cada vez que a função é chamada

    array.forEach(product => {
        myLi += `
            <li>
                <img src="${product.src}" alt="${product.name}"> <!-- Exibe a imagem -->
                <p>${product.name}</p> <!-- Exibe o nome do produto -->
                <p class="item-price">R$ ${product.price.toFixed(2)}</p> <!-- Exibe o preço -->
            </li>
        `;
    });

    list.innerHTML = myLi; // Atualiza o conteúdo da lista
}

// Mapeia os valores de todos os produtos e aplica desconto de 10%
function mapearItens() {
    // Aplica 10% de desconto em cada preço
    const newPrices = menuOptions.map(product => {
        return {
            ...product, // Mantém os outros dados do produto
            price: product.price * 0.9 // Atualiza o preço com desconto de 10%
        };
    });

    mostrarTudo(newPrices); // Exibe os itens com preços atualizados
}

// Soma todos os preços dos itens
function somarTodosOsItens() {
    const valorTotal = menuOptions.reduce((acumulador, atual) => acumulador + atual.price, 0); // Soma os preços

    list.innerHTML = `
    <li>
        <p class="item-price">O Valor Total dos Itens é R$ ${valorTotal.toFixed(2)}</p> <!-- Exibe o total -->
    </li>
    `;
}

// Filtra apenas os hambúrgueres veganos
function filtrarVeganosItens() {
    const hamburguerVegano = menuOptions.filter(product => product.vegan === true); // Filtra os itens veganos
    mostrarTudo(hamburguerVegano); // Exibe os itens veganos
}

// Adiciona eventos para os botões
buttonMostrarTudo.addEventListener("click", () => mostrarTudo(menuOptions)); // Exibe todos os itens
buttonMapear.addEventListener("click", mapearItens); // Aplica desconto
somarValores.addEventListener("click", somarTodosOsItens); // Soma os preços
filtrarVeganos.addEventListener("click", filtrarVeganosItens); // Filtra os veganos