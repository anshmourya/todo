import { useContext, useState } from "react";
import { addListFun, handleChange } from "./HelperFunction";
import ListStructure from "../../components/listComponents/ListStructure";
import Inputs from "../../components/generalComponents/inputs/Inputs";
import { ListData } from "../../hooks/ListContext";

const Home = () => {
  const { addList, list } = useContext(ListData);
  const [newList, setNewList] = useState({ title: "", id: 1 });

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addListFun(newList, addList);
      // After submiting the list empty the list but not the id , to keep the list unique
      setNewList({ title: "", id: newList.id + 1 });
    }
  };

  return (
    <>
      {/* Input to add the new list */}
      <div className="grid grid-cols-4 container m-auto">
        {list && (
          <>
            {list.map((item) => (
              <div key={item.id} className="">
                <ListStructure data={item} onChangeFunction={handleChange} />
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
    </>
  );
};

export default Home;
