// البحث عن جميع الصور في المعرض
let ourGallery = document.querySelectorAll('.gallery img');

// عند النقر على صورة، ستفتح نافذة منبثقة
ourGallery.forEach(img => {
  img.addEventListener('click', e => {
    // إنشاء overlay
    let overLay = document.createElement('div');
    overLay.className = 'popup-overlay';
    document.body.appendChild(overLay);

    // إنشاء صندوق popup
    let popupBox = document.createElement('div');
    popupBox.className = 'popup-box';

    // إذا كانت الصورة تحتوي على نص بديل (alt)، نقوم بإضافته
    if (img.alt !== null) {
      let imgHeading = document.createElement('h3');
      imgHeading.appendChild(document.createTextNode(img.alt));
      popupBox.appendChild(imgHeading);
    }

    // إضافة الصورة في صندوق popup
    let popupImage = document.createElement('img');
    popupImage.src = img.src;
    popupBox.appendChild(popupImage);

    // إنشاء زر إغلاق
    let popupClose = document.createElement('span');
    popupClose.appendChild(document.createTextNode('X'));
    popupClose.className = 'close-button';
    popupBox.appendChild(popupClose);

    // إضافة صندوق popup إلى الصفحة
    document.body.appendChild(popupBox);

    // عند النقر على زر "X" يتم إغلاق النافذة المنبثقة
    popupClose.addEventListener('click', () => {
      popupBox.remove();
      overLay.remove();
    });

    // عند النقر على الخلفية (الـ overlay) سيتم إغلاق النافذة أيضاً
    overLay.addEventListener('click', () => {
      popupBox.remove();
      overLay.remove();
    });
  });
});
