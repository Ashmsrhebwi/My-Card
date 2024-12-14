/**
 * About.js, "Hakkında" sayfasının içeriğini görüntüleyen bir bileşendir. 
 * Bu dosyada, sayfada daha fazla içerik göstermek için BlogMore bileşenini kullanıyoruz.
 *  About bileşeni çalıştırıldığında, sayfada BlogMore bileşeni görüntülenir.
 */

import React from "react";
// استيراد مكتبة React لإنشاء مكون واجهة المستخدم
// React kütüphanesini kullanıcı arayüzü bileşeni oluşturmak için içe aktarıyoruz.

import BlogMore from "../components/BlogMore";
// استيراد المكون `BlogMore` من المسار المحدد
// Belirtilen yoldan `BlogMore` bileşeni içe aktarılıyor.

function About() {
  // تعريف مكون `About` الذي يستخدم مكون `BlogMore`
  // `BlogMore` bileşenini kullanan `About` bileşeni tanımlanıyor.

  return (
    // إرجاع واجهة المستخدم الخاصة بالمكون
    // Bileşenin kullanıcı arayüzü döndürülüyor.
    <BlogMore></BlogMore>
    // عرض مكون `BlogMore` داخل المكون الرئيسي `About`
    // `About` bileşeni içinde `BlogMore` bileşenini gösteriyoruz.
  );
}

export default About;
// تصدير المكون `About` ليتم استخدامه في أماكن أخرى
// `About` bileşenini başka yerlerde kullanmak için dışa aktarıyoruz.
