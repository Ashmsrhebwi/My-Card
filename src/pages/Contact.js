/**
 * Contact.js, "Bize Ulaşın" sayfasını görüntüleyen bir bileşendir. Bu dosyada,
 *  kullanıcıların isim, e-posta ve mesajlarını girmeleri için alanlar içeren bir form oluşturulmuştur. 
 * Form ayrıca girilen verileri göndermek için bir gönderme düğmesi içerir. Bu bölüm,
 *  kullanıcıların ekip veya siteyle iletişim kurabilmesi için bir yol sağlar.
 */


import React from "react";
// استيراد مكتبة React لإنشاء المكون
// React kütüphanesini bileşen oluşturmak için içe aktarıyoruz.

function Contact() {
  // تعريف مكون `Contact` لإظهار نموذج التواصل
  // İletişim formunu göstermek için `Contact` bileşeni tanımlanıyor.

  return (
    <section className="contactt container py-5">
      {/** قسم الاتصال الذي يحتوي على النموذج، يضم تنسيق Bootstrap **/}
      {/** Bootstrap stillerini kullanan, iletişim formunu içeren bir bölüm. **/}

      <h2 className="text-center mb-4">We'd Love to Hear From You</h2>
      {/** عنوان القسم بمحاذاة وسطية مع تباعد من الأسفل **/}
      {/** Ortalanmış bir başlık ve altında boşluk bırakılmış bir metin. **/}

      <form>
        {/** بداية النموذج **/}
        {/** Form başlangıcı. **/}

        <div className="mb-3">
          {/** حقل إدخال الاسم مع مسافة أسفل الحقل **/}
          {/** Ad alanı ve altına boşluk eklenmiştir. **/}

          <label htmlFor="name" className="form-label">Name</label>
          {/** تسمية لحقل إدخال الاسم **/}
          {/** Ad giriş alanı için bir etiket. **/}

          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
          />
          {/** حقل الإدخال الخاص بالاسم مع فئة Bootstrap **/}
          {/** Bootstrap sınıfı kullanılarak ad girişi için bir alan. **/}
        </div>

        <div className="mb-3">
          {/** حقل إدخال البريد الإلكتروني مع مسافة أسفل الحقل **/}
          {/** E-posta alanı ve altına boşluk eklenmiştir. **/}

          <label htmlFor="email" className="form-label">Email</label>
          {/** تسمية لحقل إدخال البريد الإلكتروني **/}
          {/** E-posta giriş alanı için bir etiket. **/}

          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
          />
          {/** حقل الإدخال الخاص بالبريد الإلكتروني مع تنسيق Bootstrap **/}
          {/** Bootstrap sınıfı kullanılarak e-posta girişi için bir alan. **/}
        </div>

        <div className="mb-3">
          {/** حقل إدخال الرسالة مع مسافة أسفل الحقل **/}
          {/** Mesaj alanı ve altına boşluk eklenmiştir. **/}

          <label htmlFor="message" className="form-label">Message</label>
          {/** تسمية لحقل النص المخصص للرسالة **/}
          {/** Mesaj giriş alanı için bir etiket. **/}

          <textarea
            className="form-control"
            id="message"
            rows="5"
            placeholder="Your message"
          ></textarea>
          {/** حقل النص الطويل للرسالة مع تحديد عدد الصفوف **/}
          {/** Mesaj yazmak için bir metin alanı, satır sayısı `rows` ile belirlenmiştir. **/}
        </div>

        <button type="submit" className="btn btn-dark">Submit</button>
        {/** زر إرسال للنموذج مع تصميم داكن باستخدام Bootstrap **/}
        {/** Form gönderimi için, Bootstrap ile koyu renkli bir düğme. **/}
      </form>
    </section>
  );
}

export default Contact;
// تصدير مكون `Contact` لاستخدامه في أماكن أخرى
// `Contact` bileşenini başka yerlerde kullanmak için dışa aktarıyoruz.
