import { useBookmark } from "../context/BookmarkContext"

export const BookmarkList =()=>{
    const {state}=useBookmark();
    return (
        <>
        <h2>Bookmark list component</h2>
        </>
    )
}