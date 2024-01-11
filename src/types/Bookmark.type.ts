export type BookmarkType = {
    id:number,
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
        id:number,
    }
}

export type BookmarkActionType = AddBookmarkAction | RemoveBookmarkAction;

