import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import BlurBlob from './components/BlurBlob';

// Lazy load components that are lower on the page
const Skills = lazy(() => import("./components/Skills/Skills"));
const Experience = lazy(() => import("./components/Experience/Experience"));
const Work = lazy(() => import("./components/Work/Work"));
const Education = lazy(() => import("./components/Education/Education"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));

// Loading fallback
const SectionLoader = () => (
  <div className="flex justify-center items-center h-48">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
  </div>
);

const App = () => {
  return (
    <div className="bg-[#050414] min-h-screen">
       <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />

      <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Suspense fallback={<SectionLoader />}>
          <Skills />
          <Experience />
          <Work />
          <Education />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
