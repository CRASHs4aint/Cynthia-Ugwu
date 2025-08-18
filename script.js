const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })

    .to(".boundingelem", {
      y: 0,
      duration: 2,
      ease: Expo.easeInOut,
      delay: -1,
      stagger: 0.2,
    })
    .from("#herofooter", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}
//jab ham mouse move kare toh skew kar paye aur maximum aur minimum skew define kar paye,jab mouse move ho toh chpta ki value badhe,aur jab mouse chalna band ho jaye toh chapta hata lo
var timeout;

function circleChaptaKaro() {
  //define default scale value
  var xscale = 1;
  var yscale = 1;

  var xperv = 0;
  var yperv;

  window.addEventListener("mousemove", function (dets) {
    this.clearTimeout(timeout);

    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xperv);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yperv);

    xperv = dets.clientX;
    yperv = dets.clientY;

    circleMouseFollower(xscale, yscale);

    timeout = setTimeout(function () {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;
    }, 100);
  });
}



function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
  });
}
circleChaptaKaro();
circleMouseFollower();
firstPageAnim();

//teno element ko select karo,uske baad teeno par ek mousemove lagao,jab mousemove ho toh ye pata karo ki mouse kaha par hai,jiska matlab hai mouse ki x and y postion pata karo,ab mouse ki x,y postion ke badle us image ko show karo and us image ko move karo,move karte waqt rotate karo and jaise jaise mouse tez chale waise waise rotation bhi tex ho jaye




// document.querySelectorAll(".elem").forEach(function (elem) {
//   elem.addEventListener("mousemove", function (details) {
//     gsap.to(elem.querySelector("img"), {
//       opacity: 1,
//       ease: Power1,
//     });
//   });
// });

document.querySelectorAll(".elem").forEach(function (elem) {
  elem.addEventListener("mousemove", function (event) {
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      x: event.offsetX,  // image follows cursor horizontally
      y: event.offsetY,  // image follows cursor vertically
      duration: 0.3,
      ease: "power1.out", // lowercase string is the correct GSAP syntax
    });
  });

  // hide the image when mouse leaves
  elem.addEventListener("mouseleave", function () {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      duration: 0.3,
      ease: "power1.out",
    });
  });
});

