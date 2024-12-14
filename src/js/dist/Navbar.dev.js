"use strict";

// هذا الكود سيتم تنفيذه عند تحميل الصفحة
window.onload = function () {
  // تحديد جميع الروابط التي تحتوي على class "nav-link"
  var navLinks = document.querySelectorAll(".nav-link"); // إضافة حدث عند الضغط على أي رابط

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      // إزالة الفئة "active" من جميع الروابط
      navLinks.forEach(function (link) {
        return link.classList.remove("active");
      }); // إضافة الفئة "active" للرابط الذي تم الضغط عليه

      this.classList.add("active");
    });
  });
};