function activateAnimations() {
  gsap.to("#header-main", {
    scrollTrigger: {
      trigger: ".header__nav",
      start: 1,
      scrub: 0.5,
      end: "200 bottom",
      endTrigger: ".skills ",
      pinSpacing: false,
      // markers: true,
    },
    left: "10%",
    transform: "translate(0,-50%)",
    height: "40rem",
  });
  gsap.to("#header-main", {
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      scrub: 0,
      end: "39.9% 730",
      pin: ".header__center",
      pinSpacing: false,
      // markers: true,
    },
  });
  gsap.to(".skills__main", {
    scrollTrigger: {
      trigger: ".skills",
      start: "top bottom",
      scrub: 0.5,
      end: "400 bottom",
      // markers: true,
    },
    y: -300,
    opacity: 1,
  });

  gsap.to(".header__paragraph--hidden", {
    scrollTrigger: {
      trigger: ".skills",
      start: 140,
      scrub: true,
      end: "+=50",
      endTrigger: ".skills ",
      // markers: true,
    },
    opacity: 1,
    transform: " translateX(0rem)",
  });

  gsap.to(".header__paragraph--hidden", {
    scrollTrigger: {
      trigger: "body",
      start: "130 top",
      scrub: true,
      end: "130 top",
      // markers: true,
    },
    visibility: "visible",
  });
}

ScrollTrigger.matchMedia({
  "(min-width: 1225px)": function () {
    gsap.to(".header__main", {
      duration: 0,
      position: "relative",
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)",

      margin: "0",
    });
    activateAnimations();
  },
  "(max-width: 1226px)": function () {
    gsap.to(".header__main", {
      duration: 0,
      position: "static",
      left: "50%",
      top: "50%",
      transform: "none",

      margin: "15rem auto 0 auto",
    });
  },
});
