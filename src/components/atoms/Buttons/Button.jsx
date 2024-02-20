import PropTypes from 'prop-types';
const Button = ({text,size, disabled = false, 
  onClick,textSize,
  pySize,pxSize, bgColor, textColor, fontBold,higth }) => {
  const defaultSize = "w-36"; 
  const sizeClass = size || defaultSize;
  const hSize = higth || "h-9"; 
  const textSizeClass = textSize || "text-lg";
  const pySizeClass = pySize || "py-2";
  const pxSizeClass = pxSize || "px-4";
  const defaultBgColor = bgColor || "bg-white";
  const textColorClass = textColor || "text-purple-700";
  const fontBoldClass = fontBold || "font-bold";
  return (
    <button 
      data-testid= "button-test"
      onClick={onClick}
      disabled={disabled}
      className={`${defaultBgColor} ${textSizeClass}
       hover:bg-purple-700 ${textColorClass} hover:text-white 
       ${fontBoldClass}  ${pySizeClass} 
      ${pxSizeClass} ${sizeClass} 
      rounded-2xl ${hSize} shadow-lg hover:shadow-xl transition 
      duration-300 whitespace-nowrap
      ${disabled ? 'opacity-50 cursor-not-allowed' : 'opacity-100 animate-fadeIn'}`}
    >
      <p>{text}</p> 
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  textSize: PropTypes.string,
  pySize: PropTypes.string,
  pxSize: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  fontBold: PropTypes.string,
  higth: PropTypes.string,
};


export default Button;
