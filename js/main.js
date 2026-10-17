/*
يا أهلًا بيكم يا أبطال 🌟❤️ يارب تكونوا بخير..
زمان كان كل بيت فيه "أجندة" كدا مجمع فيها أرقام التليفونات الأرضي للأهل والأصدقاء.. النهاردة وبعد ما اتعلمنا الـ 
CRUD Operations
 عايزين نعمل نفس الفكرة بس بشكل 
Web App 
عصري (أكيد مش هنجيب أجندة 😂).
فالنهاردة ميعادنا مع:

🎉 Assignment 9 : ContactHub 🎉
🎯 المطلوب:
 1️⃣ المستخدم يقدر يضيف (Add)،
  يعدل (Update)،
   أو يحذف (Delete)
    أي Contact. 
2️⃣ يقدر يبحث عن أي Contact
 عن طريق الـ Name أو
  الـ Phone
   أو حتى الـ Email.
 3️⃣ يقدر يضيف أو يحذف أي Contact
  من قائمة المفضلات (Favorites). 

4️⃣ تفعيل الـ Action Buttons:
أيقونة 📞: عند الضغط عليها تقوم بالاتصال (تستخدم href="tel:...").

أيقونة ✉️: عند الضغط عليها تفتح تطبيق الإيميل (تستخدم href="mailto:...").

 5️⃣ متنساش الـ Validation**؛ تأكد إن البيانات مكتوبة بشكل صحيح قبل الإضافة. 


6️⃣ طبعا متنساش تستخدام **LocalStorage عشان البيانات متضعش لما نعمل Reload للصفحة.



و أخيرا تقدر تشوف الـ Design المطلوب من هنا: https://tinyurl.com/contacthub-route


✨ Hints:

 ✅ مجرد ما بتضغط علي Add Contact button
 بيظهرلك Modal 

تقدر تعمله بنفسك عن طريق انك هتعمل الـ Design



 في الـ HTML


 عادى و تديله display: none 

ولما تضغط علي Add contact


 تشيل الـ display: none فيظهر معاك.


. او انك تسخدم الـ Modal
الموجود في الـ Bootstrap.



✅ لما تضيف contact 


هتلاقي بيظهرلك Alert 

جميل كدا كذلك الحال لما تعدل أى contact


 أو حتى لما بتيجي تحذف مش بيحذف بشكل مباشر لا بيظهر الأول confirmation alert 



اللى هو انت متأكد ؟ عايز تحذف فعلا ؟



 لو ضغطت Delete
 
 
 ساعتها بس هيحذف كل دا بيتعمل عن طريق مكتبة اسمها 
 
 
 
 SweatAlert 
 
 
 
 هسيبلك اللينك بتاعها من هنا:
 
 https://sweetalert2.github.io/



⏳ **الديدلاين:  الثلاثاء الساعة ١٠ م 
موفقين إن شاء الله وأشوف إبداعكم ❤️🥰



*/


//as i understood , the model is like this
//contact {name, phone, email}

class Contact {

  constructor(name, phone, email, address, group, notes, photo, isFavorite, isEmergency) {
    this.setName(name);
    this.setPhone(phone);
    this.setEmail(email);
    this.setAddress(address);
    this.setGroup(group);
    this.setNotes(notes);
    this.setPhoto(photo);
    this.setIsFavorite(isFavorite);
    this.setIsEmergency(isEmergency);
  }


  getIsFavorite() { return this.isFavorite; }
  setIsFavorite(isFavorite) {

    this.isFavorite = isFavorite;

  }
  getIsEmergency() { return this.isEmergency; }
  setIsEmergency(isEmergency) {
    this.isEmergency = isEmergency;
  }

  getPhoto() { var imgDirectory = "img/"; return `${imgDirectory}${this.image}` }
  setPhoto(photo) {
    var photoRegex = /.+\.(jpg|jpeg|png|bmp|JPG|JPEG|PNG|BMP)/m;
    var imgDirectory = "img/";
    var finalPhoto = "";
    if (!(photoRegex.test(photo))) {
      finalPhoto = "blank_profile.svg";
    } else {
      finalPhoto = photo;

    }
    this.photo = `${imgDirectory}${finalPhoto}`;


  }
  getNotes() { return this.notes; }
  setNotes(notes) { this.notes = notes; }



  getGroup() { return this.group; }
  setGroup(group) {

    if (Contact.isGroupValid(group)) {
      console.log("group is valid")
      this.group = group;
    } else {
      group = null;
    }
  }

