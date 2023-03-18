// Navlink active Functionality Start

let navlinks=document.querySelectorAll(".nav-link");
console.log(navlinks);

navlinks.forEach((item)=>{
  item.addEventListener('click',()=>{
     navlinks.forEach((nav)=>{
      nav.classList.remove("active");
     });
     item.classList.add('active');
  });
});
// Navlink active Functionality End