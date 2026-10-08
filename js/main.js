
// hello gues , we will do CRUD !!!

//let us start with C (create a product)

//fist , verify if the file is linked
// alert("Hello");

//Good

//to create a product , we have to get the inputs first , letus create a function for each input for maintainability

// console.log((document.getElementById("product-name").value)=500);

function getProductNameInput() {
    //test if it catches it
    return document.getElementById("product-name");
}

function setProductNameInput(value) {
    getProductNameInput().value = value;
}



function getProductPriceInput() {
    //test if it catches it
    return document.getElementById("product-price");
}

function setProductPriceInput(value) {
    getProductPriceInput().value = value;
}


// setProductPriceInput(5000);


function getProductCategoryInput() {
    //test if it catches it
    return document.getElementById("product-category");
}

function setProductCategoryInput(value) {
    getProductCategoryInput().value = value;
}


// setProductCategoryInput(50000)


function getProductDescriptionInput() {
    //test if it catches it
    return document.getElementById("product-description");
}


function clearProductInputValues() {
    setProductNameInput("");
    setProductCategoryInput("");
    setProductDescriptionInput("");
    setProductPriceInput("");
}

function getMyOsPath() {
    return `images/`;
}





function disableAddProductButton() {

    document.getElementById("add-product-button").classList.add('d-none');
}



function enableAddProductButton() {
    document.getElementById("add-product-button").classList.remove('d-none');
}
function disableEditProductButton() {
    document.getElementById("edit-product-button").classList.add('d-none');
}
function enableEditProductButton() {
    document.getElementById("edit-product-button").classList.remove('d-none');
}


function disableCancelEditProductButton() {
    document.getElementById("cancel-edit-product-button").classList.add('d-none');
}
function enableCancelEditProductButton() {
    document.getElementById("cancel-edit-product-button").classList.remove('d-none');
}





function getProductImageInputValue() {
    return document.getElementById("product-image");
}

function getProductImageName() {
    return getProductImageInputValue().files[0].name
}

function getFullImagePath() {
    return `${getMyOsPath()}${getProductImageName()}`
}

function setProductDescriptionInput(value) {
    getProductDescriptionInput().value = value;
}





// setProductDescriptionInput("this is amr talaat")



//next , when pressing on add product , we want to collect these values 



//helpers
function checkIfThereIsAnyProducts() {
    return localStorage.getItem("allProducts") !== null;
}


function getLocalStorageArray() {
    return localStorage.getItem("allProducts");

}

function setLocalStorageArray(array) {
    localStorage.setItem("allProducts", JSON.stringify(array));
}

function getProductCardWrapper() {
    return document.getElementById("products-cards-container");
}


function getProductCategoryBadgeTV() {
    return `<span class="badge text-bg-success rounded-pill px-3 py-1 position-absolute top-0 end-0 mt-3 me-3">TV</span>`;
}


function getProductCategoryBadgeMobile() {
    return `<span class="badge text-bg-primary rounded-pill px-3 py-1 position-absolute top-0 end-0 mt-3 me-3">Mobile</span>`;
}



function getProductCategoryBadgeLaptop() {
    return `<span class="badge text-bg-info rounded-pill px-3 py-1 position-absolute top-0 end-0 mt-3 me-3">Laptop</span>`;
}






function getProductCategoryBadge(category) {



    /*

 <option value="TV"></option>
                                    <option value="Mobile"></option>
                                    <option value="Laptop"></option>
    */


    if (category === "TV")
        return getProductCategoryBadgeTV();
    if (category === "Mobile")
        return getProductCategoryBadgeMobile();
    if (category === "Laptop")
        return getProductCategoryBadgeLaptop();

}

function createProductCard(productName, productPrice, productCategory, productDescription, productImage, index) {

    return ` <div class="col">
    <div class="card">
      <img src="${productImage}" class="card-img-top object-fit-cover" alt="...">
      <div class="card-body">
        <h3 class="fs-5 fw-medium card-title">${productName}</h3>
        <p class="card-text">${productDescription}.</p>
        <div class="card-group bottom-section d-flex justify-content-between align-items-center">
            <span class="price card-text fs-4 text-primary fw-medium">₹${productPrice}</span>
            ${getProductCategoryBadge(productCategory)}
            <div class="buttons d-flex">
                <button onclick="deleteProduct(${index})" class="btn border border-danger border-end-0 text-danger"><i class="fa-solid fa-trash-can"></i></button>
                <button onclick="modifyProduct(${index})" class="btn border border-warning text-warning"><i class="fa-solid fa-pencil"></i></button>
            </div>
        </div>
      </div>
    </div>
  </div>`






}

