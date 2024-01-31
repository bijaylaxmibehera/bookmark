import { useBookmark } from '../context/BookmarkContext'

export const BookmarkList = () => {
  const {
    state: { bookmarks },
    dispatch,
  } = useBookmark()
  return (
    <>
      {bookmarks?.length === 0 ? (
        <p className='text-center text-red-500'>No bookmarks available</p>
      ) : (
        <div className='w-[80%] mx-auto'>
        <ol className='list-decimal'>
          {bookmarks?.map((bookmark) => (
            <li key={bookmark.id} className='text-blue-600'>
              <a href={bookmark.url} target="_blank"  className="hover:underline hover:text-blue-800 transition duration-300">
                {bookmark.title}
              </a>
              <button
                onClick={() =>
                  dispatch({
                    type: 'REMOVE_BOOKMARK',
                    payload: { id: bookmark.id },
                  })
                }
                className='text-red-500 hover:bg-red-500 hover:text-white font-bold py-1 px-4 rounded-sm transition duration-300 opacity-90 hover:opacity-100 ml-3'
              >
                remove
              </button>
            </li>
          ))}
        </ol>
        </div>
      )}
    </>
  )
}
