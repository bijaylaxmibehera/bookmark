import React from "react"
import { HeaderPropType } from "../types/Header.type"

export const Header : React.FC<HeaderPropType>=({headerTitle})=>{
    return (
        <>
         <h1 className="w-[10%] mx-auto font-medium text-3xl">{headerTitle}</h1>
        </>
    )
}