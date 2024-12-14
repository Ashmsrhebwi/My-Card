/**
 * index.js, uygulamanın başlangıç noktasına yönlendiren dosyadır ve tüm temel bileşenler burada yapılandırılır.
 *  Bu dosyada, React ve ReactDOM gibi ana kütüphaneler içe aktarılır ve ardından ReactDOM.render() kullanılarak App
 *  bileşeni HTML sayfasındaki root kimliğine sahip öğe içine yerleştirilir. 
 * Ayrıca, temel CSS dosyaları (Bootstrap ve uygulamaya özgü CSS dosyaları) içe aktarılır.

Özetle, bu dosya uygulamanın tamamının tarayıcıda yüklenmesi ve çalıştırılmasından sorumludur.
 */

import '@fortawesome/fontawesome-free/css/all.min.css';
// استيراد مكتبة Font Awesome لتوفير أيقونات جاهزة.
// Font Awesome kütüphanesinin minified CSS dosyasını içe aktararak, hazır simgeleri kullanabiliyoruz.

import 'bootstrap/dist/css/bootstrap.min.css';
// استيراد CSS الخاص بـ Bootstrap لتطبيق تصميمات جاهزة على الواجهة.
// Bootstrap'ın minified CSS dosyasını içe aktararak hazır tasarımlarımızı kullanıyoruz.

import React from "react";
// استيراد React لإنشاء المكونات وتفاعل المستخدم مع الواجهة.
// React'i içe aktarıyoruz, kullanıcı arayüzü bileşenlerini oluşturmak için.

import ReactDOM from "react-dom";
// استيراد ReactDOM لاستخدامه في دمج تطبيق React داخل صفحة HTML.
// ReactDOM'u içe aktarıyoruz, React uygulamamızı HTML sayfasına yerleştirmek için.

import App from "./App";
// استيراد المكون الرئيسي `App` من الملف المحلي `App.js`.
// `App` bileşenini, yerel `App.js` dosyasından içe aktarıyoruz.

import "./css/main.css";
// استيراد ملف CSS مخصص لتعريف الأنماط الخاصة بتطبيقك.
// Özel stil sayfası olan `main.css` dosyasını içe aktarıyoruz.

ReactDOM.render(<App />, document.getElementById("root")); 
// استخدام ReactDOM لدمج مكون `App` داخل العنصر الذي يحمل id "root" في الصفحة.
// `ReactDOM.render`, `App` bileşenini HTML'deki "root" id'li elemana yerleştirmek için kullanılır.
