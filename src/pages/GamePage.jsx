import Popup from "../components/organism/Popup";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Table from "../components/molecules/Table";
import CardUser from "../components/atoms/Cards/CardUser";
import Button from "../components/atoms/Buttons/Button";
import { GameContext } from "../context/GameContextProvider";
import MESSAGES from "../shared/messages";
import { fibonacciSeries } from "../shared/fibonacci";
import CheckCardFibonnacci from "../components/organism/CheckCardFibonnacci";

const GamePage = () => {
  const { name } = useParams();
  const {
    players,
    isReveal,
    average,
  } = useContext(GameContext);

  const [isPopupVisible, setIsPopupVisible] = useState(true);
  
  const hidePopup = () => {
    setIsPopupVisible(false);
  };


  return (
    <main className="bg-radial-gradient from-start via-almost-end to-end h-screen w-screen relative">
      <article
        className={`${
          isPopupVisible ? "blur-sm" : ""
        } transition duration-200 absolute inset-0 flex flex-col`}
      >
        
        <header className="flex justify-between">
        <h1 className="text-white text-2xl font-bold m-4">P</h1>
          <h2 className="text-white text-2xl font-bold mt-4 ml-20">{name}</h2>
          <div className="flex items-end m-4">
            <Button
              text="Invitar Jugadores"
              textSize={"text-sm"}
              pxSize={"px-4"}
              pySize={"py-1"}
              bgColor={"bg-transparent"}
              textColor={"text-white"}
            />
          </div>
        </header>
        <section className="flex flex-1 flex-col justify-center items-center mt-24">
          <Table
          />
          <div className="flex justify-center items-center gap-4 mt-8">
            {players.map((player) => (
              <CardUser
                key={player.userName}
                player={player}
              />
            ))}
          </div>
        </section>
        <footer className="mb-8">
        <p className="text-white font-semibold text-2xl text-center">
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
        <div className="absolute inset-0 flex justify-center items-center">
          <Popup onClose={hidePopup} />
        </div>
      )}
{isReveal && (
  <section className="section-gamePage">
    <div className="text-center pointer-events-auto">
      <p className="text-white text-xl">Promedio: </p>
      <p className="text-white text-4xl mt-2 font-bold">{average}</p>
    </div>
  </section>
)}
    </main>
  );
};

export default GamePage;
