import React from "react";
import { useState } from "react";

function ChoreForm({ addChoreLog }) {
  const [choreDesc, setChoreDesc] = useState();
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const handleSubmit = (e) => {
    addChoreLog([choreDesc, name, date]);
    e.preventDefault();
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label>Chore description:</label>
      <br />
      <input
        name="choreDesc"
        type="text"
        value={choreDesc}
        onChange={(e) => setChoreDesc(e.target.value)}
      />
      <br />
      <label>Name:</label>
      <br />
      <input
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>Date:</label>
      <br />
      <input
        name="date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <br />
      <input type="submit" value="Add Log" />
    </form>
  );
}

export default ChoreForm;
