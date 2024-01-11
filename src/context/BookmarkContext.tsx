import React, { createContext, useContext, useReducer } from 'react'
import { BookmarkReducer, initialState } from '../reducers/BookmarkReducer'
import { BookmarkContextType, BookmarkProviderProps } from '../types/Bookmark.type';


const BookmarkContext = createContext<BookmarkContextType | undefined>(
  undefined,
)

export const BookmarkProvider: React.FC<BookmarkProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(BookmarkReducer, initialState);

  return (
    <BookmarkContext.Provider value={{ state, dispatch }}>
      {children}
    </BookmarkContext.Provider>
  );
};
