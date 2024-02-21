/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";
import { GameContextCard } from "./GameContextCardProvider";
import { GameContext } from "./GameContextProvider";
export const GameContextPopupSecondary = createContext();



export function GameContextPopupSecondaryProvider(props) {
    const { isReveal } = useContext(GameContextCard);
    const { currentUser, } = useContext(GameContext);
    const [isPopupVisible, setIsPopupVisible] = useState(true);
    const [isSharedLinkPopupVisible, setIsSharedLinkPopupVisible] =
      useState(false);
      const [isOtherUser, setIsOtherUser] = useState(false);
      const [otherUser, setOtherUser] = useState({});
    
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
        <GameContextPopupSecondary.Provider value={{       isPopupVisible,
            hidePopup,
            showPopupProfile,
            showPopupSharedLink,
            isSharedLinkPopupVisible,
            isOtherUser,
            otherUser,
            
            showPopupOtherUser }}>
            {props.children}
        </GameContextPopupSecondary.Provider>
    );
}