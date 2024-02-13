import PropTypes from 'prop-types';
const Button = ({text,size, disabled = false, 
  onClick,textSize,
  pySize,pxSize, bgColor, textColor, fontBold }) => {
  const defaultSize = "w-36"; 
  const sizeClass = size || defaultSize;
  const textSizeClass = textSize || "text-lg";
  const pySizeClass = pySize || "py-2";
  const pxSizeClass = pxSize || "px-4";
  const defaultBgColor = bgColor || "bg-white";
  const textColorClass = textColor || "text-purple-700";
  const fontBoldClass = fontBold || "font-bold";
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`${defaultBgColor} ${textSizeClass}
       hover:bg-purple-700 ${textColorClass} hover:text-white 
       ${fontBoldClass}  ${pySizeClass} 
      ${pxSizeClass} ${sizeClass} 
      rounded-2xl shadow-lg hover:shadow-xl transition 
      duration-150 whitespace-nowrap
      ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
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
};


export default Button;
