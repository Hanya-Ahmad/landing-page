
const sections = document.querySelectorAll('section');

//Function to check if an element is in viewport

function elementInView (el, dividend = 1){
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

//Function to dynamically build the navigation bar
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

// Add class 'your-active-class' to section when near top of viewport
document.addEventListener('scroll', function checkViewPort(){
  sections.forEach(function (element){
if (elementInView(element,1.25)){
  element.className="your-active-class";
}

//if the section is not in viewport it is essential to remove your-active-class so that it gets updated if it was active in a previous loop
else element.classList.remove("your-active-class");})
})


// Smooth scroll to anchor ID from navbar using scrollTO event
const links = document.querySelectorAll(".page__header ul a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}
function clickHandler(element) {
  element.preventDefault();
  const href = this.getAttribute("href");

  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  });
}
// Smooth scroll to anchor ID from footer using scrollTO event

const footerLinks = document.querySelectorAll(".footer .row ul li a");

for (const link of footerLinks) {
  link.addEventListener("click", clickHandler);
}
function clickHandler(element) {
  element.preventDefault();
  const href = this.getAttribute("href");

  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  });
}

//Add scrolled class to the elements in view port to apply sliding animation to them
const scrollElements = document.querySelectorAll(".landing__container");



const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el,1.25)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});