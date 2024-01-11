import {BookmarkActionType,BookmarkStateType} from "../types/Bookmark.type";



export const initialState : BookmarkStateType = {
    bookmarks : []
}

export const BookmarkReducer = (state:BookmarkStateType, action:BookmarkActionType):BookmarkStateType=>{
  switch (action.type){
    case "ADD_BOOKMARK":
        return {
            ...state,
            bookmarks:[...state.bookmarks,action.payload]
        }

    case "REMOVE_BOOKMARK":
        return {
            ...state,
            bookmarks:[...state.bookmarks].filter((bookmark)=>bookmark.id !== action.payload.id)
        }
    default: 
       return state
  }
}