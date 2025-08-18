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
      delay:-1,
      stagger: 0.2,
    })
    .from("#herofooter", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay:-1,
      ease: Expo.easeInOut,
    });
}
//jab ham mouse move kare toh skew kar paye aur maximum aur minimum skew define kar paye,jab mouse move ho toh chpta ki value badhe,aur jab mouse chalna band ho jaye toh chapta hata lo

function circleChaptaKaro(){
     window.addEventListener("mousemove",function(dets){

     });
}

function circleMouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
  });
}
circleMouseFollower();
firstPageAnim();
