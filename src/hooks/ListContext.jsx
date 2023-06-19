import { createContext, useState, useEffect } from "react";

export const ListData = createContext();

export const ListProvider = ({ children }) => {
  const [list, setList] = useState([]);
  //function to add lsit and check weather the list exist ot not

  const addList = (newlist) => {
    try {
      if (newlist.title === "") {
        throw new Error("List Name Can't be empty");
      }

      let listCheck = list.some((item) => newlist.id === item.id);
      if (listCheck) {
        throw new Error("Duplicate list");
      }

      setList([...list, newlist]);
    } catch (error) {
      console.error(error);
    }
  };

  //function to add todo-data to the particular list

  const handelTodo = (newTodo, isEdit) => {
    try {
      setList((prevList) => {
        return prevList.map((item) => {
          if (newTodo.listId === item.id) {
            const updatedTodos = isEdit
              ? item.todos.map((todoItem) =>
                  todoItem.id === newTodo.id
                    ? { ...todoItem, ...newTodo }
                    : todoItem
                )
              : (item.todos || []).concat(newTodo);
            return { ...item, todos: updatedTodos };
          }
          return item;
        });
      });
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  };

  //check list after every list function invoke
  useEffect(() => {
    console.log(list);
  }, [list]);
  return (
    <ListData.Provider value={{ addList, list, handelTodo }}>
      {children}
    </ListData.Provider>
  );
};
