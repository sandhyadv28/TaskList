// import React, { ChangeEvent} from "react";
// import UnstableIcon from "../assets/unstable.svg";
// import VerifiedIcon from "../assets/verified.svg";
// import RadioIcon from "../assets/radio.svg";
// import ArrowUpwardIcon from "../assets/arrow_upward.svg";
// import NewTaskIcon from "../assets/newtask.svg";

// type TableRow = {
//   id: number;
//   Task: string;
//   "Task Type": string;
//   "Patient name": string;
//   "Bed no": string;
//   Severity?: string;
//   "Hospital-unit": string;
//   Date: string;
//   Assignee: string;
//   Creator: string;
//   Verified: string;
// };

// type TableProps = {
//   tableData: TableRow[];
//   columns: string[];
//   handleSort: (column: string) => void;
//   isAddingTask: boolean;
//   onAddTask: () => void;
//   newTaskData: Partial<TableRow>;
//   onInputChange: (e: ChangeEvent<HTMLInputElement>, column: string) => void;
//   selectedAssignee: string;
// };

// const ReuableTable: React.FC<TableProps> = ({
//   tableData,
//   columns,
//   handleSort,
//   isAddingTask,
//   onAddTask,
//   newTaskData,
//   onInputChange,
//   selectedAssignee,
// }) => {
//   const renderColumnHeader = (column: string) => (
//     <th key={column} className="border-b p-2 border-r border-[#CDD7EB]">
//       <p className="flex items-center capitalize text-[12px] font-medium">
//         {column}
//         {["Task Type", "Patient name", "Severity"].includes(column) && (
//           <img
//             src={ArrowUpwardIcon}
//             alt="Sort"
//             className="ml-1 w-4 h-4 cursor-pointer"
//             onClick={() => handleSort(column)}
//           />
//         )}
//       </p>
//     </th>
//   );

//   const renderRows = (data: TableRow[]): JSX.Element[] => {
//     const filteredData = selectedAssignee
//       ? data.filter((item) => item["Assignee"] === selectedAssignee)
//       : data;

//     return filteredData.map((item) => (
//       <tr key={item.id} className="p-2">
//         <td className="border-b border-[#CDD7EB] p-2">
//           <img
//             src={item["Verified"] === "Done" ? VerifiedIcon : RadioIcon}
//             alt={item["Verified"]}
//             className="w-5 h-5"
//           />
//         </td>
//         {columns.map((column) => (
//           <td
//             className={`border-b border-[#CDD7EB] p-2 ${
//               column !== "Verified" ? "border-r" : ""
//             } ${
//               column === "Severity" && item[column] === "Unstable"
//                 ? "text-[#EB4049]"
//                 : ""
//             }`}
//             key={column}
//           >
//             {column === "Severity" && item[column] === "Unstable" ? (
//               <div className="flex items-center gap-2">
//                 <img src={UnstableIcon} alt="Unstable" className="w-4 h-4" />
//                 <p>{item[column]}</p>
//               </div>
//             ) : (
//               <p>{item[column as keyof TableRow] || ""}</p>
//             )}
//           </td>
//         ))}
//       </tr>
//     ));
//   };

//   return (
//     <div>

//       <div className="tableContainer w-full">
//         <table className="table-auto w-full rounded-[20px] border-collapse">
//           <thead className="bg-transparent h-[50px] text-left text-[#465065] text-[12px] border-t">
//             <tr>
//               <th className="border-b p-2 border-[#CDD7EB]"></th>
//               {columns.map(renderColumnHeader)}
//             </tr>
//             <tr>
//               {isAddingTask ? (
//                 <>
//                   <td className="border-b border-[#CDD7EB] p-2 w-[2.5rem]">
//                     <img
//                       src={NewTaskIcon}
//                       alt="New Task"
//                       className="w-5 h-5"
//                     />
//                   </td>
//                   {columns.map((column) => (
//                     <td
//                       className={`border-b p-2 ${
//                         column !== "Verified" ? "border-r" : ""
//                       }`}
//                       key={column}
//                     >
//                       <input
//                         type="text"
//                         value={newTaskData[column as keyof TableRow] || ""}
//                         onChange={(e) => onInputChange(e, column)}
//                         className="w-full p-1 border border-[#CDD7EB] rounded outline-none"
//                       />
//                     </td>
//                   ))}
//                 </>
//               ) : (
//                 <>
//                   <td className="border-b border-[#CDD7EB] p-2">
//                     <img
//                       src={NewTaskIcon}
//                       alt="New Task"
//                       className="w-5 h-5 cursor-pointer"
//                       onClick={onAddTask}
//                     />
//                   </td>
//                   <td
//                     colSpan={columns.length}
//                     className="border-b border-[#CDD7EB] p-2"
//                   >
//                     <button
//                       className="text-[#34A2B1] font-medium cursor-pointer"
//                       onClick={onAddTask}
//                     >
//                       Add Task
//                     </button>
//                   </td>
//                 </>
//               )}
//             </tr>
//           </thead>

