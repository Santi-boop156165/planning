import { useContext } from "react";
import Input from "../../atoms/Inputs/Input";
import { GameContext } from "../../../context/GameContextProvider";
import { GameContextPopup } from "../../../context/GameContextPopupProvider";
import { GameContextPopupSecondary } from "../../../context/GameContextPopupSecondary";

const HeaderPopup = () => {
  const { currentUser } = useContext(GameContext);
  const { handleInputChange } = useContext(GameContextPopup);

  const { isOtherUser, otherUser } = useContext(GameContextPopupSecondary);
  return (
    <header>
      <section className="flex flex-col gap-1">
        <h1 className="text-sm text-white font-bold">
          {isOtherUser ? "Su nombre :" : "Tu Nombre :"}
        </h1>
        {currentUser ? (
          <p className="pharagraph-homePage">
            {isOtherUser
              ? otherUser.userName.toUpperCase()
              : currentUser.toUpperCase()}
          </p>
        ) : (
          <Input
            holder={"Santiago"}
            onChange={handleInputChange}
            bgColor={"bg-[#240f4a]"}
          />
        )}
      </section>
    </header>
  );
};

export default HeaderPopup;
