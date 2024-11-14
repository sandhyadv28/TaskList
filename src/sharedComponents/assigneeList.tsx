import React, { useState } from "react";
import PersonIcon from "../assets/Person.svg";

interface Assignee {
  id: number;
  name: string;
}

const AssigneeList = ({
  filteredAssignees,
  item,
  column,
  handleAssigneeClick,
}: {
  filteredAssignees: Assignee[];
  item: any;
  column: string;
  handleAssigneeClick: (id: number) => void;
}) => {
  const [editingAssigneeId, setEditingAssigneeId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleAssigneeChange = (
    event: { target: { value: string } },
    item: any,
    column: string
  ) => {
    const selectedName = event.target.value;
    item[column] = selectedName;
    setEditingAssigneeId(null);
  };

  return (
    <div className="tw-flex tw-items-center tw-gap-2 tw-cursor-pointer tw-text-others-200">
      {editingAssigneeId === item.id ? (
        <div className="tw-flex tw-flex-col tw-relative">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Unassigned"
            className="tw-px-2 tw-py-1 tw-border tw-border-gray-300 tw-rounded tw-w-[7rem] tw-outline-none"
          />
          <ul className="tw-max-h-32 tw-overflow-y-auto tw-bg-white tw-border tw-border-gray-300 tw-rounded tw-mt-[2rem] tw-absolute">
            {filteredAssignees.map((assignee) => (
              <li
                key={assignee.id}
                className="tw-px-2 tw-py-1 hover:tw-bg-gray-100 cursor-pointer tw-text-fades-700"
                onClick={() => handleAssigneeChange({ target: { value: assignee.name } },item, column)}
              >
                {assignee.name}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div
          className={`tw-flex tw-items-center tw-gap-2 tw-cursor-pointer ${
            item[column] ? "tw-text-others-100" : "tw-text-others-200"
          }`}
          onClick={() => {
            setEditingAssigneeId(item.id);
            handleAssigneeClick(item.id);
          }}
        >
          <img src={PersonIcon} alt="Unassigned" className="tw-w-4 tw-h-4" />
          <p>{item[column] || "Unassigned"}</p> 
        </div>
      )}
    </div>
  );
};

export default AssigneeList;
