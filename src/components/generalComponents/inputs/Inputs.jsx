const Inputs = ({
  inputType,
  inputValue,
  placeholder,
  onChangeFunction,
  inputStyle,
  inputName,
  onKeyDown,
  disabled,
}) => {
  return (
    <input
      name={inputName}
      type={inputType}
      placeholder={placeholder || ""}
      onChange={onChangeFunction}
      value={inputValue}
      className={inputStyle}
      onKeyDown={onKeyDown}
      disabled={disabled}
    />
  );
};

export default Inputs;