  static isGroupValid(group) {
    var groupRegex = /^(Family|Friends|Work|School|Other)$/;

    return groupRegex.test(group);
  }



  getAddress() { return this.address; }
  setAddress(address) { this.address = address; }



  getName() {
    return this.name
  }
  //  setName(name) {this.name=name} //validation needs
  setName(name) {


    if (Contact.isNameValid(name)) {
      this.name = name;
    } else {
      this.name = null;
    }
  }

  static isNameValid(name) {
    var nameRegex = /^[a-zA-Z]{3,}(\s*[a-zA-z])*$/m;
    return nameRegex.test(name);
  }

  getPhone() {
    return this.phone
  }
  setPhone(phone) {

    if (Contact.isPhoneValid(phone)) {
      this.phone = phone;
    } else {
      this.phone = null;
    }
  }  //validation needs


  static isPhoneValid(phone) {
    var phoneRegex = /^((\+|00)2)?0(([1-9](\d{7}))|(10|11|12|15)\d{8})$/m;
    return phoneRegex.test(phone);
  }



  getEmail() {
    return this.email
  }
  setEmail(email) {


    if (Contact.isEmailValid(email)) {
      this.email = email;
    } else {
      this.email = null;
    }
  }   //validation needs


  static isEmailValid(email) {
    var emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm;
    return emailRegex.test(email);
  }


}

//will have methods of get and set

//class is created
//next step is to take the input from the user via the modal
//the modal needs to be adjusted



//what is modal ?
//---our modal
//--- or bootstrap modal ?


/*
will use this modal with some adjustments:-


*/







function mapContactFromTheModal() {
  var form = ".modal-body>form";
  var name = document.querySelector(`${form} #name`).value;
  var email = document.querySelector(`${form} #email`).value;
  var phone = document.querySelector(`${form} #phone`).value;
  var address = document.querySelector(`${form} #address`).value;
  var group = document.querySelector(`${form} #group-list`).value;

  var notes = document.querySelector(`${form} #notes`).value;
  var photo = document.querySelector(`${form} #profile-picture`).files;

  var isFavorite = document.querySelector(`${form} #favorite`);
  var isEmergency = document.querySelector(`${form} #emergency`);
  //  console.log(photoContainer); 
  //  return;

  isFavorite = isFavorite.checked ? isFavorite.value : "";
  isEmergency = isEmergency.checked ? isEmergency.value : "";
  // return;
  if (photo.length !== 0) {
    photo = photo[0]['name'];
  }



  return new Contact(name, phone, email, address, group, notes, photo, isFavorite, isEmergency);




}

function getLocalstorageData() {
  return localStorage.getItem("contacts");
}


function getArrayFromLocalStorage() {
  if (getLocalstorageData() === null) {
    return null;
  }
  return JSON.parse(getLocalstorageData());
}

function setTotalContactsNumberOnPage() {
  var contactsNumberInPage = document.getElementById("totalContactsSpan");
  var contactsArray = getArrayFromLocalStorage();
  contactsNumberInPage.innerHTML = contactsArray === null ? 0 : contactsArray.length;

}
function setNewLocalstorageData(array) {
  localStorage.setItem("contacts", array);
}

function clearLocalStorageData() {
  localStorage.clear();
}


function getTotalContactsSelector() { return "#totalContacts"; }
function getTotalFavoritesSelector() { return "#totalFavContacts"; }
function getTotalEmergenciesSelector() { return "#totalEmergencyContacts"; }
function getNameInputSelector() { return `.modal-body>form input[id="name"]`; }
function getEmailInputSelector() { return `.modal-body>form input[id="email"]`; }
function getPhoneInputSelector() { return `.modal-body>form input[type="tel"]`; }
function getGroupInputSelector() { return `.modal-body>form select`; }
function getAddContactButtonSelector() { return ".modal-footer>.btn.btn-primary"; }
function getUpdateContactButtonSelector() { return ".modal-footer>.btn.btn-warning"; }
function getCloseContactAddOrUpdateButtonSelector() {
  return ".modal-footer>.btn.btn-secondary";
}
function getFormSelector() { return `.modal-body>form`; }



