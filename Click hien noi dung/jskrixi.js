document.addEventListener("DOMContentLoaded",function(){
    var icon = document.querySelectorAll('div.icon');
    var noidung = document.querySelectorAll('div.noidung');
    for(var i = 0; i < icon.length; i++){
        icon[i].onclick = function(){
            if(this.classList[1]=='mautrang'){
                this.classList.remove('mautrang');
                var ndhienra = this.getAttribute('data-hienlen');
                var phantuhienra= document.getElementById(ndhienra);
                phantuhienra.classList.remove('ra');
 
            }
            else{
                for(var  k = 0; k < icon.length; k++){
                    icon[k].classList.remove('mautrang');
                }
                this.classList.toggle('mautrang');
                var ndhienra = this.getAttribute('data-hienlen');
                var phantuhienra= document.getElementById(ndhienra);
                for(var i = 0; i < noidung.length; i++){
                    noidung[i].classList.remove('ra');
                }
                phantuhienra.classList.toggle('ra');
                }
            }
        }
},false)