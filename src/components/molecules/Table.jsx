import Button from "../atoms/Buttons/Button";
import { GameContext } from "../../context/GameContextProvider";
import { GameContextCard } from "../../context/GameContextCardProvider";
import { useContext } from "react";
const Table = () => {
  const {

    players,
    currentUser,

  } = useContext(GameContext);

  const {
    isReveal,
    cardSelections,
    handlerAverageClick,
    handlerRestarGame,
  } = useContext(GameContextCard);

  let player = players.find((p) => p.userName === currentUser);
  return (
    <>
      <article className="table-style">
        {cardSelections.length > 1 && player && player.role !== "2" && (
          <Button
            text= {isReveal ? "Reiniciar" : "Revelar Cartas"}
            bgColor="bg-violet-700"
            textColor="text-white"
            higth={"h-10"}
            pySize={"px-4"}
            pxSize="px-0"
            fontBold="font-semibold"
            onClick={isReveal ? handlerRestarGame : handlerAverageClick}
          />
        )}
      </article>
    </>
  );
  
};



export default Table;
