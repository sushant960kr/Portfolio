import gsap from "gsap";
// Removed: import { ScrollSmoother } from "../Navbar"; // No longer needed as smoother is removed from Navbar
// Removed: import { SplitText } from "gsap-trial/SplitText"; // This is a premium plugin and removed from dependencies

export function initialFX() {
  document.body.style.overflowY = "auto";
  // Removed: smoother.paused(false); // smoother object no longer exists

  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  // Since SplitText is removed, you cannot directly split text into chars.
  // The animation will now apply to the entire element.
  // If you still want character-by-character animation, you'll need
  // to implement your own text splitting logic (e.g., using JS to wrap each char in a <span>).

  // Removed: var landingText = new SplitText(...)
  gsap.fromTo(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"], // Target the elements directly
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      // Stagger will apply to the different elements in the array, not individual chars.
      // Its effect might be different than intended without SplitText.
      stagger: 0.025,
      delay: 0.3,
    }
  );

  // Removed: let TextProps = { type: "chars,lines", linesClass: "split-h2" };
  // Removed: var landingText2 = new SplitText(".landing-h2-info", TextProps);
  gsap.fromTo(
    ".landing-h2-info", // Target the element directly
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025, // Stagger on single element won't have desired effect
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  // Removed: var landingText3 = new SplitText(".landing-h2-info-1", TextProps);
  // Removed: var landingText4 = new SplitText(".landing-h2-1", TextProps);
  // Removed: var landingText5 = new SplitText(".landing-h2-2", TextProps);

  // You will need to replace the LoopText calls if you intend to animate these elements.
  // Since SplitText is removed, these calls will fail.
  // Assuming these are meant to be direct HTML elements for the loop.
  const landingText2Element = document.querySelector(".landing-h2-info") as HTMLElement;
  const landingText3Element = document.querySelector(".landing-h2-info-1") as HTMLElement;
  const landingText4Element = document.querySelector(".landing-h2-1") as HTMLElement;
  const landingText5Element = document.querySelector(".landing-h2-2") as HTMLElement;

  if (landingText2Element && landingText3Element) {
    LoopText(landingText2Element, landingText3Element);
  }
  if (landingText4Element && landingText5Element) {
    LoopText(landingText4Element, landingText5Element);
  }
}

// Adjusted function signature to accept HTMLElement instead of SplitText
function LoopText(Text1: HTMLElement, Text2: HTMLElement) {
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    Text2, // Target the HTMLElement directly
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1, // Stagger will not apply to individual chars here
      delay: delay,
    },
    0
  )
    .fromTo(
      Text1, // Target the HTMLElement directly
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1, // Stagger will not apply to individual chars here
        delay: delay2,
      },
      1
    )
    .fromTo(
      Text1, // Target the HTMLElement directly
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1, // Stagger will not apply to individual chars here
        delay: delay,
      },
      0
    )
    .to(
      Text2, // Target the HTMLElement directly
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1, // Stagger will not apply to individual chars here
        delay: delay2,
      },
      1
    );
}
