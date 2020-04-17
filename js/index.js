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
let button = document.querySelectorAll('.btn-remove');
let buttons = Array.from(button);

function removeProduct(e) {
  const target = e.currentTarget;
  let parent = target.parentNode.parentNode ;
  parent.parentNode.removeChild(parent);
  calculateAll()
}


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
  console.log(newName)
  let parent = document.getElementsByTagName('tbody')[0];

  if (newName === '' || newPrice === '0') {
    alert('Please, introduce a Product Name and a Price');
  } else {
    parent.appendChild(newProduct)
  }
  
  // Clear input fields
  document.querySelectorAll('.create-product input').forEach(input => {
    if(input.placeholder == 'Product Name') {
      input.value = '';
    } else if (input.placeholder == 'Product Price') {
      input.value = 0;
    }

  });
  
  // Remove new item
  let newButton = newProduct.querySelectorAll('.btn-remove');
  let newButtonArray = Array.from(newButton);

  function removeNewProduct(e) {
    const target = e.currentTarget;
    let parent = target.parentNode.parentNode;
    parent.parentNode.removeChild(parent);
    calculateAll()
  }

  newButtonArray.forEach(button => button.addEventListener('click', removeNewProduct));
}

let createButton = document.querySelector('#create');
createButton.addEventListener('click', createProduct)

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
