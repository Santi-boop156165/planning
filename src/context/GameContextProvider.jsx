import  { createContext, useState,useEffect } from "react";
import { gameEntity } from "../services/data";
import { cardEntity } from "../services/data";
import PropTypes from "prop-types";

export const GameContext = createContext();

export function GameContextProvider (props) {
    const [players, setPlayers] = useState([]);
    const [cardSelections, setCardSelections] = useState(cardEntity);
    const[isReveal, setIsReveal] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [average , setAverage] = useState(0);

    useEffect(() => {
        setPlayers(gameEntity);
    }, []);

    function handlerAverageClick() {
        const selectedCards = cardSelections.map((cs) => parseInt(cs.numberSelected, 10));
        const average =
          selectedCards.reduce((acc, value) => acc + value, 0) /
          selectedCards.length;
          console.log(average);
        setAverage(average);
        setIsReveal(true);

      }

    

    function addPlayer(player) {
        setPlayers([...players, {
            id: players.length + 1,
            partyName: player.partyName,
            userName: player.userName,
            role : player.role
        }]);
        
    }
    function selectCard(userName, selectedNumber) {
        const player = players.find(p => p.userName === userName);
        if (!player) return;
    
        setCardSelections(prevSelections => {
            const existingSelection = prevSelections.find(cs => cs.userId === player.id);
            if (existingSelection) {
                return prevSelections.map(cs =>
                    cs.userId === player.id ? { ...cs, numberSelected: selectedNumber } : cs
                );
            } else {
                return [...prevSelections, { id: prevSelections.length, userId: player.id, numberSelected: selectedNumber }];
            }
        });
    }
    function handlerCardClick(number) {
        setSelectedCard(number);
        selectCard("Santiago", number);
      }

    return (
        <GameContext.Provider value={{
            players : players,
            addPlayer : addPlayer,
            selectCard : selectCard,
            cardSelections : cardSelections,
            handlerAverageClick : handlerAverageClick,
            isReveal : isReveal,
            selectedCard : selectedCard,
            handlerCardClick : handlerCardClick,
            average : average,
         
        }}>
            {props.children}
        </GameContext.Provider>
    );
}

GameContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};


