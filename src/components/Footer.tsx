import React from "react";

export const Footer:React.FC=()=>{
    return (
        <>
        <footer className="bg-blue-700 text-white hover:bg-gray-100 hover:text-blue-600 py-4 ">
            <p className="text-center cursor-pointer">
            <a  href="https://github.com/bijaylaxmibehera/bookmark"
            target="_blank"
            rel="noopener noreferrer"
        >view on github</a>

            </p>
           
        </footer>
        </>
    )
}