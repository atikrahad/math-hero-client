import { IoAdd } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { usePostNotelistMutation } from "../../../../Redux/Features/NotesAPI/baseApi";
const Note = () => {
  const [addpost, result] = usePostNotelistMutation()
  
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
          <button  className="text-4xl text-green-600 border">
            <IoAdd />
          </button>
        </div>
      </div>
      <h1 className="text-2xl font-medium py-4">Add a Note</h1>
      <div className="flex gap-5 flex-wrap">
        <div className="px-10 flex items-center gap-2 py-2 font-bold rounded-md bg-slate-50">
          <NavLink>Rese</NavLink>
          <button className="text-4xl text-green-600 border">
            <IoAdd />
          </button>
        </div>
        
      </div>
      <div className="min-h-[60vh]">

      </div>
    </div>
  );
};

export default Note;
