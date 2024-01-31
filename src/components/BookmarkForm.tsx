import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useBookmark } from "../context/BookmarkContext";

type InitialFormDataProps = {
  title: string;
  url: string;
};

const initialFormData: InitialFormDataProps = {
  title: "",
  url: "",
};

export const BookmarkForm = () => {
  const [formData, setFormData] = useState<InitialFormDataProps>(initialFormData);
  const { dispatch } = useBookmark();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "ADD_BOOKMARK", payload: { ...formData, id: uuidv4() } });
    setFormData(initialFormData);
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex  justify-center my-4">
      <input type="text" name="title" placeholder="Enter title" required value={formData.title} onChange={inputHandler} className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 mr-2"/>
      <input type="url" name="url" placeholder="Enter url" required value={formData.url} onChange={inputHandler} className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 mr-4"/>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
    </form>
  );
};
