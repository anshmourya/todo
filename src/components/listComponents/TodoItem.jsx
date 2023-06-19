import Inputs from "../generalComponents/inputs/Inputs";
import Btns from "../generalComponents/Buttons/Btns";
import { AiTwotoneDelete } from "react-icons/ai";
const TodoItem = ({ title, desc, onChangeFunction, onKeyDown }) => {
  return (
    <>
      <div className="flex border-b border-gray-400">
        <Inputs
          inputStyle="p-2 text-lg font-semibold capitalize bg-transparent outline-none  w-[90%]"
          inputType="text"
          placeholder="Add Todo"
          inputValue={title || ""}
          inputName="title"
          onChangeFunction={onChangeFunction}
          onKeyDown={onKeyDown}
        />
        <Btns title={<AiTwotoneDelete />} buttonStyle={"flex-1 text-xl"} />
      </div>

      <textarea
        name="desc"
        cols="30"
        rows="3"
        className="w-full h-auto p-2 my-2 text-base text-gray-400 capitalize bg-transparent outline-none resize-none"
        placeholder="Add Todo Description"
        value={desc || ""}
        onChange={onChangeFunction}
        onKeyDown={onKeyDown}
      />
    </>
  );
};

export default TodoItem;
