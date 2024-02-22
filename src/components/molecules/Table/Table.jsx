import Button from "../../atoms/Buttons/Button";
import { usePlayerStore } from "../../../store/PlayerStore";
import { useGameCardStore } from "../../../store/gameCardStore";
const Table = () => {
  const {

    players,
    currentUser,

  } =  usePlayerStore();

  const {
    isReveal,
    cards,
    handlerAverageClick,
    handlerRestarGame,
  } =  useGameCardStore()

  let player = players.find((p) => p.userName === currentUser);
  return (
    <>
      <article className="table-style">
        {cards.length > 1 && player && player.role !== "2" && (
        <div className=" animate-fadeIn">
            <Button
            text= {isReveal ? "Reiniciar" : "Revelar Cartas"}
            bgColor="bg-violet-700"
            textColor="text-white"
            higth={"h-10"}
            pySize={"px-0"}
            pxSize="px-0"
            fontBold="font-semibold"
            onClick={isReveal ? handlerRestarGame : handlerAverageClick}
          />
        </div>
        )}
      </article>
    </>
  );
  
};



export default Table;
