!function(){return function e(t,n,o){function r(c,i){if(!n[c]){if(!t[c]){var l="function"==typeof require&&require;if(!i&&l)return l(c,!0);if(s)return s(c,!0);var a=new Error("Cannot find module '"+c+"'");throw a.code="MODULE_NOT_FOUND",a}var u=n[c]={exports:{}};t[c][0].call(u.exports,function(e){return r(t[c][1][e]||e)},u,u.exports,e,t,n,o)}return n[c].exports}for(var s="function"==typeof require&&require,c=0;c<o.length;c++)r(o[c]);return r}}()({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=n.sign=document.querySelector(".sign"),r=document.querySelector(".overlay"),s=document.querySelector(".modal");o.addEventListener("click",function(e){e.preventDefault(),s.classList.add("expand"),r.classList.add("expand")}),r.addEventListener("click",function(e){e.preventDefault(),r.classList.remove("expand"),s.classList.remove("expand")})},{}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.searchFilter=function(){var e,t,n,o=function(e,t,n){var o=document.querySelectorAll(t),r=document.querySelectorAll(n);o.forEach(function(t){t.textContent.toUpperCase().includes(e)?t.style.display="block":t.style.display="none"}),r.forEach(function(t){t.textContent.toUpperCase().includes(e)?t.style.display="block":t.style.display="none"})};e=document.getElementById("searchInput"),t=".class-item__fragment",n=".class-item",e.addEventListener("keyup",function(e){"Escape"===e.key&&(e.target.value=""),o(e.target.value.toUpperCase(),t,n)})}},{}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.tnsSingle=function(){tns({container:"#tnsSingle",items:1,slideBy:1,speed:1e3,mode:"gallery",mouseDrag:!0,controlsText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']})}},{}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.topNav=function(){document.querySelector(".hamburger").addEventListener("click",function(e){e.preventDefault(),[].map.call(document.querySelectorAll(".hamburger"),function(e){e.classList.toggle("is-active")}),[].map.call(document.querySelectorAll(".top-nav__menu"),function(e){e.classList.toggle("show-top-nav")})})}},{}],5:[function(e,t,n){"use strict";var o=e("./components/tns-slider"),r=e("./components/topNav"),s=e("./components/modal"),c=e("./components/searchFilter");(0,r.topNav)(),(0,o.tnsSingle)(),(0,s.modal)(),document.body.classList.contains("home")||document.body.classList.contains("portfolio")&&(0,c.searchFilter)()},{"./components/modal":1,"./components/searchFilter":2,"./components/tns-slider":3,"./components/topNav":4}]},{},[5]);
//# sourceMappingURL=scripts.js.map
