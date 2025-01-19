// Scroll function for the product section
function scrollProductsRight() {
  const container = document.querySelector('.product-container');
  container.scrollBy({
    left: 300,
    behavior: 'smooth'
  });
}

function scrollProductsLeft() {
  const container = document.querySelector('.product-container');
  container.scrollBy({
    left: -300,
    behavior: 'smooth'
  });
}

// Scroll function for the shoes section
function scrollShoesRight() {
  const container = document.querySelector('.shoes-grid');
  container.scrollBy({
    left: 300,
    behavior: 'smooth'
  });
}

function scrollShoesLeft() {
  const container = document.querySelector('.shoes-grid');
  container.scrollBy({
    left: -300,
    behavior: 'smooth'
  });
}
