/**
 * AppLayout.js, uygulamanın genel yapısını düzenleyen bir bileşendir, başlık ve açıklama sayfanın üst kısmında yer alırken,
 *  diğer bileşenlerden gelen içerik main bölümünde görüntülenir.
 * Bu bileşen, herhangi bir içeriğin eklenebileceği esnek bir düzen sağlar.
Özetle, bu bileşen uygulama sayfalarının ana konteyneri olarak görev yapar ve ortak öğeleri (başlık ve açıklama gibi) içerirken değişken içeriği de gösterir
 */



import React from "react";
// استيراد مكتبة React التي تسمح بإنشاء المكونات والتفاعل مع واجهة المستخدم.
// React'i içe aktararak, bileşenler oluşturmak ve kullanıcı etkileşimini yönetmek için kullanıyoruz.

import Landing from "./components/Landing";
// استيراد مكون `Landing` من المسار المحدد لاستخدامه داخل المكون `Layout`.
// `Landing` bileşenini belirtilen yoldan içe aktararak, `Layout` bileşeninde kullanıyoruz.

function Layout({ title, description, children }) {
  // إنشاء مكون `Layout` الذي يتلقى خصائص مثل `title`, `description`, و `children`.
  // `Layout` bileşeni, `title`, `description` ve `children` gibi özellikleri alır.

  return (
    <>
      {/* استخدام مكون `Landing` لعرض العنوان والوصف */}
      {/* `Landing` bileşenini, başlık ve açıklamayı göstermek için kullanıyoruz. */}
      <Landing title={title} description={description} />

      {/* عنصر `main` يعرض المحتوى الذي يتم تمريره عبر `children` */}
      {/* `main` elementi, `children` olarak iletilen içeriği göstermek için kullanılır. */}
      <main>{children}</main>
    </>
  );
}

export default Layout; 
// تصدير مكون `Layout` ليتم استخدامه في أماكن أخرى من التطبيق.
// `Layout` bileşenini, başka yerlerde kullanılmak üzere dışa aktarıyoruz.
