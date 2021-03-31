import React from "react";
import "./style.css";
// import { ReactComponent as ImportedSVG } from "../imgs/print.svg";
// import { ReactComponent as Check } from "../imgs/check.svg";
// import Dumbbell from "../imgs/Dumbbell2x.png";
// import DumbbellGrey from "../imgs/DumbbellGrey2x.png";
// import Rectangle from "../imgs/rectangle2x.png";
// // import Happy from "../imgs/happy2x.png";

const Table = ({ meals }) => {
  return (
    <table>
      {meals.map((meal) => (
        <tr>
          <th>{meal.id}</th>
        </tr>
      ))}
    </table>
  );
};

export default Table;
