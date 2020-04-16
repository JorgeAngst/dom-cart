// ITERATION 1

function updateSubtotal(product) {

  let price = product.querySelector('.price span');
  let unitPrice = price.innerHTML;
  
  let quantity = product.querySelector('.quantity input');
  let units = quantity.value;
  
  let amount = unitPrice * units;
  
  let subtotal= product.querySelector('.subtotal span');
  
  function setSubtotal() {
    return subtotal.innerHTML = amount;
  }
  let totalAmount = setSubtotal();
  return totalAmount;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let products = document.getElementsByClassName('product');
  const allProducts = Array.from(products);
  let sum = 0;
  allProducts.forEach(product => sum += updateSubtotal(product));

  // ITERATION 3
  let total = document.querySelector('#total-value span');
  total.innerHTML = sum;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  const product = document.querySelector('.product');
  product.parentNode.removeChild(product)
  calculateAll()
}

let button = document.querySelectorAll('.btn-remove');
let buttons = Array.from(button);

buttons.forEach(button => button.addEventListener('click', removeProduct));

// ITERATION 5

function createProduct(e) {
  let name = document.querySelector('.create-product input[type=text]')
  let price = document.querySelector('.create-product input[type=number]')

  let newName = name.value;
  let newPrice = price.value;

  let product = document.querySelector('.product')

  let newProduct = product.cloneNode(true);
  let newProductName = newProduct.querySelector('.name span');
  let newProductPrice = newProduct.querySelector('.price span');
  newProductName.innerHTML = newName;
  newProductPrice.innerHTML = newPrice;
  let parent = document.getElementsByTagName('tbody')[0];
  parent.appendChild(newProduct)
  calculateAll()
}

let createButton = document.querySelector('#create');
createButton.addEventListener('click', createProduct)

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
