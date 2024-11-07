import React, { useState } from 'react';
import NewTaskIcon from "../assets/newtask.svg";
import PersonIcon from "../assets/Person.svg";
import CloseIcon from "../assets/Close.svg";

const AddTaskTable = () => {
    const [showAddTaskDetails, setShowAddTaskDetails] = useState(false);
    const [selectedPriority, setSelectedPriority] = useState<string | null>(null);
    const [selectedTaskType, setSelectedTaskType] = useState<string | null>(null);

    const handleAddTaskClick = () => setShowAddTaskDetails(true);

    const handlePrioritySelect = (priority: string) => {
        setSelectedPriority(priority);
    };

    const handleTaskTypeSelect = (taskType: string) => {
        setSelectedTaskType(taskType);
    };

    const handleCloseModal = () => setShowAddTaskDetails(false);

    return (
        <div>
            <div className='tw-flex tw-items-center tw-cursor-pointer' onClick={handleAddTaskClick}>
                <img src={NewTaskIcon} alt="NewTaskIcon" className="tw-cursor-pointer" />
                <p className="tw-text-gray-600 tw-font-medium tw-px-3">Add task</p>
            </div>

            {showAddTaskDetails && (
                <div className='tw-relative tw-h-[11.5rem] tw-w-[27rem] tw-bg-white tw-shadow-md tw-p-4'>
                    <div 
                        className="tw-absolute tw-top-[1.2rem] tw-right-[1.5rem] tw-cursor-pointer"
                        onClick={handleCloseModal}
                    >
                        <img src={CloseIcon} className='tw-w-5 tw-h-5' alt="CloseIcon" />
                    </div>

                    <div className="tw-mb-4">
                        <h3 className="tw-text-[16px] tw-mb-8 tw-text-[#8B94B3] tw-font-medium">Add Task Details</h3>
                        {/* Priority Section */}
                        <div className="tw-flex tw-items-center">
                            <strong className="tw-mr-2 tw-text-[14px] tw-font-medium">Priority:</strong>
                            <span
                                onClick={() => handlePrioritySelect("High")}
                                className={`tw-px-1 tw-text-[10px] tw-border tw-mr-2 tw-cursor-pointer tw-rounded-sm ${selectedPriority === "High" ? "tw-bg-red-500 tw-text-white" : "tw-text-red-500 tw-border-red-500"}`}
                            >
                                High
                            </span>
                            <span
                                onClick={() => handlePrioritySelect("Low")}
                                className={`tw-px-1 tw-text-[10px] tw-border tw-cursor-pointer tw-rounded-sm ${selectedPriority === "Low" ? "tw-bg-yellow-400 tw-text-white" : "tw-text-yellow-400 tw-border-yellow-400"}`}
                            >
                                Low
                            </span>
                        </div>
                        {/* Task Type Section with Separate Borders */}
                        <div className="tw-flex tw-items-center tw-mt-2 tw-gap-2">
                            <strong className="tw-text-[14px] tw-font-medium">Task Type:</strong>
                            {["Follow Up", "Admission", "Rounds", "Others"].map(taskType => (
                                <span
                                    key={taskType}
                                    onClick={() => handleTaskTypeSelect(taskType)}
                                    className={`tw-text-gray-600 tw-text-[14px] tw-font-medium tw-border tw-border-gray-400 tw-px-2 tw-py-0.5 tw-rounded-sm tw-cursor-pointer 
                                ${selectedTaskType === taskType ? "tw-bg-[#E5F2F2] tw-text-[#34A2B1] tw-border tw-border-[#34A2B1]" : ""}`}
                                >
                                    {taskType}
                                </span>
                            ))}
                        </div>
                        <div className="tw-mt-2">
                            <p className="tw-text-[14px] tw-flex tw-items-center tw-gap-1">
                                <strong className="tw-mr-2 tw-font-medium">Assignee:</strong>
                                <img src={PersonIcon} alt="PersonIcon" className="tw-cursor-pointer" />
                                Anish
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddTaskTable;
