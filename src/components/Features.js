/**
 * Features.js Bölümü Features bölümünde,
 *  uygulamanın temel özellikleri simgeler ve sayılarla hızlıca sunulacak. Bu bölüm,
 *  kullanım kolaylığı, hız ve destek gibi önemli yönleri vurgulayacaktır.
 */


import React from "react";
/** استيراد مكتبة React لإنشاء المكونات **/
/** React'i bileşenleri oluşturmak için içeri aktarıyoruz. **/

function Features() {
/** تعريف دالة `Features` لعرض المميزات أو الدورات التدريبية **/
/** `Features` fonksiyonunu tanımlıyoruz, burada kurslar veya özellikler gösterilecek. **/

  return (
    <div className="features text-center pt-5 pb-5">
    {/** حاوية رئيسية لعرض المميزات مع تنسيق النص في المنتصف **/}
    {/** Özellikleri ortalamak için ana bir konteyner oluşturuyoruz. **/}

      <div className="container">
      {/** حاوية فرعية تحتوي على العنوان والمحتوى داخل الصفحة **/}
      {/** İçeriği ve başlıkları içeren bir alt konteyner oluşturuyoruz. **/}

        <div className="main-title mt-5 mb-5 position-relative">
        {/** حاوية العنوان الرئيسي مع إضافة صورة وأسلوب النص **/}
        {/** Ana başlık için bir konteyner oluşturuyoruz, başlık ve stil ekliyoruz. **/}

          <img className="mb-4" src="/images/title.png" alt="Title" />
          {/** إضافة صورة العنوان **/}
          {/** Başlık resmini ekliyoruz. **/}

          <h2>We Will Provide You</h2>
          {/** عنوان رئيسي يوضح ما سنقدمه للمستخدم **/}
          {/** Kullanıcıya ne sunacağımızı belirten ana başlık. **/}

          <p className="text-black-50 text-uppercase">Some of These Courses Under</p>
          {/** فقرة تشرح بعض الدورات التدريبية التي ستعرض تحت هذا العنوان **/}
          {/** Bu başlık altında sunulacak kursların açıklamalarını yapan bir paragraf. **/}

        </div>

        <div className="row">
        {/** حاوية لعرض الدورات التدريبية على شكل صفوف **/}
        {/** Kursları satır düzeninde göstermek için bir bölüm. **/}

          <Feature
            number="1"
            icon="fa-chart-line"
            title="Graphic Design"
            description="Innovative Graphic Design that brings your ideas to life with creativity and precision."
          />
          {/** إضافة الميزة الأولى مع بياناتها **/}
          {/** İlk özelliği, ilgili verilerle birlikte ekliyoruz. **/}

          <Feature
            number="2"
            icon="fa-laptop-code"
            title="Web Design"
            description="Modern Web Design that combines functionality with stunning visuals for an exceptional user experience."
          />
          {/** إضافة الميزة الثانية مع بياناتها **/}
          {/** İkinci özelliği, ilgili verilerle birlikte ekliyoruz. **/}

          <Feature
            number="3"
            icon="fa-cogs"
            title="Web Development"
            description="Cutting-edge Web Development to build fast, secure, and scalable digital solutions tailored to your needs."
          />
          {/** إضافة الميزة الثالثة مع بياناتها **/}
          {/** Üçüncü özelliği, ilgili verilerle birlikte ekliyoruz. **/}

        </div>
      </div>
    </div>
  );
}

function Feature({ number, icon, title, description }) {
/** تعريف دالة `Feature` لعرض كل ميزة بمعلوماتها الخاصة مثل الرقم، الأيقونة، العنوان، والوصف **/
/** `Feature` fonksiyonunu tanımlıyoruz, her bir özelliği numara, simge, başlık ve açıklama ile gösterecek. **/

  return (
    <div className="col-md-6 col-lg-4">
    {/** حاوية لعرض كل ميزة داخل عمود معين باستخدام Bootstrap grid system **/}
    {/** Bootstrap grid sistemi kullanarak her bir özelliği belirli bir sütunda gösteriyoruz. **/}

      <div className="feat">
      {/** حاوية لعرض الميزة مع تفاصيل الأيقونة والعنوان والوصف **/}
      {/** Özellik detaylarını, simge ve başlıkla birlikte gösterecek bir kutu oluşturuyoruz. **/}

        <div className="icon-holder position-relative">
        {/** حاوية الأيقونة التي تحتوي على الرقم والأيقونة المناسبة **/}
        {/** Simgeyi ve numarayı içeren konumlandırılmış bir alan oluşturuyoruz. **/}

          <i className={`fa-solid fa-${number} position-absolute bottom-0 number`}></i>
          {/** عرض الرقم الخاص بكل ميزة **/}
          {/** Her özelliğe ait numarayı gösteriyoruz. **/}

          <i className={`fa-solid fa-4x ${icon} position-absolute bottom-0 icon`}></i>
          {/** عرض الأيقونة الخاصة بكل ميزة **/}
          {/** Her özelliğe ait simgeyi gösteriyoruz. **/}

        </div>

        <h4 className="mb-4 mt-4 text-uppercase">{title}</h4>
        {/** عرض عنوان الميزة **/}
        {/** Özelliğin başlığını gösteriyoruz. **/}

        <p className="text-black-50 lh-lg">{description}</p>
        {/** عرض وصف الميزة **/}
        {/** Özelliğin açıklamasını gösteriyoruz. **/}

      </div>
    </div>
  );
}

export default Features;
/** تصدير مكون `Features` ليتم استخدامه في أجزاء أخرى من التطبيق **/
/** `Features` bileşenini başka yerlerde kullanılmak üzere dışa aktarıyoruz. **/