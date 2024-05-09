import React from "react";
import Modal from "../../../../../Components/Modal";

import { usePostNotelistMutation } from "../../../../../Redux/Features/NotesAPI/baseApi";
import useAuth from "../../../../../Router/useAuth";

const AddnoteListform = ({ isOpen, setIsOpen }) => {
 const {user} = useAuth()
 const email = user?.email
  const [addNewPost, response] = usePostNotelistMutation()
  const handleCreateNotelist = (e) => {
    e.preventDefault();
    const noteListName = e.target.name.value;
    const bgColor = e.target.color.value;
    const textColor = e.target.textcolor.value;
    const nodlist = {
        email,
        noteListName,
        bgColor,
        textColor
    }
    addNewPost(nodlist)
    .unwrap()
    .then(()=>{})
    .then(error=> console.log(error))
    console.log(response);
  };
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={"Create a Notelist"}
      content={
        <>
          <form onSubmit={handleCreateNotelist}>
            <div className="flex items-center">
              <h1>Set Background Color</h1>
              <input
                className="w-[10%]  my-2 border-none border-b"
                type="color"
                name="color"
              />
            </div>
            <div className="flex items-center">
              <h1>Set Text Color</h1>
              <input
                className="w-[10%]  my-2 border-none border-b"
                type="color"
                name="textcolor"
              />
            </div>
            <input
              placeholder="Name of nodelist"
              className="w-full py-2 px-3 my-2 outline-none border-b"
              type="text"
              name="name"
            />
            <input onClick={()=>setIsOpen(false)} type="submit" value={"Create Note List"} />
          </form>
        </>
      }
    ></Modal>
  );
};

export default AddnoteListform;
