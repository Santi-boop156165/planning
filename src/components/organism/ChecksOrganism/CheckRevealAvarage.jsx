import { GameContextCard } from "../../../context/GameContextCardProvider";
import { useContext } from "react";

const CheckRevealAvarage = () => {
    const { average } = useContext(GameContextCard);
  return (
    <section className="section-gamePage-isReveal">
    <div className="text-center pointer-events-auto">
      <p className="text-white text-xl">Promedio: </p>
      <p className="text-white text-4xl mt-2 font-bold">
        {average ? average.toFixed(1) : "N/A"}
      </p>
    </div>
  </section>
  )
}

export default CheckRevealAvarage