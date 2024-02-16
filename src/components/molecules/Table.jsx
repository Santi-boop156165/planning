import Button from "../atoms/Buttons/Button";
import { GameContext } from "../../context/GameContextProvider";
import { useContext } from "react";
const Table = () => {
  const {
    isReveal,
    cardSelections,
    handlerAverageClick,
    handlerRestarGame,
    players,
    currentUser,

  } = useContext(GameContext);

  let player = players.find((p) => p.userName === currentUser);
  return (
    <>
      <article className="table-style">
        {cardSelections.length > 2 && player && player.role !== "2" && (
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
