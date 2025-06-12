import React, { useState, useEffect } from "react";
import { PROFILE } from "../constants/index.jsx";

const ProfileInfo = () => {
  const [currentInfoIndex, setCurrentInfoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInfoIndex(
        (prevIndex) => (prevIndex + 1) % PROFILE.infoList.length
      );
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <p className="pt-2 font-semibold text-lg transition-transform duration-500 ease-in-out">
      {PROFILE.infoList[currentInfoIndex]}
    </p>
  );
};

export default ProfileInfo;
