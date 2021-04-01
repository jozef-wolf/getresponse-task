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
      <tr>
        <th></th>
        {meals.map((meal) => (
          <td>DAY {meal.id}</td>
        ))}
      </tr>
      <tr>
        <th>6:00AM</th>
        {meals.map((meal) => (
          <td>{meal.sixAM}</td>
        ))}
      </tr>
      <tr>
        <th>9:00AM</th>
        {meals.map((meal) => (
          <td>{meal.nineAM}</td>
        ))}
      </tr>
      <tr>
        <th>12:00AM</th>
        {meals.map((meal) => (
          <td>{meal.twelveAM}</td>
        ))}
      </tr>
      <tr>
        <th>3:00PM</th>
        {meals.map((meal) => (
          <td>{meal.threePM}</td>
        ))}
      </tr>
      <tr>
        <th>6:00PM</th>
        {meals.map((meal) => (
          <td>{meal.sixPM}</td>
        ))}
      </tr>
      <tr>
        <th></th>
      </tr>
      <tr>
        <th>Workout</th>
      </tr>
    </table>
  );
};

export default Table;
