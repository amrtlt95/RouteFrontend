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
//will have methods of get and set 
//what is modal ?
//---our modal 
//--- or bootstrap modal ?


/*
will use this modal with some adjustments:-


<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Open modal for @mdo</button>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Open modal for @fat</button>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Open modal for @getbootstrap</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Recipient:</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>


*/

//we need validation using regex 
//then after complete validation we will append the contact object to an array 
//then we will store localstorage of array of contacts

//we will show alert using SweatAlert that the contact is added
//we will display all contacts

//-------------------------------------------------------------------------

//update , delete part with validation and allert to be continue 
