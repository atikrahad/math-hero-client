import "mathlive";
import { useRef, useState } from "react";
import Button from "../../../../Components/Button";
import JoditEditor from "jodit-react";
import {
  useGetMyproblemsQuery,
  usePostProblemMutation,
} from "../../../../Redux/Features/NotesAPI/baseApi";
import { useSelector } from "react-redux";


const AddEditor = () => {
  const [value, setValue] = useState("");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const editor = useRef(null);
  const { email, name } = useSelector((state) => state.authenTication);
  const [addNewPost] = usePostProblemMutation();
  const { data } = useGetMyproblemsQuery({ email });

  const handleCreateProblem = () => {
    const problem = {
      email,
      name,
      title,
      content,
    };
    addNewPost(problem)
      .unwrap()
      .then(() => {})
      .then((error) => console.log(error));
    setContent("");
    setTitle("");
    document.getElementById("input").value = "";
  };

  

  return (
    <div className="max-w-screen-xl mx-auto py-20">
      <div>
        <h1 className="text-2xl font-medium pb-2">Create a math problem </h1>
      </div>
      <input
        id="input"
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        className="w-full border outline-none py-2 px-3 rounded-sm my-2 bg-white"
        placeholder="Title"
      />
      <JoditEditor
        ref={editor}
        value={content}
        onChange={(newValue) => setContent(newValue)}
        className="min-h-screen badge-ghost"
      />
      <math-field onInput={(evt) => setValue(evt.target.value)}>
        {value}
      </math-field>
      <div>
        <button className="my-5" onClick={handleCreateProblem}>
          <Button title={"Create a problem"}></Button>
        </button>
      </div>
      <div className="py-10">
        <h1 className="text-4xl mb-5 font-medium">My all problems:</h1>
        {data?.map((i, index) => (
          <div className="p-5 flex gap-3 bg-slate-100 shadow-xl rounded-md">
            <h1>{index + 1}.</h1>
            <div dangerouslySetInnerHTML={{ __html: i.content }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddEditor;
