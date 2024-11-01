// import React, { useState } from 'react';
// import SlideIcon from "../assets/slide.svg";
// import CollapseIcon from "../assets/collapse.svg";
// import DownArrow from "../assets/down_arrow.svg";
// import VerifiedIcon from "../assets/verified.svg";
// import NewTaskIcon from "../assets/newtask.svg";
// import RadioIcon from "../assets/radio.svg";

// const HamburgerSlidePopup = () => {
//     const [isOpen, setIsOpen] = useState(true);
//     const [showAddTaskDetails, setShowAddTaskDetails] = useState(false);

//     // Toggle the popup
//     const togglePopup = () => setIsOpen(!isOpen);

//     // Sample tasks assigned to Arun Kumar
//     const tasks = [
//         {
//             task: "Task Hospital A , bed no 4 patient- monitor the GCS  and SOS intuabtion1",
//             priority: "High",
//             patient: "Alfredo Bergson",
//             taskType: "Follow Up",
//             status: "Pending",
//         },
//         {
//             task: "Task Hospital A , bed no 4 patient- monitor the GCS  and SOS intuabtion1",
//             priority: "High",
//             patient: "Alfredo Bergson",
//             taskType: "Follow Up",
//             status: "Pending",
//         },
//         {
//             task: "Task Hospital A , bed no 4 patient- monitor the GCS  and SOS intuabtion1",
//             priority: "High",
//             patient: "Alfredo Bergson",
//             taskType: "Follow Up",
//             status: "Pending",
//         },
//         {
//             task: "Task Hospital A , bed no 4 patient- monitor the GCS  and SOS intuabtion1",
//             priority: "High",
//             patient: "Alfredo Bergson",
//             taskType: "Follow Up",
//             status: "Pending",
//         },
//     ];

//     // Handler for showing/hiding add task details
//     const handleAddTaskClick = () => {
//         setShowAddTaskDetails(!showAddTaskDetails);
//     };

//     return (
//         <div className="relative">
//             {/* Hamburger Icon */}
//             {!isOpen && (
//                 <button onClick={togglePopup} className="fixed top-4 right-4 z-50 p-2 text-white bg-gray-800 rounded-md">
//                     <span className="material-icons">menu</span>
//                 </button>
//             )}

//             {/* Slide-in Popup */}
//             <div
//                 className={`fixed top-0 right-0 h-[928px] w-[656px] bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
//                     } flex`}
//             >
//                 {/* Slide SVG on the Left Side */}
//                 <div className="h-[85%] bg-gray-100 flex items-center">
//                     <img src={SlideIcon} alt="Slide Decoration" className="w-2 h-30 cursor-pointer" onClick={togglePopup} />
//                 </div>

//                 {/* Content Area */}
//                 <div className="flex-grow relative">
//                     {/* Centered Name */}
//                     <div className="bg-[#EEEFF4] py-4 px-6 flex items-center justify-center relative">
//                         <h2 className="text-md font-normal mx-auto">Arun Kumar 55 M</h2>
//                         <img src={CollapseIcon} alt="Collapse Icon" className="absolute right-4 w-6 h-6 cursor-pointer" onClick={togglePopup} />
//                     </div>

//                     <div className='px-4'>
//                         <p className="text-gray-600 my-2">TASKS</p>
//                         <div className='flex mb-2'>
//                             <p className="text-gray-600 font-medium pl-2">All tasks</p>
//                             <img src={DownArrow} alt="DownArrow Icon" className="cursor-pointer" />
//                         </div>
//                         <hr />

//                         {/* Add Task Button */}
//                         <div className='flex items-center cursor-pointer' onClick={handleAddTaskClick}>
//                             <img src={NewTaskIcon} alt="NewTaskIcon" className="cursor-pointer" />
//                             <p className="text-gray-600 font-medium p-3">Add task</p>
//                         </div>

//                         {/* Show Add Task Details */}
//                         {showAddTaskDetails && (
//                             <div className="mb-4"> {/* Optional margin for spacing */}
//                                 <h3 className="font-normal mb-2">Add Task Details</h3>

