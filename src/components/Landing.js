/**
 * Landing.js Bölümü Planı
 * Bu bölümde, siteye gelen kullanıcılara başlık, açıklama ve aksiyon çağrıları (CTA'lar) içeren ana sayfayı tasarlayacağız.
 */

/* eslint-disable jsx-a11y/anchor-is-valid */
/** تعطيل تحذيرات ESLint الخاصة بالوصولية لأن الرابط هنا ليس له `href` صالح **/
/** ESLint uyarılarını devre dışı bırakıyoruz çünkü burada bağlantının geçerli bir `href`'i yok **/

import React from "react";
/** استيراد مكتبة React لإنشاء المكونات **/
/** React'i bileşenleri oluşturmak için içeri aktarıyoruz. **/

function Landing() { 
/* تعريف دالة `Landing` التي ستقوم بإنشاء المكون الذي يعرض الصفحة الرئيسية **/
/** `Landing` fonksiyonunu tanımlıyoruz, bu fonksiyon ana sayfayı oluşturacak. **/

  return (
    <div className="landing d-flex justify-content-center align-items-center"> 
    {/** إنشاء حاوية رئيسية باستخدام Flexbox لتوسيط المحتوى **/}
    {/** Flexbox kullanarak içerikleri merkezde tutmak için ana bir konteyner oluşturuyoruz. **/}

      <div className="text-center text-light"> 
      {/** حاوية فرعية لتوسيط النص داخلها وتغيير لونه إلى أبيض **/}
      {/** Metni ortalamak ve rengini beyaz yapmak için bir alt konteyner oluşturuyoruz. **/}

        <h1>Discover the Future of Learning</h1> 
        {/** العنوان الرئيسي للصفحة يعرض رسالة الترحيب **/}
        {/** Sayfanın ana başlığını, karşılama mesajını gösteriyoruz. **/}

        <p className="fs-6">Empowering You with the Latest in Technology and Innovation for Education</p> 
        {/** فقرة تشرح أهمية التعليم وتحديثاته التكنولوجية **/}
        {/** Eğitimdeki teknoloji ve yenilikleri anlatan bir paragraf ekliyoruz. **/}

        <a className="btn rounded-pill main-btn" href="#"> 
        {/** زر للتفاعل مع المستخدم، في هذه الحالة لا يؤدي إلى أي رابط لأن `href` فارغ **/}
        {/** Kullanıcı ile etkileşim kurmak için bir buton ekliyoruz, burada `href` boş, bu yüzden bir link yok. **/}
          Get Started 
        </a>
      </div>
    </div>
  );
}

export default Landing; 
/** تصدير مكون `Landing` ليتم استخدامه في أجزاء أخرى من التطبيق **/
/** `Landing` bileşenini başka yerlerde kullanılmak üzere dışa aktarıyoruz. **/