
const header = document.querySelector(".header");
const sideMenuBtn = document.querySelector(".side-menu-btn");

const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");

const features = document.querySelector(".features");
const company = document.querySelector(".company");

const featuresName = features.querySelector(".menu--name");
const companyName = company.querySelector(".menu--name");

const featuresList = features.querySelector(".popMenu");   
const companyList = company.querySelector(".popMenu");

const featuresArrow = featuresName.querySelector("img"); 
const companyArrow = companyName.querySelector("img");      

sideMenuBtn.addEventListener("click", function () {    

  header.classList.toggle("side-open");

  if (header.classList.contains("side-open")) {

    menuIcon.style.display = "none";
    closeIcon.style.display = "block";

  } else {

    menuIcon.style.display = "block";
    closeIcon.style.display = "none";    

    closeFeatures();
    closeCompany();
  }

});


function openFeatures() {    

  closeCompany();

  featuresList.classList.remove("hidden");

  featuresArrow.src = featuresArrow.dataset.srcup;
}

function closeFeatures() {

  featuresList.classList.add("hidden");   

  featuresArrow.src = featuresArrow.dataset.srcdown;   
}
function openCompany() {   

  closeFeatures();     

  companyList.classList.remove("hidden");

  companyArrow.src = companyArrow.dataset.srcup;   
}
function closeCompany() {    

  companyList.classList.add("hidden");   

  companyArrow.src = companyArrow.dataset.srcdown;  
}
featuresName.addEventListener("click", function () {

  if (featuresList.classList.contains("hidden")) {   

    openFeatures();

  } else {

    closeFeatures();    

  }

});
companyName.addEventListener("click", function () { 
  if (companyList.classList.contains("hidden")) {

    openCompany();    

  } else {

    closeCompany();   

  }

});

let closeTimer; 

features.addEventListener("mouseenter", function () {

  if (window.innerWidth > 760) {

    clearTimeout(closeTimer); 

    openFeatures();

  }

});


features.addEventListener("mouseleave", function () {

  if (window.innerWidth > 760) {

    closeTimer = setTimeout(function () {

      closeFeatures();

    }, 500);

  }

});

company.addEventListener("mouseenter", function () {

  if (window.innerWidth > 760) {     

    clearTimeout(closeTimer);    

    openCompany();

  }

});


company.addEventListener("mouseleave", function () {

  if (window.innerWidth > 760) {

    closeTimer = setTimeout(function () { 

      closeCompany();

    }, 500);

  }

});   



