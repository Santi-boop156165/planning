import { usePopapProfileStore } from "../../../store/popapProfileStore";
import Input from "../../atoms/Inputs/Input";
import { usePlayerStore } from "../../../store/PlayerStore";
import { usePopapGameStore } from "../../../store/popapGameStore";

const HeaderPopup = () => {

  const { handleInputChange } = usePopapGameStore();
  const { currentUser } = usePlayerStore();
  const { isOtherUser, otherUser } = usePopapProfileStore();
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
