import { IoAdd } from "react-icons/io5";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import AddnoteListform from "./NoteComponents/AddnoteListform";
import {
  useGetNoteQuery,
  useGetNotelistQuery,
} from "../../../../Redux/Features/NotesAPI/baseApi";
import { useSelector } from "react-redux";
import Addnoteform from "./NoteComponents/Addnoteform";
const Note = () => {
  const [noteId, setNoteId] = useState("");
  console.log(noteId);
  const { email } = useSelector((state) => state.authenTication);
  const { data: notes } = useGetNoteQuery({ email, noteId });
  const { data } = useGetNotelistQuery({ email });
  let [isOpen, setIsOpen] = useState(false);
  let [isnoteOpen, setIsnoteOpen] = useState(false);
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="shadow-md flex items-center justify-between px-10 my-10 py-5 rounded-md bg-slate-50">
        <div className="flex items-baseline gap-5">
          <h1 className="text-xl">Choose Background Color</h1>
          <p className="w-3 h-3 rounded-full bg-red-600"></p>
          <p className="w-3 h-3 rounded-full bg-yellow-500"></p>
          <p className="w-3 h-3 rounded-full bg-blue-600"></p>
          <p className="w-3 h-3 rounded-full bg-green-600"></p>
          <p className="w-3 h-3 rounded-full bg-purple-600"></p>
          <p className="w-3 h-3 rounded-full bg-slate-600"></p>
          <p className="w-3 h-3 rounded-full bg-pink-600"></p>
        </div>
        <div className="flex gap-3 items-center">
          <h1 className="text-xl">Create Note List</h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-4xl text-green-600 border"
          >
            <IoAdd />
            <AddnoteListform
              setIsOpen={setIsOpen}
              isOpen={isOpen}
            ></AddnoteListform>
          </button>
        </div>
      </div>
      <h1 className="text-2xl font-medium py-4">Add a Note</h1>
      <div className="flex gap-5 flex-wrap">
        {data?.map((item) => (
          <div
            style={{ backgroundColor: item.bgColor }}
            className={`px-10 flex items-center gap-2 py-2 font-bold rounded-md `}
          >
            <button
              onClick={() => setNoteId(item._id)}
              style={{ color: item.textColor }}
            >
              {item.noteListName}
            </button>

            <button
              onClick={() => {
                setIsnoteOpen(!isnoteOpen);
                setNoteId(item._id);
              }}
              className="text-4xl text-green-600 border"
            >
              <IoAdd />
            </button>
            <Addnoteform
              id={noteId}
              isOpen={isnoteOpen}
              setIsOpen={setIsnoteOpen}
            ></Addnoteform>
          </div>
        ))}
      </div>
      <div className="min-h-[60vh] my-10 grid gap-5 grid-cols-1 md:grid-cols-2">
        {notes?.map((i) => (
          <div className="relative bg-slate-100 p-5 rounded-md shadow-lg">
            <div
              className=""
              dangerouslySetInnerHTML={{ __html: i.notes }}
            ></div>
            <button className="absolute top-2 right-2">
              <BsThreeDotsVertical />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Note;