function editOrCreateContactFormValidation(inputSelector, isInputValid) {

  var input = document.querySelector(inputSelector);


  var inputValidationMessage = document.querySelector(`${inputSelector}+p`);
  if (isInputValid) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    inputValidationMessage.classList.add("d-none");

  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    inputValidationMessage.classList.remove("d-none");
  }

  if (editButton.classList.contains("d-none")) {
    checkAllInputs(getAddContactButtonSelector());

  } else if (createButton.classList.contains("d-none")) {
    checkAllInputs(getUpdateContactButtonSelector());

  }

}

function clearForm() {

  var createContactAllInputs = document.querySelectorAll(
    `${getNameInputSelector()},
    ${getEmailInputSelector()},
      ${getPhoneInputSelector()},
    ${getGroupInputSelector()}`
  )
  for (var i = 0; i < createContactAllInputs.length; i++) {
    createContactAllInputs[i].classList.remove("is-valid");
    createContactAllInputs[i].classList.remove("is-invalid");
  }
  document.querySelector(getFormSelector()).reset();



}


function checkAllInputs(buttonSelector) {
  var createContactAllInputs = document.querySelectorAll(
    `${getNameInputSelector()},
    ${getEmailInputSelector()},
      ${getPhoneInputSelector()},
    ${getGroupInputSelector()}`
  )




  var button = document.querySelector(buttonSelector);

  if (
    Contact.isNameValid(createContactAllInputs[0].value)
    && Contact.isEmailValid(createContactAllInputs[1].value)
    && Contact.isPhoneValid(createContactAllInputs[2].value)
    && Contact.isGroupValid(createContactAllInputs[3].value)
  ) {
    button.disabled = false;

  } else {
    button.disabled = true;
  }

};



var createContactNameInput = document.querySelector(getNameInputSelector());
createContactNameInput.addEventListener("input", function () {
  var nameInputValue = createContactNameInput.value;
  editOrCreateContactFormValidation(getNameInputSelector(), Contact.isNameValid(nameInputValue));
});





var createContactEmailInput = document.querySelector(getEmailInputSelector());
createContactEmailInput.addEventListener("input", function () {
  var emailInputValue = createContactEmailInput.value;
  editOrCreateContactFormValidation(getEmailInputSelector(), Contact.isEmailValid(emailInputValue));
});




var createContactPhoneInput = document.querySelector(getPhoneInputSelector());
createContactPhoneInput.addEventListener("input", function () {
  var phontInputValue = createContactPhoneInput.value;
  editOrCreateContactFormValidation(getPhoneInputSelector(), Contact.isPhoneValid(phontInputValue));
});



var createContactGroupInput = document.querySelector(getGroupInputSelector());
createContactGroupInput.addEventListener("change", function () {

  var groupInputValue = createContactGroupInput.value;
  editOrCreateContactFormValidation(getGroupInputSelector(), Contact.isGroupValid(groupInputValue));
});

















var createButton = document.querySelector(getAddContactButtonSelector());
var editButton = document.querySelector(getUpdateContactButtonSelector());
var closeButton = document.querySelector(getCloseContactAddOrUpdateButtonSelector())

function addContact() {
  clearForm();
  createButton.classList.remove('d-none');
  editButton.classList.add('d-none');


  checkAllInputs(getAddContactButtonSelector());
}

createButton.addEventListener("click", function () {




  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Add contact",
    cancelButtonText: "Cancel",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire({
        title: "Added!",
        text: "Contact is added.",
        icon: "success",
      });

      var contact = mapContactFromTheModal();

      var contactArray = [];
      if (getArrayFromLocalStorage() !== null) {
        contactArray = getArrayFromLocalStorage();
      }

      contactArray.push(contact);
      setNewLocalstorageData(JSON.stringify(contactArray));
      clearForm();
      checkAllInputs(getAddContactButtonSelector());
      displayContacts(getArrayFromLocalStorage());


    }
    else if (result.dismiss === Swal.DismissReason.cancel) {
      /* Read more about handling dismissals below */
      swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "Contact not added",
        icon: "error"
      });
      return;
    }
  });

}
);

var updateIndex = 0;
editButton.addEventListener("click", function () {


  Swal.fire({
    title: "Do you want to save the changes?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Save",
    denyButtonText: `Don't save`
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Saved!", "", "success");

      var newContact = mapContactFromTheModal();
      var allContacts = getArrayFromLocalStorage();
      allContacts[updateIndex] = newContact;
      setNewLocalstorageData(JSON.stringify(allContacts));
      displayContacts(getArrayFromLocalStorage());
      closeButton.click();

    }
    else if (result.isDenied) Swal.fire("Changes are not saved", "", "info");
  });

})