//           <tbody className="bg-transparent text-[14px] text-[#4B505E]">
//             {renderRows(tableData)}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ReuableTable;
import React, { ChangeEvent } from "react";
import UnstableIcon from "../assets/unstable.svg";
import VerifiedIcon from "../assets/verified.svg";
import ArrowUpwardIcon from "../assets/arrow_upward.svg";
import NewTaskIcon from "../assets/newtask.svg";

type TableRow = {
  id: number;
  Task: string;
  "Task Type": string;
  "Patient name": string;
  "Bed no": string;
  Severity?: string;
  "Hospital-unit": string;
  Date: string;
  Assignee: string;
  Creator: string;
  Verified: string;
  [key: string]: string | number | undefined;
};

interface TableProps {
  tableData: TableRow[];
  columns: string[];
  handleSort: (column: string) => void;
  isAddingTask: boolean;
  onAddTask: () => void;
  handleAddTask: () => void;
  newTaskData: {
    Task: string;
    "Task Type": string;
    "Patient name": string;
    "Bed no": string;
    Severity?: string;
    "Hospital-unit": string;
    Date: string;
    Assignee: string;
    Creator: string;
  };
  onInputChange: (e: ChangeEvent<HTMLInputElement>, column: string) => void;
  selectedAssignee: string;
  selectedColumns: string[];
  handleInputChange: (e: ChangeEvent<HTMLInputElement>, column: string) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const ReusableTable: React.FC<TableProps> = ({
  tableData,
  columns,
  handleSort,
  isAddingTask,
  onAddTask,
  handleAddTask,
  newTaskData,
  onInputChange,
  selectedAssignee,
  selectedColumns,
  handleInputChange,
  handleKeyDown,
}) => {
  const filteredData = selectedAssignee
    ? tableData.filter((row) => row.Assignee === selectedAssignee)
    : tableData;

  return (
    <div>
      <div className="tw-overflow-x-auto">
        <table className="tw-min-w-full tw-divide-y tw-divide-gray-200">
          <thead className="tw-bg-transparent tw-text-left tw-text-others-100 tw-text-[12px] tw-border-t">
            <tr>
              {columns.map((column) => (
                <th
                  key={column}
                  className="tw-px-6 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-cursor-pointer tw-border-r tw-border-fades-400"
                  onClick={() => handleSort(column)}
                >
                  {column}
                  {["Task Type", "Patient name", "Severity"].includes(column) && (
                    <img
                      src={ArrowUpwardIcon}
                      alt="Sort"
                      className="tw-inline-block tw-ml-2 tw-w-4 tw-h-4"
                    />
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="tw-bg-transparent tw-text-[14px] tw-text-others-100">
            {isAddingTask ? (
              <tr>
                <td className="tw-border-b tw-border-fades-400 tw-p-2 tw-w-[2.5rem]">
                  <img src={NewTaskIcon} alt="New Task" className="tw-w-5 tw-h-5" />
                </td>
                {selectedColumns.map((column) => (
                  <td
                    className={`tw-border-b tw-p-2 ${column !== "Verified" ? "tw-border-r" : ""}`}
                    key={column}
                  >
                    <input
                      type="text"
                      value={newTaskData[column as keyof typeof newTaskData] || ""}
                      onChange={(e) => handleInputChange(e, column)}
                      onKeyDown={handleKeyDown}
                      className="tw-w-full tw-p-1 tw-border tw-border-fades-400 tw-rounded tw-outline-none"
                    />
                  </td>
                ))}
              </tr>
            ) : (
              <tr>
                <td className="tw-border-b tw-border-fades-400 tw-p-2">
                  <img
                    src={NewTaskIcon}
                    alt="New Task"
                    className="tw-w-5 tw-h-5 tw-cursor-pointer"
                    onClick={handleAddTask}
                  />
                </td>
                <td
                  colSpan={selectedColumns.length}
                  className="tw-border-b tw-border-fades-400 tw-p-2"
                >
                  <button
                    className="tw-text-primary-400 tw-font-medium tw-cursor-pointer"
                    onClick={handleAddTask}
                  >
                    Add Task
                  </button>
                </td>
              </tr>
            )}
            {filteredData.map((row) => (
              <tr key={row.id}>
                {columns.map((column) => (
                  <td
                    key={column}
                    className="tw-px-6 tw-py-4 tw-whitespace-nowrap tw-border-r tw-border-fades-400 tw-text-sm tw-border-b"
                  >
                    {column === "Severity" && row[column] === "Unstable" ? (
                      <img src={UnstableIcon} alt="Unstable" className="tw-w-4 tw-h-4" />
                    ) : column === "Verified" && row[column] === "Verified" ? (
                      <img src={VerifiedIcon} alt="Verified" className="tw-w-4 tw-h-4" />
                    ) : (
                      row[column]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReusableTable;
