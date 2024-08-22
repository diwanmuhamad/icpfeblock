import React, { useState } from "react";

const TwoTabCard = ({activeTab, data, setActiveTab, setIsPopupOpen}) => {
    
  return (
    <div className="mx-auto bg-zinc-500 shadow-lg rounded-lg overflow-hidden">
      <div className="flex border-b">
        <button
          className={`w-1/2 py-2 text-center ${activeTab === "Tab1" ? "bg-zinc-500 text-white" : "bg-gray-100 text-gray-700"} font-semibold`}
          onClick={() => setActiveTab("Tab1")}
        >
          Document Uploaded
        </button>
        <button
          className={`w-1/2 py-2 text-center ${activeTab === "Tab2" ? "bg-zinc-500 text-white" : "bg-gray-100 text-gray-700"} font-semibold`}
          onClick={() => setActiveTab("Tab2")}
        >
          Document Need To Sign
        </button>
      </div>
      <div className="p-4">
        {activeTab === "Tab1" ? (
          <div>
             {
                data.map((el) => {
                    return(
                        <div key={el}
                        className="w-full flex mb-10 bg-zinc-300 rounded shadow-m p-3"
                        >
                            <p>Document Name: {el}</p>
                        </div>
                    )
                })
            }

          </div>
        ) : (
          <div>
             {
                [1,2].map((el) => {
                    return(
                        <div key={el}
                        onClick={() => setIsPopupOpen(true)}
                        className="w-full flex mb-10 bg-zinc-300 rounded shadow-m p-3 cursor-pointer"
                        >
                            <p>Document Name: {el}</p>
                        </div>
                    )
                })
            }

          </div>
        )}
      </div>
    </div>
  );
};

export default TwoTabCard;