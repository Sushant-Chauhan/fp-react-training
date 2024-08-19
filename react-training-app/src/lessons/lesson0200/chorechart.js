import React from "react";

function ChoreChart(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Chore description</th>
          <th>Name</th>
          <th>Date</th>
        </tr>
      </thead>
      {props.chores.map((v, i) => {
        return (
          <tr>
            <th>{v[0]}</th>
            <th>{v[1]}</th>
            <th>{v[2]}</th>
          </tr>
        );
      })}
    </table>
  );
}

export default ChoreChart;
