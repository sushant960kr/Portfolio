import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";

// Components that are always visible on initial load
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import setSplitText from "./utils/splitText"; // Utility for splitText

// Lazily loaded components for sections that appear later on scroll
const LazyAbout = lazy(() => import("./About"));
const LazyWhatIDo = lazy(() => import("./WhatIDo"));
const LazyCareer = lazy(() => import("./Career"));
const LazyWork = lazy(() => import("./Work"));
const LazyTechStack = lazy(() => import("./TechStack")); // Already lazy-loaded
const LazyContact = lazy(() => import("./Contact"));


const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      // Ensure setSplitText is called only when needed or optimized
      // It's good to keep it tied to resize if it's dependent on text layout
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]); // isDesktopView is a good dependency for this logic

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {/* 'children' likely for specific desktop-only content, keep as is */}
      {isDesktopView && children}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>

            {/* Use Suspense for each major section that is not immediately visible */}
            <Suspense fallback={<div>Loading portfolio sections...</div>}>
              <LazyAbout />
              <LazyWhatIDo />
              <LazyCareer />
              <LazyWork />
              {isDesktopView && <LazyTechStack />} {/* Keep existing conditional rendering */}
              <LazyContact />
            </Suspense>

            {/* Alternatively, if you want individual loading messages,
                you'd wrap each component with its own Suspense:
            <Suspense fallback={<div>Loading About...</div>}>
              <LazyAbout />
            </Suspense>
            <Suspense fallback={<div>Loading What I Do...</div>}>
              <LazyWhatIDo />
            </Suspense>
            ... and so on for each component.
            For a sequential scroll, a single Suspense for many components might be simpler.
            The browser will typically fetch these chunks in parallel or as needed.
            */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;