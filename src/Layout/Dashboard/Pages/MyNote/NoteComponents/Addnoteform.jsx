import React, { useRef, useState } from "react";
import Modal from "../../../../../Components/Modal";
import JoditEditor from "jodit-react";
import { usePostNoteMutation } from "../../../../../Redux/Features/NotesAPI/baseApi";
import useAuth from "../../../../../Router/useAuth";


const Addnoteform = ({ isOpen, id, setIsOpen }) => {
  const [addNewPost, response] = usePostNoteMutation();
  const {user} = useAuth()
  const email  = user?.email
  const editor = useRef();
  const [notes, seNotes] = useState("");
  const handleAddnote = () => {
    const noteId = id;
    const note = {
      noteId,
      email,
      notes,
    };
    addNewPost(note)
      .unwrap()
      .then(() => {})
      .then((error) => console.log(error));
    setIsOpen(false);
    seNotes("");
  };
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={"Write A Note"}
      content={
        <div>
          <JoditEditor
            ref={editor}
            value={notes}
            onBlur={true}
            onChange={(newValue) => seNotes(newValue)}
          ></JoditEditor>
          <button
            onClick={handleAddnote}
            className="mt-5 border px-3 py-1 rounded-md"
          >
            Create a Note
          </button>
        </div>
      }
    ></Modal>
  );
};

export default Addnoteform;
