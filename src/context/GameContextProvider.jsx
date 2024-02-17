import { createContext, useState, useEffect } from "react";
import { gameEntity } from "../services/data";
import PropTypes from "prop-types";

export const GameContext = createContext();

export function GameContextProvider(props) {
  const [players, setPlayers] = useState([]);
  const [currentUser , setCurrentUser] = useState(null);


  useEffect(() => {
    setPlayers(gameEntity);
  }, []);



  function addPlayer(player) {
    setPlayers([
      ...players,
      {
        id: players.length + 1,
        partyName: player.partyName,
        userName: player.userName,
        role: player.role,
      },
    ]);
  }



  function updatePlayerRole (id, newRole) {
    setPlayers(prevPlayers =>
      prevPlayers.map(player =>
        player.id === id ? { ...player, role: newRole } : player
      )
    );
  }
  

 

  return (
    <GameContext.Provider
      value={{
        players,
        addPlayer,
        setCurrentUser,
        currentUser,
        updatePlayerRole

      }}
    >
      {props.children}
    </GameContext.Provider>
  );
}

GameContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