displayContacts(getArrayFromLocalStorage());

function favouriteIconOnPhoto() {
  return `<div style="padding: 3px;" class="position-absolute bg-white top-0 end-0 rounded-circle">
                            <div style="width: 20px; height: 20px;"
                                class="d-flex justify-content-center align-items-center  bg-warning  rounded-circle">
                                <i class="fa-2xs rounded-circle fas fa-star text-light"></i>

                            </div>
                        </div>`;
}


function emergencyIconOnPhoto() {
  return `<div style="padding: 3px;" class="position-absolute bg-white bottom-0 end-0 rounded-circle">
                            <div style="width: 20px; height: 20px;"
                                class="d-flex justify-content-center align-items-center  bg-danger  rounded-circle">
                                <i class="fa-2xs rounded-circle fas fa-heart text-light"></i>

                            </div>
                        </div>`;
}


function displayContacts(array) {
  var contactsArray = array;
  var noContactsDiv = document.querySelector(".cards-section>.no-contact");
  var contactsCards = document.querySelector(".cards-section>#contactCardContainer");
  var favouritesContacts = document.querySelector("#bigFavItem .all-favorites");
  var emergincesContacts = document.querySelector("#bigEmergencyItem .all-emergencies");
  var noFavouritesFound = document.querySelector("#emptyStateFav");
  var noEmergenciesFound = document.querySelector("#emptyStateEmergency");



  if (contactsArray === null) {
    contactsCards.classList.add("d-none");

    noContactsDiv.classList.remove("d-none");

    return;
  }




  // return;
  noContactsDiv.classList.add("d-none");
  contactsCards.classList.remove("d-none");
  // return;

  var allContactsContainerOnPage = ``;
  var favouritesContactContainerOnPage = ``;
  var emergenciesContactContainerOnPage = ``;
  var favourites = 0;
  var emergencies = 0;
  var favouritesContact = [];
  var emergencyContacts = [];
  for (var i = 0; i < contactsArray.length; i++) {
    var contact = contactsArray[i];
    var favouriteIcon = contact.isFavorite === "" ? "" : favouriteIconOnPhoto();
    var emergencyIcon = contact.isEmergency === "" ? "" : emergencyIconOnPhoto();
    // console.log(contact);

    if (contact.isFavorite === "1") {
      favourites++;
      favouritesContact.push(contact);

      favouritesContactContainerOnPage += `<div id="smallFavItem"
                                        class="contact-item  justify-content-between align-items-center gap-3 p-2 rounded-3 mb-3">
                                        <div class="flex-shrink-0">
                                            <img src="${contact.photo}" alt="sssss" class="contact-avatar" />
                                        </div>
                                        <div class="flex-grow-1 text-truncate">
                                            <h4 class="mb-0 fw-medium text-dark small text-truncate">${contact.name}</h4>
                                            <p class="mb-0 text-muted small text-truncate">${contact.phone}</p>
                                        </div>
                                        <a href="tel:${contact.phone}"
                                            class="call-btn d-flex align-items-center justify-content-center flex-shrink-0">
                                            <i class="fas fa-phone"></i>
                                        </a>
                                    </div>`
    }
    if (contact.isEmergency === "1") {
      emergencies++;
      emergencyContacts.push(contact);

      emergenciesContactContainerOnPage+= `    <div id="smallEmergncyItem"
                                        class="contact-item-emergency  align-items-center gap-3 p-2 rounded-3">
                                        <div class="flex-shrink-0">
                                            <img src="${contact.photo}" alt="sssss" class="contact-avatar" />
                                        </div>
                                        <div class="flex-grow-1 text-truncate">
                                            <h4 class="mb-0 fw-medium text-dark small text-truncate">${contact.name}</h4>
                                            <p class="mb-0 text-muted small text-truncate">${contact.phone}</p>
                                        </div>
                                        <a href="tel:${contact.phone}"
                                            class="call-btn-emergency call-btn-rose d-flex align-items-center justify-content-center flex-shrink-0">
                                            <i class="fas fa-phone"></i>
                                        </a>
                                    </div>`

    }

    allContactsContainerOnPage += ` 
    
    
    
    <div class="col-md-6 col-lg-12 col-xl-6 mb-4">
                        

                        
    <div class="card">
        <div class="card-body">
            <div class="row gx-3 gy-2">
                <div class="top-container d-flex align-items-center gap-3">
                    <div class="col-3 mb-1 position-relative">
                        <img class="d-block w-100 rounded-4" src="${contact.photo}" alt="">
                        ${favouriteIcon}



                        ${emergencyIcon}



                    </div>
                    <div class="col-8">
                        <div class="row g-1">
                            <div class="col-12">
                                <h5 class="card-title">${contact.name}</h5>
                            </div>

                            <div class="col-12">
                                <h6 class="card-subtitle mb-2 text-body-secondary">
                                    <div
                                        class="d-inline-block px-2 py-1 bg-primary-subtle text-primary-emphasis rounded-2">
                                        <i class="fa-xs fa-solid fa-phone"></i>
                                    </div> <span class="text-light-emphasis">${contact.phone}</span>
                                </h6>
                            </div>


                        </div>
                    </div>
                </div>

                <div class="col-12 d-flex align-items-center gap-2">
                    <div style="background-color: rgb(230, 224, 241);" class="d-inline-block px-2 py-1 rounded-2"><i
                            style="color: rgb(111, 66, 193);" class="fas fa-envelope"></i></div>
                    <span>${contact.email}</span>
                </div>


                <div class="col-12 d-flex gap-2  align-items-center">
                    <div class="bg-success-subtle d-inline-block px-2 py-1  rounded-2">
                        <i " class=" text-success fas fa-location-dot"></i>
                    </div>

                    <span>${contact.address}</span>
                </div>


                <div class="col-12 d-flex gap-2 align-items-center mb-4">

                    <div class="bg-primary-subtle d-inline-block px-2 py-1  rounded-2">
                        <i " class=" text-primary fas fa-users"></i>
                    </div>
                    <span>${contact.group}</span>
                </div>


                <div class="icons-container d-flex justify-content-between">
                    <div class=" bottom-section d-flex gap-2">


                        <div class="bg-success-subtle d-inline-block p-2  rounded-2" title="Call">


                            <a href="tel:${contact.phone}"> <i class=" text-success fa-solid fa-phone"></i></a>





                        </div>






                        <div style="background-color: rgb(230, 224, 241);" class="d-inline-block p-2 rounded-2"
                            title="Email">
                            <a href="mailto:${contact.email}"> <i style="color: rgb(111, 66, 193);"
                                    class="fas fa-envelope"></i></a>




                        </div>




                    </div>
                    <div class="bottom-section d-flex justify-content-center gap-2 align-items-center">
                        <div class="bg-secondary-subtle p-2 rounded-2" title="Favorites">
                            <i onclick=addToFavourites(${i}) class="fas fa-star"></i>
                        </div>
                        <div class="bg-secondary-subtle p-2 rounded-2" title="Emergency">
                            <i onclick=addToEmergency(${i}) class="fas fa-heart"></i>
                        </div>
                        <div class="bg-secondary-subtle p-2 rounded-2" title="Edit">
                            <i onClick="editContact(${i})" data-bs-toggle="modal" data-bs-target="#exampleModal" class="fas fa-pen"></i>
                        </div>
                        <div class="bg-secondary-subtle p-2 rounded-2" title="Delete">
                            <i  onclick=deleteContact(${i}) class="fas fa-trash"></i>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </div>
    `;



  }




  if (favouritesContact.length === 0) {
    noFavouritesFound.classList.remove("d-none");
    favouritesContacts.classList.add("d-none");

  } else {
    noFavouritesFound.classList.add("d-none");
    favouritesContacts.innerHTML = favouritesContactContainerOnPage;
    favouritesContacts.classList.remove("d-none");
  }





  if(emergencyContacts.length===0){

    noEmergenciesFound.classList.remove("d-none");
    emergincesContacts.classList.add("d-none");
  }else{
     noEmergenciesFound.classList.add("d-none");
     emergincesContacts.innerHTML = emergenciesContactContainerOnPage;
     emergincesContacts.classList.remove("d-none");
     
  }
  contactsCards.innerHTML = allContactsContainerOnPage;


  setContactsFavouritesCount(favourites);
  setContactsEmergenciesCount(emergencies);
  setContactsCount(array);

}

