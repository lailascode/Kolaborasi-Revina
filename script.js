// You can add animations, scroll effects, or contact form handling here
console.log("Portfolio site loaded");

//navbar
  function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
  }

 
  document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar-nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        document.getElementById('navLinks').style.display = 'none';
      });
    });
  });

//about
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".about-animate");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.2 });

  targets.forEach(target => {
    observer.observe(target);
  });
});

//portfolio
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el);
  });


  //servis
  document.addEventListener("DOMContentLoaded", function () {
    const contactBox = document.querySelector(".contact-box");

    function animateContactBox() {
      const boxTop = contactBox.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (boxTop < windowHeight - 100) {
        contactBox.classList.add("show");
        window.removeEventListener("scroll", animateContactBox);
      }
    }

    window.addEventListener("scroll", animateContactBox);
    animateContactBox();
  });