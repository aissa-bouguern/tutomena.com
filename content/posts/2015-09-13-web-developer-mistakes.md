---
title: '5 أخطاء قد يقع فيها مطور الويب'
date: '2015-09-13'
slug: 'blog/web-developer-mistakes'
template: 'post'
categories:
  - مقالات
tags:
  - php
  - workflow
thumbnail: '../thumbnails/developer.png'
---

عمل مطور الويب ليس بالسهل إطلاقا، بل على العكس يتطلب مجهودا جبارا ومواكبة مستمرة لمستجدات المجال وتطوراته، ولهذا فالمطور الأكثر كفاءة هو الذي يستطيع مسايرة هذا الإيقاع السريع لتطور تكنولوجيا الإنترنت وأدواتها. ولكن مهما يكن مستوى مطور الويب فلن يستطيع بلوغ درجة الكمال أبدا ومن الوارد جدا أن يقع في بعض الأخطاء من حين لآخر، وفي هذا المقال قررنا أن نطلعكم على 5 من بين الأخطاء التي يمكن لمطور الويب الوقوع فيها والتي من الممكن تفاديها بدون مجهودات كبيرة.

## 1. التمسك بكتابة أكواد HTML القديمة

قد تجد بعض مطوري الويب لازالوا متشبتين بكتابة بعض أكواد **HTML** التي تعود لعقد التسعينات وبداية الألفية الثالثة مثل استعمال وسوم قديمة تخلت عنها W3C منذ مدة كاستعمال `<font>` أو `<center>`، وهذا غير مجدي لأنه لو كان هذا الوسم مدعوما من طرف متصفحك فلن يكون بالضرورة مدعوما من طرف المتصفحات أو الأجهزة الأخرى كما أنه سيضر بسمعة الموقع في محركات البحث التي دائما ما تفضل التطبيقات والمواقع الحديثة تقنيا.

كما أن بعض المطورين تجدهم يكثرون من استعمال وسوم أخرى مثل `<div>` أو `<span>` في أماكن لا معنى لها فيها عوض استعمال بعض الوسوم الدلالية مثل وسوم الفقرات `<p>` أو اللوائح `<ul>`، `<ol>` التي تفهمها عناكب محركات البحث بسهولة.

## 2. الفورمات (Forms) والسداجة

بعض المطورين وخاصة منهم المبتدئين قد يتسمون بالسداجة التقنية في تعاملهم مع الإستمارات (Forms)، فمثلا يقوم ببرمجة فورم معين ويتوقع أن يستقبل نوعا محددا من البيانات من المستعمل دون التحقق من صحتها قبل إضافتها لقاعدة البيانات (Form Validation) وهذا ما قد يعرض الموقع لعواقب لا تحمد عقباها.

لذلك تذكر دائما أيها المبرمج : الأمن المعلوماتي من أهم الأمور التي عليك إعطاؤها كل ما تستحق من الوقت والإتقان.

## 3. إرهاق الخادم

صفحات الويب التي تحتوي على صور كثيرة (أو فيديوهات) وتستدعي ملفات ستايل CSS أو جافاسكريبت عديدة عادة ما تكون ثقيلة في تحميلها وهذا بسبب كثرة الطلبات التي يستقبلها الخادم وكما نعلم جيدا فالصفحات الثقيلة من الأشياء التي لا يحبها غوغل ويرمي بها بعيدا عن صفحاته الأولى.

لهذا عليك التفكير مليا فيما إذا كنت تحتاج كل ذلك الكم من الصور في الصفحة على موقعك وكذلك عليك بضغط ملفات الستايل CSS والجافاسكريبت في ملف واحد لكل منها من أجل إراحة خادمك قليلا. يمكن كذلك استخدام تقنيات الأجاكس وغيرها إذا كانت متوافقة مع فكرة موقعك.

## 4. تطبيقات ويب غير متوافقة

قد يكون الموقع الذي قمت بتطويره جميلا يعمل بشكل جيد عند فتحه في متصفحك ولكن عندما تفتحه في أجهزة أخرى مثل الموبايل تجد ما لا يسرك.

> توافقية تطبيقات الويب **Designing responsively** مع مختلف الأجهزة أصبح أمرا لا مناص منه فحتى محركات البحث، ومنها غوغل، أصبحت تضعه كأحد المعايير الأساسية في تصنيف المواقع.

## 5. الإجهاد في العمل

قد تمضي أوقات طويلة في العمل على أحد مشاريعك من أجل الحصول على نتيجة جيدة وهذا ما يستلزم منك أوقاتا طويلة ومجهودات كبيرة، لكنك قد تجد بعضا من أصحابك ينهون مشاريع مشابهة في وقت أقل وبنفس الجودة أو حتى أفضل، هنا عليك أن تعيد النظر في كيفية اشتغالك وخاصة الأدوات Tools التي تشتغل بها، فإذا كنت مثلا تعمل على مشروع PHP سيكون من الجيد لك ولصحتك أن تشتغل على محرر يدعم لغة **PHP** مثل **PhpStorm** لأنه سيتيح لك القيام ببعض المهام المتكررة بشكل سهل و أوتوماتيكي بضغطة زر(مثلا انشاء كلاس معين أو إضافة تعاليق على الكود الخاص بك إضافة لتوافقه مع معظم إطارات العمل **Frameworks** المعروفة).

الفكرة هي أنه عليك عدم تكرار نفس العمليات دائما (Don't repeat yourself)، واكب التطور في المجال واستثمر قليلا في الأدوات التي تشتغل عليها لكي تربح الوقت ومعه راحتك.

## خاتمة

هذه بعض من الأخطاء الشائعة التي قد يقع فيها بعض المطورون والتي باجتنابها سنربح عدة أشياء أولها جودة العمل وليس آخرها كسب ثقة الزبون.