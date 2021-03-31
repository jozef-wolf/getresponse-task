import React from "react";
import "./style.css";
// import { ReactComponent as ImportedSVG } from "../imgs/print.svg";
const table = () => {
  return (
    <div className="table">
      <div className="table-column time">
        <div className="table-row"></div>
        <div className="table-row">6:00 AM</div>
        <div className="table-row">9:00 AM</div>
        <div className="table-row">12:00 AM</div>
        <div className="table-row">3:00 AM</div>
        <div className="table-row">9:00 AM</div>
        <div className="table-row carb"></div>
        <div className="table-row workout">Workout</div>
      </div>
      <div className="table-column">
        <div className="table-row">day 64</div>
        <div className="table-row"></div>
        <div className="table-row"></div>
        <div className="table-row"></div>
        <div className="table-row"></div>
        <div className="table-row"></div>
        <div className="table-row carb"></div>
        <div className="table-row workout"></div>
      </div>
      <div className="table-column">
        <div className="table-row">day 65</div>
        <div className="table-row"></div>
        <div className="table-row"></div>
        <div className="table-row"></div>
        <div className="table-row"></div>
        <div className="table-row"></div>
        <div className="table-row carb"></div>
        <div className="table-row workout"></div>
      </div>
      <div className="table-column">
        <div className="table-row">day 66</div>
        <div className="table-row"></div>
        <div className="table-row"></div>
        <div className="table-row"></div>
        <div className="table-row"></div>
        <div className="table-row"></div>
        <div className="table-row carb"></div>
        <div className="table-row workout"></div>
      </div>
      <div className="table-column">
        <div className="table-row">day 67</div>
        <div className="table-row"></div>
        <div className="table-row"></div>
        <div className="table-row"></div>
        <div className="table-row"></div>
        <div className="table-row"></div>
        <div className="table-row carb"></div>
        <div className="table-row workout"></div>
      </div>
      <div className="table-column">
        <div className="table-row">day 68</div>
        <div className="table-row"></div>
        <div className="table-row"></div>
        <div className="table-row"></div>
        <div className="table-row"></div>
        <div className="table-row"></div>
        <div className="table-row carb"></div>
        <div className="table-row workout"></div>
      </div>
      <div className="table-column">
        <div className="table-row">day 69</div>
        <div className="table-row"></div>
        <div className="table-row"></div>
        <div className="table-row"></div>
        <div className="table-row"></div>
        <div className="table-row"></div>
        <div className="table-row carb"></div>
        <div className="table-row workout"></div>
      </div>
      <div className="table-column">
        <div className="table-row">day 70</div>
        <div className="table-row"></div>
        <div className="table-row"></div>
        <div className="table-row"></div>
        <div className="table-row"></div>
        <div className="table-row"></div>
        <div className="table-row"></div>
        <div className="table-row">Print</div>
      </div>
    </div>
    // <table>
    //   <thead>
    //     <tr>
    //       <th></th>
    //       <th className="header-row">DAY 64</th>
    //       <th className="header-row title">DAY 65</th>
    //       <th className="header-row title">DAY 66</th>
    //       <th className="header-row title">DAY 67</th>
    //       <th className="header-row title">DAY 68</th>
    //       <th className="header-row title">DAY 69</th>
    //       <th className="header-row title">DAY 70</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <td className="time-column">6:00 AM</td>
    //       <td className="table-row">Cell</td>
    //       <td className="table-row">Cell</td>
    //       <td className="table-row">Cell</td>
    //       <td className="table-row">Cell</td>
    //       <td className="table-row">Cell</td>
    //       <td className="table-row">Cell</td>
    //       <td rowSpan="5" className="vertical-row">
    //         <div className="vertical">GUILT-FREE DAY</div>
    //       </td>
    //     </tr>
    //     <tr>
    //       <td className="time-column">9:00 AM</td>
    //       <td className="table-row">Cell</td>
    //       <td className="table-row">Cell</td>
    //       <td className="table-row">Cell</td>
    //       <td className="table-row">Cell</td>
    //       <td className="table-row">Cell</td>
    //       <td className="table-row">Cell</td>
    //     </tr>
    //     <tr>
    //       <td className="time-column">12:00 AM</td>
    //       <td className="table-row">Cell</td>
    //       <td className="table-row">Cell</td>
    //       <td className="table-row">Cell</td>
    //       <td className="table-row">Cell</td>
    //       <td className="table-row">Cell</td>
    //       <td className="table-row">Cell</td>
    //     </tr>
    //     <tr>
    //       <td className="time-column">3:00 AM</td>
    //       <td className="table-row">Cell</td>
    //       <td className="table-row">Cell</td>
    //       <td className="table-row">Cell</td>
    //       <td className="table-row">Cell</td>
    //       <td className="table-row">Cell</td>
    //       <td className="table-row">Cell</td>
    //     </tr>
    //     <tr>
    //       <td className="time-column">6:00 AM</td>
    //       <td className="table-row">Cell</td>
    //       <td className="table-row">Cell</td>
    //       <td className="table-row">Cell</td>
    //       <td className="table-row">Cell</td>
    //       <td className="table-row">Cell</td>
    //       <td className="table-row">Cell</td>
    //     </tr>
    //     <tr>
    //       <td className="carb-row"></td>
    //       <td className="carb-row">Cell</td>
    //       <td className="carb-row">Cell</td>
    //       <td className="carb-row">Cell</td>
    //       <td className="carb-row">Cell</td>
    //       <td className="carb-row">Cell</td>
    //       <td className="carb-row">Cell</td>
    //       <td rowSpan="2" className="print-row">
    //         <ImportedSVG />
    //         Print
    //       </td>
    //     </tr>
    //     <tr>
    //       <td className="bottom-row">Workout</td>
    //       <td className="bottom-row">Cell</td>
    //       <td className="bottom-row">Cell</td>
    //       <td className="bottom-row">Cell</td>
    //       <td className="bottom-row">Cell</td>
    //       <td className="bottom-row">Cell</td>
    //       <td className="bottom-row">Cell</td>
    //     </tr>
    //   </tbody>
    // </table>
  );
};

export default table;
