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
            <div className='flex items-center cursor-pointer' onClick={handleAddTaskClick}>
                <img src={NewTaskIcon} alt="NewTaskIcon" className="cursor-pointer" />
                <p className="text-gray-600 font-medium p-3">Add task</p>
            </div>

            {showAddTaskDetails && (
                <div className='relative h-[11.5rem] w-[27rem] bg-white shadow-md p-4'>
                    <div 
                        className="absolute top-[1.2rem] right-[1.5rem] cursor-pointer"
                        onClick={handleCloseModal}
                    >
                        <img src={CloseIcon} className='w-5 h-5' alt="CloseIcon" />
                    </div>

                    <div className="mb-4">
                        <h3 className="text-[16px] mb-8 text-[#8B94B3] font-medium">Add Task Details</h3>
                        {/* Priority Section */}
                        <div className="flex items-center">
                            <strong className="mr-2 text-[14px] font-medium">Priority:</strong>
                            <span
                                onClick={() => handlePrioritySelect("High")}
                                className={`px-1 text-[10px] border mr-2 cursor-pointer rounded-sm ${selectedPriority === "High" ? "bg-red-500 text-white" : "text-red-500 border-red-500"}`}
                            >
                                High
                            </span>
                            <span
                                onClick={() => handlePrioritySelect("Low")}
                                className={`px-1 text-[10px] border cursor-pointer rounded-sm ${selectedPriority === "Low" ? "bg-yellow-400 text-white" : "text-yellow-400 border-yellow-400"}`}
                            >
                                Low
                            </span>
                        </div>
                        {/* Task Type Section with Separate Borders */}
                        <div className="flex items-center mt-2 gap-2">
                            <strong className="text-[14px] font-medium">Task Type:</strong>
                            {["Follow Up", "Admission", "Rounds", "Others"].map(taskType => (
                                <span
                                    key={taskType}
                                    onClick={() => handleTaskTypeSelect(taskType)}
                                    className={`text-gray-600 text-[14px] font-medium border border-gray-400 px-2 py-0.5 rounded-sm cursor-pointer 
                                ${selectedTaskType === taskType ? "bg-[#E5F2F2] text-[#34A2B1] border border-[#34A2B1]" : ""}`}
                                >
                                    {taskType}
                                </span>
                            ))}
                        </div>
                        <div className="mt-2">
                            <p className="text-[14px] flex items-center gap-1">
                                <strong className="mr-2 font-medium">Assignee:</strong>
                                <img src={PersonIcon} alt="PersonIcon" className="cursor-pointer" />
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
