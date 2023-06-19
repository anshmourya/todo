import { useState, useContext } from "react";
import { ListData } from "../../hooks/ListContext";
import { handleChange } from "../../pages/home/HelperFunction";
import TodoItem from "./TodoItem";
const RenderList = ({ data }) => {
  const { handelTodo } = useContext(ListData);
  const [editTodo, setEditTodo] = useState({
    title: data.title,
    desc: data.desc,
    listId: data.listId,
    id: data.id,
  });
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handelTodo(editTodo, true);
    }
  };
  return (
    <>
      <div className="flex flex-col p-3 my-4 bg-gray-900 rounded-lg w-72">
        <TodoItem
          title={editTodo.title}
          desc={editTodo.desc}
          onChangeFunction={(e) => handleChange(e, editTodo, setEditTodo)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </>
  );
};

export default RenderList;
