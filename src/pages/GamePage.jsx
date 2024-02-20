import Popup from "../components/organism/Popups/Popup";
import PopupSharedLink from "../components/organism/Popups/PopupSharedLink";
import { useContext } from "react";
import Table from "../components/molecules/Table/Table";
import CardUserList from "../components/organism/Lists/CardUserList";
import HeaderGamePage from "../components/organism/Headers/HeaderGamePage";
import { GameContext } from "../context/GameContextProvider";
import { GameContextCard } from "../context/GameContextCardProvider";
import { GameContextPopup } from "../context/GameContextPopupProvider";
import CheckRevealAvarage from "../components/organism/ChecksOrganism/CheckRevealAvarage";
import MESSAGES from "../shared/messages";
import CheckCardFibonnacci from "../components/organism/ChecksOrganism/CheckCardFibonnacci";
import ROLES from "../shared/roles";


const GamePage = () => {

  const { players, currentUser } = useContext(GameContext);
  const { isReveal,selectedCard } = useContext(GameContextCard);

  const {
    isPopupVisible,
    isSharedLinkPopupVisible,
    hidePopup,
    showPopupOtherUser,

  } = useContext(GameContextPopup);
  let player = players.find((p) => p.userName === currentUser);
  
  const handlerShowPopupPlayer = (user) => {
    if(player.role !== ROLES.Admin ){
      return;  
    }
    if(selectedCard!==null){
      return;
    }
    showPopupOtherUser(user);
   
  };

  return (
    <main className="bg-radial-gradient from-start via-almost-end to-end h-screen w-screen relative">
      <article
        className={`${
          isPopupVisible ? "blur-sm" : ""
        } transition duration-200 absolute inset-0 flex flex-col`}
      >
        <HeaderGamePage />
        <section className="section-gamePages">
          <Table />
          <CardUserList handlerShowPopupPlayer={handlerShowPopupPlayer} />
        </section>
        <footer className="mb-8">
          {player && player.role !== ROLES.Espectador && (
            <>
              <p className="pharagraph-gamePage">
                {isReveal
                  ? MESSAGES.SELECTED_CARD_REVEAL
                  : MESSAGES.SELECTED_CARD}
              </p>

              <CheckCardFibonnacci  />
            </>
          )}
        </footer>
      </article>
      {isPopupVisible && (
        <div className="popup-gamePage">
          {isSharedLinkPopupVisible ? (
            <PopupSharedLink onClose={hidePopup} />
          ) : (
            <Popup onClose={hidePopup} />
          )}
        </div>
      )}
      {isReveal && <CheckRevealAvarage />}
    </main>
  );
};

export default GamePage;
