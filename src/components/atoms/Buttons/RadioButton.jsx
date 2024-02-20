import PropTypes from "prop-types";
const RadioButton = ({value,onChange,checked}) => {
  return (
    <input 
    data-testid="input-radio"
    required
    onChange={onChange}
    type="radio"
    name="role"
    value={value}
    checked={checked}
    className="cursor-pointer appearance-none rounded-full 
    h-4 w-4 border border-gray-300 bg-[#1f0d3f] checked:bg-[#bb7cff]
     checked:border-[#bb7cff] focus:outline-none 
     transition duration-200 align-middle "
  />
  )
}
RadioButton.propTypes = {
  value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    checked: PropTypes.bool,
};
export default RadioButton