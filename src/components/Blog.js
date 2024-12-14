/**
 * Blog.js dosyasında, başlıklar ve özetlerle birlikte makaleler gösteriyoruz. 
 * Amaç, kullanıcılara uygulama ile ilgili içerik sunmaktır.
 */

/* eslint-disable jsx-a11y/anchor-is-valid */
/** تعطيل قاعدة eslint الخاصة بإمكانية الوصول (a11y) للرابط الذي لا يحتوي على قيمة `href` صحيحة **/
/** Bu satırda, geçerli olmayan href değeri ile bağlantı erişilebilirliği (a11y) hatalarını engelliyoruz. **/

import React from "react";
/** استيراد مكتبة React لإنشاء المكونات **/
/** React'i bileşenleri oluşturmak için içeri aktarıyoruz. **/

function OurBlog() {
/** تعريف دالة `OurBlog` لعرض المقالات أو المدونة **/
/** `OurBlog` fonksiyonunu tanımlıyoruz, burada blog yazılarını görüntüleyeceğiz. **/

  const blogPosts = [
  /** تعريف مصفوفة تحتوي على البيانات الخاصة بكل مقال في المدونة **/
  /** Blog yazılarının verilerini içeren bir dizi tanımlıyoruz. **/

    {
      img: "images/blog-1.jpg",
      date: "Jan 17, 2023",
      title: "Some Awesome Blog Title Here",
    },
    {
      img: "images/blog-2.jpg",
      date: "Jan 17, 2023",
      title: "Some Awesome Blog Title Here",
    },
    {
      img: "images/blog-3.jpg",
      date: "Jan 17, 2023",
      title: "Some Awesome Blog Title Here",
    },
  ];

  return (
    <div className="our-blog pt-5 pb-5">
    {/** حاوية رئيسية لعرض المقالات **/}
    {/** Ana konteyner, blog yazılarını görüntüleyeceğimiz bölüm. **/}

      <div className="container">
      {/** حاوية فرعية تحتوي على العنوان والمحتوى داخل الصفحة **/}
      {/** İçeriği ve başlıkları içeren bir alt konteyner oluşturuyoruz. **/}

        <div className="main-title text-center mt-5 mb-5 position-relative">
        {/** حاوية العنوان الرئيسي مع إضافة صورة وأسلوب النص **/}
        {/** Ana başlık için bir konteyner oluşturuyoruz, başlık ve stil ekliyoruz. **/}

          <img className="mb-4" src="images/title.png" alt="Title" />
          {/** إضافة صورة العنوان **/}
          {/** Başlık resmini ekliyoruz. **/}

          <h2>Read Our Blog</h2>
          {/** عنوان رئيسي يعرض نص "قراءة مدونتنا" **/}
          {/** Ana başlık, "Blogumuzu Oku" ifadesini gösteriyor. **/}

          <p className="text-black-50 text-uppercase">New stories</p>
          {/** فقرة تشرح محتوى المدونة وعنوان "قصص جديدة" **/}
          {/** Paragraf, blogun içeriğini ve "Yeni hikayeler" başlığını gösteriyor. **/}

        </div>

        <div className="row">
        {/** حاوية لعرض المقالات على شكل صفوف **/}
        {/** Blog yazılarını satır düzeninde göstermek için bir konteyner. **/}

          {blogPosts.map((post, index) => (
          /** استخدام دالة `map` لتكرار البيانات الخاصة بكل مقال **/
          /** Her bir blog yazısını göstermek için `map` fonksiyonu kullanıyoruz. **/

            <div key={index} className="col-md-6 col-lg-4">
            {/** إنشاء عمود لعرض كل مقال باستخدام نظام الشبكة في Bootstrap **/}
            {/** Bootstrap grid sistemini kullanarak her bir blog yazısını sütun olarak gösteriyoruz. **/}

              <div className="card mb-3">
              {/** إنشاء بطاقة لعرض بيانات المقال **/}
              {/** Blog yazısını göstermek için bir kart (card) yapısı oluşturuyoruz. **/}

                <img className="card-img-top" src={post.img} alt="Blog Post" />
                {/** إضافة صورة المقال في الجزء العلوي من البطاقة **/}
                {/** Kartın üst kısmında blog yazısının resmini gösteriyoruz. **/}

                <div className="card-body">
                {/** حاوية لعرض نص المقال داخل البطاقة **/}
                {/** Blog yazısının içeriğini, başlık ve tarih gibi, kartın içine yerleştiriyoruz. **/}

                  <span className="text-black-50">{post.date}</span>
                  {/** عرض تاريخ المقال **/}
                  {/** Blog yazısının tarihini gösteriyoruz. **/}

                  <h5 className="card-title">{post.title}</h5>
                  {/** عرض عنوان المقال **/}
                  {/** Blog yazısının başlığını gösteriyoruz. **/}

                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center mt-5">
        {/** زر لعرض المزيد من المقالات **/}
        {/** Daha fazla blog yazısı göstermek için bir buton oluşturuyoruz. **/}

          <a className="btn rounded-pill main-btn text-uppercase" href="#">
          {/** رابط لعرض المزيد من القصص **/}
          {/** Daha fazla hikaye için bir buton ekliyoruz. **/}
            More stories
          </a>
        </div>
      </div>
    </div>
  );
}

export default OurBlog;
/** تصدير مكون `OurBlog` ليتم استخدامه في أجزاء أخرى من التطبيق **/
/** `OurBlog` bileşenini dışa aktarıyoruz, böylece başka yerlerde kullanılabilir. **/