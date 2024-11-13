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
    const [showTasks, setShowTasks] = useState(true);
    const [selectedPriority, setSelectedPriority] = useState("");
    const [selectedTaskType, setSelectedTaskType] = useState("");
    const [tasks, setTasks] = useState([
        {
            task: "Task Hospital A , bed no 4 patient- monitor the GCS and SOS intuabtion1",
            priority: "High",
            patient: "Alfredo Bergson",
            taskType: "Follow Up",
            status: "Pending",
            date: "12 June, 13:30",
        },
        {
            task: "Task Hospital A , bed no 4 patient- monitor the GCS and SOS intuabtion1",
            priority: "High",
            patient: "Alfredo Bergson",
            taskType: "Follow Up",
            status: "Pending",
            date: "12 June, 13:30",
        },
        {
            task: "Task Hospital A , bed no 4 patient- monitor the GCS and SOS intuabtion1",
            priority: "High",
            patient: "Alfredo Bergson",
            taskType: "Follow Up",
            status: "Pending",
            date: "12 June, 13:30",
        },
        {
            task: "Task Hospital A , bed no 4 patient- monitor the GCS and SOS intuabtion1",
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

    const toggleTasksVisibility = () => setShowTasks(!showTasks);

    return (
        <div className="tw-relative">
            {/* Hamburger Icon */}
            {!isOpen && (
                <button onClick={togglePopup} className="tw-fixed tw-top-4 tw-right-4 tw-z-50 tw-p-2 tw-text-white tw-bg-fades-800 tw-rounded-md">
                    <span className="material-icons">menu</span>
                </button>
            )}

            {/* Slide-in Popup */}
            <div className={`tw-fixed tw-top-0 tw-right-0 tw-h-[928px] tw-w-[656px] tw-bg-white tw-shadow-lg tw-transform tw-transition-transform tw-duration-300 ${isOpen ? 'tw-translate-x-0' : 'tw-translate-x-full'} tw-flex`}>
                {/* Slide SVG on the Left Side */}
                <div className="tw-h-[85%] tw-bg-gray-100 tw-flex tw-items-center">
                    <img src={SlideIcon} alt="Slide Decoration" className="tw-w-2 tw-h-30 tw-cursor-pointer" onClick={togglePopup} />
                </div>

                {/* Content Area */}
                <div className="tw-flex-grow tw-relative">
                    {/* Centered Name */}
                    <div className="tw-bg-fades-200 tw-py-4 tw-px-6 tw-flex tw-items-center tw-justify-center tw-relative">
                        <h2 className="tw-text-md tw-font-normal tw-mx-auto tw-text-cool-grey-500">Arun Kumar 55 M</h2>
                        <img src={CollapseIcon} alt="Collapse Icon" className="tw-absolute tw-right-4 tw-w-6 tw-h-6 tw-cursor-pointer" onClick={togglePopup} />
                    </div>

                    <div className='tw-px-4 tw-bg-fades-100'>
                        <p className="tw-text-fades-600 tw-my-2">TASKS</p>
                        <div className='tw-flex tw-mb-2' onClick={toggleTasksVisibility}>
                            <p className="tw-text-fades-600 tw-font-medium tw-pl-2">All tasks</p>
                            <img src={DownArrow} alt="DownArrow Icon" className="tw-cursor-pointer" />
                        </div>
                        <hr className="tw-border-t tw-border-fades-350" />

                        {/* Add Task Button */}
                        <div className='tw-flex tw-items-center tw-cursor-pointer tw-bg-fades-100' onClick={handleAddTaskClick}>
                            <img src={NewTaskIcon} alt="NewTaskIcon" className="tw-cursor-pointer" />
                            <p className="tw-text-fades-600 tw-font-medium tw-p-3">Add task</p>
                        </div>

                        {/* Show Add Task Details */}
                        {showAddTaskDetails && (
                            <div className="tw-mb-4 tw-bg-fades-000">
                                <h3 className="tw-font-normal tw-mb-2 tw-text-content-300">Add Task Details</h3>
                                {/* Priority Section */}
                                <div className="tw-flex tw-items-center tw-pl-6">
                                    <strong className="tw-mr-6 tw-text-content-600 tw-text-sm">Priority:</strong>
                                    <span
                                        onClick={() => handlePrioritySelect("High")}
                                        className={`tw-px-1 tw-text-[10px] tw-border tw-mr-2 tw-cursor-pointer tw-rounded-sm ${selectedPriority === "High" ? "tw-bg-red-400 tw-text-white" : "tw-text-red-400 tw-border-red-400"}`}
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
                                <div className="tw-flex tw-items-center tw-pl-6 tw-mt-2 tw-gap-2">
                                    <strong className="tw-mr-2 tw-text-content-600 tw-text-sm tw-py-2">Task Type:</strong>
                                    {["Follow Up", "Admission", "Rounds", "Others"].map(taskType => (
                                        <span
                                            key={taskType}
                                            onClick={() => handleTaskTypeSelect(taskType)}
                                            className={`tw-text-fades-600 tw-text-[14px] tw-font-medium tw-border tw-border-gray-400 tw-px-2 tw-py-0.5 tw-rounded-sm tw-cursor-pointer 
                                            ${selectedTaskType === taskType ? "tw-bg-primary-100 tw-text-primary-400 tw-border tw-border-primary-400" : ""}`}>{taskType}</span>
                                    ))}
                                </div>
                                {/* Assigned To and Due Date */}
                                <p className="tw-text-fades-600 tw-pl-6"><strong className='tw-text-sm tw-text-content-600'>Assigned to:</strong> Anish</p>
                                <p className="tw-text-fades-600 tw-pl-6">
                                    <strong className='tw-text-sm tw-text-content-600'>Due Date:</strong>
                                    <input
                                        type="date"
                                        value={dueDate}
                                        onChange={(e) => setDueDate(e.target.value)}
                                        className="tw-ml-2 tw-border tw-border-fades-400 tw-px-2 tw-py-1 tw-rounded"
                                    />
                                </p>
                            </div>
                        )}

                        {/* Task Card */}
                        {showTasks && (
                        <div className=' tw-bg-fades-100'>
                            {tasks.map((task, index) => (
                                <div key={index} className="tw-p-1 tw-flex tw-items-start">
                                    <img
                                        src={task.status === "Completed" ? VerifiedIcon : RadioIcon}
                                        alt="Radio Icon"
                                        className="tw-cursor-pointer tw-mr-3"
                                        onClick={() => handleRadioClick(index)}
                                    />
                                    <div className="tw-flex-grow">
                                        <div className="tw-flex tw-justify-between tw-items-center tw-mb-2">
                                            <p className="tw-text-[16px] tw-text-gray-800">{task.task}</p>
                                        </div>
                                        <div className="tw-text-xs tw-flex tw-gap-3 tw-text-gray-600 tw-mb-2">
                                            <p className="tw-text-red-400 tw-font-bold tw-border tw-border-fades-400  tw-px-2 tw-py-1 tw-rounded-sm">{task.priority}</p>
                                            <p className='tw-border tw-border-fades-400  tw-px-2 tw-py-1 tw-rounded-sm'>{task.patient}</p>
                                            <p className="tw-border tw-border-fades-400 tw-px-2 tw-py-1 tw-rounded-sm">{task.taskType}</p>
                                            <p className={`tw-px-2 tw-py-1 
                                                ${task.status === 'Pending' ? 'tw-text-red-400 tw-bg-yellow-200' :
                                                    task.status === 'Completed' ? 'tw-text-green-500 tw-bg-green-200' : ''}`}>
                                                {task.status}
                                            </p>
                                        </div>
                                    </div>
                                    <p className='tw-text-[10px] tw-whitespace-nowrap'>{task.date}</p>
                                </div>
                            ))}
                        </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HamburgerSlidePopup;
