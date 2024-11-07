// import React from "react";

// interface AvatarProps {
//   data: string[]; 
//   onClick: (item: string) => void; 
// }

// const Avatar: React.FC<AvatarProps> = ({ data, onClick }) => {
//   return (
//     <div className="relative mx-6 flex items-center">
//       {data.length > 4 && (
//         <div className="absolute items-center justify-center left-[7.7rem] cursor-pointer">
//           +{data.length - 4}
//         </div>
//       )}
//       {data.slice(0, 4).reverse().map((item, index) => (
//         <div
//           key={index}
//           onClick={() => onClick(item)}
//           className={`absolute w-10 h-10 rounded-full bg-[#B1E2E2] border-[3px] border-white flex items-center justify-center text-[#34A2B1] font-bold cursor-pointer`}
//           style={{ left: `${(4 - index) * 1.3}rem` }}
//         >
//           {getInitials(item)}
//         </div>
//       ))}
//     </div>
//   );
// };

// // Define getInitials function with appropriate type annotations
// const getInitials = (name: string): string => {
//   if (!name) return '';
//   const names = name.split(' ');
//   return names.map(n => n[0]).join('');
// };

// export default Avatar;
import React from "react";

interface AvatarProps {
  data: string[]; 
  onClick: (item: string) => void; 
}

const Avatar: React.FC<AvatarProps> = ({ data, onClick }) => {
  return (
    <div className="tw-relative tw-mx-6 tw-flex tw-items-center">
      {data.length > 4 && (
        <div className="tw-absolute tw-items-center tw-justify-center tw-left-[7.7rem] tw-cursor-pointer">
          +{data.length - 4}
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
