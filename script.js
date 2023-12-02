// Seleciona os elementos do DOM
const btnCadastro = document.querySelector("form button#register");
const btnUpdate = document.querySelector("form button#update");
const btnCadastrarNovoProduto = document.querySelector("#insert-new-product");
const formInsert = document.querySelector("#insert-form");
const listProducts = document.querySelector("#list-products");
const formUpdate = document.querySelector("#update-form");

// Adiciona eventos aos botões
btnCadastro.addEventListener("click", registerProduct);
btnUpdate.addEventListener("click", updateProduct);
btnCadastrarNovoProduto.addEventListener("click", () => {
  // Alternar visibilidade dos formulários e botões
  toggleElementVisibility(formInsert);
  toggleElementVisibility(btnCadastrarNovoProduto);
  toggleElementVisibility(listProducts);
});

// Array para armazenar produtos
const products = [];

// Função para registrar um novo produto
function registerProduct() {
  // Obter valores do formulário
  const name = document.querySelector("#name").value;
  const price = document.querySelector("#price").value;
  const qtd = document.querySelector("#qtd").value;
  const description = document.querySelector("#description").value;

  // Criar objeto de produto
  const product = {
    id: products.length + 1,
    name,
    price,
    qtd,
    description,
  };

  // Adicionar produto ao array
  products.push(product);

  // Alternar visibilidade dos elementos
  toggleElementVisibility(formInsert);
  toggleElementVisibility(btnCadastrarNovoProduto);
  toggleElementVisibility(listProducts);

  // Exibir produtos na tabela
  showProducts();
}

// Função para exibir produtos na tabela
function showProducts() {
  const productRows = document.querySelector("#product-rows");
  productRows.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    // Adicionar linha para cada produto na tabela
    productRows.innerHTML += `
      <tr>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].qtd}</td>
        <td>${products[i].description}</td>
        <td><button onclick="removeProduct(${products[i].id})">Excluir</button></td>
        <td><button onclick="getProduct(${products[i].id})">Atualizar</button></td>
      </tr>
    `;
  }
}

// Função para remover um produto
function removeProduct(id) {
  // Encontrar e remover o produto pelo ID
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      products.splice(i, 1);
      break;
    }
  }

  // Exibir produtos atualizados
  showProducts();
}

// Função para obter detalhes do produto para atualização
function getProduct(id) {
  // Alternar visibilidade dos elementos
  toggleElementVisibility(formUpdate);
  toggleElementVisibility(btnCadastrarNovoProduto);
  toggleElementVisibility(listProducts);

  // Preencher formulário de atualização com dados do produto selecionado
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      document.querySelector("#name-update").value = products[i].name;
      document.querySelector("#price-update").value = products[i].price;
      document.querySelector("#qtd-update").value = products[i].qtd;
      document.querySelector("#description-update").value =
        products[i].description;
      document.querySelector("#id-product").value = products[i].id;
      break;
    }
  }
}

// Seleciona o botão de atualização no formulário de atualização
const btnUpdateProduct = document.querySelector("#update");

// Adiciona evento de atualização ao botão
btnUpdateProduct.addEventListener("click", updateProduct);

// Função para atualizar um produto
function updateProduct() {
  // Obter valores do formulário de atualização
  const name = document.querySelector("#name-update").value;
  const price = document.querySelector("#price-update").value;
  const qtd = document.querySelector("#qtd-update").value;
  const description = document.querySelector("#description-update").value;
  const id = document.querySelector("#id-product").value;

  // Atualizar os dados do produto no array
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      products[i].name = name;
      products[i].price = price;
      products[i].qtd = qtd;
      products[i].description = description;
      break;
    }
  }

  // Alternar visibilidade dos elementos
  toggleElementVisibility(btnCadastrarNovoProduto);
  toggleElementVisibility(listProducts);
  toggleElementVisibility(formUpdate);

  // Exibir produtos atualizados
  showProducts();
}

// Função para alternar a visibilidade de um elemento
function toggleElementVisibility(element) {
  element.classList.toggle("display-none");
  element.classList.toggle("display-flex");
}