function fillModalWithData(index) {
  var form = ".modal-body>form";
  var name = document.querySelector(`${form} #name`);
  var email = document.querySelector(`${form} #email`);
  var phone = document.querySelector(`${form} #phone`);
  var address = document.querySelector(`${form} #address`);
  var group = document.querySelector(`${form} #group-list`);

  var notes = document.querySelector(`${form} #notes`);

  var isFavorite = document.querySelector(`${form} #favorite`);
  var isEmergency = document.querySelector(`${form} #emergency`);

  var contact = getArrayFromLocalStorage()[index];

  name.value = contact.name;
  email.value = contact.email;
  phone.value = contact.phone;
  address.value = contact.address;
  group.value = contact.group;
  notes.value = contact.notes;
  if (contact.isFavorite == "1") isFavorite.checked = true;
  if (contact.isEmergency == "1") isEmergency.checked = true;

  console.log(contact);


}
function editContact(index) {
  fillModalWithData(index);
  createButton.classList.add("d-none");
  editButton.classList.remove("d-none");
  editButton.disabled = true;
  updateIndex = index;
}




function addToEmergency(index) {

  var allContacts = getArrayFromLocalStorage();
  var currentIsEmergency = allContacts[index].isEmergency;
  allContacts[index].isEmergency = currentIsEmergency == "1" ? "" : "1";
  setNewLocalstorageData(JSON.stringify(allContacts));
  var totalEmergencies = getContactsEmergenciesCount();
  setContactsEmergenciesCount(++totalEmergencies);
  displayContacts(getArrayFromLocalStorage());

}
function addToFavourites(index) {



  var allContacts = getArrayFromLocalStorage();
  var currentIsFavourite = allContacts[index].isFavorite;
  allContacts[index].isFavorite = currentIsFavourite == "1" ? "" : "1";
  setNewLocalstorageData(JSON.stringify(allContacts));
  var totalFavourites = getContactsFavouritesCount();
  setContactsEmergenciesCount(++totalFavourites);
  displayContacts(getArrayFromLocalStorage());


}



