/**
 * OurWorkmore.js Bölümü ve Kurslar Eklenmesi
 * Bu bölümde, platformda mevcut olan tüm kursları detaylı şekilde göstereceğiz.
 *  Kullanıcıya kurs başlıkları, açıklamalar ve her kursa ait bilgiler sunulacak. Amaç,
 *  kullanıcılara tüm kursları kolayca keşfetmelerini sağlayacak bir gezinti deneyimi sunmak.
 */

/* eslint-disable jsx-a11y/anchor-is-valid */
/** تعطيل تحذيرات ESLint الخاصة بالوصولية لأن الرابط هنا ليس له `href` صالح **/
/** ESLint uyarılarını devre dışı bırakıyoruz çünkü burada bağlantının geçerli bir `href`'i yok **/

import React from 'react';
/** استيراد مكتبة React لإنشاء المكونات **/
/** React'i bileşenleri oluşturmak için içeri aktarıyoruz. **/

function OurWork() {
/** تعريف دالة `OurWork` التي ستقوم بإنشاء المكون لعرض الأعمال **/
/** `OurWork` fonksiyonunu tanımlıyoruz, bu fonksiyon işleri göstermek için bir bileşen oluşturacak. **/

  const categories = ['All', 'Design', 'Code', 'Photo', 'App'];
  /** تعريف مصفوفة `categories` التي تحتوي على أنواع الفئات المختلفة **/
  /** `categories` adlı bir dizi tanımlıyoruz, burada farklı kategori türleri bulunuyor. **/

  const works = [
    { id: 1, img: 'images/work-01.jpg', category: 'Application' },
    { id: 2, img: 'images/work-02.jpg', category: 'Application' },
    { id: 3, img: 'images/work-03.jpg', category: 'Application' },
    { id: 4, img: 'images/work-04.jpg', category: 'Application' },
    { id: 5, img: 'images/work-05.jpg', category: 'Application' },
    { id: 6, img: 'images/work-06.jpg', category: 'Application' },
    { id: 7, img: 'images/work-07.jpg', category: 'Application' },
    { id: 8, img: 'images/work-08.jpg', category: 'Application' },
    { id: 1, img: 'images/work-01.jpg', category: 'Application' },
    { id: 2, img: 'images/work-02.jpg', category: 'Application' },
    { id: 3, img: 'images/work-03.jpg', category: 'Application' },
    { id: 4, img: 'images/work-04.jpg', category: 'Application' },
    { id: 5, img: 'images/work-05.jpg', category: 'Application' },
    { id: 6, img: 'images/work-06.jpg', category: 'Application' },
    { id: 7, img: 'images/work-07.jpg', category: 'Application' },
    { id: 8, img: 'images/work-08.jpg', category: 'Application' },
    { id: 1, img: 'images/work-01.jpg', category: 'Application' },
    { id: 2, img: 'images/work-02.jpg', category: 'Application' },
    { id: 3, img: 'images/work-03.jpg', category: 'Application' },
    { id: 4, img: 'images/work-04.jpg', category: 'Application' },
    { id: 5, img: 'images/work-05.jpg', category: 'Application' },
    { id: 6, img: 'images/work-06.jpg', category: 'Application' },
    { id: 7, img: 'images/work-07.jpg', category: 'Application' },
    { id: 8, img: 'images/work-08.jpg', category: 'Application' },
  ];
  /** تعريف مصفوفة `works` التي تحتوي على بيانات الأعمال مثل `id`, `img`, و `category` **/
  /** `works` adlı bir dizi tanımlıyoruz, burada işler hakkında veriler (id, resim, kategori) bulunuyor. **/

  return (
    <div className="our-work text-center pt-5 pb-5">
    {/** إنشاء حاوية رئيسية لعرض الأعمال مع تنسيق النص في المنتصف **/}
    {/** İşleri göstermek için ana bir konteyner oluşturuyoruz, metin merkezi bir şekilde hizalanmış. **/}

      <div className="container">
      {/** إنشاء حاوية فرعية تحتوي على العنوان والمحتوى داخل الصفحة **/}
      {/** İçeriği ve başlıkları içeren bir alt konteyner oluşturuyoruz. **/}

        <div className="main-title mt-5 mb-5 position-relative">
        {/** حاوية العنوان الرئيسي، مع إضافة صورة وأسلوب النص **/}
        {/** Ana başlık için bir konteyner oluşturuyoruz, başlık ve stil ekliyoruz. **/}

          <img className="mb-4" src="images/title.png" alt="Title" />
          {/** إضافة صورة العنوان **/}
          {/** Başlık resmini ekliyoruz. **/}

          <h2>We Make This</h2>
          {/** عنوان رئيسي يوضح ما نقوم به **/}
          {/** Yaptığımızı belirten ana başlık. **/}

          <p className="text-black-50 text-uppercase">Prepare To Be Amazed</p>
          {/** فقرة تشرح ماذا يمكن للمستخدم توقعه **/}
          {/** Kullanıcının ne bekleyebileceğini açıklayan bir paragraf. **/}

        </div>

        <ul className="list-unstyled d-flex justify-content-center mt-5 mb-5">
        {/** قائمة غير مرتبة تحتوي على الفئات **/}
        {/** Kategoriler için sırasız bir liste oluşturuyoruz. **/}

          {categories.map((category, index) => (
            <li key={index} className={index === 0 ? 'active rounded-pill' : ''}>
              {category}
            </li>
          ))}
        </ul>

        <div className="row">
        {/** حاوية لعرض الأعمال بتنسيق صفوف (rows) وأعمدة (columns) **/}
        {/** İşleri satır (row) ve sütun (column) düzeninde göstermek için bir bölüm. **/}

          {works.map((work) => (
            <div key={work.id} className="col-sm-6 col-md-4 col-lg-3">
            {/** عرض كل عمل داخل عمود معين باستخدام Bootstrap grid system **/}
            {/** Bootstrap grid sistemi kullanarak her bir işi belirli bir sütunda gösteriyoruz. **/}

              <div className="box mb-3 bg-white" data-work={work.category}>
              {/** حاوية لكل عمل تحتوي على صورة العمل مع فئة اللون الأبيض **/}
              {/** Her bir iş için beyaz bir arka plana sahip bir kutu oluşturuyoruz. **/}

                <img className="img-fluid" src={work.img} alt={`Work ${work.id}`} />
                {/** عرض صورة العمل **/}
                {/** İşin resmini gösteriyoruz. **/}

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurWork;
/** تصدير مكون `OurWork` ليتم استخدامه في أجزاء أخرى من التطبيق **/
/** `OurWork` bileşenini başka yerlerde kullanılmak üzere dışa aktarıyoruz. **/