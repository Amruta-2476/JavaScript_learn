// list of products each having lots of values(use object)
// const products = [....]; deleted this coz this array is now coming from products.js file

//loop through the array and display the products in HTML using DOM manipulation

let productsHTML = '';

products.forEach((product) => {
    // const html = `
    productsHTML = productsHTML + `
        <div class="product-container">
        <div class="product-image-container">
            <img class="product-image"
            src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
            ${product.name}
        </div>

        <div class="product-rating-container">
            <img class="product-rating-stars"
            src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
            ${product.rating.count}
            </div>
        </div>

        <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}  
        </div>

        <div class="product-quantity-container">
            <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
        </div>

        <button class="add-to-cart-button button-primary js-addToCart"
        data-product-id = "${product.id}">
            Add to Cart
        </button>
        </div>`;
    // console.log(html)
});
// combine this html together and put it on thw webpage using DOM
console.log(productsHTML)  //we combined
// now put on webpage using DOM
// class = "products-grid" contains all of the products
// <div class="products-grid js-all-products-grid">
document.querySelector('.js-all-products-grid').innerHTML = productsHTML;

// to add the add to cart functionality
// .forEach so that we can loop the functionality for all the buttons in each product
document.querySelectorAll('.js-addToCart').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId; //gives us all the data attributes attached to this button

        //loop through cart to check if product already in cart
        let matchingItem;
        cart.forEach((item) => {
            if (item.productId === productId) {
                matchingItem = item
            }
        });
        if (matchingItem) {
            matchingItem.quantity++;
        } else {
            cart.push({
                productId: productId,
                quantity: 1
            });
        }
        console.log(cart)
    });
})

