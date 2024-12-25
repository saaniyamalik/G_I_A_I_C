import { FaEnvelope } from "react-icons/fa"

export default function Contact () {

    return (

        <div className="flex-col items-center text-center px-4 py-16 space-y-12">
        <button className="square-full h-[100px] border text-black hover:bg-purple-400 hover:text-black">
         CONTACT ME
         </button> 
         <a
         href="mailto:saaniya.maalik.72@gmail.com"
         target="_blank"
         rel="noopener noreferror"
         className="text-white transition-transform transform"
         style={{fontSize: "2rem"}}
         >
            <FaEnvelope/>
            </a>
        <h1 className="hover: bg-grey-800 text-4xl font-bold h-[5px] hover: text-white">CONTACT NUMBER : 03052762669</h1>
        
         </div>
 
    )
}