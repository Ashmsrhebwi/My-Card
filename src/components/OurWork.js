/**
 * OurWork.js Bölümü
 * Bu bölümde tamamlanan projeler sergilenecek. Kullanıcılar, kategorilere göre filtre yapabilir ve işler hakkında bilgi edinebilir. 
 */

/* eslint-disable jsx-a11y/anchor-is-valid */
/** Burada `anchor` öğesi bir `href` içermediği için ESLint'in erişilebilirlik uyarılarını devre dışı bırakıyoruz. **/

import React from 'react';
/** React kütüphanesini içeri aktarıyoruz, bu uygulamada bileşenler oluşturmak için gerekli. **/

function OurWork() {
/** `OurWork` adlı bir bileşen tanımlıyoruz. Bu bileşen işleri kategorilere ayırarak gösterecek. **/

  const categories = ['All', 'Design', 'Code', 'Photo', 'App'];
  /** Kategorileri içeren bir dizi tanımlıyoruz. Bu dizide "All", "Design" gibi seçim seçenekleri mevcut. **/

  const works = [
    { id: 1, img: 'images/work-01.jpg', category: 'Application' },
    { id: 2, img: 'images/work-02.jpg', category: 'Application' },
    { id: 3, img: 'images/work-03.jpg', category: 'Application' },
    { id: 4, img: 'images/work-04.jpg', category: 'Application' },
    { id: 5, img: 'images/work-05.jpg', category: 'Application' },
    { id: 6, img: 'images/work-06.jpg', category: 'Application' },
    { id: 7, img: 'images/work-07.jpg', category: 'Application' },
    { id: 8, img: 'images/work-08.jpg', category: 'Application' },
  ];
  /** İşleri temsil eden bir dizi oluşturuyoruz. Bu dizi her işin id'sini, resmini ve kategorisini içeriyor. **/

  return (
    <div className="our-work text-center pt-5 pb-5">
      {/** `our-work` sınıfı ile bu bölümü tanımlıyoruz. 
           `text-center` sınıfı ile tüm metinleri ortalıyoruz. 
           `pt-5` ve `pb-5`, üst ve alt boşluklar ekliyor. **/}

      <div className="container">
        {/** İçeriği bir kutu içinde tutmak için Bootstrap'in `container` sınıfını kullanıyoruz. **/}

        <div className="main-title mt-5 mb-5 position-relative">
          {/** Başlık için bir bölüm oluşturuyoruz. 
               `mt-5` ve `mb-5` ile üst ve alt boşluk ekleniyor.
               `position-relative`, başlık içindeki öğelerin doğru konumlandırılması için. **/}

          <img className="mb-4" src="images/title.png" alt="Title" />
          {/** Başlığın üstüne bir resim ekliyoruz. 
               `mb-4` ile resmin altına boşluk ekleniyor. **/}

          <h2>We Make This</h2>
          {/** Bölümün başlığı olan metni ekliyoruz. **/}

          <p className="text-black-50 text-uppercase">Prepare To Be Amazed</p>
          {/** Alt başlık ekleniyor. 
               `text-black-50` ile metin rengi gri tonlarına ayarlanıyor. 
               `text-uppercase` tüm harfleri büyük yapıyor. **/}
        </div>

        <ul className="list-unstyled d-flex justify-content-center mt-5 mb-5">
          {/** Kategoriler için bir liste oluşturuyoruz. 
               `list-unstyled`, liste işaretlerini kaldırıyor. 
               `d-flex` liste elemanlarını yatay olarak hizalıyor. 
               `justify-content-center` ile merkezi hizalama sağlanıyor. **/}

          {categories.map((category, index) => (
            <li key={index} className={index === 0 ? 'active rounded-pill' : ''}>
              {/** `active` sınıfı ilk kategoriye ekleniyor. `rounded-pill` ile kenarlar yuvarlatılıyor. **/}
              {category}
            </li>
          ))}
        </ul>

        <div className="row">
          {/** İşleri göstermek için bir Bootstrap `row` oluşturuyoruz. 
               `row` sınıfı her öğeyi satır düzeninde hizalıyor. **/}

          {works.map((work) => (
            <div key={work.id} className="col-sm-6 col-md-4 col-lg-3">
              {/** İşleri Bootstrap grid sistemi ile sütunlara ayırıyoruz. 
                   `col-sm-6` küçük ekranlarda iki sütun. 
                   `col-md-4` orta ekranlarda üç sütun.
                   `col-lg-3` büyük ekranlarda dört sütun oluşturuyor. **/}

              <div className="box mb-3 bg-white" data-work={work.category}>
                {/** Her iş için beyaz arka plana sahip bir kutu oluşturuyoruz. 
                     `mb-3` ile kutular arasında dikey boşluk ekleniyor. **/}

                <img className="img-fluid" src={work.img} alt={`Work ${work.id}`} />
                {/** İşin resmini ekliyoruz. 
                     `img-fluid` sınıfı resmin kutuya tam oturmasını sağlıyor. **/}
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center mt-5">
          {/** Çağrı butonunu ortalamak için bir `d-flex` konteyner ekliyoruz. 
               `justify-content-center` butonu merkeze hizalıyor. **/}

          <a className="btn rounded-pill main-btn text-uppercase" href="#" to="/services">
            {/** `btn` sınıfı ile Bootstrap buton stili uygulanıyor. 
                 `rounded-pill` kenarları yuvarlatıyor. 
                 `main-btn` özel stil sınıfı. 
                 `text-uppercase` tüm harfleri büyük yapıyor. **/}
            I Want More
          </a>
        </div>
      </div>
    </div>
  );
}

export default OurWork;
/** Bu bileşeni başka dosyalarda kullanabilmek için dışa aktarıyoruz. **/







// "Tam aynı boyutlarda resimler indirmek istiyorum."
