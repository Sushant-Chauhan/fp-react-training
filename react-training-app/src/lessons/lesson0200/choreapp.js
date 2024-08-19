import { useState } from "react";
import ChoreChart from "./chorechart";
import ChoreForm from "./chore";

function ChoreApp(props) {
  const [choreLogs, setChoreLogs] = useState([]);
  const addChoreLog = (log) => {
    let logs = [...choreLogs, log];
    setChoreLogs(logs);
  };
  return (
    <section>
      <ChoreForm addChoreLog={addChoreLog} />
      <ChoreChart chores={choreLogs} />
    </section>
  );
}

export default ChoreApp;
