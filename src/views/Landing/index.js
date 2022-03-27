import React, { useState } from "react";
import Landing1 from "../Landing1";
import Landing2 from "../Landing2";
import Landing3 from "../Landing3";
import Landing4 from "../Landing4";

function Landing() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const MAX = 4;
  const handleContinue = () => {
    if (currentIndex < MAX) {
      setCurrentIndex(currentIndex + 1);
      console.log(currentIndex);
    }
  };
  if (currentIndex === 0) {
    return <Landing1 onContinue={handleContinue} />;
  } else if (currentIndex === 1) {
    return <Landing2 onContinue={handleContinue} />;
  } else if (currentIndex === 2) {
    return <Landing3 onContinue={handleContinue} />;
  } else if (currentIndex === 3) {
    return <Landing4 onContinue={handleContinue} />;
  }

  return <div>Invalid Index</div>;
}

export default Landing;
