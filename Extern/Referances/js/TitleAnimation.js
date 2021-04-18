$(document).ready(function(){
    var mouseX, mouseY;
    var ww = $( window ).width();
    var wh = $( window ).height();
    var traX, traY;
    $(document).mousemove(function(e){
        mouseX = e.pageX;
        mouseY = e.pageY;
        traX = ((4 * mouseX) / 570) + 40;
        traY = ((4 * mouseY) / 570) + 50;
        $(".title").css({"background-position": traX + "%" + traY + "%"});
    });

});







var logoPosition= document.querySelector('#mother') ;
var container= document.createElement('div') ;
container.style.backgroundColor='red';
container.style.zIndex='10000';
container.style.width='100px' ;
container.style.height= '100px';
var booksLogo=document.createElement('i');
booksLogo.setAttribute("class","fas fa-book-open fa-5x" );
booksLogo.setAttribute('color','green');
container.appendChild(booksLogo);
var before=document.querySelector('.fas fa-bars');
logoPosition.insertBefore(container,before);










