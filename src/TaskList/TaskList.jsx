import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-[50%] overflow-x-auto w-full py-5 mt-10 flex items-start justify-start gap-5 flex-nowrap"
    >
      <div className="w-[300px] p-5 shrink-0 rounded-xl bg-red-400 h-full flex flex-col">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm text-white">High</h3>
          <h4 className="text-sm text-gray-800">20 Feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-gray-900">
          Make a YouTube Video
        </h2>
        <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel ad incidunt deserunt nostrum minima </p>
      </div>
      
      <div className="w-[300px] p-5 shrink-0 rounded-xl bg-blue-400 h-full flex flex-col">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm text-white">High</h3>
          <h4 className="text-sm text-gray-800">20 Feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-gray-900">
          Make a YouTube Video
        </h2>
        <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel ad incidunt deserunt nostrum minima </p>
      </div>
      
      <div className="w-[300px] p-5 shrink-0 rounded-xl bg-green-400 h-full flex flex-col">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm text-white">High</h3>
          <h4 className="text-sm text-gray-800">20 Feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-gray-900">
          Make a YouTube Video
        </h2>
        <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel ad incidunt deserunt nostrum minima </p>
      </div>
      
      <div className="w-[300px] p-5 shrink-0 rounded-xl bg-yellow-400 h-full flex flex-col">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm text-white">High</h3>
          <h4 className="text-sm text-gray-800">20 Feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-gray-900">
          Make a YouTube Video
        </h2>
        <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel ad incidunt deserunt nostrum minima </p>
      </div>
      
    </div>
  );
};

export default TaskList;
