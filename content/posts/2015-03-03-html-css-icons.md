---
title: 'أيقونات بال HTML و CSS فقط'
date: '2015-03-03'
slug: 'web-development/html-css/html-css-icons'
template: 'post'
categories:
  - HTML - CSS
tags:
  - font awsome
  - icons
thumbnail: '../thumbnails/css3.png'
---

كثيرا ما نستعمل الأيقونات في مشاريعنا الإحترافية والخاصة سواء للواجهات الأمامية أوالخلفية للموقع ولذلك ومن أجل الحفاظ على كفاءة وسرعة المتصفح وإراحة الخادم من استدعاء عدد كبير من الأيقونات على شكل صور ظهرت العديد من الحلول. من الحلول التي ظهرت، ما يسمى بال CSS Sprite وهي صورة واحدة تضم عددا كبيرا من الأيقونات المستعملة في الموقع عوض استدعاء كل أيقونة على حدى. توضع هذه الصورة كخلفية للعنصر الذي نريد أن نعطيه هذه الأيقونة ثم نقوم بتعديل الوضعية باستعمال خاصية ال background-position في CSS.

![CSS Sprite](https://codeblam.com/wp-content/uploads/2011/04/google.png) أما الحل الثاني فجاء متأخرا، وهو إضافة الأيقونات على شكل font-family ويتم التحكم بحجمها ولونها بشكل سلس وسهل باستعمال CSS وتجدون [هنا](https://fortawesome.github.io/Font-Awesome/icons/ 'Fon Awsome') مثالا على ما نقول. ولكن في كثير من الأحيان يكون من الممكن الإستعانة بحل ثالث وهو انشاء الأيقونة فقط بال HTML و CSS دون إضافة أي ملف إضافي للمشروع كما هو الحال عندما نضيف ال Font Awsomeمثلا ، وهذا ما حاولنا القيام به حين رسمنا 15 أيقونة تستعمل بكثرة وباستعمال قليل من ال HTML وال CSS حيث يكفي مثلا كتابة كود  HTML التالي :

<span class="icon-search"></span>

وإضاة الستايل التالي في ملف ال CSS :

.icon-search{
width: 20px;
height: 20px;
border: 4px solid #000;
display:block;
border-radius: 50%;
position: relative;
}
.icon-search:after{
content: '';
position: absolute;
left:0;
bottom: -20px;
width: 4px;
height: 20px;  
 background: #000;
transform: rotate(21deg);
-webkit-transform: rotate(21deg);
}

للحصول على أيقونة البحث (المكبر) الت تستعمل تقريبا في كل مشروع.

يمكنكم تحميل باقي الأيقونات والتعديل عليها وإضافات أيقونات أخرى من [هنا](https://github.com/tutomena/CSS3-icons 'أيقونات css').
