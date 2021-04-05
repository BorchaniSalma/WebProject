//Brand animation
var brand=document.querySelector(".navbar-brand");
brand.addEventListener("mouseover",function(){
    let intero=document.querySelector(".interogation-mark");
    intero.style.transform="rotate(0.5turn)";
    intero.style.transition ="transform 400ms";
    brand.style.transform= "scale(1.1)";
    brand.style.transition=" transform 400ms";
});
brand.addEventListener("mouseout",function(){
    let intero=document.querySelector(".interogation-mark");
    intero.style.transform="rotate(0turn)";
    intero.style.transition ="transform 400ms";
    brand.style.transform= "scale(1)";
    brand.style.transition=" transform 400ms";
})