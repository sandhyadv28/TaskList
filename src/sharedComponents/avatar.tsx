import React, { useState } from "react";

interface AvatarProps {
  data: string[]; 
  onClick: (item: string) => void; 
}

const Avatar: React.FC<AvatarProps> = ({ data, onClick }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="tw-relative tw-mx-6 tw-flex tw-items-center">
      {data.length > 4 && (
        <div
          onClick={handleToggleDropdown}
          className="tw-absolute tw-items-center tw-justify-center tw-left-[7.7rem] tw-cursor-pointer"
        >
          +{data.length - 4}
        </div>
      )}

      {/* Dropdown with remaining names */}
      {isDropdownVisible && (
        <div className="tw-absolute tw-top-10 tw-bg-white tw-border tw-border-gray-300 tw-rounded-md tw-shadow-md tw-py-2 tw-px-4 tw-left-[107px] tw-h-[175px] tw-overflow-auto tw-text-[14px] tw-w-max">
          {data.slice(4).map((name, idx) => (
            <div
              key={idx}
              onClick={() => onClick(name)}
              className="tw-py-1 tw-cursor-pointer tw-hover:bg-gray-100"
            >
              {name}
            </div>
          ))}
        </div>
      )}

      {data.slice(0, 4).reverse().map((item, index) => (
        <div
          key={index}
          onClick={() => onClick(item)}
          className={`tw-absolute tw-w-10 tw-h-10 tw-rounded-full tw-bg-[#B1E2E2] tw-border-[3px] tw-border-white tw-flex tw-items-center tw-justify-center tw-text-[#34A2B1] tw-font-bold tw-cursor-pointer`}
          style={{ left: `${(4 - index) * 1.3}rem` }}
        >
          {getInitials(item)}
        </div>
      ))}
    </div>
  );
};

// Define getInitials function with appropriate type annotations
const getInitials = (name: string): string => {
  if (!name) return '';
  const names = name.split(' ');
  return names.map(n => n[0]).join('');
};

export default Avatar;
