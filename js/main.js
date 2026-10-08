
// hello gues , we will do CRUD !!!

//let us start with C (create a product)

//fist , verify if the file is linked
// alert("Hello");

//Good

//to create a product , we have to get the inputs first , letus create a function for each input for maintainability

// console.log((document.getElementById("product-name").value)=500);

function getProductNameInputValue(){
    //test if it catches it
    return document.getElementById("product-name").value;
}

// function setProductNameInput(value){
//     getProductNameInput().value=value;
// }



function getProductPriceInputValue(){
    //test if it catches it
    return document.getElementById("product-price").value;
}

// function setProductPriceInput(value){
//     getProductPriceInput().value=value;
// }


// setProductPriceInput(5000);


function getProductCategoryInputValue(){
    //test if it catches it
    return document.getElementById("product-category").value;
}

// function setProductCategoryInput(value){
//     getProductCategoryInput().value=value;
// }


// setProductCategoryInput(50000)


function getProductDescriptionInputValue(){
    //test if it catches it
    return document.getElementById("product-description").value;
}


function getMyOsPath(){
    return `images/`;
}

function getProductImageInputValue(){
    return document.getElementById("product-image");
}

function getProductImageName(){
 return getProductImageInputValue().files[0].name
}

function getFullImagePath(){
    return `${getMyOsPath()}${getProductImageName()}`
}

// function setProductDescriptionInput(value){
//     getProductDescriptionInput().value=value;
// }


// setProductDescriptionInput("this is amr talaat")



//next , when pressing on add product , we want to collect these values 



//helpers
function checkIfThereIsAnyProducts(){
    return localStorage.getItem("allProducts")!==null;
}


function getLocalStorageArray(){
return localStorage.getItem("allProducts");

}



function getProductCardWrapper(){
    return document.getElementById("products-cards-container");
}


function getProductCategoryBadgeTV(){
    return `<span class="badge text-bg-success rounded-pill px-3 py-1 position-absolute top-0 end-0 mt-3 me-3">TV</span>`;
}


function getProductCategoryBadgeMobile(){
    return `<span class="badge text-bg-primary rounded-pill px-3 py-1 position-absolute top-0 end-0 mt-3 me-3">Mobile</span>`;
}



function getProductCategoryBadgeLaptop(){
    return `<span class="badge text-bg-info rounded-pill px-3 py-1 position-absolute top-0 end-0 mt-3 me-3">Laptop</span>`;
}






function getProductCategoryBadge(category){



    /*

 <option value="TV"></option>
                                    <option value="Mobile"></option>
                                    <option value="Laptop"></option>
    */

                                    
   if(category === "TV")
    return getProductCategoryBadgeTV();
if(category==="Mobile")
    return getProductCategoryBadgeMobile();
if(category==="Laptop")
    return getProductCategoryBadgeLaptop();

}

function createProductCard(productName, productPrice,productCategory, productDescription,productImage){

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
                <button class="btn border border-danger border-end-0 text-danger"><i class="fa-solid fa-trash-can"></i></button>
                <button class="btn border border-warning text-warning"><i class="fa-solid fa-pencil"></i></button>
            </div>
        </div>
      </div>
    </div>
  </div>`






}

function getProductsLengthBadge(){
    return document.getElementById("products-length");
}
function updateProductsLengthInPage(total){
    getProductsLengthBadge().innerHTML = `${total} products`;
}

function addProduct()
{
    // alert("Hello");


    var productName = getProductNameInputValue();
    var productPrice = getProductPriceInputValue();
    var productCategory = getProductCategoryInputValue();
    var productDescription = getProductDescriptionInputValue();
var productImage = getFullImagePath();

    var product = {
    "name":productName,
    "price":productPrice,
    "category":productCategory,
    "description":productDescription,
    "image":productImage


  
};
var allProducts=[];
var localStorageArray = getLocalStorageArray();
if(checkIfThereIsAnyProducts()){
allProducts = JSON.parse(localStorageArray);
}


allProducts.push(product);
localStorage.setItem("allProducts",JSON.stringify(allProducts))




console.log(allProducts);
displayAllProducts();
}



//add is done :)



//second part R (Read , or display)

//this needs to be called at launch
function displayAllProducts(){
// alert("Hello")
// alert(checkIfThereIsAnyProducts())
var localStorageArray = getLocalStorageArray();
var allProducts = JSON.parse(localStorageArray);
var cartona = ``;

for(var i=0; i<allProducts.length; i++){
    var productName = allProducts[i]['name'];
    var productPrice = allProducts[i]['price'];
    var productCategory = allProducts[i]['category'];
    var productDescription = allProducts[i]['description'];
var productImage = allProducts[i]['image'];
    // //let us test if it is working





    cartona+= createProductCard(productName,productPrice,productCategory,productDescription,productImage);


}
getProductCardWrapper().innerHTML= cartona;
updateProductsLengthInPage(allProducts.length);
}



if(checkIfThereIsAnyProducts()){
    displayAllProducts();
}else{
    updateProductsLengthInPage(0);
}

