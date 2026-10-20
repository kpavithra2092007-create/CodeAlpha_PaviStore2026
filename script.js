let cartCount = 0;
let cartItems = [];

function addToCart(productName, price) {
    cartCount++;

    cartItems.push({
        name: productName,
        price: price
    });

    document.getElementById("cart-count").textContent = cartCount;

    let cartList = document.getElementById("cart-list");
    cartList.innerHTML = "";

    let total = 0;

    cartItems.forEach(function(item) {
        let li = document.createElement("li");
        li.textContent = item.name + " - ₹" + item.price;
        cartList.appendChild(li);

        total += item.price;
    });

    document.getElementById("cart-total").textContent = total;

    alert(productName + " added to cart!");
}