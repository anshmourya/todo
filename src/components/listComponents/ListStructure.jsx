import { useState, useContext } from "react";
import Inputs from "../generalComponents/inputs/Inputs";
import { ListData } from "../../hooks/ListContext";
import RenderList from "./RenderList";
import TodoItem from "./TodoItem";

const ListStructure = ({ data, onChangeFunction, isEdit }) => {
  const { handelTodo } = useContext(ListData);
  const [newTodo, setNewTodo] = useState({
    title: "",
    desc: "",
    listId: data.id,
    id: data.todos?.length || 1,
  });

  const handleKeyDown = (e, isEdit) => {
    if (e.key === "Enter") {
      setNewTodo((prevTodo) => ({
        ...prevTodo,
        title: "",
        desc: "",
        id: prevTodo.id + 1,
      }));
      handelTodo(newTodo, isEdit);
    }
  };

  const renderTodoItems = (todos) => {
    return todos.map((item, index) => (
      <RenderList key={index} data={item} isEdit={true}  />
    ));
  };

  return (
    <>
      <div>
        <Inputs
          inputStyle="h-12 p-2 bg-gray-600 rounded-lg outline-none w-72 font-semibold text-xl capitalize"
          inputType="text"
          placeholder="Add Todo-list"
          inputValue={data.title || ""}
        />
        <div className="flex flex-col p-3 my-4 bg-gray-900 rounded-lg w-72">
          <TodoItem
            title={newTodo.title}
            desc={newTodo.desc || ""}
            onChangeFunction={(e) => onChangeFunction(e, newTodo, setNewTodo)}
            onKeyDown={(e) => handleKeyDown(e, isEdit)}
          />
        </div>

        {data.todos && renderTodoItems(data.todos)}
      </div>
    </>
  );
};

export default ListStructure;
