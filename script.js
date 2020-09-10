const tl = gsap.timeline();

tl.to('.liberty', {
    y: 0,
    scaleY: .4,
    opacity: 1,
    duration: 1
});

tl.from('.liberty', {
    scaleY: .4,
    transformOrigin: "center bottom",
    duration: 1
});
tl.to('.liberty', {
    scaleY: 1,
    transformOrigin: "center bottom",
    duration: 1
});

tl.from('.circle', {
    y: 100,
    opacity: 0,
    stagger: .25,
    y: "random(-200, 200)",
    duration: 4,
    ease: "elastic"
}, "-=2");

tl.from('.car', {
    x: 0,
    skewX: 0
});
tl.to('.car', {
    x: -700,
    duration: 2,
    skewX: -20
});
tl.to('.car', {
    x: -1400,
    duration: 4,
    skewX: 20
});
// tl.from('.car', {
//     x: -700,
//     duration: 4,
//     skewX: 20
// });

