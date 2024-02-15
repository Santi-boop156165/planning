import Popup from "../components/organism/Popup";
import PopupSharedLink from "../components/organism/PopupSharedLink";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Table from "../components/molecules/Table";
import CardUser from "../components/atoms/Cards/CardUser";
import Button from "../components/atoms/Buttons/Button";
import { GameContext } from "../context/GameContextProvider";
import MESSAGES from "../shared/messages";
import { fibonacciSeries } from "../shared/fibonacci";
import CheckCardFibonnacci from "../components/organism/CheckCardFibonnacci";
import pragma from "../assets/pragma.png";

const GamePage = () => {
  const { name } = useParams();
  const {
    players,
    isReveal,
    average,
  } = useContext(GameContext);

  const [isPopupVisible, setIsPopupVisible] = useState(true);
  const [isSharedLinkPopupVisible, setIsSharedLinkPopupVisible] = useState(false);
  
  const hidePopup = () => {
    setIsPopupVisible(false);
  };
  const showPopupSharedLink = () => {
    setIsPopupVisible(true);
    setIsSharedLinkPopupVisible(true);
    
  }



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
          <Table
          />
          <div className="cardUser-gamePage">
            {players.map((player) => (
              <CardUser
                key={player.userName}
                player={player}
              />
            ))}
          </div>
        </section>
        <footer className="mb-8">
        <p className="pharagraph-gamePage">
            {
              isReveal
                ? MESSAGES.SELECTED_CARD_REVEAL
                : MESSAGES.SELECTED_CARD 
            }
          </p>
          <CheckCardFibonnacci
            fibonacciSeries={fibonacciSeries}
            />
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
{isReveal && (
  <section className="section-gamePage-isReveal">
    <div className="text-center pointer-events-auto">
      <p className="text-white text-xl">Promedio: </p>
      <p className="text-white text-4xl mt-2 font-bold">{average ? average.toFixed(2) : 'N/A'}</p>
    </div>
  </section>
)}
    </main>
  );
};

export default GamePage;
