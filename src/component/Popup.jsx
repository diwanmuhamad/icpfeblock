import React from "react";

const Popup = ({ isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center border-b p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <div className="p-4">
          Are You Sure Want to Sign This?
        </div> 
        <div className="flex space-x-3 border-t p-4">
        <button
            onClick=""
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;