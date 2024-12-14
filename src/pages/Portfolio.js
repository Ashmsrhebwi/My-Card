/**
 * Portfolio.js, "Portföy" veya "Önceki Çalışmalar" sayfasını görüntüleyen bir bileşendir. Bu dosyada, 
 * StuffAboutUs adlı başka bir bileşen içe aktarılır ve ekibin veya sitenin gerçekleştirdiği önceki projeler veya
 *  işler hakkında bilgi sunar. Sayfa,
 *  tamamlanan projeler veya önceki çalışmalar hakkında ayrıntılar içerebilir ve deneyimleri ve başarıları sergileyebilir.
 */

import React from "react";
// استيراد مكتبة React لإنشاء المكون
// React kütüphanesini bileşen oluşturmak için içe aktarıyoruz.

import StuffAboutUs from "../components/Stuff";
// استيراد مكون `StuffAboutUs` من مسار `../components/Stuff`
// `StuffAboutUs` bileşeni, `../components/Stuff` yolundan içeri aktarılıyor.

function Portfolio() {
  // تعريف مكون `Portfolio` لعرض محتوى مكون `StuffAboutUs`
  // `Portfolio` bileşeni, `StuffAboutUs` içeriğini göstermek için tanımlanıyor.

  return (
    <StuffAboutUs></StuffAboutUs>
    /** عرض مكون `StuffAboutUs` داخل المكون الحالي **/
    /** `StuffAboutUs` bileşeni, mevcut bileşen içinde görüntüleniyor. **/
  );
}

export default Portfolio;
// تصدير مكون `Portfolio` لاستخدامه في أماكن أخرى
// `Portfolio` bileşenini başka yerlerde kullanmak için dışa aktarıyoruz.
