const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector(".product-detail-close")
const cardsContainer = document.querySelector('.cards-container'); 

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu () {
    desktopMenu.classList.toggle("inactive");
    productDetailContainer.classList.add("inactive");
    shoppingCartContainer.classList.add("inactive");
}
function toggleMobileMenu () {
    mobileMenu.classList.toggle("inactive");
    productDetailContainer.classList.add("inactive");
    shoppingCartContainer.classList.add("inactive");
}
function toggleCarritoAside () {    
    shoppingCartContainer.classList.toggle("inactive");
    productDetailContainer.classList.add("inactive");    
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
}
function openProductDetalAside () {
    productDetailContainer.classList.remove("inactive");
    shoppingCartContainer.classList.add("inactive");
    desktopMenu.classList.add("inactive");
}
function closeProductDetailAside (){
    productDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Pantalla",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Computador",
    price: 620,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});

productList.push({
    name: "Nyx",
    price: 5000000,
    image: "C:/users/Usuario/OneDrive/Escritorio/Fotos/Nyx/20220320_131334.jpg",
})

function renderProducts (arr){
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetalAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productName); 
        productInfoDiv.appendChild(productPrice); 

        const productInfoFigure = document.createElement('figure');

        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart); 

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);

    }
}    
renderProducts(productList);
