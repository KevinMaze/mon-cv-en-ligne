// navbar

let lastScrollTop = 0;
let navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset ||
  this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top="-50px";
  } else {
    navbar.style.top="0";
  }
  lastScrollTop = scrollTop;
});

// typed 

var typed = new Typed('.typed', {
  strings: ['Lorem ipsum dolor sit amet consectetur', 'adipisicing elit. Quod sequi laudantium molestiae autem animi ipsam atque quisquam debitis rem', 'uis blanditiis aliquid voluptatum, corporis omnis hic ut velit tempora dolorem eius. Doloremque aperiam veritatis pariatur porro omnis iure saepe officiis!'],
  typeSpeed: 20,
});

// compteur

let compteur = 0;

$(window).scroll(function() {

  const top = $('.counter').offset().top - 
  window.innerHeight;

  if (compteur == 0 && $(window).scrollTop() > top) {
    $('.counter-value').each(function() {
      let $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum : countTo
      },
      {
        duration: 10000,
        easing: 'swing',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
          complete: function() {
            $this.text(this.countNum);
        }
      });
    });
    compteur = 1;
  }
});

// AOS
AOS.init();