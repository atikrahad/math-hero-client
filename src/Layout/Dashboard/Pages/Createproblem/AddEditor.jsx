import "mathlive";
import { useRef, useState } from "react";
import Button from "../../../../Components/Button";
import JoditEditor from "jodit-react";
import { usePostProblemMutation } from "../../../../Redux/Features/NotesAPI/baseApi";
import { useSelector } from "react-redux";

const AddEditor = () => {
  const [value, setValue] = useState("");
  const [content, setContent] = useState("");
  const editor = useRef(null);
  const { email, name } = useSelector((state) => state.authenTication);
  const [addNewPost, response] = usePostProblemMutation();

  const handleCreateProblem = () => {
    const problem = {
      email,
      name,
      content,
    };
    addNewPost(problem)
    .unwrap()
    .then(()=>{})
    .then(error=> console.log(error))
    setContent('')
  };

  return (
    <div className="max-w-screen-xl mx-auto py-20">
      <div>
        <h1 className="text-2xl font-medium pb-2">Create a math problem </h1>
      </div>
      <JoditEditor
        ref={editor}
        value={content}
        onChange={(newValue) => setContent(newValue)}
        className="min-h-screen"
      />
      <math-field onInput={(evt) => setValue(evt.target.value)}>
        {value}
      </math-field>
      <div>
        <button onClick={handleCreateProblem}>
          <Button title={"Create a problem"}></Button>
        </button>
      </div>
    </div>
  );
};

export default AddEditor;
