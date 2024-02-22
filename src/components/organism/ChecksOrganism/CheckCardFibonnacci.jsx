
import CardFibonacci from '../../atoms/Cards/CardFibonacci';
import { fibonacciSeries } from '../../../shared/fibonacci';
import { useGameCardStore } from '../../../store/gameCardStore';


const CheckCardFibonnacci = () => {
  const { isReveal, cards, handlerCardClick, selectedCard } = useGameCardStore();


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

  const seriesToDisplay = isReveal ? getUniqueCards(cards) : fibonacciSeries;


  return (
    <div className="card-check-fibonacci">
      {seriesToDisplay.map((cardEntityOrNumber) => (
        <CardFibonacci
          key={cardEntityOrNumber.id || cardEntityOrNumber}
          number={(cardEntityOrNumber.numberSelected || cardEntityOrNumber)}
          isSelected={selectedCard === (cardEntityOrNumber.numberSelected || cardEntityOrNumber)}
          onClick={() => onCardClick(cardEntityOrNumber)}
        />
      ))}
    </div>
  );
};


export default CheckCardFibonnacci;