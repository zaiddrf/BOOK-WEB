"use strict";

/* =========================
   1) قائمة الموبايل (فتح/إغلاق)
   ========================= */
document.getElementById("menu-icon").addEventListener("click", () => {
  document.querySelector(".mobile-menu").classList.toggle("hidden");
});

// عند الضغط على القائمة نفسها: تغلق
document.querySelector(".mobile-menu").addEventListener("click", function () {
  this.classList.toggle("hidden");
});

/* =========================
   2) الوضع الداكن (Dark Mode)
   - قراءة الحالة من localStorage
   - تطبيقها عند تحميل الصفحة
   ========================= */
let darkMode = localStorage.getItem("darkMode") === "true";

// إذا كان الداكن مفعّل مسبقاً: طبّقه مباشرة
if (darkMode) {
  document.documentElement.style.setProperty("--secondry-color", "#302e2e");
  document.documentElement.style.setProperty("--dark-primary-color", "#f2f2f2");
}

// زر تبديل الوضع الداكن
document.getElementById("dark-mode").addEventListener("click", () => {
  if (!darkMode) {
    // تفعيل الداكن
    document.documentElement.style.setProperty("--secondry-color", "#302e2e");
    document.documentElement.style.setProperty("--dark-primary-color", "#f2f2f2");
  } else {
    // إلغاء الداكن
    document.documentElement.style.setProperty("--secondry-color", "#f2f2f2");
    document.documentElement.style.setProperty("--dark-primary-color", "#302e2e");
  }

  darkMode = !darkMode;
  localStorage.setItem("darkMode", darkMode);
});

/* =========================
   3) تغيير اللون الأساسي (Color Picker)
   - إظهار/إخفاء input اللون
   - حفظ اللون في localStorage
   ========================= */
const colorPicker = document.getElementById("inputcolor");

// إظهار/إخفاء اختيار اللون
document.getElementById("color").addEventListener("click", () => {
  document.getElementById("inputcolor").classList.toggle("hidden");
});

// تطبيق اللون المخزن (إن وجد)
let pickedcolor = localStorage.getItem("pickedcolor");
if (pickedcolor) {
  document.documentElement.style.setProperty("--primary-color", pickedcolor);
}

// عند تغيير اللون
colorPicker.addEventListener("input", () => {
  document.documentElement.style.setProperty("--primary-color", colorPicker.value);
  localStorage.setItem("pickedcolor", colorPicker.value);
});

/* =========================
   4) البحث (إظهار صندوق البحث)
   ========================= */
document.getElementById("sreachbutton").addEventListener("click", () => {
  document.getElementById("searchBox").classList.toggle("hidden");
});

/* =========================
   5) تمييز كلمة البحث داخل النصوص
   - يبحث داخل p و العناوين
   - يلوّن الكلمة بـ span.highlight
   ========================= */
const searchBox = document.getElementById("searchBox");
const elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6");

// حفظ النص الأصلي لكل عنصر (عشان نرجعه قبل التمييز)
elements.forEach((el) => (el.dataset.original = el.innerHTML));

searchBox.addEventListener("input", () => {
  const word = searchBox.value.trim().toLowerCase();

  elements.forEach((el) => {
    // رجّع النص الأصلي أولاً
    el.innerHTML = el.dataset.original;

    // إذا مربع البحث فاضي: لا تعمل شيء
    if (word === "") return;

    // تمييز كل تطابق
    const regex = new RegExp(`(${word})`, "gi");
    el.innerHTML = el.innerHTML.replace(regex, `<span class="highlight">$1</span>`);
  });
});

/* =========================
   6) إنشاء كروت الكتب المميزة (Featured)
   - يضيف 15 كتاب داخل .bookcards
   ========================= */
const container = document.getElementsByClassName("bookcards")[0];

for (let i = 1; i <= 15; i++) {
  const card = document.createElement("div");
  card.className = "Book_card";
  card.innerHTML = `
          <img src="image/book_${i}.jpg" alt="" />
          <div class="bookdetails">
            <h4>Featured Books</h4>
            <p>
              Jhon Deo <br />
              <span class="genres">trailer , Horror , Romance</span><br />
              <span class="price"
                >$25.50 <sub><del class="old-price">28,60</del></sub></span
              >
            </p>
            <button class="FeaturedBtn" id="FeaturedBtn">Learn More</button>
          </div>
   `;
  container.appendChild(card);
}

/* =========================
   7) إنشاء كروت الإصدارات الجديدة (Arrivals)
   - يضيف 8 عناصر داخل .arrival
   ========================= */
const container2 = document.getElementsByClassName("arrival")[0];

for (let i = 1; i <= 8; i++) {
  const card = document.createElement("div");
  card.className = "arrivalcard";
  card.innerHTML = `
        <img src="image/arrival_${i}.jpg" alt="" />
          <div class="arrivaldetails">
            <p>New Arrivals</p>
            <i class="fa-solid fa-star checkedclass"></i>
            <i class="fa-solid fa-star checkedclass"></i>
            <i class="fa-solid fa-star checkedclass"></i>
            <i class="fa-solid fa-star checkedclass"></i>
            <i class="fa-solid fa-star-half-stroke checkedclass"></i>
            <br />
            <button id="ArrivalsBtn">Learn more</button>
          </div>
   `;
  container2.appendChild(card);
}

/* =========================
   8) إنشاء كروت المراجعات (Reviews)
   - يضيف 4 مراجعات داخل .Review-cards
   ========================= */
const container3 = document.getElementsByClassName("Review-cards")[0];

for (let i = 1; i <= 4; i++) {
  const card = document.createElement("div");
  card.className = "Review-profile cyan-shadow";
  card.innerHTML = `
        <img src="image/review_${i}.png" alt="Reviewer_1" />
          <p class="profile-name">zaid</p>
          <p class="profile-review">
            من أفضل الكتب التي قرأتها في حياتي، أسلوب الكاتب رائع
            ومشوق للغاية. أنصح الجميع بقراءته!  
          </p>
          <div class="rates">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star-half-stroke"></i>
          </div>
   `;
  container3.appendChild(card);
}

/* =========================
   9) إنشاء كروت المدونة (Blog)
   - يضيف 3 بوستات داخل .OurBlog-container
   ========================= */
const container4 = document.getElementsByClassName("OurBlog-container")[0];

for (let i = 1; i <= 3; i++) {
  const card = document.createElement("div");
  card.className = "OurBlog-card shadow";
  card.innerHTML = `
       <div class="OurBlog-image">
            <img src="image/blog_${i}.jpg" alt="blog_${i}" />
          </div>
          <div class="OurBlog-context">
            <p>Bloger</p>
            <p>
              مقالات ومراجعات كتب مختارة بعناية، نشارك فيها أفكارًا وتجارب قراءة تساعدك على اكتشاف كتب تستحق وقتك وتوسّع أفقك.
              
            </p>
          </div>
          <div class="OurBlog-icons">
            <i class="fa-solid fa-calendar-days"></i>
            <i class="fa-solid fa-heart"></i>
          </div>
   `;
  container4.appendChild(card);
}
