const tl = gsap.timeline();

// tl.to('.liberty', {
//     y: 0,
//     scaleY: .4,
//     opacity: 1,
//     duration: 1
// });
//
// tl.from('.liberty', {
//     scaleY: .4,
//     transformOrigin: "center bottom",
//     duration: 1
// });
// tl.to('.liberty', {
//     scaleY: 1,
//     transformOrigin: "center bottom",
//     duration: 1
// });
//
// tl.from('.circle', {
//     opacity: 0,
//     stagger: .25,
//     y: "random(-200, 200)",
//     duration: 4,
//     ease: "elastic"
// }, "-=2");
tl.fromTo(".car", {x: -100, skewX: 0}, {duration: 3.5, x: -1400, skewX: "-10px", ease: "power4" });
tl.fromTo(".car", {x: -1400, skewX: 0}, {duration: .5, x: -1500, skewX: "10px", ease: "slow"});

