import { useBookmark } from '../context/BookmarkContext'

export const BookmarkList = () => {
  const {
    state: { bookmarks },
    dispatch,
  } = useBookmark()
  return (
    <>
      {bookmarks?.length === 0 ? (
        <p>No bookmarks available</p>
      ) : (
        <ol>
          {bookmarks?.map((bookmark) => (
            <li key={bookmark.id}>
              <a href={bookmark.url} target="_blank">
                {bookmark.title}
              </a>
              <button
                onClick={() =>
                  dispatch({
                    type: 'REMOVE_BOOKMARK',
                    payload: { id: bookmark.id },
                  })
                }
              >
                remove
              </button>
            </li>
          ))}
        </ol>
      )}
    </>
  )
}
