import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
// Removed: import { ScrollSmoother } from "gsap-trial/ScrollSmoother"; // This is a GSAP Club plugin

import "./styles/Navbar.css";

// Register only ScrollTrigger, as ScrollSmoother is a premium plugin
gsap.registerPlugin(ScrollTrigger);

// Removed: export let smoother: ScrollSmoother; // ScrollSmoother type is no longer available

const Navbar = () => {
  useEffect(() => {
    // Removed ScrollSmoother initialization as it's a premium plugin.
    // The smooth scrolling functionality will no longer be present.
    // If you need smooth scrolling without GSAP ScrollSmoother,
    // you would need to implement a custom solution or use a different library.

    // Removed: smoother = ScrollSmoother.create({ ... });
    // Removed: smoother.scrollTop(0);
    // Removed: smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let sectionId = elem.getAttribute("data-href");

          if (sectionId) {
            const targetElement = document.querySelector(sectionId);
            if (targetElement) {
              // Replaced ScrollSmoother.scrollTo with standard scrollIntoView
              // This will provide basic jump-scrolling to the section.
              targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }
        }
      });
    });

    // Removed ScrollSmoother.refresh as it's no longer used
    // window.addEventListener("resize", () => {
    //   ScrollSmoother.refresh(true);
    // });
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          Logo
        </a>
        <a
          href="mailto:example@mail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          sushant960kumar@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
