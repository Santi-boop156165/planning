import pragma from "../../../assets/pragma.png";
import Button from "../../atoms/Buttons/Button";
import Profile from "../../atoms/Profile/Profile";
import { useContext } from "react";
import { GameContext } from "../../../context/GameContextProvider";
import { GameContextPopupSecondary } from "../../../context/GameContextPopupSecondary";
import { GameContextCard } from "../../../context/GameContextCardProvider";
import { useParams } from "react-router-dom";

const HeaderGamePage = () => {
  const { currentUser } = useContext(GameContext);
  const { showPopupSharedLink, showPopupProfile } = useContext(
    GameContextPopupSecondary
  );
  const { selectedCard } = useContext(GameContextCard);
  const handlerShowPopupProfile = () => {
    if (selectedCard !== null) {
      return;
    }
    showPopupProfile();
  };
  const { name } = useParams();
  return (
    <header className="header-gamePage">
      <img src={pragma} className=" w-[120px] y h-[100px]" />
      <h2 className="style-h2">{name}</h2>
      <div className="div-gamePage-header">
        {currentUser && <Profile onClick={handlerShowPopupProfile} />}
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
  );
};

export default HeaderGamePage;
