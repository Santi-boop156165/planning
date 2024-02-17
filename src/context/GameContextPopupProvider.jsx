import { createContext, useState, useContext } from "react";
import { GameContext } from "./GameContextProvider";
import PropTypes from "prop-types";

export const GameContextPopup = createContext();

export function GameContextPopupProvider(props) {
  const { currentUser, players } = useContext(GameContext);
  const player = players.find((p) => p.userName === currentUser);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const [selectedRole, setSelectedRole] = useState(
    currentUser ? player.role : null
  );

  const handleRadioChange = (e) => {
    setSelectedRole(e.target.value);
  };

  return (
    <GameContextPopup.Provider
      value={{
        inputValue,
        handleInputChange,
        selectedRole,
        handleRadioChange,
        player
      }}
    >
      {props.children}
    </GameContextPopup.Provider>
  );
}
GameContextPopupProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
