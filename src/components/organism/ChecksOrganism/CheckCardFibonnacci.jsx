
import CardFibonacci from '../../atoms/Cards/CardFibonacci';
import { GameContextCard } from '../../../context/GameContextCardProvider';
import {  useContext } from "react";
import { fibonacciSeries } from '../../../shared/fibonacci';



const CheckCardFibonnacci = () => {
  const { isReveal, cardSelections, handlerCardClick, selectedCard } = useContext(GameContextCard);


  const onCardClick = (cardOrNumber,e) => {
    e.stopPropagation();
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
      {seriesToDisplay.map((cardEntityOrNumber) => (
        <CardFibonacci
          key={cardEntityOrNumber.id || cardEntityOrNumber}
          number={(cardEntityOrNumber.numberSelected || cardEntityOrNumber)}
          isSelected={selectedCard === (cardEntityOrNumber.numberSelected || cardEntityOrNumber)}
          onClick={(e) => onCardClick(cardEntityOrNumber,e)}
        />
      ))}
    </div>
  );
};


export default CheckCardFibonnacci;