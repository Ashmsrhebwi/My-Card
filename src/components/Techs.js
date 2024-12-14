/**
 * Techs.js dosyasında, projede kullanılan veya sunduğumuz teknolojileri temsil eden bir dizi görsel sunuyoruz. Bu bölüm, React,
 *  Bootstrap gibi teknolojilerin simgelerini veya görsellerini sergiler. Amaç, 
 * projenin kullandığı teknolojileri göstermek ve bu teknolojilerin çözüm geliştirmedeki rolünü vurgulamaktır.
 */

import React from "react";
// استيراد مكتبة React لإنشاء مكون واجهة المستخدم
// React kütüphanesini kullanıcı arayüzü bileşeni oluşturmak için içe aktarıyoruz.

function Techs() {
  // تعريف مكون `Techs` لعرض قائمة من الصور
  // Bir dizi görüntüyü göstermek için `Techs` bileşenini tanımlıyoruz.

  const techImages = [
    // مصفوفة تحتوي على مسارات الصور التي سيتم عرضها
    // Görüntü yollarını içeren bir dizi.
    "images/tech-1.png", // مسار الصورة الأولى
    "images/tech-2.png", // مسار الصورة الثانية
    "images/tech-3.png", // مسار الصورة الثالثة
    "images/tech-4.png", // مسار الصورة الرابعة
    "images/tech-1.png", // مسار الصورة الخامسة (مكررة)
    "images/tech-2.png", // مسار الصورة السادسة (مكررة)
  ];

  return (
    // إرجاع واجهة المستخدم للقسم
    // Bölümün kullanıcı arayüzünü döndürüyoruz.
    <div className="techs pt-5 pb-5 text-center">
      {/* القسم الرئيسي مع padding من الأعلى والأسفل ومحاذاة النص إلى المنتصف */}
      {/* Ana bölüm, üst ve alt padding ile birlikte metni ortalar. */}
      
      <div className="container">
        {/* حاوية لتوسيط وتنظيم الصور */}
        {/* Resimleri ortalamak ve düzenlemek için bir kapsayıcı. */}
        
        <div className="row align-items-center">
          {/* صف يحتوي على الأعمدة ويجعلها عمودياً في المنتصف */}
          {/* Sütunları içerir ve dikey olarak ortalar. */}

          {techImages.map((image, index) => (
            // استخدام `map` لتكرار العناصر في المصفوفة وعرضها
            // Dizideki öğeleri tekrarlamak ve göstermek için `map` kullanıyoruz.
            
            <div key={index} className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
              {/* عمود يحتوي على كل صورة ويحدد عرضه حسب حجم الشاشة */}
              {/* Her görüntüyü içeren bir sütun, ekran boyutuna göre genişliği belirlenir. */}
              
              <img src={image} alt={`Tech ${index + 1}`} />
              {/* عرض الصورة مع خاصية `alt` لضمان الوصولية */}
              {/* Erişilebilirliği sağlamak için `alt` özelliğiyle resmi gösteriyoruz. */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Techs;
// تصدير المكون ليتم استخدامه في أماكن أخرى
// Bileşeni başka yerlerde kullanmak için dışa aktarıyoruz.
