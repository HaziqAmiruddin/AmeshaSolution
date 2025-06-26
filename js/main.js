(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm scrolled');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm scrolled');
        }
    });

    //Select Scroll Animation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').substring(1); // remove #
      const target = document.getElementById(targetId);

      if (target) {
        e.preventDefault();
        const offset = 70; // adjust for navbar height
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
          top: top,
          behavior: 'smooth'
        });
      }
    });
    });

    //nav-active
    document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link[href^='#']");
    const sections = Array.from(navLinks).map(link => {
      const id = link.getAttribute("href").substring(1);
      return document.getElementById(id);
    });

    function updateActiveLink() {
      let scrollPos = window.scrollY + 150;

      navLinks.forEach((link, i) => {
        const section = sections[i];
        if (!section) return;
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          navLinks.forEach(l => l.classList.remove("active"));
          link.classList.add("active");
        }
      });
    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink(); // Run on page load too
    });

   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 100, 'easeInOutExpo');
        return false;
    });

    // form submission code
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzMZJ6ukzc8fUjiRRrgYQ8758nHtfdvdrRT0yUnaU4VtMNADOF1sKMQCTZc95suczIi/exec'

    const form = document.forms['contact-form']

    form.addEventListener('submit', e => {
      
      e.preventDefault()
      
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => alert("Thank you! Form is submitted" ))
      .then(() => { window.location.reload(); })
      .catch(error => console.error('Error!', error.message))
    })


})(jQuery);

