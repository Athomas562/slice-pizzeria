document.querySelectorAll('.basket-product-remove-icon').forEach(icon => {
    icon.addEventListener('click', () => {
      const item = icon.closest('.basket-product-item');
      const quantitySpan = item.querySelector('.basket-product-details-quantity');
  
      let quantity = parseInt(quantitySpan.textContent);
      if (quantity > 1) {
        quantity--;
        quantitySpan.textContent = `${quantity}x`;
      } else {
        item.remove();
      }
    });
  });



document.querySelectorAll('.add-to-cart-btn').forEach(button => {
  button.addEventListener('click', () => {
    const counterDiv = document.createElement('div');
    counterDiv.className = 'quantity-counter';
    counterDiv.innerHTML = `
      <button class="decrease">−</button>
      <span class="quantity">1</span>
      <button class="increase">+</button>
    `;

    button.replaceWith(counterDiv);

    const quantitySpan = counterDiv.querySelector('.quantity');
    const increaseBtn = counterDiv.querySelector('.increase');
    const decreaseBtn = counterDiv.querySelector('.decrease');

    increaseBtn.addEventListener('click', () => {
      let quantity = parseInt(quantitySpan.textContent);
      quantitySpan.textContent = quantity + 1;
    });

    decreaseBtn.addEventListener('click', () => {
      let quantity = parseInt(quantitySpan.textContent);
      if (quantity > 1) {
        quantitySpan.textContent = quantity - 1;
      } else {
        // Remettre le bouton "Ajouter au panier"
        const newBtn = document.createElement('span');
        newBtn.className = 'add-to-cart-btn';
        newBtn.innerHTML = `
          <img src="../images/carbon_shopping-cart-plus.svg" alt="">
          Ajouter au panier
        `;
        counterDiv.replaceWith(newBtn);

        // Réattacher l'événement
        newBtn.addEventListener('click', () => {
          button.click(); // Relance le même comportement
        });
      }
    });
  });
});

