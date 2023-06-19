import Inputs from "../generalComponents/inputs/Inputs";

const TodoItem = ({ title, desc, onChangeFunction, onKeyDown }) => {
  return (
    <>
      <Inputs
        inputStyle="p-2 text-lg font-semibold capitalize bg-transparent outline-none border-b border-gray-400"
        inputType="text"
        placeholder="Add Todo"
        inputValue={title || ""}
        inputName="title"
        onChangeFunction={onChangeFunction}
        onKeyDown={onKeyDown}
      />
      <textarea
        name="desc"
        cols="30"
        rows="3"
        className="w-full p-2 my-2  text-base text-gray-400 capitalize bg-transparent outline-none resize-none h-auto"
        placeholder="Add Todo Description"
        value={desc || ""}
        onChange={onChangeFunction}
        onKeyDown={onKeyDown}
      />
    </>
  );
};

export default TodoItem;
