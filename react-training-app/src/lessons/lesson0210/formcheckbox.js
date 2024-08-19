import { useState } from "react";

export default function FormDropdown() {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label>
        Select an option:
        <select value={selectedOption} onChange={handleDropdownChange}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </label>
      <p>Selected option: {selectedOption}</p>
      <label htmlFor="color">
        <input
          type="checkbox"
          name="color"
          checked={isChecked}
          onChange={handleChange}
        />
        Blue
      </label>

      {isChecked && <div>Blue is selected!</div>}
    </div>
  );
}
