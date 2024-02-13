import propTypes from "prop-types";



const CardFibonacci = ({ number, isSelected, onClick }) => {
    return (
        <div
        onClick={onClick} 
        className={`${
          isSelected ? "bg-purple-400 -translate-y-3 focus:outline-none" : 
          "bg-transparent  transform transition-all duration-200 hover:-translate-y-3 focus:outline-none "
        } cursor-pointer shadow-xl h-24 w-14 border border-purple-500 
        rounded-md flex items-center justify-center`}
      >
        <p className="text-white font-semibold text-2xl">{number}</p>
      </div>
    );
};

CardFibonacci.propTypes = {
    number: propTypes.string,
    onClick: propTypes.func,
    isSelected: propTypes.bool,

    
};

export default CardFibonacci;
