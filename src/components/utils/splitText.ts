import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Keep ScrollTrigger as it's standard GSAP

// Removed all 'gsap-trial' imports and comments related to them.
// ScrollSmoother and SplitText are premium GSAP plugins and are not included in standard GSAP.

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  // Removed 'split?: SplitText;' as SplitText is no longer used.
}

// Register only ScrollTrigger as it's a standard GSAP plugin.
gsap.registerPlugin(ScrollTrigger);

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 900) return;

  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  paras.forEach((para: ParaElement) => {
    para.classList.add("visible");
    if (para.anim) {
      para.anim.progress(1).kill();
      // Removed 'para.split?.revert();' as SplitText is no longer used.
    }

    // Removed 'new SplitText' initialization as SplitText is no premium plugin.
    // To achieve text splitting effect, you would need to manually split
    // the text into individual elements (e.g., spans for words/lines)
    // and then target those new elements with GSAP.
    // For now, the animation will apply to the entire 'para' element.

    para.anim = gsap.fromTo(
      para, // Target the entire paragraph element
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 1,
        ease: "power3.out",
        y: 0,
        // Stagger will apply to the single 'para' element, which might not
        // produce the desired "word by word" effect. Consider removing or
        // re-implementing text splitting if this effect is crucial.
        stagger: 0.02,
      }
    );
  });

  titles.forEach((title: ParaElement) => {
    if (title.anim) {
      title.anim.progress(1).kill();
      // Removed 'title.split?.revert();' as SplitText is no longer used.
    }

    // Removed 'new SplitText' initialization for titles.
    // Similar to paragraphs, animation will apply to the entire 'title' element.

    title.anim = gsap.fromTo(
      title, // Target the entire title element
      { autoAlpha: 0, y: 80, rotate: 10 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 0.8,
        ease: "power2.inOut",
        y: 0,
        rotate: 0,
        // Stagger will apply to the single 'title' element.
        stagger: 0.03,
      }
    );
  });

  // Keep this event listener for ScrollTrigger refreshes
  ScrollTrigger.addEventListener("refresh", () => setSplitText());
}
