import Popup from "../components/organism/popus/Popup";
import PopupSharedLink from "../components/organism/popus/PopupSharedLink";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Table from "../components/molecules/Table";
import CardUser from "../components/atoms/Cards/CardUser";
import Button from "../components/atoms/Buttons/Button";
import Profile from "../components/atoms/profile/Profile";
import { GameContext } from "../context/GameContextProvider";
import { GameContextCard } from "../context/GameContextCardProvider";
import { GameContextPopup } from "../context/GameContextPopupProvider";
import CheckRevealAvarage from "../components/organism/CheckRevealAvarage";
import MESSAGES from "../shared/messages";
import { fibonacciSeries } from "../shared/fibonacci";
import CheckCardFibonnacci from "../components/organism/CheckCardFibonnacci";
import CheckVieweProfile from "../components/organism/CheckVieweProfile";
import pragma from "../assets/pragma.png";

const GamePage = () => {
  const { name } = useParams();
  const { players, currentUser } = useContext(GameContext);
  const { isReveal } = useContext(GameContextCard);
  const {
    isPopupVisible,
    showPopupProfile,
    showPopupSharedLink,
    isSharedLinkPopupVisible,
    hidePopup,
  } = useContext(GameContextPopup);
  let player = players.find((p) => p.userName === currentUser);

  return (
    <main className="bg-radial-gradient from-start via-almost-end to-end h-screen w-screen relative">
      <article
        className={`${
          isPopupVisible ? "blur-sm" : ""
        } transition duration-200 absolute inset-0 flex flex-col`}
      >
        <header className="header-gamePage">
          <img src={pragma} className=" w-[120px] y h-[100px]" />
          <h2 className="style-h2">{name}</h2>
          <div className="div-gamePage-header">
            {currentUser && <Profile onClick={showPopupProfile} />}
            <Button
              text="Invitar Jugadores"
              textSize={"text-sm"}
              pxSize={"px-4"}
              pySize={"py-1"}
              bgColor={"bg-transparent"}
              textColor={"text-white"}
              onClick={showPopupSharedLink}
            />
          </div>
        </header>
        <section className="section-gamePages">
          <Table />
          <div className="cardUser-gamePage">
            {currentUser &&
              players
                .filter((player) => player.role !== "3")
                .map((player) => (
                  <CardUser key={player.userName} player={player} />
                ))}
            <CheckVieweProfile />
          </div>
        </section>
        <footer className="mb-8">
          {player && player.role !== "3" && (
            <>
              <p className="pharagraph-gamePage">
                {isReveal
                  ? MESSAGES.SELECTED_CARD_REVEAL
                  : MESSAGES.SELECTED_CARD}
              </p>

              <CheckCardFibonnacci fibonacciSeries={fibonacciSeries} />
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
