/**
 * App.js, tüm uygulama bileşenlerini birbirine bağlayan ana bileşendir. Bu bileşende,
 *  üst çubuk (Navbar) ve farklı sayfalar (örneğin Home, About, Contact, vb.)
 *  React Router kullanılarak içe
 *  aktarılır ve kullanıcıların sayfalar arasında geçiş yapmasını sağlar.

App.js bileşeni, uygulama içindeki bağlantı yollarını (route) belirler ve farklı sayfalarda içerik düzenler. 
Bu bileşen, üst çubuğu, geçerli sayfaya ait içeriği ve alt kısmı (Footer) görüntüler.
 */

import React from "react";
// استيراد مكتبة React لإنشاء المكونات التفاعلية.
// React'i, etkileşimli bileşenler oluşturmak için içe aktarıyoruz.

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// استيراد الأدوات اللازمة لتوجيه الصفحات باستخدام React Router.
// React Router kullanarak sayfalar arası geçişi yönetmek için gerekli araçlar içe aktarılıyor.

import Blog from "./components/Blog";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import OurWork from "./components/OurWork";
import ProjectNow from "./components/ProjectNow";
import Stuff from "./components/Stuff";
import Subscribe from "./components/Subscribe";
import Team from "./components/Team";
import Techs from "./components/Techs";
import About from "./pages/blog";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/services";
// استيراد جميع المكونات التي سيتم استخدامها في التطبيق.
// Uygulamada kullanılacak tüm bileşenler içe aktarılıyor.

function App() {
  return (
    <Router>
      {/* 
        Navbar ثابت هنا 
        يتم استخدام مكون Navbar في الجزء العلوي من الصفحة ليكون دائم الظهور 
        Tüm sayfanın üst kısmında sabit olarak görünen `Navbar` bileşeni kullanılıyor.
      */}
      <Navbar />

      {/* 
        الصفحة الرئيسية مع جميع الأقسام
        هنا نقوم بعرض الصفحة الرئيسية بالإضافة إلى كافة الأقسام الأخرى مثل "الخدمات"، "من نحن"، "التقنيات" وغيرها
        Ana sayfa ve tüm bölümleri burada yerleştiriyoruz: `Landing`, `Features`, `OurWork`, `Stuff`, `Team`, `Techs`, `ProjectNow`, `Blog`, `Subscribe`.
      */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* 
                يحتوي على جميع الأقسام
                Bu, tüm bölümleri içeriyor. `Landing`, `Features`, `OurWork`, `Stuff`, `Team`, `Techs`, `ProjectNow`, `Blog`, ve `Subscribe` gibi.
              */}
              <Landing /> 
              <Features />
              <OurWork />
              <Stuff />
              <Team />
              <Techs />
              <ProjectNow />
              <Blog />
              <Subscribe />
            </>
          }
        />
        
        {/* 
          الصفحات الأخرى
          هنا نحدد المسارات الخاصة بالصفحات الأخرى مثل "الخدمات"، "المدونة"، "عن الشركة" وغيرها.
          Diğer sayfalar için yönlendirmeleri belirliyoruz: `Services`, `Portfolio`, `About`, `Contact`, `Blog`, `Subscribe`.
        */}
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/subscribe" element={<Subscribe />} />
      </Routes>

      {/* 
        Footer ثابت هنا 
        هنا نعرض التذييل الثابت الذي يظهر في أسفل الصفحة
        Sayfanın alt kısmında sabit olarak görünen `Footer` bileşenini burada gösteriyoruz.
      */}
      <Footer />
    </Router>
  );
}


export default App;
// تصدير المكون `App` ليتم استخدامه في مكان آخر أو ربطه في `index.js`.
// `App` bileşenini dışa aktarıyoruz, başka bir yerde kullanılmak üzere.
