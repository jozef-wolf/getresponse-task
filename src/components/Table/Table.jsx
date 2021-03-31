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
          <td rowSpan="6">dupa</td>
        </tr>
        <tr>
          <td>6:00 AM</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td></td>
        </tr>
        <tr>
          <td>9:00 AM</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td></td>
        </tr>
        <tr>
          <td>12:00 AM</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td></td>
        </tr>
        <tr>
          <td>3:00 AM</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td className="table-row">Cell</td>
          <td></td>
        </tr>
        <tr>
          <td>6:00 AM</td>
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
          <td className="carb-row">Cell</td>
          <td></td>
        </tr>
        <tr>
          <td rowSpan="2">Workout</td>
          <td className="bottom-row">Cell</td>
          <td className="bottom-row">Cell</td>
          <td className="bottom-row">Cell</td>
          <td className="bottom-row">Cell</td>
          <td className="bottom-row">Cell</td>
          <td className="bottom-row">Cell</td>
          <td rowSpan="2">Print</td>
        </tr>
      </tbody>
    </table>
  );
};

export default table;