//                                 {/* Priority Section */}
//                                 <div className="flex items-center pl-6">
//                                     <strong className="mr-6">Priority:</strong>
//                                     <span className=" px-1 text-[10px] text-red-500 border border-red-500 mr-2">High</span>
//                                     <span className="px-1 text-[10px] text-yellow-400 border border-yellow-400">Low</span>
//                                 </div>

//                                 {/* Task Type Section with Separate Borders */}
//                                 <div className="flex items-center pl-6 mt-2 gap-2">
//                                     <strong className="mr-2">Task Type:</strong>
//                                     <span className="text-gray-600 text-[14px] border border-gray-400 px-2 py-0.5 rounded-sm">
//                                         Follow Up
//                                     </span>
//                                     <span className="text-gray-600 text-[14px] border border-gray-400 px-2 py-0.5 rounded-sm">
//                                         Admission
//                                     </span>
//                                     <span className="text-gray-600 text-[14px] border border-gray-400 px-2 py-0.5 rounded-sm">
//                                         Rounds
//                                     </span>
//                                     <span className="text-gray-600 text-[14px] border border-gray-400 px-2 py-0.5 rounded-sm">
//                                         Others
//                                     </span>
//                                 </div>

//                                 {/* Assigned To and Due Date */}
//                                 <p className="text-gray-600 pl-6"><strong>Assigned to:</strong> Anish</p>
//                                 <p className="text-gray-600 pl-6"><strong>Due Date:</strong> 22/11/2024</p>
//                             </div>
//                         )}

//                         {/* Task Card */}
//                         <div className="">
//                             {tasks.map((task, index) => (
//                                 <div key={index} className="p-4 flex items-start"> {/* Use flex to align icon and content */}
//                                     <img src={RadioIcon} alt="Radio Icon" className="cursor-pointer mr-3" /> {/* Add margin to the right */}
//                                     <div className="flex-grow"> {/* Allow the content to take the remaining space */}
//                                         <div className="flex justify-between items-center mb-2">
//                                             <h3 className="text-lg text-gray-800">{task.task}</h3>
//                                         </div>
//                                         <div className="text-xs flex gap-3 text-gray-600 mb-2">
                
