
import CardFibonacci from '../atoms/CardFibonacci';
import PropTypes from 'prop-types';
import { GameContext } from "../../context/GameContextProvider";
import {  useContext } from "react";

const CheckCardFibonnacci = ({
    fibonacciSeries,
}) => {
    const { isReveal,cardSelections,handlerCardClick,selectedCard } = useContext(GameContext);
  return (
    <div className={`flex justify-center items-center gap-4 mt-8 `}>
    {(isReveal ? cardSelections : fibonacciSeries).map((cardOrNumber) => (
      <CardFibonacci
        key={cardOrNumber.id || cardOrNumber}
        number={(cardOrNumber.numberSelected || cardOrNumber).toString()}
        isSelected={cardOrNumber.numberSelected === selectedCard}
        onClick={() =>
          !selectedCard &&
          handlerCardClick(cardOrNumber.numberSelected || cardOrNumber)
        }
      />
    ))}
  </div>
  )
}
CheckCardFibonnacci.propTypes = {
    fibonacciSeries: PropTypes.array.isRequired,
}


export default CheckCardFibonnacci