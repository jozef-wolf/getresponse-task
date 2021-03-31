import React from "react";
import "./style.css";
const table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th className="header-row">DAY 64</th>
          <th className="header-row">DAY 65</th>
          <th className="header-row">DAY 66</th>
          <th className="header-row">DAY 67</th>
          <th className="header-row">DAY 68</th>
          <th className="header-row">DAY 69</th>
          <th className="header-row">DAY 70</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td rowSpan="6">
            <div className="vertical">GUILT-FREE DAY</div>
          </td>
        </tr>
        <tr>
          <td className="time-column">6:00 AM</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td></td>
        </tr>
        <tr>
          <td className="time-column">9:00 AM</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td></td>
        </tr>
        <tr>
          <td className="time-column">12:00 AM</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td></td>
        </tr>
        <tr>
          <td className="time-column">3:00 AM</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td></td>
        </tr>
        <tr>
          <td className="time-column">6:00 AM</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td className="carb-row">Cell</td>
          <td className="carb-row">Cell</td>
          <td className="carb-row">Cell</td>
          <td className="carb-row">Cell</td>
          <td className="carb-row">Cell</td>
          <td rowSpan="2">Print</td>
        </tr>
        <tr>
          <td className="bottom-row">Workout</td>
          <td className="bottom-row">Cell</td>
          <td className="bottom-row">Cell</td>
          <td className="bottom-row">Cell</td>
          <td className="bottom-row">Cell</td>
          <td className="bottom-row">Cell</td>
        </tr>
      </tbody>
    </table>
  );
};

export default table;
