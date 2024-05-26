import { gsap } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';

// Register the plugin with ScrollMagic
ScrollMagicPluginGsap(ScrollMagic, gsap);

// ScrollMagic initialization
const controller = new ScrollMagic.Controller();

// Define the wipe animation using GSAP
const wipeAnimation = gsap.timeline()
  .to("#slideContainer", { duration: 0.5, z: -150 })    // move back in 3D space
  .to("#slideContainer", { duration: 1, x: "-25%" })   // move in to first panel
  .to("#slideContainer", { duration: 0.5, z: 0 })       // move back to origin in 3D space
  .to("#slideContainer", { duration: 0.5, z: -150, delay: 1 })
  .to("#slideContainer", { duration: 1, x: "-50%" })
  .to("#slideContainer", { duration: 0.5, z: 0 })
  .to("#slideContainer", { duration: 0.5, z: -150, delay: 1 })
  .to("#slideContainer", { duration: 1, x: "-75%" })
  .to("#slideContainer", { duration: 0.5, z: 0 });

// Create the ScrollMagic scene to pin and link the animation
new ScrollMagic.Scene({
  triggerElement: "#pinContainer",
  triggerHook: "onLeave",
  duration: "150%"
})
  .setPin("#pinContainer")
  .setTween(wipeAnimation)
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller);

// JavaScript to enable scrolling with keyboard arrows
document.addEventListener('keydown', (event) => {
  const SCROLL_AMOUNT = 40; // Adjust the scroll amount as needed
  if (event.key === 'ArrowDown') {
    window.scrollBy(0, SCROLL_AMOUNT);
  } else if (event.key === 'ArrowUp') {
    window.scrollBy(0, -SCROLL_AMOUNT);
  }
});

