import { useRef } from "react";

export default function UncontrolledForm() {
  const selectRef = useRef(null);
  const checkboxRef = useRef(null);
  const inputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Input value:", inputRef.current.value);
    console.log("Select value:", selectRef.current.value);
    console.log("Checkbox value:", checkboxRef.current.checked);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input ref={inputRef} type="text" />
      </label>
      <br />
      <label>
        Favorite color:
        <select ref={selectRef}>
          <option value="r">Red</option>
          <option value="g">Green</option>
          <option value="b">Blue</option>
        </select>
      </label>
      <br />
      <label>
        Do you like React?
        <input type="checkbox" ref={checkboxRef} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