//                                             <p className=" text-red-500 font-bold border border-[#CDD7EB] px-2 py-1">{task.priority}</p>
//                                                 <p className='border border-[#CDD7EB] px-2 py-1'>{task.patient}</p>
//                                                 <p className='border border-[#CDD7EB] px-2 py-1'> {task.taskType}</p>
//                                                 <p className="border border-[#CDD7EB] px-2 py-1"> {task.status}</p>
//                                             </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HamburgerSlidePopup;
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

    // Sample tasks assigned to Arun Kumar
    const [tasks, setTasks] = useState([
        {
            task: "Task Hospital A , bed no 4 patient- monitor the GCS  and SOS intuabtion1",
            priority: "High",
            patient: "Alfredo Bergson",
            taskType: "Follow Up",
            status: "Pending",
        },
        {
            task: "Task Hospital A , bed no 4 patient- monitor the GCS  and SOS intuabtion1",
            priority: "High",
            patient: "Alfredo Bergson",
            taskType: "Follow Up",
            status: "Pending",
        },
        {
            task: "Task Hospital A , bed no 4 patient- monitor the GCS  and SOS intuabtion1",
            priority: "High",
            patient: "Alfredo Bergson",
            taskType: "Follow Up",
            status: "Pending",
        },
        {
            task: "Task Hospital A , bed no 4 patient- monitor the GCS  and SOS intuabtion1",
            priority: "High",
            patient: "Alfredo Bergson",
            taskType: "Follow Up",
            status: "Pending",
        },
    ]);

    // Toggle the popup
    const togglePopup = () => setIsOpen(!isOpen);

    // Handler for showing/hiding add task details
    const handleAddTaskClick = () => {
        setShowAddTaskDetails(!showAddTaskDetails);
    };

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

    return (
        <div className="relative">
            {/* Hamburger Icon */}
            {!isOpen && (
                <button onClick={togglePopup} className="fixed top-4 right-4 z-50 p-2 text-white bg-gray-800 rounded-md">
                    <span className="material-icons">menu</span>
                </button>
            )}

            {/* Slide-in Popup */}
            <div
                className={`fixed top-0 right-0 h-[928px] w-[656px] bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } flex`}
            >
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

                    <div className='px-4'>
                        <p className="text-gray-600 my-2">TASKS</p>
                        <div className='flex mb-2'>
                            <p className="text-gray-600 font-medium pl-2">All tasks</p>
                            <img src={DownArrow} alt="DownArrow Icon" className="cursor-pointer" />
                        </div>
                        <hr />

                        {/* Add Task Button */}
                        <div className='flex items-center cursor-pointer' onClick={handleAddTaskClick}>
                            <img src={NewTaskIcon} alt="NewTaskIcon" className="cursor-pointer" />
                            <p className="text-gray-600 font-medium p-3">Add task</p>
                        </div>

                        {/* Show Add Task Details */}
                        {showAddTaskDetails && (
                            <div className="mb-4"> {/* Optional margin for spacing */}
                                <h3 className="font-normal mb-2">Add Task Details</h3>

                                {/* Priority Section */}
                                <div className="flex items-center pl-6">
                                    <strong className="mr-6">Priority:</strong>
                                    <span className="px-1 text-[10px] text-red-500 border border-red-500 mr-2">High</span>
                                    <span className="px-1 text-[10px] text-yellow-400 border border-yellow-400">Low</span>
                                </div>

                                {/* Task Type Section with Separate Borders */}
                                <div className="flex items-center pl-6 mt-2 gap-2">
                                    <strong className="mr-2">Task Type:</strong>
                                    <span className="text-gray-600 text-[14px] border border-gray-400 px-2 py-0.5 rounded-sm">
                                        Follow Up
                                    </span>
                                    <span className="text-gray-600 text-[14px] border border-gray-400 px-2 py-0.5 rounded-sm">
                                        Admission
                                    </span>
                                    <span className="text-gray-600 text-[14px] border border-gray-400 px-2 py-0.5 rounded-sm">
                                        Rounds
                                    </span>
                                    <span className="text-gray-600 text-[14px] border border-gray-400 px-2 py-0.5 rounded-sm">
                                        Others
                                    </span>
                                </div>

                                {/* Assigned To and Due Date */}
                                <p className="text-gray-600 pl-6"><strong>Assigned to:</strong> Anish</p>
                                <p className="text-gray-600 pl-6"><strong>Due Date:</strong> 22/11/2024</p>
                            </div>
                        )}

                        {/* Task Card */}
                        <div className="">
                            {tasks.map((task, index) => (
                                <div key={index} className="p-4 flex items-start"> {/* Use flex to align icon and content */}
                                    <img 
                                        src={task.status === "Completed" ? VerifiedIcon : RadioIcon} 
                                        alt="Radio Icon" 
                                        className="cursor-pointer mr-3" 
                                        onClick={() => handleRadioClick(index)} 
                                    />
                                    <div className="flex-grow"> {/* Allow the content to take the remaining space */}
                                        <div className="flex justify-between items-center mb-2">
                                            <h3 className="text-lg text-gray-800">{task.task}</h3>
                                        </div>
                                        <div className="text-xs flex gap-3 text-gray-600 mb-2">
                                            <p className="text-red-500 font-bold border border-[#CDD7EB] px-2 py-1">{task.priority}</p>
                                            <p className='border border-[#CDD7EB] px-2 py-1'>{task.patient}</p>
                                            <p className='border border-[#CDD7EB] px-2 py-1'>{task.taskType}</p>
                                            <p className="border border-[#CDD7EB] px-2 py-1">{task.status}</p>
                                        </div>
                                    </div>
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
