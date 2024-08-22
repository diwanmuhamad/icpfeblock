import React, {useState} from "react"
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import MultiSelect from "./Multiple";

const SidebarChat = ({openSide, setOpenSide, setChatData, isLoading, setIsLoading}) => {
    const navigate = useNavigate()

    const [file, setFile] = useState(null);
    const [options, setOptions] = useState(["John","Bro","Yo", "unknown"])

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert('No file selected');
      return;
    }
    console.log("test")
  }
    return (
        <div className={`sm:w-[20%] h-screen p-3 bg-zinc-900 sm:flex sm:flex-col ${openSide?"flex flex-col absolute w-[200px] sm:static z-10":"hidden"}`}>
            <div className="h-1/6 w-full">
                <input id="file" type="file" onChange={handleFileChange}></input>
                {file && (
                    <div className="text-white py-4 ">
                        <p>Name: {file.name}</p>
                    </div>
                )}

                {
                    file && (<div className="h-2/4 border-[1px] border-white rounded-lg w-full cursor-pointer">
                        <button 
                            onClick={handleUpload}
                             className={`appearance-none cursor-pointer h-full w-full text-white hover:bg-stone-800 hover:rounded-lg`}>+ Upload File</button>
                        </div>)
                }
                
                <div className="p-4">
                    <MultiSelect options={options} label="Choose your User:" />
                </div>

            </div>
            <div className="h-4/6 w-full overflow-y-auto p-3">

            </div>
            <div className="w-full h-1/6 border-t-[1px] border-white p-3">
                <div className="w-full flex justify-between">
                    <p className="text-white">Logout</p>
                    <FaSignOutAlt className="text-red-700 cursor-pointer mt-1 text-lg"
                     onClick={()=>{
                        navigate('/')
                        localStorage.removeItem('token')
                      }}
                    />
                </div>
                {
                    openSide && 
                    <h2 
                    onClick={()=>setOpenSide(false)}
                    className="text-white mt-2 cursor-pointer sm:hidden">X</h2>
                }
            </div>

        </div>
    )
}

export default SidebarChat;