import { createContext, useState, useContext } from "react";
import { GameContext } from "./GameContextProvider";
import { GameContextCard } from "./GameContextCardProvider";
import PropTypes from "prop-types";

export const GameContextPopup = createContext();

export function GameContextPopupProvider(props) {
  const { currentUser, players } = useContext(GameContext);
  const { isReveal } = useContext(GameContextCard);
  const player = players.find((p) => p.userName === currentUser);

  const [inputValue, setInputValue] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(true);
  const [isSharedLinkPopupVisible, setIsSharedLinkPopupVisible] =
    useState(false);
  const [isOtherUser, setIsOtherUser] = useState(false);
  const [otherUser, setOtherUser] = useState({});

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const [selectedRole, setSelectedRole] = useState(
    currentUser ? player.role : null
  );

  const handleRadioChange = (e) => {
    setSelectedRole(e.target.value);
  };


  const showPopupProfile = () => {
    if (isReveal) {
      return;
    }
    setIsSharedLinkPopupVisible(false);
    setIsPopupVisible(true);
  };

  const showPopupSharedLink = () => {
    if (isReveal) {
      return;
    }
    setIsPopupVisible(true);
    setIsSharedLinkPopupVisible(true);
  };

  const showPopupOtherUser = (player) => {
    if (currentUser === player.userName) {
      return;
    }
    setIsOtherUser(true);
    setOtherUser(player);
    setIsPopupVisible(true);
  };

  const hidePopup = () => {
    setIsOtherUser(false);
    setIsSharedLinkPopupVisible(false);
    setIsPopupVisible(false);
  };


  return (
    <GameContextPopup.Provider
      value={{
        inputValue,
        handleInputChange,
        selectedRole,
        handleRadioChange,
        player,
        isPopupVisible,
        hidePopup,
        showPopupProfile,
        showPopupSharedLink,
        isSharedLinkPopupVisible,
        isOtherUser,
        otherUser,
        showPopupOtherUser,
        setSelectedRole
      }}
    >
      {props.children}
    </GameContextPopup.Provider>
  );
}
GameContextPopupProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
