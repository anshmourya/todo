import { useContext, useState } from "react";
import { addListFun, handleChange } from "./HelperFunction";
import ListStructure from "../../components/listComponents/ListStructure";
import Inputs from "../../components/generalComponents/inputs/Inputs";
import { ListData } from "../../hooks/ListContext";

const Home = () => {
  const { addList, list } = useContext(ListData);
  const [newList, setNewList] = useState({ title: "", id: 1 });
  const [Search, setSearch] = useState(""); // usestate to perform the search function

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      if (e.shiftKey || e.ctrlKey) {
        // Ignore key combinations such as Shift + Enter or Ctrl + Enter
        return;
      }
      addListFun(newList, addList);
      // After submitting the list, empty the list but not the id to keep the list unique
      setNewList({ title: "", id: newList.id + 1 });
    }
  };
  return (
    <>
      {/* Input to add the new list */}

      <div className="container m-auto">
        <Inputs
          inputStyle={
            "w-full container h-12 rounded-lg bg-gray-900 outline-none p-5 my-6 "
          }
          onChangeFunction={(e) => setSearch(e.target.value)}
          placeholder={"Search by list Name"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center md:place-items-start">
          {list && (
            <>
              {list
                //ruuning filter function based on the list title, if search is empty return the orignal list else return filtered list
                .filter((item) => {
                  return Search.toLowerCase() === ""
                    ? list
                    : item.title.toLowerCase().includes(Search.toLowerCase());
                })
                .map((item) => (
                  <div key={item.id}>
                    <ListStructure
                      data={item}
                      onChangeFunction={handleChange}
                    />
                  </div>
                ))}
            </>
          )}
          <Inputs
            inputName={"title"}
            inputStyle={
              "h-12 p-2 bg-gray-600 rounded-lg outline-none w-72 font-semibold text-xl capitalize"
            }
            inputType={"text"}
            placeholder={"Add Todo-list"}
            value={newList.title}
            onChangeFunction={(e) => handleChange(e, newList, setNewList)}
            onKeyDown={handleKeyDown}
            inputValue={newList.title}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
