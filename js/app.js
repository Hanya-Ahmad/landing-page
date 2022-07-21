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
sections.forEach(function buildNavBar(element,index){
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

// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', function checkViewPort(){
    sections.forEach(function (element,index){
if (isInViewport(element)){
    element.className="your-active-class";
}
//if the section is not in viewport it is essential to remove your-active-class so that it gets updated if it was active in a previous loop
else element.classList.remove("your-active-class");})
    
})

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


