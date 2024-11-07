import React from "react";
import DropDownIcon from "../assets/dropdown.svg"; 

interface DropdownProps {
  options: string[];
  selectedValue: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, selectedValue, onChange }) => {
  return (
    <div className="tw-relative">
      <select
        className="tw-p-1 tw-pr-8 tw-border tw-border-[#CDD7EB] tw-rounded tw-outline-none tw-bg-transparent tw-appearance-none"
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
        className="tw-absolute tw-right-2 tw-top-1/2 tw-transform tw--translate-y-1/2 tw-pointer-events-none"
      />
    </div>
  );
};

export default Dropdown;
