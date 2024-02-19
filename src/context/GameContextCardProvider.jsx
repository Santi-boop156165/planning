import { createContext, useState, useContext } from "react";
import { GameContext } from "./GameContextProvider";
import { cardEntity } from "../services/data";
import PropTypes from "prop-types";
export const GameContextCard = createContext();

export function GameContextCardProvider(props) {
    const { players,currentUser } = useContext(GameContext);
    const [cardSelections, setCardSelections] = useState(cardEntity);
    const [isReveal, setIsReveal] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [average, setAverage] = useState(0);

    function handlerAverageClick() {
        const selectedCards = cardSelections.map((cs) =>
          parseInt(cs.numberSelected, 10)
        );
        const average =
          selectedCards.reduce((acc, value) => acc + value, 0) /
          selectedCards.length;
        setAverage(average);
        setIsReveal(true);
      }

      function selectCard(userName, selectedNumber) {
        const player = players.find((p) => p.userName === userName);
        if (!player) return;
      
        setCardSelections(prevSelections => {
          const newSelection = { id: prevSelections.length, userId: player.id, numberSelected: selectedNumber };
          const selectionIndex = prevSelections.findIndex(cs => cs.userId === player.id);
      
          if (selectionIndex >= 0) {
            return prevSelections.map((cs, index) => 
              index === selectionIndex ? { ...cs, numberSelected: selectedNumber } : cs
            );
          } else {
            return [...prevSelections, newSelection];
          }
        });
      }

      function handlerCardClick(number) {
        setSelectedCard(number);
        selectCard(currentUser, number);
      }
      function handlerRestarGame() {
        setCardSelections(cardEntity);
        setIsReveal(false);
        setAverage(0);
        setSelectedCard(null);
      }
    return (
        <GameContextCard.Provider value={{
            cardSelections,
            isReveal,
            selectedCard,
            average,
            handlerAverageClick,
            handlerCardClick,
            handlerRestarGame

        }}>
            {props.children}
        </GameContextCard.Provider>
    );
}
GameContextCardProvider.propTypes = {
  children: PropTypes.node.isRequired,
};