const products = [

  {
    id:1,
    brand:"Nike",
    name:"Running Shoes",
    price:3499,
    rating:"4.5 ⭐",
    image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
  },

  {
    id:2,
    brand:"Puma",
    name:"Sports T-Shirt",
    price:999,
    rating:"4.2 ⭐",
    image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
  },

  {
    id:3,
    brand:"H&M",
    name:"Women Jacket",
    price:2999,
    rating:"4.6 ⭐",
    image:"https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=500"
  },

  {
    id:4,
    brand:"Levis",
    name:"Blue Jeans",
    price:2199,
    rating:"4.3 ⭐",
    image:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500"
  },

  {
    id:5,
    brand:"Zara",
    name:"Black Hoodie",
    price:2599,
    rating:"4.7 ⭐",
    image:"https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500"
  },

  {
    id:6,
    brand:"Roadster",
    name:"Casual Shirt",
    price:1499,
    rating:"4.0 ⭐",
    image:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500"
  },

  {
    id:7,
    brand:"Adidas",
    name:"Track Pants",
    price:1799,
    rating:"4.4 ⭐",
    image:"https://images.unsplash.com/photo-1506629905607-d9d8e5f0f6b1?w=500"
  },

  {
    id:8,
    brand:"Allen Solly",
    name:"Formal Shirt",
    price:1899,
    rating:"4.5 ⭐",
    image:"https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500"
  },

  {
    id:9,
    brand:"Nike",
    name:"Sneakers",
    price:3299,
    rating:"4.6 ⭐",
    image:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500"
  },

  {
    id:10,
    brand:"Gucci",
    name:"Luxury Bag",
    price:5999,
    rating:"4.8 ⭐",
    image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500"
  },

  {
    id:11,
    brand:"RayBan",
    name:"Sunglasses",
    price:2499,
    rating:"4.4 ⭐",
    image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500"
  },

  {
    id:12,
    brand:"Apple",
    name:"Smart Watch",
    price:9999,
    rating:"4.9 ⭐",
    image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
  }

];

const productsDiv =
document.getElementById("products");

const search =
document.getElementById("search");

let cart = [];

/* Show Products */

function showProducts(items){

  productsDiv.innerHTML = "";

  items.forEach((product)=>{

    productsDiv.innerHTML += `

      <div class="card">

        <img src="${product.image}">

        <div class="info">

          <h3>${product.brand}</h3>

          <p>${product.name}</p>

          <div class="rating">
            ${product.rating}
          </div>

          <div class="price">
            ₹${product.price}
          </div>

          <button class="btn"
            onclick="addToCart(${product.id})">
            Add To Cart
          </button>

        </div>

      </div>

    `;

  });

}

showProducts(products);

/* Search Product */

search.addEventListener("keyup",()=>{

  const value =
  search.value.toLowerCase();

  const filtered =
  products.filter((item)=>{

    return(
      item.name.toLowerCase().includes(value)
      ||
      item.brand.toLowerCase().includes(value)
    );

  });

  showProducts(filtered);

});

/* Add To Cart */

function addToCart(id){

  const item =
  products.find((p)=>p.id===id);

  cart.push(item);

  updateCart();

  alert(item.name + " Added To Cart");

}

/* Update Cart */

function updateCart(){

  document.getElementById("cart-count")
  .innerText = cart.length;

  const cartItems =
  document.getElementById("cartItems");

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item,index)=>{

    total += item.price;

    cartItems.innerHTML += `

      <div class="cart-item">

        <span>
          ${item.name}
        </span>

        <span>
          ₹${item.price}
        </span>

      </div>

    `;

  });

  document.getElementById("totalPrice")
  .innerText = "Total: ₹" + total;

}

/* Open Cart */

function openCart(){

  document.getElementById("cartSidebar")
  .style.right = "0";

}

/* Close Cart */

function closeCart(){

  document.getElementById("cartSidebar")
  .style.right = "-400px";

}

/* Checkout */

function openCheckout(){

  if(cart.length===0){

    alert("Cart Empty");

    return;

  }

  document.getElementById("checkoutModal")
  .style.display = "flex";

}

function closeCheckout(){

  document.getElementById("checkoutModal")
  .style.display = "none";

}

/* Place Order */

function placeOrder(){

  const name =
  document.getElementById("name").value;

  const phone =
  document.getElementById("phone").value;

  const address =
  document.getElementById("address").value;

  const payment =
  document.getElementById("payment").value;

  const card =
  document.getElementById("card").value;

  if(
    name==="" ||
    phone==="" ||
    address==="" ||
    payment==="" ||
    card===""){

    alert("Please Fill All Details");

    return;

  }

  alert(
    "Order Placed Successfully 🎉\n\n" +
    "Customer: " + name +
    "\nPhone: " + phone +
    "\nPayment: " + payment +
    "\nDelivery Address:\n" + address
  );

  cart = [];

  updateCart();

  closeCheckout();

  closeCart();

}