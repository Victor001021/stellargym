document.addEventListener("DOMContentLoaded", function () {
  var menuItems = document.querySelectorAll("#menu .nav-link");
  var navbarCollapse = document.querySelector("#navbarNav");
  var buttonToggler = document.querySelector("#toggler")

  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {

      menuItems.forEach(function (menuItem) {
        menuItem.classList.remove("active");
      });

      this.classList.add("active");

      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
        buttonToggler.classList.add("collapsed")
      }
    });
  });
});

const elements = document.querySelectorAll('.animate');

elements.forEach(el => {
  el.addEventListener('mousemove', handleMove);
});

function handleMove(e) {
  const el = e.currentTarget;
  const xVal = e.layerX;
  const yVal = e.layerY;

  const height = el.clientHeight;
  const width = el.clientWidth;

  const yRotation = 5 * ((xVal - width / 2) / width);
  const xRotation = -5 * ((yVal - height / 2) / height);

  const string = 'perspective(650px) scale(1.02) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)';

  el.style.transform = string;
}


elements.forEach(el =>{
   el.addEventListener('mouseout', function() {
    el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
  }) 
});




document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const homeSection = document.getElementById("home");

  const options = {
    root: null, 
    threshold: 0.1, 
  };

  const callback = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navbar.classList.remove("fixed-top");
      } else {
        navbar.classList.add("fixed-top");
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  observer.observe(homeSection);
});


  document.addEventListener("DOMContentLoaded", function () {
  const sections = ['home', 'classes', 'trainers', 'plans', 'contact'];

  sections.forEach(sectionId => {
    const section = document.getElementById(sectionId);
    const navLink = document.querySelector(`a.nav-link[href="#${sectionId}"]`);

    const options = {
      root: null,
      threshold: getThresholdBasedOnScreenSize(),
    };

    const callback = function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll('a.nav-link').forEach(function (item) {
            item.classList.remove('active');
          });
          navLink.classList.add("active");
        } else {
          navLink.classList.remove("active");
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(section);
  });

  function getThresholdBasedOnScreenSize() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      return 0.2;
    } else if (screenWidth < 1024) {
      return 0.4;
    } else {
      return 0.5;
    }
  }
});


document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.navbar-nav a.nav-link');
    
    const footerNavLinks = document.querySelectorAll('.footer-nav a.nav-link');

    function scrollToSection(event) {
        event.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

        navLinks.forEach(link => link.classList.remove('active'));
        footerNavLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', scrollToSection);
    });

    footerNavLinks.forEach(link => {
        link.addEventListener('click', scrollToSection);
    });
});