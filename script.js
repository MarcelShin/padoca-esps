const btnCadastro = document.querySelector("form button#register");

btnCadastro.addEventListener("click", registerProduct);

const products = [];

function registerProduct() {
  const name = document.querySelector("#name").value;
  const price = document.querySelector("#price").value;
  const qtd = document.querySelector("#qtd").value;
  const description = document.querySelector("#description").value;

  const product = {
    name,
    price,
    qtd,
    description,
  };

  products.push(product);

  console.log(products);
  showProducts();
}

function showProducts() {
  const productRows = document.querySelector("#product-rows");
  productRows.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    productRows.innerHTML += `
      <tr>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].qtd}</td>
        <td>${products[i].description}</td>
      </tr>
    `;
  }
}
