import { gsap } from "gsap";

// REMOVED: import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
// REMOVED: import { SplitText } from "gsap-trial/SplitText";

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  // REMOVED: split?: SplitText; // SplitText type is no longer available if you remove the import
}

// Register only ScrollTrigger, as ScrollSmoother and SplitText are removed
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
    // You will need to remove or replace the SplitText logic here
    // as SplitText is a paid plugin.
    // This section will cause an error without SplitText.
    if (para.anim) {
      para.anim.progress(1).kill();
      // para.split?.revert(); // This will fail if SplitText is removed
    }

    // This line (new SplitText) will cause an error if SplitText is removed.
    // para.split = new SplitText(para, {
    //   type: "lines,words",
    //   linesClass: "split-line",
    // });

    // You will need to re-think how you target the elements for animation
    // without SplitText. Maybe target the direct 'para' or 'title' element,
    // or manually split the text if you still want character/word animation
    // without the plugin.
    para.anim = gsap.fromTo(
      // para.split.words, // This will fail without SplitText
      para, // Example: target the whole paragraph if SplitText is removed
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
        stagger: 0.02, // Stagger might not make sense on a single element
      }
    );
  });
  titles.forEach((title: ParaElement) => {
    // Similar to paras, you'll need to remove or replace SplitText logic here.
    if (title.anim) {
      title.anim.progress(1).kill();
      // title.split?.revert(); // This will fail if SplitText is removed
    }
    // This line (new SplitText) will cause an error if SplitText is removed.
    // title.split = new SplitText(title, {
    //   type: "chars,lines",
    //   linesClass: "split-line",
    // });
    title.anim = gsap.fromTo(
      // title.split.chars, // This will fail without SplitText
      title, // Example: target the whole title if SplitText is removed
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
        stagger: 0.03, // Stagger might not make sense on a single element
      }
    );
  });

  ScrollTrigger.addEventListener("refresh", () => setSplitText());
}
