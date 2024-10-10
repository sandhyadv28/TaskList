import React from "react";
import DropDownIcon from "../assets/dropdown.svg"; // Ensure the icon path is correct

interface DropdownProps {
  options: string[];
  selectedValue: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

  const Dropdown: React.FC<DropdownProps> = ({ options, selectedValue, onChange }) => {
  return (
    <div className="relative">
      <select
        className="p-1 pr-8 border border-[#CDD7EB] rounded outline-none bg-transparent appearance-none"
        onChange={onChange}
        value={selectedValue}
      >
        <option value="">None</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <img
        src={DropDownIcon}
        alt="Dropdown Icon"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
      />
    </div>
  );
};

export default Dropdown;
