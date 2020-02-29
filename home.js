const displaysize = screen.availWidth;
const abouthead = document.querySelector(".about-heading h1");
const aboutmedes = document.querySelector(".about-me p");
const skillhtml = document.querySelector(".skills-section .html ");
const skillcss = document.querySelector(".skills-section .css ");
const skilljavascript = document.querySelector(".skills-section .javascript ");
const skillsass = document.querySelector(".skills-section .sass ");
const skillwordpress = document.querySelector(".skills-section .wordpress ");
const skillmore = document.querySelector(".skills-section .more ");

const Burger = document.querySelector(".burger-icon");
const Navbar = document.querySelector(".nav-links");
const MainNav = document.querySelector(".main-nav");

const projectpopup = document.querySelectorAll(".project-popup");

Burger.addEventListener("click", () => {
  Navbar.classList.toggle("nav-active");

  // Burger animation
  Burger.classList.toggle("toggle");
});

$(document).ready(function() {
  if (displaysize < 950) {
    abouthead.setAttribute("data-aos", "fade-up");
    aboutmedes.setAttribute("data-aos", "null");
    skillhtml.setAttribute("data-aos", "null");
    skillcss.setAttribute("data-aos", "null");
    skilljavascript.setAttribute("data-aos", "null");
    skillsass.setAttribute("data-aos", "null");
    skillwordpress.setAttribute("data-aos", "null");
    skillmore.setAttribute("data-aos", "null");

    //this will attach the class to every target

    //add project
    function addPopup(e) {
      removepoPopup();
      //add class 'on'
      this.classList.add("on");
    }
    //remove popup
    function removepoPopup() {
      //remove class'on'
      projectpopup.forEach(item => item.classList.remove("on"));
    }

    projectpopup.forEach(item => item.addEventListener("click", addPopup));
  } else {
    abouthead.setAttribute("data-aos", "fade-down");
    aboutmedes.setAttribute("data-aos", "fade-up");
    skillhtml.setAttribute("data-aos", "flip-right");
    skillcss.setAttribute("data-aos", "flip-right");
    skilljavascript.setAttribute("data-aos", "flip-right");
    skillsass.setAttribute("data-aos", "flip-right");
    skillwordpress.setAttribute("data-aos", "flip-right");
    skillmore.setAttribute("data-aos", "flip-right");
  }
  // Add smooth scrolling to all links
  $("a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
// fixed-navbar
window.addEventListener("scroll", function() {
  if (this.pageYOffset > 0) {
    MainNav.classList.add("nav-fix");
  } else {
    MainNav.classList.remove("nav-fix");
  }

  // AOS
});

$(document).ready(function() {
  AOS.init();
});
