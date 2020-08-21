let mainH3 = document.getElementsByClassName("h3-animated")[0];
let textHover1 = document.getElementsByClassName("work__h4")[0];
let textHover2 = document.getElementsByClassName("work__h4")[1];
let textHover3 = document.getElementsByClassName("work__h4")[2];
let hider;
let imgAnimated;
let h3Animated;
let paraAnimated;
let h3, para, img, init, hover, hiddenShow, hiddenHide, mainShow;

function showWork(num) {
  if (hover) {
    hideWork();
  }
  gsap.to(`.h3-animated--${num}`, {
    opacity: 1,
    y: 0,
    duration: 0,
  });
  gsap.to(`.paragraph-animated--${num}`, {
    opacity: 1,
    y: 0,
    duration: 0,
  });
  gsap.to(`.img-animated--${num}`, {
    y: 0,
    opacity: 1,
    duration: 0,
  });
  if (init) {
    hiddenHide.kill();
    paraAnimated.kill();
    imgAnimated.kill();
    h3.kill();
    para.kill();
    img.kill();
  }

  mainShow = gsap.to(`.work__main--${num}`, {
    visibility: "visible",
  });
  h3 = gsap.from(`.h3-animated--${num}`, {
    opacity: 0,
    y: 100,
    duration: 0.65,
    ease: "back.out(1.4)",
  });
  para = gsap.from(`.paragraph-animated--${num}`, {
    opacity: 0,
    delay: 0.1,
    y: 100,
    duration: 0.65,
    ease: "back.out(1.4)",
  });
  img = gsap.from(`.img-animated--${num}`, {
    opacity: 0,
    delay: 0.18,
    y: 100,
    duration: 0.65,
    ease: "back.out(1.8)",
  });
  hiddenShow = gsap.to(`.work__hidden`, {
    opacity: 0,
    duration: 0.25,
  });

  hover = true;
  init = true;
}
gsap.to(`.work__main`, {
  visibility: "hidden",
});
showWork();
hideWork();

function hideWork(num) {
  for (i = 0; i < 3; i++) {
    h3Animated = gsap.to(`.h3-animated--${num}`, {
      opacity: 0,
      duration: 0.4,
      ease: "back.out(1.4)",
    });
    paraAnimated = gsap.to(`.paragraph-animated--${num}`, {
      opacity: 0,
      duration: 0.4,
      ease: "back.out(1.4)",
    });
    imgAnimated = gsap.to(`.img-animated--${num}`, {
      opacity: 0,
      duration: 0.4,
      ease: "back.out(1.8)",
      onComplete: function () {
        gsap.to(`.work__main`, {
          duration: 0,
          visibility: "hidden",
        });

        console.log("wow");
      },
    });
  }
  hover = false;
  hiddenShow.kill();
  hiddenHide = gsap.to(`.work__hidden`, {
    opacity: 1,
    delay: 0.05,
    duration: 0.3,
  });
  h3.kill();
  para.kill();
  img.kill();
  mainShow.kill();
}
textHover1.addEventListener("mouseenter", function () {
  showWork("1");
});
textHover1.addEventListener("mouseleave", function () {
  hideWork("1");
});
textHover2.addEventListener("mouseenter", function () {
  showWork("2");
});
textHover2.addEventListener("mouseleave", function () {
  hideWork("2");
});
textHover3.addEventListener("mouseenter", function () {
  showWork("3");
});
textHover3.addEventListener("mouseleave", function () {
  hideWork("3");
});

function activateAnimations() {
  gsap.to("#header-main", {
    scrollTrigger: {
      trigger: ".header__nav",
      start: 1,
      scrub: 0.5,
      end: "150 bottom",
      endTrigger: ".skills ",
      pinSpacing: false,
      // markers: true,
    },
    height: "42rem",
  });
  gsap.to("#header-main", {
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      scrub: 0,
      end: "400 top",
      pin: ".header",
      // pinSpacing: false,
      // markers: true,
    },
  });
  gsap.to(".skills__main", {
    scrollTrigger: {
      start: "0px top",
      scrub: 0.5,
      end: "300 top",
      // markers: true,
    },
    y: -725,
  });
  gsap.to(".header__svgs", {
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      scrub: 0.5,
      end: "300 top",
      // markers: true,
    },
    transform: "translateY(-125rem)",
  });

  gsap.to(".header__paragraph--hidden", {
    scrollTrigger: {
      trigger: "body",
      start: "100 top",
      scrub: 0.5,
      end: "+=180",
      // markers: true,
    },
    opacity: 1,
    right: "4rem",
  });

  gsap.to(".header__paragraph--hidden", {
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      scrub: true,
      end: 0,
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
      left: "29%",
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
