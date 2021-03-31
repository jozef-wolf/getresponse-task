import React from "react";
import "./style.css";
import { ReactComponent as ImportedSVG } from "../imgs/print.svg";
import { ReactComponent as Check } from "../imgs/check.svg";
import Dumbbell from "../imgs/Dumbbell2x.png";
import DumbbellGrey from "../imgs/DumbbellGrey2x.png";
import Rectangle from "../imgs/rectangle2x.png";
import Happy from "../imgs/happy2x.png";
const table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th className="header-row">DAY 64</th>
          <th className="header-row title">DAY 65</th>
          <th className="header-row title">DAY 66</th>
          <th className="header-row title">DAY 67</th>
          <th className="header-row title">DAY 68</th>
          <th className="header-row title">DAY 69</th>
          <th className="header-row title">DAY 70</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="time-column">6:00 AM</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td rowSpan="5" className="vertical-row">
            <div className="vertical">
              <img className="happy-logo" src={Happy} alt="" />
              GUILTY-FREE DAY
            </div>
          </td>
        </tr>
        <tr>
          <td className="time-column">9:00 AM</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
        </tr>
        <tr>
          <td className="time-column">12:00 AM</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
        </tr>
        <tr>
          <td className="time-column">3:00 AM</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
        </tr>
        <tr>
          <td className="time-column">6:00 AM</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
        </tr>
        <tr>
          <td className="carb-row"></td>
          <td className="carb-row"></td>
          <td className="carb-row"></td>
          <td className="carb-row"></td>
          <td className="carb-row"></td>
          <td className="carb-row"></td>
          <td className="carb-row"></td>
          <td rowSpan="2" className="print-row">
            <ImportedSVG />
            Print
          </td>
        </tr>
        <tr>
          <td className="bottom-row">
            Workout
            <img src={Rectangle} alt="" />
          </td>
          <td className="bottom-row">
            <img src={Dumbbell} alt="" />
            <Check />
          </td>
          <td className="bottom-row">
            <img src={Dumbbell} alt="" />
            <Check />
          </td>
          <td className="bottom-row">
            <img src={DumbbellGrey} alt="" />
          </td>
          <td className="bottom-row">
            <img src={DumbbellGrey} alt="" />
          </td>
          <td className="bottom-row">
            <img src={DumbbellGrey} alt="" />
          </td>
          <td className="bottom-row">
            <img src={DumbbellGrey} alt="" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default table;
