document.addEventListener("DOMContentLoaded", function function_name(argument) {
    var nut=document.querySelectorAll('button');
    var manden=document.querySelectorAll('div.blackscreen');
    var menu=document.querySelectorAll('nav.menu');
    nut[0].onclick=function() {
        manden[0].classList.add('appearscreen');
        menu[0].classList.add('appearmenu');
    }

   manden[0].onclick=function () {
        manden[0].classList.remove('appearscreen');
    menu[0].classList.remove('appearmenu');
   }
}, false)