import React from "react"

export type BookmarkType = {
    id:string,
    title:string,
    url:string,
}

 export type AddBookmarkAction ={
    type: "ADD_BOOKMARK",
    payload:BookmarkType
}

export type RemoveBookmarkAction={
    type:"REMOVE_BOOKMARK",
    payload:{
        id:string,
    }
}

export type BookmarkActionType = AddBookmarkAction | RemoveBookmarkAction;

export type BookmarkStateType ={
    bookmarks:BookmarkType[]
}

export type BookmarkContextType = {
    state:BookmarkStateType,
    dispatch:React.Dispatch<BookmarkActionType>
}

export type BookmarkProviderProps ={
    children:React.ReactNode
}