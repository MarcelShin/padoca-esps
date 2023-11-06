const btnCadastro = document.querySelector("form button#register");

btnCadastro.addEventListener("click", registerProduct);

const products = [];

function registerProduct() {
  const name = document.querySelector("#name").value;
  const price = document.querySelector("#price").value;
  const qtd = document.querySelector("#qtd").value;
  const description = document.querySelector("#description").value;

  const product = {
    id: products.length + 1,
    name,
    price,
    qtd,
    description,
  };

  products.push(product);

  showProducts();
}

function showProducts() {
  console.log(products);
  const productRows = document.querySelector("#product-rows");
  productRows.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    productRows.innerHTML += `
      <tr>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].qtd}</td>
        <td>${products[i].description}</td>
        <td><a onclick="removeProduct(${products[i].id})">Excluir</a></td>
      </tr>
    `;
  }
}

function findProductById(id) {
  return products.find((product) => product.id === id);
  
}

function removeProduct(id) {
  const productFinder = findProductById(id);
  products.splice(products.indexOf(productFinder), 1);

  // for(let i = 0; i < products.length; i++) {
  //   if(products[i].id === id) {
  //     products.splice(i, 1)
  //     break
  //   }
  // }

  showProducts();
}
