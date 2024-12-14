/**
 * Stuff.js bileşeni, ekibin detaylarını göstermek için tasarlanmış bir React bileşenidir.
 * Kullanıcıya, ekip üyeleri hakkında bilgi sağlayan bir içerik sunar.
 * Şimdi bu kodu adım adım açıklayarak yazacağım.
 */

/* eslint-disable jsx-a11y/anchor-is-valid */
/** Erişilebilirlik uyarıları için `eslint` kuralını devre dışı bırakıyoruz çünkü bu kısımda geçerli bir `href` adresi yok. **/

import React from "react";
/** React kütüphanesini içeri aktarıyoruz. Bu, bileşen oluşturma ve JSX kullanımı için gereklidir. **/

function StuffAboutUs() {
  /**
   * StuffAboutUs fonksiyonu, "ekip hakkında" bölümü için bir React bileşeni oluşturur.
   * Bu fonksiyon, JSX (JavaScript XML) kullanarak arayüzün HTML benzeri yapısını döndürür.
   */

  return (
    <div className="stuff pt-5">
      {/** 
       * Ana bir div konteyner ile başlıyoruz. 
       * `className="stuff pt-5"`:
       *  - `stuff`: Bu bileşene özel stilleri tanımlamak için bir sınıf.
       *  - `pt-5`: Üstten boşluk (padding-top) ekleyerek tasarımı güzelleştiriyoruz.
       */}

      <div className="container">
        {/**
         * Bir `container` içerisine tüm içeriği yerleştiriyoruz.
         * Bu, Bootstrap kullanıyorsak, elemanların ekran boyutuna göre hizalanmasını sağlar.
         */}

        <div className="main-title text-center mt-5 mb-5 position-relative">
          {/**
           * Başlık bölümünü tanımlıyoruz:
           *  - `text-center`: Başlığı ve metni ortalıyoruz.
           *  - `mt-5` ve `mb-5`: Başlıkla diğer içerikler arasında dikey boşluk ekliyoruz.
           */}

          <img className="mb-4" src="images/title.png" alt="" />
          {/** Görseli ekliyoruz ve altında boşluk (margin-bottom) bırakıyoruz. Görsel dosyası "images/title.png". **/}

          <h2>Some Stuff About Us</h2>
          {/** Kullanıcıya ekibin detaylarını tanıtacak bir başlık ekliyoruz. **/}

          <p className="text-black-50 text-uppercase">the great team</p>
          {/** Ekstra bilgi içeren kısa bir paragraf ekliyoruz:
           *  - `text-black-50`: Renk tonu daha açık siyah.
           *  - `text-uppercase`: Tüm harfleri büyük yapar.
           */}
        </div>

        <p className="description text-center mb-5 text-black-50 m-auto">
          {/**
           * Bu paragraf, ekibin genel tanımını içerecek. 
           *  - `text-center`: Metni ortalıyoruz.
           *  - `mb-5`: Altında boşluk bırakıyoruz.
           *  - `m-auto`: Elemanı yatayda ortalıyoruz.
           */}
          We are a team of professionals who love creating beautiful and functional products.
        </p>

        <div className="row align-items-center">
          {/**
           * Satır (`row`) yapısı ile iki sütun oluşturuyoruz. Bu sütunlar metin ve görsel için ayrıldı.
           *  - `align-items-center`: İçerikleri dikeyde ortalıyoruz.
           */}

          <div className="col-lg-4 mb-4 text-center text-md-start">
            {/**
             * İlk sütun:
             *  - `col-lg-4`: Büyük ekranlarda genişliği 12 sütunun 4'ü kadar.
             *  - `mb-4`: Altında boşluk bırakıyoruz.
             *  - `text-center`: Küçük ekranlarda metni ortalıyor.
             *  - `text-md-start`: Orta ve büyük ekranlarda metni sola hizalıyor.
             */}
            <div className="text">
              <h4>THE GREAT TEAM</h4>
              {/** Alt başlık ekliyoruz. **/}

              <p className="text-black-50 fs-5">
                We collaborate, innovate, and achieve excellence together.
                {/** Ekibin değerlerini ve iş felsefesini açıklayan bir metin. 
                 *  - `fs-5`: Yazı boyutunu standarttan biraz daha büyük yapıyoruz.
                 */}
              </p>

              <a className="btn rounded-pill main-btn text-uppercase" href="#">
                {/** Kullanıcıyı harekete geçirmek için bir buton ekliyoruz. Buton "Order Me One" yazıyor. **/}
                Order Me One
              </a>
            </div>
          </div>

          <div className="col-lg-8">
            {/**
             * İkinci sütun:
             *  - Görsel içeren geniş bir alan.
             *  - `col-lg-8`: Büyük ekranlarda genişliği 12 sütunun 8'i kadar.
             */}
            <div className="images">
              <img className="img-fluid" src="images/laptop.png" alt="" />
              {/** Ekibin çalışma ortamını temsil eden bir görsel. Görsel "images/laptop.png". **/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StuffAboutUs;
/** Bu bileşeni dışa aktarıyoruz, böylece başka dosyalarda kullanabiliriz. **/