function setContactsCount(array) {

  var totalContactsValue = document.querySelector(getTotalContactsSelector());
  var totalSpan = document.querySelector("#totalContactsSpan");

  totalContactsValue.innerHTML = getArrayFromLocalStorage() === null ? "0" : array.length;
  totalSpan.innerHTML = totalContactsValue.innerHTML;
}



function getContactsFavouritesCount() {
  return Number(document.querySelector(getTotalFavoritesSelector()).innerHTML);
}

function setContactsFavouritesCount(total) {
  var totalFavourites = document.querySelector(getTotalFavoritesSelector());
  totalFavourites.innerHTML = total;
}





function getContactsEmergenciesCount() {
  return Number(document.querySelector(getTotalEmergenciesSelector()).innerHTML);
}

function setContactsEmergenciesCount(total) {
  var totalEmergencies = document.querySelector(getTotalEmergenciesSelector());
  totalEmergencies.innerHTML = total;
}



function deleteContact(index) {

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Delete contact",
    cancelButtonText: "Cancel",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire({

        title: "Deleted!",
        text: "Contact deleted.",
        icon: "success"
      });
      var allContacts = getArrayFromLocalStorage()
      // allContacts = [12,2,3];
      allContacts.splice(index);
      if (allContacts.length > 0) {

        setNewLocalstorageData(JSON.stringify(allContacts));
      } else {
        clearLocalStorageData();
      }
      displayContacts(getArrayFromLocalStorage());
    }
    else if (result.dismiss === Swal.DismissReason.cancel)
      /* Read more about handling dismissals below */
      swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "Contact not deleted",
        icon: "error"
      });
  });

}

var searchInput = document.querySelector("#searchInput");

searchInput.addEventListener("input", function () {

  var contacts = getArrayFromLocalStorage();
  if (contacts === null) {
    return;
  }
  var resultArray = [];
  var searchTerm = searchInput.value.toLowerCase().trim();
  for (var i = 0; i < contacts.length; i++) {
    if (
      contacts[i].name.toLowerCase().trim().includes(searchTerm)
      || contacts[i].email.toLowerCase().trim().includes(searchTerm)
      || contacts[i].phone.toLowerCase().trim().includes(searchTerm)

    ) {
      resultArray.push(contacts[i]);
    }

    displayContacts(resultArray);
  }
});


//we need validation using regex
//then after complete validation we will append the contact object to an array
//then we will store localstorage of array of contacts

//we will show alert using SweatAlert that the contact is added
//we will display all contacts






//-------------------------------------------------------------------------

//update , delete part with validation and allert to be continue 
