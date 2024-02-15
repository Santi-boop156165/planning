import PropTypes from "prop-types";
const Input = ({ holder, size,value, onChange, bgColor, readOnly }) => {
  const defaultSize = "w-64";
  const sizeClass = size || defaultSize;
  const defaultBgColor = bgColor || "bg-transparent";
  return (
    <input
      readOnly={readOnly}
    autoFocus
      type="text"
      value={value}
      onChange={onChange}
      placeholder={holder}
      className={` rounded-2xl ${defaultBgColor}
  p-2 ${sizeClass} text-white border border-purple-500 focus:ring-0 
  focus:outline-none  mb-5`}
    />
  );
};
Input.propTypes = {
  holder: PropTypes.string,
  size: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  bgColor: PropTypes.string,
  readOnly: PropTypes.bool,
};

export default Input;
