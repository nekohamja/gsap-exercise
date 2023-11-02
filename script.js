// from = first keyframe , to = last keyframe

// basic syntaxes
// gsap.from("nav", { duration: 1, y: "-100%", ease: "bounce" });
// gsap.from("li", { duration: 1, opacity: 0, delay: 0.5, stagger: 0.5 });
// gsap.from(".right", { duration: 2, x: "-100vw", delay: 0.5, ease: "expo" });
// gsap.from(".left", { duration: 1, x: "-100%", delay: 0.5, ease: "expo" });
// gsap.to("footer", { duration: 1, y: 0, delay: 2.5, ease: "elastic" });
// gsap.fromTo(
//   "button",
//   { opacity: 0, scale: 0, rotate: 720 },
//   { duration: 1, delay: 3.5, opacity: 1, scale: 1, rotate: 0 }
// );

// timeline = combines animations to each other + default values
const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline
  .from("nav", { y: "-100%", ease: "bounce" })
  .from("li", { opacity: 0, stagger: 0.3 })
  .from(".right", { x: "-100vw", ease: "expo" }, 1) // 1 = absolute delay
  .from(".left", { x: "-100%", ease: "expo" }, "<") // '<' = runs after init of .right
  .to("footer", { y: 0, ease: "elastic" })
  .fromTo(
    "button",
    { opacity: 0, scale: 0, rotate: 720 },
    { opacity: 1, scale: 1, rotate: 0 }
  );

//   reverse everything on click
const button = document.querySelector("button");
button.addEventListener("click", () => {
  timeline.timeScale(2); // adjust timeline speed
  timeline.reverse();
});
