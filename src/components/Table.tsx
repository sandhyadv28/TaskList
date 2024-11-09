import React, { ChangeEvent, useEffect, useState } from "react";
import { TableData } from "../constants/TableData";
import UnstableIcon from "../assets/unstable.svg";
import PersonIcon from "../assets/Person.svg";
import VerifiedIcon from "../assets/verified.svg";
import RadioIcon from "../assets/radio.svg";
import ArrowUpwardIcon from "../assets/arrow_upward.svg";
import NewTaskIcon from "../assets/newtask.svg";
import Dropdown from "../sharedComponents/dropDown";
import Avatar from "../sharedComponents/avatar";

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
};

type NewTaskData = {
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

interface GroupedData {
  [key: string]: TableRow[];
}

const Table: React.FC = () => {
  const [selectedColumns] = useState([
    "Task",
    "Task Type",
    "Patient name",
    "Bed no",
    "Severity",
    "Hospital-unit",
    "Date",
    "Assignee",
    "Creator",
  ]);

  const [sortedAndGroupedData, setSortedAndGroupedData] = useState({} as any);
  const [sortedData, setSortedData] = useState<TableRow[]>(TableData);
  const [isTaskTypeSorted, setIsTaskTypeSorted] = useState(false);
  const [isPatientNameSorted, setIsPatientNameSorted] = useState(false);
  const [isSeveritySorted, setIsSeveritySorted] = useState(false);
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [groupedByTaskType, setGroupedByTaskType] = useState("");
  const [selectedAssignee, setSelectedAssignee] = useState("");
  const [currentSortColumn, setCurrentSortColumn] = useState<string | null>(
    null
  );
  const [newTaskData, setNewTaskData] = useState<NewTaskData>({
    Task: "",
    "Task Type": "",
    "Patient name": "",
    "Bed no": "",
    Severity: "",
    "Hospital-unit": "",
    Date: "",
    Assignee: "",
    Creator: "",
  });

useEffect(() => {
  let data: GroupedData | TableRow[] = [];

  if (groupedByTaskType) {
    const grouped = TableData.reduce<GroupedData>((acc, item) => {
      const key = item[groupedByTaskType as keyof TableRow] || "Unknown";
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    }, {});

    data = grouped;
  } else {
    data = { all: TableData };
  }

  if (isTaskTypeSorted || isPatientNameSorted || isSeveritySorted) {
    if (Array.isArray(data)) {
      data = sortData(data);
    } else {
      const groupedData = data as GroupedData;
      data = Object.keys(data).reduce<GroupedData>((acc, key) => {
        const group = groupedData[key];
        if (group) {
          acc[key] = sortData(group);
        }
        return acc;
      }, {});
    }
  }
  setSortedAndGroupedData(data);
}, [
  groupedByTaskType,
  isTaskTypeSorted,
  isPatientNameSorted,
  isSeveritySorted,
]);

  const sortData = (data: TableRow[]): TableRow[] => {
    let sorted = [...data];

    switch (currentSortColumn) {
      case "Task Type":
        if (isTaskTypeSorted) {
          const taskTypeOrder = ["Follow Up", "Admission", "Round", "Others"];
          sorted.sort(
            (a, b) =>
              taskTypeOrder.indexOf(a["Task Type"]) -
              taskTypeOrder.indexOf(b["Task Type"])
          );
        }
        break;

      case "Patient name":
        if (isPatientNameSorted) {
          sorted.sort((a, b) =>
            a["Patient name"].localeCompare(b["Patient name"])
          );
        }
        break;

      case "Severity":
        if (isSeveritySorted) {
          sorted.sort((a, b) => {
            if (a["Severity"] === "Unstable" && b["Severity"] !== "Unstable")
              return -1;
            if (a["Severity"] !== "Unstable" && b["Severity"] === "Unstable")
              return 1;
            return 0;
          });
        }
        break;

      default:
        sorted = data;
        break;
    }

    return sorted;
  };

  const handleSort = (column: string) => {
    setCurrentSortColumn(column);

    switch (column) {
      case "Task Type":
        setIsTaskTypeSorted((prev) => !prev);
        setIsPatientNameSorted(false);
        setIsSeveritySorted(false);
        break;

      case "Patient name":
        setIsTaskTypeSorted(false);
        setIsPatientNameSorted((prev) => !prev);
        setIsSeveritySorted(false);
        break;

      case "Severity":
        setIsTaskTypeSorted(false);
        setIsPatientNameSorted(false);
        setIsSeveritySorted((prev) => !prev);
        break;

      default:
        break;
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    column: keyof NewTaskData
  ) => {
    setNewTaskData({
      ...newTaskData,
      [column]: e.target.value,
    });
  };

  const handleAddTask = () => {
    if (isAddingTask) {
      const isAllFieldsFilled = Object.values(newTaskData).every(
        (value) => value.trim() !== ""
      );
      if (isAllFieldsFilled) {
        const updatedData = [...sortedData, newTaskData as TableRow];
        localStorage.setItem("tableData", JSON.stringify(updatedData));
        setSortedData(updatedData);
        resetForm();
      } else {
        alert("Please fill all fields.");
      }
    } else {
      setIsAddingTask(true);
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  const resetForm = () => {
    setNewTaskData({
      Task: "",
      "Task Type": "",
      "Patient name": "",
      "Bed no": "",
      Severity: "",
      "Hospital-unit": "",
      Date: "",
      Assignee: "",
      Creator: "",
    });
    setIsAddingTask(false);
  };

  const renderRows = (data: TableRow[]): JSX.Element[] => {
    const filteredData = selectedAssignee
      ? data.filter((item) => item["Assignee"] === selectedAssignee)
      : data;

    return filteredData.map((item) => (
      <tr key={item.id} className="tw-p-2">
        <td className="tw-border-b tw-border-fades-400 tw-p-2">
          <img
            src={item["Verified"] === "Done" ? VerifiedIcon : RadioIcon}
            alt={item["Verified"]}
            className="tw-w-5 tw-h-5"
          />
        </td>
        {selectedColumns.map((column) => (
          <td
            className={`tw-border-b tw-border-fades-400 tw-p-2 ${
              column !== "Verified" ? "tw-border-r" : ""
            } ${
              column === "Severity" && item[column] === "Unstable"
                ? "tw-text-red-400"
                : ""
            }`}
            key={column}
          >
            {column === "Severity" && item[column] === "Unstable" ? (
              <div className="tw-flex tw-items-center tw-gap-2">
                <img src={UnstableIcon} alt="Unstable" className="tw-w-4 tw-h-4" />
                <p>{item[column]}</p>
              </div>
            ) : column === "Assignee" && item[column] === "Unassigned" ? (
              <div className="tw-flex tw-items-center tw-gap-2">
                <img src={PersonIcon} alt="Unassigned" className="tw-w-4 tw-h-4" />
                <p>{item[column]}</p>
              </div>
            ) : (
              <p>{item[column as keyof TableRow] || ""}</p>
            )}
          </td>
        ))}
      </tr>
    ));
  };

  const renderColumnHeader = (column: string) => (
    <th key={column} className="tw-border-b tw-p-2 tw-border-r tw-border-fades-400">
      <p className="tw-flex tw-items-center tw-capitalize tw-text-[12px] tw-font-medium">
        {column}

        {["Task Type", "Patient name", "Severity"].includes(column) && (
          <img
            src={ArrowUpwardIcon}
            alt="Sort"
            className="tw-ml-1 tw-w-4 tw-h-4 tw-cursor-pointer"
            onClick={() => handleSort(column)}
          />
        )}
      </p>
    </th>
  );

  const handleGroupByTaskType = (event: ChangeEvent<HTMLSelectElement>) => {
    setGroupedByTaskType(event.target.value);
  };

  const extractAssignees = (data: TableRow[]): string[] => {
    return Array.from(new Set(data.map((item) => item.Assignee))).filter(
      Boolean
    );
  };

  const handleAvatarClick = (assignee: string) => {
    setSelectedAssignee(assignee);
  };

  return (
    <div>
      <div className="tw-flex tw-my-10 tw-px-6">
        <div>
          <input
            type="text"
            placeholder="Search"
            className="tw-w-[28rem] tw-p-2 tw-border tw-border-fades-400 tw-rounded tw-outline-none"
          />
        </div>

        <Avatar
          data={extractAssignees(sortedData)}
          onClick={handleAvatarClick}
        />

        <div className="tw-ml-[16rem] tw-flex tw-items-center">
          <h1 className="tw-mr-2">Group By:</h1>
          <Dropdown
            options={selectedColumns}
            selectedValue={groupedByTaskType}
            onChange={handleGroupByTaskType}
          />
        </div>
      </div>

      <div className="tw-tableContainer tw-w-full">

        {Object.keys(sortedAndGroupedData).map((groupKey) => (
          <div key={groupKey} className="tw-my-6">
            {groupKey !== "all" && (
              <h3 className="tw-text-[1rem] tw-font-medium tw-mb-4 tw-px-4">{groupKey}</h3>
            )}
            <table className="tw-table-auto tw-w-full tw-rounded-[20px] tw-border-collapse">
              <thead className="tw-bg-transparent tw-h-[50px] tw-text-left tw-text-content-500 tw-text-[12px] tw-border-t">
                <tr>
                  <th className="tw-border-b tw-p-2 tw-border-fades-400"></th>
                  {selectedColumns.map(renderColumnHeader)}
                </tr>
                <tr>
                  {isAddingTask ? (
                    <>
                      <td className="tw-border-b tw-border-fades-400 tw-p-2 tw-w-[2.5rem]">
                        <img
                          src={NewTaskIcon}
                          alt="New Task"
                          className="tw-w-5 tw-h-5"
                        />
                      </td>
                      {selectedColumns.map((column) => (
                        <td
                          className={`tw-border-b tw-p-2 ${
                            column !== "Verified" ? "tw-border-r" : ""
                          }`}
                          key={column}
                        >
                          <input
                            type="text"
                            value={
                              newTaskData[column as keyof NewTaskData] || ""
                            }
                            onChange={(e) =>
                              handleInputChange(e, column as keyof NewTaskData)
                            }
                            onKeyDown={handleKeyDown}
                            className="tw-w-full tw-p-1 tw-border tw-border-fades-400 tw-rounded tw-outline-none"
                          />
                        </td>
                      ))}
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </tr>
              </thead>

              <tbody className="tw-bg-transparent tw-text-[14px] tw-text-others-100">
                {renderRows(sortedAndGroupedData[groupKey])}
              </tbody>

            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;


