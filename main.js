

/* MENU */
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  navbar.classList.toggle("active");
menu.classList.toggle('bx-x');
};

window.onscroll = () => {
  navbar.classList.remove('active');
  menu.classList.remove('bx-x');
};


/* CART */
const cartSidebar = document.getElementById("cartSidebar");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cartTotal");
const closeCart = document.getElementById("close-cart");

let cart = [];

document.querySelector(".cart-icon").onclick = () => {
  cartSidebar.classList.add("active");
};

closeCart.onclick = () => {
  cartSidebar.classList.remove("active");
};

document.querySelectorAll(".box-cart").forEach(btn => {
  btn.onclick = () => {
    const box = btn.closest(".box");
    const title = box.querySelector("h3").innerText;
    const price = Number(
      box.querySelector(".title-price span").innerText.replace("$", "")
    );
    const img = box.querySelector("img").src;

    cart.push({ title, price, img });
    updateCart();
  };
});

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, i) => {
    total += item.price;

    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${item.img}">
        <div>
          <h4>${item.title}</h4>
          <span>$${item.price}</span>
        </div>
        <i class='bx bx-trash remove-item' onclick="removeItem(${i})"></i>
      </div>
    `;
  });

  cartCount.innerText = cart.length;
  cartTotal.innerText = total;
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}
