$(document).ready(function () {
  $("#profile_ripple").ripples({
    resolution: 512,
    dropRadious: 10,
  });

  const bars = document.querySelectorAll(".progress__bar");

  bars.forEach(function (bar) {
    let percentage = bar.dataset.percent;
    let tooltip = bar.children[0];
    tooltip.innerText = percentage + "%";
    bar.style.width = percentage + "%";
  });

  // counter

  const counters = document.querySelectorAll(".counter");

  function runCounter() {
    counters.forEach((counter) => {
      counter.innerText = 0;

      let target = +counter.dataset.count;
      let step = target / 200;

      let countIt = function () {
        let displayedCount = +counter.innerText;
        if (displayedCount < target) {
          counter.innerText = Math.ceil(displayedCount + step);

          setTimeout(countIt, 1);
        } else {
          counter.innerText = target;
        }
      };

      countIt();
    });
  }

  let counterSection = document.querySelector(".counter__section");
  let options = {
    rootMargin: "0px 0px -100px 0px",
  };

  const sectionObserver = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
      runCounter();
    }
  }, options);

  sectionObserver.observe(counterSection);

  //   image filter
  var $wrapper = $(".portfolio__wrapper");
  $wrapper.isotope({
    filter: "*",
    layoutMode: "masonry",
    animationOptions: {
      duration: 750,
      easing: "linear",
    },
  });

  let links = document.querySelectorAll(".tabs a");

  links.forEach((link) => {
    let selector = link.dataset.filter;

    link.addEventListener("click", (e) => {
      e.preventDefault();

      $wrapper.isotope({
        filter: selector,
        layoutMode: "masonry",
        animationOptions: {
          duration: 750,
          easing: "linear",
        },
      });
      links.forEach((link) => {
        link.classList.remove("active");
      });
      e.target.classList.add("active");
    });
  });

  //magnify popup

  $(".magnify").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
    zoom: {
      enable: true,
    },
  });



  // slider
  $('.slider').slick({
    arrows:false,
    autoplay:true

  })




});
