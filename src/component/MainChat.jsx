import {useEffect, useState} from "react"
import TwoTabCard from "./TwoTab";
import Popup from "./Popup";
import { FaLocationArrow, FaBars, FaPlus } from "react-icons/fa";
import { cblogo } from "../assets";
import { Link } from "react-router-dom";
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainChat = ({chatData, setChatData, setOpenSide, isLoading, setIsLoading}) => {
    const [question, setQuestion] = useState("")
    const [activeTab, setActiveTab] = useState("Tab1")
    const [data, setData] = useState(["Docs 1", "Docs 2", "Docs 3"])
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const submitChat = () => {
    }

    useEffect(()=> {
       
    },[])
    return (
        <div className="h-full w-full">
            
            <div className="h-[80px] bg-zinc-900 w-full flex justify-between p-3 text-gray-400">
                <div className="border-white">
                    <p>Account Name</p>
                </div>
            </div>
            <div className="bg-neutral-800 w-full h-screen px-[10%] py-4">
                <div className="relative h-1/6 w-full py-3">
                    {/* <div id="contPrompt" className="relative flex flex-col w-full shadow-2xl bg-neutral-600 rounded px-3">
                        <h2 className="text-white text-lg py-4">Document List</h2>
                        {
                            [1,2,3].map((el) => {
                                return(
                                    <div key={el}
                                    className="w-full flex mb-10 bg-zinc-300 rounded shadow-xl p-3"
                                    >
                                        <p>Document Name: {el}</p>
                                    </div>
                                )
                            })
                        }


                    </div> */}
                    <TwoTabCard activeTab={activeTab} data={data} setActiveTab={setActiveTab} setIsPopupOpen={setIsPopupOpen}/>
                </div>

                <Popup
                    isOpen={isPopupOpen}
                    onClose={() => setIsPopupOpen(false)}
                    title="Confirmation"
                />
                <ToastContainer/>
            </div>
        </div>
       
    )
}

export default MainChat;