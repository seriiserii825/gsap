gsap.to('.title', {
    duration: 2,
    y: 200,
    opacity: 1,
    backgroundColor: "#c32",
    ease: "circ"
});
gsap.to('.title span', {
    duration: 1,
    padding: "20px",
    textShadow: "2px 2px 4px rgba(0,0,0,.2)",
    delay: 2,
    scale: 1.3
});