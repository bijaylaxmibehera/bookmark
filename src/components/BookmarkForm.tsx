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
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="title" placeholder="Enter title" required value={formData.title} onChange={inputHandler} />
      <input type="url" name="url" placeholder="Enter url" required value={formData.url} onChange={inputHandler} />
      <button type="submit">Add</button>
    </form>
  );
};
