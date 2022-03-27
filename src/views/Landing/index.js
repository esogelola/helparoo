import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Landing1 from "../../components/Landing/Landing1";
import Landing2 from "../../components/Landing/Landing2";
import Landing3 from "../../components/Landing/Landing3";
import Landing4 from "../../components/Landing/Landing4";

function Landing(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const history = useHistory();
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
