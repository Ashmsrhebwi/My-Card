/**
 * Navbar.js Bölümü Planı
Bu bölümde, ana sayfa bağlantıları, logo ve arama kutusu içeren sabit ve esnek bir gezinme çubuğu oluşturacağız. Bu çubuk, 
tüm cihazlarda kolayca kullanılabilir olacak şekilde tasarlanacaktır.
 */


/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"; // استيراد مكتبة React و useState من React لإنشاء المكونات وإدارة الحالة
// React ve useState'i içeri aktarıyoruz, böylece bileşenler oluşturabilir ve durum yönetimi yapabiliriz.

import { NavLink } from "react-router-dom"; // استيراد NavLink من React Router لإنشاء الروابط
// React Router'dan NavLink'i içeri aktarıyoruz, böylece sayfalar arasında gezinme bağlantıları oluşturabiliriz.

function Navbar() { // تعريف دالة Navbar التي ستقوم بإنشاء مكون شريط التنقل
// Navbar fonksiyonunu tanımlıyoruz, bu fonksiyon navbar bileşenini oluşturacak.

  const [isOpen, setIsOpen] = useState(false); // حالة للتأكد من حالة فتح أو غلق القائمة
  // `isOpen` durumu, menü açılma veya kapanma durumunu tutuyor.

  const toggleNavbar = () => { // دالة للتبديل بين حالة الفتح والإغلاق
  // Menü açılma ve kapanma durumunu değiştiren fonksiyon.

    setIsOpen(!isOpen); // تغيير الحالة إلى عكس ما كانت عليه
    // Durum değerini tersine çeviriyoruz.
  };

  return ( // بداية المكون الذي سيعرض المحتوى
  // İçeriği döndüren fonksiyon başlıyor.
    <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: "var(--dark-color)" }}>
      {/* إنشاء شريط التنقل مع إضافة الكلاسات من Bootstrap */}
      {/* Bootstrap sınıfları ile navbar'ı oluşturuyoruz. */}

      <div className="container"> 
        {/* حاوية لتوسيط المحتوى داخل شريط التنقل */}
        {/* Navbar içeriğini ortalamak için bir container oluşturuyoruz. */}

        <a className="navbar-brand" href="#">
          <img src="images/logo.png" alt="Logo" />
        </a>
        {/* الشعار الخاص بالموقع */}
        {/* Web sitesinin logosu */}

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar} // عند الضغط على الزر نقوم بتبديل حالة القائمة بين الفتح والإغلاق
          // Butona tıklanıldığında menü açılma ve kapanma durumu değişecek
          aria-expanded={isOpen ? "true" : "false"} // تحديث الحالة بناءً على ما إذا كانت القائمة مفتوحة أم لا
          // Durum menünün açık olup olmamasına göre güncelleniyor.
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        {/* زر التبديل لفتح وإغلاق القائمة */}
        {/* Menü açıp kapatmak için buton */}

        <div className={`navbar-collapse ${isOpen ? "show" : "collapse"}`} id="main">
          {/* القائمة التي تحتوي على روابط الموقع */}
          {/* Site bağlantılarını içeren menü */}

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* Bu, gezinti çubuğundaki bağlantıları içeren bir liste oluşturuyor. 
            `ms-auto`, bağlantıları sağa yaslamak için kullanılır. 
            `mb-2` ve `mb-lg-0`, farklı ekran boyutlarında bağlantılar arasındaki boşluğu ayarlamak için eklenmiştir. */}

            <li className="nav-item">
            {/* Burada her bir bağlantıyı temsil eden bir liste öğesi (`li`) bulunur. 
            `nav-item` sınıfı, Bootstrap ile gelen standart bir sınıftır ve navigasyon öğeleri için kullanılır. */}
            <NavLink
            className="nav-nav-link p-2 p-lg-3"
            to="/"
            activeClassName="active" // Kullanıcı bu bağlantıdayken bağlantının görünümünü değiştirmek için `activeClassName` kullanılıyor.
            onClick={() => setIsOpen(false)} // Bağlantıya tıklandığında menüyü kapatmak için bir işlev atanmıştır.
            >
            Home
            </NavLink>
            {/* `NavLink`, React Router'ın bir parçasıdır ve sayfalar arasında bağlantı oluşturmak için kullanılır.
            `to="/"`, bu bağlantının ana sayfaya yönlendirileceğini belirtir. */}
            </li>

            <li className="nav-item">
            <NavLink
            className="nav-link p-2 p-lg-3"
            to="/services"
            activeClassName="active"
            onClick={() => setIsOpen(false)}
            >
            Services
            </NavLink>
            {/* Bu öğe, "Hizmetler" sayfasına yönlendiren bir bağlantıyı temsil eder. 
            `p-2` ve `p-lg-3`, bağlantının iç dolgusunu ayarlamak için kullanılır. */}
            </li>

            <li className="nav-item">
            <NavLink
            className="nav-link p-2 p-lg-3"
            to="/portfolio"
            activeClassName="active"
            onClick={() => setIsOpen(false)}
            >
            Portfolio
            </NavLink>
            {/* "Portfolio" bağlantısını temsil eder. Kullanıcı bu bağlantıya tıkladığında portföy sayfasına gider. */}
            </li>

            <li className="nav-item">
            <NavLink
            className="nav-link p-2 p-lg-3"
            to="/about"
            activeClassName="active"
            onClick={() => setIsOpen(false)}
            >
            About
            </NavLink>
            {/* "Hakkımızda" bağlantısını temsil eder. Sayfalar arasında gezinmek için kullanılır. */}
            </li>

            <li className="nav-item">
            <NavLink
            className="nav-link p-2 p-lg-3"
            to="/contact"
            activeClassName="active"
            onClick={() => setIsOpen(false)}
            >
            Contact
            </NavLink>
            {/* "İletişim" bağlantısını temsil eder. Kullanıcı iletişim sayfasına yönlendirilir. */}
            </li>
          </ul>
{/* Bu liste, gezinti çubuğundaki tüm sayfa bağlantılarını içerir ve kullanıcı deneyimini kolaylaştırır. */}

          {/* هنا نضيف روابط إضافية */}
          {/* Burada ek bağlantılar ekliyoruz */}

          <div className="search ps-3 p-e-3 d-none d-lg d-lg-block">
            <i className="fa-solid fa-magnifying-glass"></i>
            {/* أيقونة البحث */}
            {/* Arama ikonu */}
          </div>

          <a className="btn rounded-pill main-btn" href="#">
            Login
          </a>
          {/* زر تسجيل الدخول */}
          {/* Giriş butonu */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar; // تصدير المكون ليتم استخدامه في أماكن أخرى من المشروع
// Bileşeni dışa aktarıyoruz, böylece başka yerlerde kullanılabilir.
