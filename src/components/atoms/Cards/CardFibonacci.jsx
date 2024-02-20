import propTypes from "prop-types";

import { GameContextCard } from "../../../context/GameContextCardProvider";
import {  useContext } from "react";


const CardFibonacci = ({ number, isSelected, onClick }) => {
  
  const { isReveal,cardSelections } = useContext(GameContextCard);
  const countSelections = (number) => {
    const count = cardSelections.filter(card => card.numberSelected === number).length;
    return count;
};
  return (
      <>
       <div className="flex flex-col items-center ">
       <div
        onClick={(e) => onClick(e)} 
        className={`${
          isSelected ? "bg-purple-400 -translate-y-3 focus:outline-none" : 
          "bg-transparent  hover:animate-flip-x focus:outline-none "
        } cursor-pointer shadow-xl h-24 w-14 border border-purple-500 
        rounded-md flex items-center justify-center`}
      >
        <p className="text-white font-semibold text-2xl">{number}</p>
      </div>
      <p className=""><strong className="text-white">{
        isReveal &&   countSelections(number)
      }</strong></p>
       </div>
  
      </>
    );
};

CardFibonacci.propTypes = {
    number: propTypes.string,
    onClick: propTypes.func,
    isSelected: propTypes.bool,


    
};

export default CardFibonacci;
