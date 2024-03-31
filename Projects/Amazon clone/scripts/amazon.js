// list of products each having lots of values(use object)
const products = [
 {
    image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
    name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
    ratings: {
        stars: 4.5,
        ratingCount: 87
    },
    priceCents: 1090,  //save as cents
 },
 {
    image: 'images/products/intermediate-composite-basketball.jpg',
    name: 'Intermediate Size Basketball',
    ratings: {
        stars: 4,
        ratingCount: 127
    },
    priceCents: 2095,
 },
 {
    image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name: 'Adults Plain Cotton T-Shirt - 2 Pack',
    ratings: {
        stars: 4.5,
        ratingCount: 56
    },
    priceCents: 799,
 },
];  //loop through the array and display the products in HTML using DOM manipulation

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
            src="images/ratings/rating-${product.ratings.stars * 10}.png">
            <div class="product-rating-count link-primary">
            ${product.ratings.ratingCount}
            </div>
        </div>

        <div class="product-price">
            $${product.priceCents / 100}  
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

        <button class="add-to-cart-button button-primary">
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