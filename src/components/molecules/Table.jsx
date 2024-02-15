import Button from "../atoms/Buttons/Button";
import { GameContext } from "../../context/GameContextProvider";
import { useContext } from "react";
const Table = () => {
  const {
    isReveal,
    cardSelections,
    handlerAverageClick,
    handlerRestarGame

  } = useContext(GameContext);
  return (
    <>
      <article className="relative bg-[#1f0d3f] w-[530px] h-80 rounded-full shadow-2xl flex items-center justify-center">
        {cardSelections.length > 1 && (
          <Button
            text= {isReveal ? "Reiniciar" : "Revelar Cartas"}
            bgColor="bg-violet-700"
            textColor="text-white"
            pxSize="px-0"
            pySize="py-2"
            fontBold="font-semibold"
            onClick={isReveal ? handlerRestarGame : handlerAverageClick}
          />
        )}
      </article>
    </>
  );
  
};



export default Table;
