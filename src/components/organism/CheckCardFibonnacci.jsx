
import CardFibonacci from '../atoms/Cards/CardFibonacci';
import PropTypes from 'prop-types';
import { GameContextCard } from '../../context/GameContextCardProvider';
import {  useContext } from "react";


const CheckCardFibonnacci = ({ fibonacciSeries }) => {
  const { isReveal, cardSelections, handlerCardClick, selectedCard } = useContext(GameContextCard);

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