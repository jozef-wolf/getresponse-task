import React from "react";
import ProgressBar from "./ProgressBar";
import Week from "./Week";
import Selections from "./Selections";

const Section = () => {
  return (
    <div>
      <ProgressBar />
      <Week />
      <Selections />
    </div>
  );
};

export default Section;
