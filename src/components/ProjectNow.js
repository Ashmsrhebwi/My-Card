/**
 * ProjectNow.js, kullanıcı arayüzünde mevcut bir projeyi veya uygulama ile ilgili özel içeriği görüntüleyen bir bölümdür.
 *  Genellikle öne çıkan projeleri sergilemek veya ziyaretçilere/müşterilere yönelik içerik sunmak için kullanılır. 
 * Bu bölüm, proje hakkında kısa bilgiler, 
 * görseller veya daha fazla keşif veya katılım için bağlantılar içerebilir.

Kısacası, ProjectNow, mevcut projeleri kullanıcı arayüzünde sergilemek için kullanılan bir bileşendir.
 */


/* eslint-disable jsx-a11y/anchor-is-valid */
/** تعطيل قاعدة eslint الخاصة بإمكانية الوصول (a11y) للرابط الذي لا يحتوي على قيمة `href` صحيحة **/
/** Bu satırda, geçerli olmayan href değeri ile bağlantı erişilebilirliği (a11y) hatalarını engelliyoruz. **/

import React from "react";
/** استيراد مكتبة React لإنشاء المكونات **/
/** React'i bileşenleri oluşturmak için içeri aktarıyoruz. **/

function ProjectNow() {
/** تعريف دالة `ProjectNow` لعرض مكون "ابدأ مشروعك الآن" **/
/** `ProjectNow` fonksiyonunu tanımlıyoruz, burada "Şimdi Projeyi Başlat" bileşenini oluşturacağız. **/

  return (
    <div className="project-now text-center pt-5 pb-5 text-light">
    {/** حاوية تحتوي على نص وسط الشاشة مع مسافات داخلية (padding) ونص ملوّن **/}
    {/** Ortada yer alan, içeriği ve metni beyaz renkte gösterecek bir konteyner. **/}

      <h2>Start Your Project Now</h2>
      {/** عنوان رئيسي يطلب من المستخدم بدء المشروع **/}
      {/** Kullanıcılardan projelerine hemen başlamalarını isteyen bir başlık. **/}

      <p className="text-white-50">
      {/** فقرة توضّح للمستخدم أنه يمكنه بدء المشروع في أي وقت ويمكنه إلغاءه **/}
      {/** Kullanıcıya projeyi hemen başlatabileceğini ve herhangi bir zaman iptal edebileceğini belirten bir paragraf. **/}

        Leave your description and we start the engine. Don't worry, you can cancel anytime.
      </p>

      <a className="btn rounded-pill main-btn text-uppercase mt-5 mb-5" href="#">
      {/** زر يبدأ المشروع عند النقر عليه **/}
      {/** Kullanıcıya proje başlatma işlemi için tıklanabilir bir düğme sunuyoruz. **/}

        Start Project
      </a>
    </div>
  );
}

export default ProjectNow;
/** تصدير مكون `ProjectNow` ليتم استخدامه في أجزاء أخرى من التطبيق **/
/** `ProjectNow` bileşenini dışa aktarıyoruz, böylece başka yerlerde kullanılabilir. **/
