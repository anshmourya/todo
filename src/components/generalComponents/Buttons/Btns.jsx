const Btns = ({ title, onClickFunction, buttonStyle }) => {
  return (
    <button className={buttonStyle} onClick={onClickFunction}>
      {title}
    </button>
  );
};

export default Btns;
