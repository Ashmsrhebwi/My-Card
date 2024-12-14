import React from "react";

// React'te bir Subscribe bileşeni tanımlanıyor
function Subscribe() {
  return (
    // Ana <div> öğesi, "subscribe" bölümünü içeriyor ve Bootstrap sınıfları ile düzenleniyor
    <div className="subscribe pt-5 pb-5 text-center text-md-start">
      {/* İçeriği ortalamak ve sayfanın ortasında tutmak için bir container kullanılıyor */}
      <div className="container">
        {/* Bootstrap kullanılarak bir form oluşturuluyor ve sütunlara (columns) ayrılıyor */}
        <form className="row align-items-center">
          {/* İlk sütun: Abonelik başlığını içeriyor */}
          <div className="col-md-6 col-lg-3">
            {/* Başlık bir <div> içine yazılıyor ve Bootstrap sınıflarıyla düzenleniyor */}
            <div className="fw-bold fs-5 mb-3">
              Subscribe to our Newsletter:
            </div>
          </div>
          {/* İkinci sütun: E-posta adresini girmek için bir input alanı içeriyor */}
          <div className="col-md-6 col-lg-7">
            {/* E-posta giriş alanı için <input> etiketi */}
            <input
              className="w-100 text-light p-2 bg-transparent"
              type="text"
              placeholder="Enter Email Address"
            />
            {/* 
              - w-100: Input alanının sütun genişliği kadar geniş olmasını sağlar.
              - text-light: Alanın içindeki metni açık renk yapar.
              - p-2: Input'un içindeki metin ve kenarlık arasında boşluk ekler.
              - bg-transparent: Arka planı şeffaf yapar ve genel tasarıma uyar.
            */}
          </div>
          {/* Üçüncü sütun: Abone ol düğmesini içeriyor */}
          <div className="col-md-5 col-lg-2 mt-4">
            {/* Abone ol düğmesi bir <input> öğesiyle tanımlanıyor */}
            <input
              className="btn rounded-pill"
              type="submit"
              value="Subscribe"
            />
            {/* 
              - btn: Bootstrap düğme tasarımını uygular.
              - rounded-pill: Düğmeye yuvarlatılmış kenarlar ekleyerek "hap" şekline benzetir.
            */}
          </div>
        </form>
      </div>
    </div>
  );
}

// Başka yerlerde kullanılmak üzere bileşen dışa aktarılıyor
export default Subscribe;
