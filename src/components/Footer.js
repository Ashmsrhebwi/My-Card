/**
 * Footer.js dosyasında, telif hakkı bilgileri ve Facebook, 
 * Twitter, LinkedIn, YouTube gibi sosyal medya bağlantıları gösteriyoruz. 
 * Amaç, kullanıcılara ek bilgi sağlamak ve iletişim yolları sunmaktır.
 */

/* eslint-disable jsx-a11y/anchor-is-valid */
/** تعطيل قاعدة eslint الخاصة بإمكانية الوصول (a11y) للرابط الذي لا يحتوي على قيمة `href` صحيحة **/
/** Bu satırda, geçerli olmayan href değeri ile bağlantı erişilebilirliği (a11y) hatalarını engelliyoruz. **/

import React from 'react';
/** استيراد مكتبة React لإنشاء المكونات **/
/** React'i bileşenleri oluşturmak için içeri aktarıyoruz. **/

function Footer() {
/** تعريف دالة `Footer` لعرض تذييل الصفحة **/
/** `Footer` fonksiyonunu tanımlıyoruz, burada sayfanın alt kısmındaki içeriği göstereceğiz. **/

  return (
    <div className="footer pt-5 pb-5 text-white-50 text-center text-md-start" style={{ backgroundColor: '#333' }}>
    {/** حاوية رئيسية للتذييل تحتوي على مسافات داخلية (padding) ونص ملوّن مع خلفية داكنة **/}
    {/** Ana bir konteyner, içeriği gösterecek ve koyu renkli bir arka planla hizalanmış bir bölüm. **/}

      <div className="container">
      {/** حاوية فرعية لاحتواء محتويات التذييل **/}
      {/** İçeriklerin gösterileceği ana konteyneri oluşturuyoruz. **/}

        <div className="row">
        {/** صف لعرض الأعمدة الخاصة بمحتوى التذييل **/}
        {/** Alt bilgiyi içeren sütunları düzenlemek için bir satır (row) oluşturuyoruz. **/}

          <div className="col-md-6 col-lg-4">
          {/** عمود لعرض المعلومات مثل الشعار والنصوص **/}
          {/** Bilgiler ve logo gibi içerikleri içeren bir sütun oluşturuyoruz. **/}

            <div className="info mb-5">
            {/** حاوية لعرض الشعار والنصوص **/}
            {/** Logo ve açıklamaların bulunduğu bir konteyner. **/}

              <img src="images/logo.png" alt="Logo" />
              {/** إضافة صورة الشعار **/}
              {/** Logo resmini ekliyoruz. **/}

              <p className="mb-5 mt-3">
              {/** فقرة تعرض نصًا توضيحيًا **/}
              {/** Açıklama içeren bir paragraf ekliyoruz. **/}

                Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
              </p>
              {/** نص توضيحي حول المحتوى **/}
              {/** İçeriği anlatan bir metin ekliyoruz. **/}

              <div className="copyright">
              {/** عرض حقوق الملكية **/}
              {/** Telif hakları bölümünü gösteriyoruz. **/}

                Created By <span style={{ color: '#28a745' }}>Graphberry</span>
                <div>© 2023 - <span style={{ color: '#ffcc00' }}>Bondi Inc</span></div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-2">
          {/** عمود لعرض روابط التذييل **/}
          {/** Alt bağlantıları göstermek için bir sütun oluşturuyoruz. **/}

            <div className="links">
            {/** حاوية لعرض الروابط **/}
            {/** Bağlantıları gösterecek bir konteyner. **/}

              <h5 className="text-light">Links</h5>
              {/** عنوان لعرض نص "روابط" **/}
              {/** "Bağlantılar" başlığını ekliyoruz. **/}

              <ul className="list-unstyled lh-lg">
              {/** قائمة غير مرتبة لعرض الروابط **/}
              {/** Bağlantıları listeleyeceğimiz bir sırasız liste. **/}

                <li>Home</li>
                <li>Our Services</li>
                <li>Portfolio</li>
                <li>Testimonials</li>
                <li>Support</li>
                <li>Terms and Condition</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-lg-2">
          {/** عمود لعرض معلومات حول الموقع مثل "عنّا" **/}
          {/** "Hakkımızda" gibi içerikleri gösterecek bir sütun oluşturuyoruz. **/}

            <div className="about">
            {/** حاوية لعرض معلومات عن الموقع **/}
            {/** "Hakkımızda" içeriğini gösterecek bir konteyner. **/}

              <h5 className="text-light">About Us</h5>
              {/** عنوان "عنّا" **/}
              {/** "Hakkımızda" başlığını ekliyoruz. **/}

              <ul className="list-unstyled lh-lg">
              {/** قائمة غير مرتبة لعرض الروابط المتعلقة "بنا" **/}
              {/** "Hakkımızda" ile ilgili bağlantıları göstermek için bir sırasız liste. **/}

                <li>Sign In</li>
                <li>Register</li>
                <li>About Us</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
          {/** عمود لعرض بيانات الاتصال **/}
          {/** İletişim bilgilerini göstermek için bir sütun oluşturuyoruz. **/}

            <div className="contact">
            {/** حاوية لعرض بيانات الاتصال **/}
            {/** İletişim bilgilerini gösterecek bir konteyner. **/}

              <h5 className="text-light">Contact Us</h5>
              {/** عنوان "اتصل بنا" **/}
              {/** "Bize Ulaşın" başlığını ekliyoruz. **/}

              <p className="lh-lg mt-3 mb-5">
              {/** فقرة تعرض نصًا عن كيفية الاتصال **/}
              {/** İletişim hakkında açıklama ekliyoruz. **/}

                Get in touch with us via mail or phone. We are waiting for your call or message.
              </p>

              <a className="btn rounded-pill main-btn w-100" href="mailto:graphberry@gmail.com">graphberry@gmail.com</a>
              {/** رابط لفتح البريد الإلكتروني **/}
              {/** E-posta göndermek için bir bağlantı ekliyoruz. **/}

              <ul className="d-flex mt-5 list-unstyled gap-5">
              {/** قائمة لعرض روابط الشبكات الاجتماعية **/}
              {/** Sosyal medya bağlantılarını göstereceğimiz bir liste. **/}

                <li>
                  <a className="d-block text-light" href="#">
                    <i className="fa-brands fa-facebook fa-lg facebook rounded-circle p-2"></i>
                    {/** زر فيسبوك **/}
                    {/** Facebook bağlantısını ekliyoruz. **/}
                  </a>
                </li>
                <li>
                  <a className="d-block text-light" href="#">
                    <i className="fa-brands fa-twitter fa-lg twitter rounded-circle p-2"></i>
                  </a>
                </li>
                <li>
                  <a className="d-block text-light" href="#">
                    <i className="fa-brands fa-linkedin fa-lg linkedin rounded-circle p-2"></i>
                  </a>
                </li>
                <li>
                  <a className="d-block text-light" href="#">
                    <i className="fa-brands fa-youtube fa-lg youtube rounded-circle p-2"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// .footer .contact ul li a {
//   display: inline-block; /* Elemanı bir blok içi eleman gibi davranmasını sağlar, genişlik ve yükseklik kontrolüne olanak tanır */
//   width: 40px; /* Dairenin genişliğini belirler */
//   height: 40px; /* Dairenin yüksekliğini belirler */
//   line-height: 40px; /* İkonun daire içinde dikey olarak ortalanmasını sağlar */
//   text-align: center; /* İkonun daire içinde yatay olarak ortalanmasını sağlar */
//   color: white; /* İkonun rengini beyaz olarak ayarlar */
//   border-radius: 50%; /* Elemanı kareden daireye dönüştürür */
// }
// Bu ikonların arkasına bir daire tasarlamak istiyorum ve her bir daireyi farklı bir renkle yapmak istiyorum.

export default Footer;
/** تصدير مكون `Footer` ليتم استخدامه في أجزاء أخرى من التطبيق **/
/** `Footer` bileşenini dışa aktarıyoruz, böylece başka yerlerde kullanılabilir. **/
