import React from "react"
import { HeaderPropType } from "../types/Header.type"

export const Header : React.FC<HeaderPropType>=({headerTitle})=>{
    return (
        <>
         <h1>{headerTitle}</h1>
        </>
    )
}