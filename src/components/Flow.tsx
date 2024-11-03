import React, { useState } from 'react';
import SlideIcon from "../assets/slide.svg";
import CollapseIcon from "../assets/collapse.svg";
import DownArrow from "../assets/down_arrow.svg";
import VerifiedIcon from "../assets/verified.svg";
import NewTaskIcon from "../assets/newtask.svg";
import RadioIcon from "../assets/radio.svg";

const HamburgerSlidePopup = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [showAddTaskDetails, setShowAddTaskDetails] = useState(false);
    const [selectedPriority, setSelectedPriority] = useState("");
    const [selectedTaskType, setSelectedTaskType] = useState("");
    const [tasks, setTasks] = useState([
        {
            task: "Task Hospital A , bed no 4 patient- monitor the GCS  and SOS intuabtion1",
            priority: "High",
            patient: "Alfredo Bergson",
            taskType: "Follow Up",
            status: "Pending",
            date: "12 June, 13:30",
        },
        {
            task: "Task Hospital A , bed no 4 patient- monitor the GCS  and SOS intuabtion1",
            priority: "High",
            patient: "Alfredo Bergson",
            taskType: "Follow Up",
            status: "Pending",
            date: "12 June, 13:30",
        },
        {
            task: "Task Hospital A , bed no 4 patient- monitor the GCS  and SOS intuabtion1",
            priority: "High",
            patient: "Alfredo Bergson",
            taskType: "Follow Up",
            status: "Pending",
            date: "12 June, 13:30",
        },
        {
            task: "Task Hospital A , bed no 4 patient- monitor the GCS  and SOS intuabtion1",
            priority: "High",
            patient: "Alfredo Bergson",
            taskType: "Follow Up",
            status: "Pending",
            date: "12 June, 13:30",
        },
    ]);

    const [dueDate, setDueDate] = useState(""); 
    const togglePopup = () => setIsOpen(!isOpen);
    const handleAddTaskClick = () => setShowAddTaskDetails(!showAddTaskDetails);

    // Handler for changing task status
    const handleRadioClick = (index: number) => {
        const updatedTasks = tasks.map((task, i) => {
            if (i === index) {
                return {
                    ...task,
                    status: "Completed",
                };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const handlePrioritySelect = (priority: React.SetStateAction<string>) => {
        setSelectedPriority(priority);
    };

    const handleTaskTypeSelect = (taskType: React.SetStateAction<string>) => {
        setSelectedTaskType(taskType);
    };

    return (
        <div className="relative">
            {/* Hamburger Icon */}
            {!isOpen && (
                <button onClick={togglePopup} className="fixed top-4 right-4 z-50 p-2 text-white bg-gray-800 rounded-md">
                    <span className="material-icons">menu</span>
                </button>
            )}

            {/* Slide-in Popup */}
            <div className={`fixed top-0 right-0 h-[928px] w-[656px] bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex`}>
                {/* Slide SVG on the Left Side */}
                <div className="h-[85%] bg-gray-100 flex items-center">
                    <img src={SlideIcon} alt="Slide Decoration" className="w-2 h-30 cursor-pointer" onClick={togglePopup} />
                </div>

                {/* Content Area */}
                <div className="flex-grow relative">
                    {/* Centered Name */}
                    <div className="bg-[#EEEFF4] py-4 px-6 flex items-center justify-center relative">
                        <h2 className="text-md font-normal mx-auto">Arun Kumar 55 M</h2>
                        <img src={CollapseIcon} alt="Collapse Icon" className="absolute right-4 w-6 h-6 cursor-pointer" onClick={togglePopup} />
                    </div>

                    <div className='px-4 bg-[#F6F7F9]'>
                        <p className="text-gray-600 my-2">TASKS</p>
                        <div className='flex mb-2'>
                            <p className="text-gray-600 font-medium pl-2">All tasks</p>
                            <img src={DownArrow} alt="DownArrow Icon" className="cursor-pointer" />
                        </div>
                        <hr />

                        {/* Add Task Button */}
                        <div className='flex items-center cursor-pointer bg-[#F6F7F9]' onClick={handleAddTaskClick}>
                            <img src={NewTaskIcon} alt="NewTaskIcon" className="cursor-pointer" />
                            <p className="text-gray-600 font-medium p-3">Add task</p>
                        </div>

                        {/* Show Add Task Details */}
                        {showAddTaskDetails && (
                            <div className="mb-4 bg-white">
                                <h3 className="font-normal mb-2">Add Task Details</h3>
                                {/* Priority Section */}
                                <div className="flex items-center pl-6">
                                    <strong className="mr-6">Priority:</strong>
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
                                <div className="flex items-center pl-6 mt-2 gap-2">
                                    <strong className="mr-2">Task Type:</strong>
                                    {["Follow Up", "Admission", "Rounds", "Others"].map(taskType => (
                                        <span
                                            key={taskType}
                                            onClick={() => handleTaskTypeSelect(taskType)}
                                            className={`text-gray-600 text-[14px] font-medium border border-gray-400 px-2 py-0.5 rounded-sm cursor-pointer 
                                            ${selectedTaskType === taskType ? "bg-[#E5F2F2] text-[#34A2B1] border border-[#34A2B1]" : ""}`}>{taskType}</span>
                                    ))}
                                </div>
                                {/* Assigned To and Due Date */}
                                <p className="text-gray-600 pl-6"><strong>Assigned to:</strong> Anish</p>
                                <p className="text-gray-600 pl-6">
                                    <strong>Due Date:</strong>
                                    <input
                                        type="date"
                                        value={dueDate}
                                        onChange={(e) => setDueDate(e.target.value)}
                                        className="ml-2 border border-gray-400 px-2 py-1 rounded"
                                    />
                                </p>
                            </div>
                        )}

                        {/* Task Card */}
                        <div className=' bg-[#F6F7F9]'>
                            {tasks.map((task, index) => (
                                <div key={index} className="p-1 flex items-start">
                                    <img
                                        src={task.status === "Completed" ? VerifiedIcon : RadioIcon}
                                        alt="Radio Icon"
                                        className="cursor-pointer mr-3"
                                        onClick={() => handleRadioClick(index)}
                                    />
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-center mb-2">
                                            <p className="text-[16px] text-gray-800">{task.task}</p>
                                        </div>
                                        <div className="text-xs flex gap-3 text-gray-600 mb-2">
                                            <p className="text-red-500 font-bold border border-[#CDD7EB] px-2 py-1">{task.priority}</p>
                                            <p className='border border-[#CDD7EB] px-2 py-1'>{task.patient}</p>
                                            <p className='border border-[#CDD7EB] px-2 py-1'>{task.taskType}</p>
                                            <p className={`px-2 py-1 
                                                ${task.status === 'Pending' ? 'text-red-500 bg-yellow-200' :
                                                    task.status === 'Completed' ? 'text-green-500 bg-green-200' : ''}`}>
                                                {task.status}
                                            </p>
                                        </div>
                                    </div>
                                    <p className='text-[10px] whitespace-nowrap'>{task.date}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HamburgerSlidePopup;
