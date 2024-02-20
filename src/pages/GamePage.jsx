import Popup from "../components/organism/Popups/Popup";
import PopupSharedLink from "../components/organism/Popups/PopupSharedLink";
import { useContext } from "react";
import Table from "../components/molecules/Table/Table";
import CardUserList from "../components/organism/ChecksOrganism/CardUserList";
import HeaderGamePage from "../components/organism/Headers/HeaderGamePage";

import { GameContextCard } from "../context/GameContextCardProvider";
import { GameContextPopup } from "../context/GameContextPopupProvider";
import CheckRevealAvarage from "../components/organism/ChecksOrganism/CheckRevealAvarage";
import MESSAGES from "../shared/messages";
import CheckCardFibonnacci from "../components/organism/ChecksOrganism/CheckCardFibonnacci";
import ROLES from "../shared/roles";


const GamePage = () => {

 
  const { isReveal } = useContext(GameContextCard);

  const {
    isPopupVisible,
    isSharedLinkPopupVisible,
    hidePopup,
    player,
  

  } = useContext(GameContextPopup);

  


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
          <CardUserList />
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