function getProductsLengthBadge() {
    return document.getElementById("products-length");
}
function updateProductsLengthInPage(total) {
    getProductsLengthBadge().innerHTML = `${total} products`;
}

function getProductValuesFromInput() {
    var productName = getProductNameInput().value;
    var productPrice = getProductPriceInput().value;

    var productCategory = getProductCategoryInput().value;
    var productDescription = getProductDescriptionInput().value;


    return {
        "name": productName,
        "price": productPrice,
        "category": productCategory,
        "description": productDescription,
    };

}
function addProduct() {
    // alert("Hello");

    var product = getProductValuesFromInput();

    var productImage = getFullImagePath();
    product.image = productImage;

    var allProducts = [];
    var localStorageArray = getLocalStorageArray();
    if (checkIfThereIsAnyProducts()) {
        allProducts = JSON.parse(localStorageArray);
    }


    allProducts.push(product);
    setLocalStorageArray(allProducts);




    // console.log(allProducts);
    clearProductInputValues();
    displayAllProducts();
    scrollTo(5000,5000);
}


function getProductFromLocalStorageByIndex(index) {
    return JSON.parse(getLocalStorageArray())[index]
}

function modifyProduct(index) {
    //step 1 , the product from localStorage array

    var product = getProductFromLocalStorageByIndex(index);

    // console.log(product);


    var productName = product["name"];
    var productPrice = product['price'];
    var productDescription = product['description'];
    var productCategory = product['category'];


    disableAddProductButton();
    enableEditProductButton();
    enableCancelEditProductButton();
    setProductNameInput(productName);
    setProductPriceInput(productPrice);
    setProductDescriptionInput(productDescription);
    setProductCategoryInput(productCategory);
    scrollTo(0, 0);
    hideAllProducts();
    updateIndex = index;
    // console.log(productName);
    // console.log(productPrice);
    // console.log(productDescription);
    // console.log(productCategory);




}

function cancelEditProduct() {
    clearProductInputValues();
    enableAddProductButton();
    disableCancelEditProductButton();
    disableEditProductButton();
    displayAllProducts();
    scrollTo(5000, 5000);
}

function deleteProduct(index) {
    var allProducts = JSON.parse(getLocalStorageArray());
    allProducts.splice(index, 1);
    setLocalStorageArray(allProducts);
    displayAllProducts();
}

function editProduct() {
    var product = getProductValuesFromInput();
    var productImage = getProductFromLocalStorageByIndex(updateIndex)['image'];

    product.image = productImage;

    var allProducts = JSON.parse(getLocalStorageArray());
    // allProducts.splice(updateIndex,1);

    // allProducts.push(product);
    allProducts[updateIndex] = product;

    setLocalStorageArray(allProducts);
    displayAllProducts();

    disableCancelEditProductButton();
    disableCancelEditProductButton();
    enableAddProductButton();
    scrollTo(5000, 5000);

}
//add is done :)



//second part R (Read , or display)

//this needs to be called at launch
function displayAllProducts() {
    // alert("Hello")
    // alert(checkIfThereIsAnyProducts())
    var localStorageArray = getLocalStorageArray();
    var allProducts = JSON.parse(localStorageArray);
    var cartona = ``;

    for (var i = 0; i < allProducts.length; i++) {
        var productName = allProducts[i]['name'];
        var productPrice = allProducts[i]['price'];
        var productCategory = allProducts[i]['category'];
        var productDescription = allProducts[i]['description'];
        var productImage = allProducts[i]['image'];
        // //let us test if it is working





        cartona += createProductCard(productName, productPrice, productCategory, productDescription, productImage, i);


    }
    getProductCardWrapper().innerHTML = cartona;
    updateProductsLengthInPage(allProducts.length);
}

function hideAllProducts() {

    getProductCardWrapper().innerHTML = "";
}



var updateIndex = 0;
if (checkIfThereIsAnyProducts()) {
    displayAllProducts();
} else {
    updateProductsLengthInPage(0);
}

