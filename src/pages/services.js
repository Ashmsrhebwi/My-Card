/**
 * Services.js, "Hizmetler" sayfasını görüntüleyen bir bileşendir. Bu dosyada, OurWorkmore adlı başka bir bileşen içe aktarılır 
 * ve site veya ekip tarafından sunulan hizmetler hakkında ek bilgiler veya ayrıntılar görüntülenir.
 *  Sayfa, her hizmet 
 * için bir açıklama ile birlikte farklı hizmetlerin bir listesini içerebilir ve müşterilere sunduklarını gösterebilir.
 */

import React from "react";
// استيراد مكتبة React لإنشاء المكون
// React kütüphanesini bileşen oluşturmak için içe aktarıyoruz.

import OurWorkmore from "../components/OurWorkmore";
// استيراد مكون `OurWorkmore` من المسار `../components/OurWorkmore`
// `OurWorkmore` bileşeni, `../components/OurWorkmore` yolundan içeri aktarılıyor.

function Services() {
  // تعريف مكون `Services`
  // `Services` bileşeni tanımlanıyor.

  return (
    <OurWorkmore> </OurWorkmore>
    /** عرض مكون `OurWorkmore` داخل المكون الحالي **/
    /** `OurWorkmore` bileşeni, mevcut bileşen içinde gösteriliyor. **/
  );
}

export default Services;
// تصدير مكون `Services` لاستخدامه في أماكن أخرى
// `Services` bileşeni başka yerlerde kullanılmak üzere dışa aktarılıyor.
