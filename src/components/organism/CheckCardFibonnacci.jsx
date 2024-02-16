
import CardFibonacci from '../atoms/Cards/CardFibonacci';
import PropTypes from 'prop-types';
import { GameContext } from "../../context/GameContextProvider";
import {  useContext } from "react";


const CheckCardFibonnacci = ({ fibonacciSeries }) => {
  const { isReveal, cardSelections, handlerCardClick, selectedCard } = useContext(GameContext);

  const onCardClick = (cardOrNumber) => {
    if (!selectedCard) {
      handlerCardClick(cardOrNumber.numberSelected || cardOrNumber);
    }
  };

  const getUniqueCards = (cards) => {
    const uniqueNumbers = new Set();
    return cards.filter(card => {
      const number = card.numberSelected || card;
      return uniqueNumbers.has(number) ? false : uniqueNumbers.add(number);
    });
  };

  const seriesToDisplay = isReveal ? getUniqueCards(cardSelections) : fibonacciSeries;

  return (
    <div className="card-check-fibonacci">
      {seriesToDisplay.map((cardOrNumber) => (
        <CardFibonacci
          key={cardOrNumber.id || cardOrNumber}
          number={(cardOrNumber.numberSelected || cardOrNumber).toString()}
          isSelected={selectedCard === (cardOrNumber.numberSelected || cardOrNumber).toString()}
          onClick={() => onCardClick(cardOrNumber)}
        />
      ))}
    </div>
  );
};
CheckCardFibonnacci.propTypes = {
  fibonacciSeries: PropTypes.array.isRequired,
};

export default CheckCardFibonnacci;