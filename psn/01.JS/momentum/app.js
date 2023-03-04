const h1 = document.querySelector(".hello h1");

function handleTitleClick1(){
   h1.classList.toggle(activeClass);
} 
h1.addEventListener("click",handleTitleClick1);