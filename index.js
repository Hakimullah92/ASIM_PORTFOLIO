// Navlink active Functionality Start

let navlinks=document.querySelectorAll(".nav-link"),
     navbarlist=document.querySelector("#navbarNav"),
     menuicon=document.querySelector("#menu"),
     closeicon=document.querySelector("#close"),
     main=document.getElementById("main");
console.log(navlinks);

navlinks.forEach((item)=>{
  item.addEventListener('click',()=>{
     navlinks.forEach((nav)=>{
      nav.classList.remove("active");
     });
     item.classList.add('active');
  });
});

menuicon.addEventListener("click",()=>{
  navbarlist.classList.add("active");
  main.classList.add("active");
});
closeicon.addEventListener("click",()=>{
 navbarlist.classList.remove("active");
 main.classList.remove("active");
});
// Navlink active Functionality End