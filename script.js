// Array to store the items in the cart
let cartItems = [];

// Function to add an item to the cart
function addItem(itemName, itemPrice) {
  const item = { name: itemName, price: itemPrice };
  cartItems.push(item);
  displayCart();
}

// Function to display the cart items
function displayCart() {
  const cartItemsElement = document.getElementById("cart-items");
  cartItemsElement.innerHTML = "";

  if (cartItems.length === 0) {
    cartItemsElement.innerHTML = "<li>Your cart is empty.</li>";
  } else {
    cartItems.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${item.name}: $${item.price}`;
      cartItemsElement.appendChild(listItem);
    });
  }
}
