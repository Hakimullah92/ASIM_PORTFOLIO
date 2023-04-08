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


// -------------- Experience Section JSCode Start------------------
let ExperienceLinks=document.querySelectorAll(".nav .experience-link");
let ExperienceContent=document.querySelectorAll(".experience-content .actual-content");
console.log(ExperienceLinks);
ExperienceLinks.forEach((item)=>{
item.addEventListener("click",(event)=>{
    event.preventDefault();
    const content=document.querySelector(item.dataset.target);
    // console.log(content);
    ExperienceLinks.forEach((ele)=>{
      ele.classList.remove("show");
    });

    ExperienceContent.forEach((ele)=>{
      ele.classList.remove("show");
    });
    content.classList.add("show");
    item.classList.add("show");

});
});


let readmorebtn=document.querySelector(".read-more-btn");
let jobdescription=document.querySelector(".job-description");

readmorebtn.addEventListener("click",(e)=>{
  jobdescription.classList.toggle("show-text");
  if(readmorebtn.innerText=="Read More"){
    readmorebtn.innerText="Read Less";
  }
  else{
    readmorebtn.innerText="Read More"
  }
});
// -------------- Experience Section JSCode End------------------