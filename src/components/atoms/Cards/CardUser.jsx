import PropTypes from "prop-types";
import { useContext } from "react";
import { GameContextCard } from "../../../context/GameContextCardProvider";
const CardUser = ({ player, onClick }) => {
  const { cardSelections,isReveal } = useContext(GameContextCard);
  const card = cardSelections.find((cs) => cs.userId === player.id);
  let bgColorClass;
  if (card && !isReveal) {
    bgColorClass = "bg-purple-400"; 
  } else {
    bgColorClass = "bg-transparent"; 
  }
  return (
    <>
      <section 
        onClick={onClick}
      className=" cursor-pointer
      flex flex-col items-center justify-center ml-24">
      <div className={`${bgColorClass} transition duration-300 ease-in-out h-14 w-8 border
       border-purple-500 rounded-md flex items-center justify-center`}>
        {isReveal && card && <p className="text-white font-bold">{card.numberSelected}</p>}
      </div>
        <p className="text-center text-white mt-2">{player.userName}</p>
      </section>
    </>
  );
};

CardUser.propTypes = {
  player: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

export default CardUser;


