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
        //mapping over list to find the required list
        return prevList.map((item) => {
          if (newTodo.listId === item.id) {
            // updatedTodos id checking if the IsEdit true then [todos] exist in the array ittreate over it and edit the required list accordingly if doesNotMatch the id return todoitem. if isEdit false add the new todo in the particular list.
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

  //funtion to remove the todo from the list
  const removeTodo = (todo) => {
    setList((prevList) => {
      //mapping over list to find the required list
      return prevList.map((item) => {
        if (item.id === todo.listId) {
          const updatedTodos = item.todos.filter(
            (todoItems) => todoItems.id !== todo.id //return only those todo whose is not meant for deletion
          );
          return { ...item, todos: updatedTodos }; //update the list
        } else {
          return item; //return the item it id is not matched
        }
      });
    });
  };

  //check list after every list function invoke
  useEffect(() => {
    console.log(list);
  }, [list]);
  return (
    <ListData.Provider value={{ addList, list, handelTodo, removeTodo }}>
      {children}
    </ListData.Provider>
  );
};
