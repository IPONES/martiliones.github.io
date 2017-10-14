module.exports = [
            {
              name:'Введение в React',
              searchName:'React',
              img:'https://smartprogress.do/uploadImages/000627994.jpg',
              fullDescription:'React представляется идеальный инструмент для создания масштабируемых веб-приложений (в данном случае речь идет о фронтенде), особенно в тех ситуациях, когда приложение представляет SPA (одностраничное приложение). React относительно прост в освоении, имеет понятный и лаконичный синтаксис.Вся структура веб-страницы может быть представлена с помощью DOM (Document Object Model)- организация элементов html, которыми мы можем манипулировать, изменять, удалять или добавлять новые. Для взаимодействия с DOM применяется язык JavaScript. Однако когда мы пытаемся манипулировать html-элементами с помощью JavaScript, то мы можем столкнуться со снижением производительности, особенно при изменении большого количества элементов. А операции над элементами могут занять некоторое время, что неизбежно скажется на пользовательском опыте. Однако если бы мы работали из кода js с объектами JavaScript, то операции производились бы быстрее. Для решения проблемы производительности как раз и появилась концепция виртуального DOM. Виртуальный DOM представляет легковесную копию обычного DOM. И отличительной особенностью React является то, что данная библиотека работает именно с виртуальным DOM, а не обычным. Если приложению нужно узнать информацию о состоянии элементов, то происходит обращение к виртуальному DOM. Если необходимо изменить элементы веб-страницы, то изменения вначале вносятся в виртуальный DOM. Потом новое состояние виртуального DOM сравнивается с текущим состоянием. И если эти состояния различаются, то React находит минимальное количество манипуляций, которые необходимы до обновления реального DOM до нового состояния и производит их. В итоге такая схема взаимодействия с элементами веб-страницы работает гораздо быстрее и эффективнее, чем если бы мы работали из JavaScript с DOM напрямую.',
              id:0
            },
            {
              name:'Изучаем Angular 4',
              searchName:'Angular',
              img:'https://coursehunters.net/uploads/course_posters_/egghead-build-an-angular-2-search-component.jpg',
              fullDescription:'Angular представляет фреймворк от компании Google для создания клиентских приложений. Прежде всего он нацелен на разработку SPA-решений (Single Page Application), то есть одностраничных приложений. В этом плане Angular является наследником другого фреймворка AngularJS. В то же время Angular это не новая версия AngularJS, а принципиальной новый фреймворк. Angular 4 предоставляет такую функциональность, как двустороннее связывание, позволяющее динамически изменять данные в одном месте интерфейса при изменении данных модели в другом, шаблоны, маршрутизация и так далее. Одной из ключевых особенностей Angular является то, что он использует в качестве языка программирования TypeScript. Поэтому перед началом работы рекомендуется ознакомиться с основами данного языка, про которые можно прочитать здесь. Но мы не ограничены языком TypeScript. При желании можем писать приложения на Angular с помощью таких языков как Dart или JavaScript. Однако TypeScript все таки является основным языком для Angular. Последняя версия Angular - Angular 4 вышла 23 марта 2017 года. Официальный репозиторий фреймворка на гитхабе: https://github.com/angular/angular. Там вы можете найти сами исходные файлы, а также некоторую дополнительную информацию.',
              id:1
            },
            {
              name:'Что такое Vue.js',
              searchName:'Vue',
              img:'https://pavlov.od.ua/images/posts/post-02810e07216aa1141d8cccd3bc033795.png',
              fullDescription:'Официальный сайт фреймворка - https://vuejs.org/, где можно найти непосредственно файлы фреймворка, а также сопроводительные материалы и документацию. Кроме того, сам проект доступен на github по адресу https://github.com/vuejs/vue. Vue.js имеет довольно небольшой размер - не более 20 кБ, и при этом обладает хорошей производительностью по сравнению с такими фреймворками как Angular или React. Поэтому неудивительно, что данный фреймворк в последнее время набирает обороты и становится все более популярным. Одним из ключевых моментов в работе Vue.js является виртуальный DOM. Структура веб-страницы, как правило, описывается с помощью DOM (Document Object Model), которая представляет организацию элементов html на странице. Для взаимодействия с DOM (добавления, изменения, удаления html-элементов) применяется JavaScript. Но когда мы пытаемся манипулировать html-элементами с помощью JavaScript, то мы можем столкнуться со снижением производительности, особенно при изменении большого количества элементов. А операции над элементами могут занять некоторое время, что неизбежно скажется на пользовательском опыте. Однако если бы мы работали из кода js с объектами JavaScript, то операции производились бы быстрее. Для этого Vue.js использует виртуальный DOM. Виртуальный DOM представляет легковесную копию обычного DOM. Если приложению нужно узнать информацию о состоянии элементов, то происходит обращение к виртуальному DOM. Если данные, которые используются в приложении Vue.js, изменяются, то изменения вначале вносятся в виртуальный DOM. Потом Vue выбирает минимальный набор компонентов, для которых надо выполнить изменения на веб-странице, чтобы реальный DOM соответствовал виртуальному. Благодаря виртуальному DOM повышается производительность приложения. Vue.js поддерживается всеми браузерами, которые совместимы с ECMAScript 5. На данный момент это все современные браузеры, в том числе IE11.' ,
              id:2
            },
            {
              name:'Что такое Meteor.js? ',
              searchName:'Meteor',
              img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUgAAACaCAMAAAD8SyGRAAAAflBMVEXeT0/////cQEDdSkrcPT3eTU365+fdRET87+/dR0fdRUXmgIDcQUHdSUnxu7vkcXHrmprja2v0y8vle3vgWVnuq6v+9/fld3ffVVX66Ojrn5/54eHqlJTpj4/209P88fH10NDzxMThX1/niYntp6fiZmbbNTXvsrLzxsbaLS0jpBXRAAAFAUlEQVR4nO3aDXeiOBQGYBISQyIoKiKI4Ld0//8f3JsERNvO7M62nZ5h3+f09ChGlLchN4QGAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHw1+d1fYBzktXBJIs6PklMbYpEhyY8KUympY17D7/4ifzppWuqT4WaefPc3+dNJOaMk9XSlA4yVHyKLJVUck05NIDNE+QHhqSnCIF6fVRDMkeQHJIuKkuTHWklZI8n/is5rvYqKUMZNHcuipSpeIMxfJ0809VHnPAilqnaU5FHLYP5/mA0pTu6TFWOf+Q4U8kfh/dWBce300zZJUx8dxGlOfTIpbZKVDLOd6TvlsNfYjKqjqmU5mUS19s/4rJyU0cIeYbiKJoOopqwVvfqgnFE5Ccz6YWMZZVLXNPURa5YlMsi3PDxVmb62yqeW1N1ey8lhnakRRckrRnJ/SMnGPmHuTAyn7FFKUceHp03sEAc23adtdHWoLjT1ETN2SsKMbbmeR1m8mvl+rtPHxusRJemDZK3NRMblD4Pc2SCX/ypI2lRTksv8qpMFWwszza8iXQob2nOQzPXpceiCZCc6zLhlv9Qjmx8E6Qs2b9hCmw0lGe/Y4tYe7PDhgszLKIr2rvlmNGWoD7IRQbhgr4PMV9OODVrO6cHK9amdfWFu+5gLstn07ew+pUwmKZd6QkmqKWsF37LNbWYzdkFWN2OUmo6rS/ZBstrE1dsgeRJ6fp2RHhg3jl5Nv80FuRRdM9fBFvRKntKpHLG5oe44E6Jlq+HUroTdF9Ujesi/7cg/2T3Ivdiyt0HeYm8oCuHKNlncN/ggu3aueMjsrG2ZEeEppyT5hc24OLKpHQiGIAO9G2eQ7JjTr+jVGLn0Dtd7cO8GGb34dkfpZk6LndK2zOgr7cxQAT8K0bBaPQXJ7YjcjCvIY59mtPtBsRmuTd4NspcnfpIzvcRmxVpu5oytFHXHJb9VtrL4IP+i+biY2zeszTcc85dwQb7oLohN+ilBBmbXirimwdGWlGnMD+wgZEvVxlfthvi/3Wk0E0kX5PJ2doe1vH1SkEF8mQkaHI+c72ySpqJpgZJv5pHb0RTtLsiYzj6KoVDbV0Fe1k57+vkYOenaXbrNBV3ZHDkNjrTnC2NnLkvWJG+C3Ma//Xi/TBekNFRmUqNfBZkL4/1j1fbNukv2QG4CcVgKsWQHGyerRbF3c8anIE8jyrEPMgjnrIrlmyCV7PVveD9I/txMyq3k1YHT1LRR4sUmeZqcky7IJru6uf+L+O2H+3X6IAN1ofzeBBlkRUaK4e7Lu0EegsI37O9oy2KmkuggdElTRbpYZDWP7VqdD1JIVdu9pOMZIocgAzuEmddj5F3an7U/LTb+WtuSp8YUeSOKnFVG0Yec3ZqnD5I+TrgFkBHd/x6CtF73yMHuF4MMks2EX6nznagUJeGeHV3vuwcplZ3/l+NZ3H0O0lw+q0fSC2mpNtQd6dq8irNtMKxHulUjv/Z5HE29iZt9tL+vweg0j6L93K+Q08O7fNffjXDb8yFI0+4f2u0f/u1HnemHLhRrFiVS++16l0d73znjNb0xX43m5I6FEMOYr+mZ6O7ZiEfDv6CEQxPHPLV7PFUpI7PJpFk8pKuHj3NvHE2OX82utcnRDIQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8CX+BiQMTScPc8PYAAAAAElFTkSuQmCC',
              fullDescription:'Meteor — веб-платформа на языке JavaScript, предназначенная для разработки Web-приложений реального времени. Для связи с современными браузерами используется протокол Distributed Data Protocol (англ.)русск. (DDP), поддерживаемый с помощью WebSocket, либо, если поддержки веб-сокетов и DDP нет — AJAX. Код Meteor работает поверх node.js (однако он не придерживается принятой в node.js асинхронной модели, что может затруднить интеграцию node.js и meteor-приложений)[1]. Ядром Meteor является протокол DDP[2]. Он предназначен для работы с коллекциями JSON-документов, позволяя легко создавать, обновлять, удалять, запрашивать и просматривать их. По умолчанию в качестве хранилища таких документов используется MongoDB. Одна из важнейших особенностей платформы состоит в том, что она позволяет использовать один и тот же код как на стороне сервера, так и на стороне клиента. Между сервером и клиентом, как правило, передаются данные, а не HTML-код[1].',
              id:3
            },
            {
              name:'Плюсы Node.js',
              searchName:'Node',
              img:'https://inbenefit.com/wp-content/uploads/2017/04/Зачем-нужен-Node.js-.jpg',
              fullDescription:'Node или Node.js — программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код), превращающая JavaScript из узкоспециализированного языка в язык общего назначения. Node.js добавляет возможность JavaScript взаимодействовать с устройствами ввода-вывода через свой API (написанный на C++), подключать другие внешние библиотеки, написанные на разных языках, обеспечивая вызовы к ним из JavaScript-кода. Node.js применяется преимущественно на сервере, выполняя роль веб-сервера, но есть возможность разрабатывать на Node.js и десктопные оконные приложения (при помощи NW.js, AppJS или Electron для Linux, Windows и Mac OS) и даже программировать микроконтроллеры (например, tessel и espruino). В основе Node.js лежит событийно-ориентированное и асинхронное (или реактивное) программирование с неблокирующим вводом/выводом.',
              id:4
            },
            {
              name:'Ember.js',
              searchName:'Ember',
              img:'http://i1-news.softpedia-static.com/images/news2/ember-js-2-0-released-and-other-javascript-related-news-489267-2.jpg',
              fullDescription:'Ember.js — свободный JavaScript каркас веб-приложений, реализующий MVC шаблон, предназначенный для упрощения создания масштабируемых одностраничных[5] веб-приложений. Фреймворк используется такими компаниями как TED, Yahoo!, Twitch.tv и Groupon[6].  Маршруты являются одним из основополагающих принципов Ember.js и подчеркивают важность URL в управлении состоянием приложения. Маршруту объекта соответствует URL-адрес, который определяет текущее состояние приложения. Маршруты определены в единственном объекте маршрутизатора[9]. Каждому маршруту соответствует модель, в которой содержатся данные, соответствующие текущему состоянию приложения. И несмотря на то, что есть возможность использовать jQuery чтобы загружать с сервера JSON-объекты, большинство приложений все-таки использует для этих целей библиотеку с моделью данных, например, Ember Data.Контроллеры используются для того, чтобы добавить модели некую логику отображения. Ранее стандартной практикой было наследовать контроллер от ObjectController если модель представляла собой один объект, и от ArrayController — если модель была массивом записей. Сейчас эти базовые классы считаются устаревшими и нормальной практикой считается обращение к свойствам модели из Ember.Controller. Шаблоны написаны на языке HTMLBars и описывают пользовательский интерфейс. Шаблоны используются для построения HTML кода приложения и позволяют встраивать в него динамически обновляемые выражения',
              id:5
            }
]
