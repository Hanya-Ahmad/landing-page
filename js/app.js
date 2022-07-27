/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// this function creates an anchor attribute nested in a list attribute in the navigation bar for each section in the HTML page
//final structure: <li><a href="#name">sectionName</a></li>
sections.forEach(function buildNavBar(element){
    const navbar = document.getElementById("navbar__list");
    let navItem=document.createElement("li");
    let navLink= document.createElement("a");
    //add a name attribute to each section and set it to the same value as the section's id
    const name = element.id;
    element.setAttribute("name",name);
    //anchor to the section name to be able to scroll to it when clicked
    navLink.setAttribute("href","#"+name);
    //get the data-nav value and display it as the text content of the anchor element
    const sectionName = element.getAttribute("data-nav");
    navLink.textContent= sectionName;
    //nest the anchor attribute inside the list attribute
    navbar.appendChild(navItem);
    navItem.appendChild(navLink)
    
}
)

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Add class 'your-active-class' to section when near top of viewport
document.addEventListener('scroll', function checkViewPort(){
  sections.forEach(function (element){
if (isInViewport(element)){
  element.className="your-active-class";
  
}

//if the section is not in viewport it is essential to remove your-active-class so that it gets updated if it was active in a previous loop
else element.classList.remove("your-active-class");})
  
})


// Scroll to anchor ID using scrollTO event
const links = document.querySelectorAll(".page__header ul a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}
function clickHandler(element) {
  const href = element.getAttribute("href");
  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  });
}


// This event listener listens to scroll event to highlight navbar item when in viewport
window.addEventListener("scroll", highlight);
function highlight() {
  sections.forEach(function(element){
    let sectionId = element.getAttribute("id");
    if (
      isInViewport(element)
    ){
      document.querySelector(".navbar__menu a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navbar__menu a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}



