//handel list submit
export const addListFun = (newList, addList) => {
  try {
    addList(newList);
  } catch (error) {
    console.error(error);
  }
};

export const handleChange = (e, value, setNewValue) => {
  setNewValue({ ...value, [e.target.name]: e.target.value });
};
