import Input from "../../atoms/Inputs/Input";
import PropTypes from "prop-types";
import ROLES from "../../../shared/roles";
import RadioButton from "../../atoms/Buttons/RadioButton";
import Button from "../../atoms/Buttons/Button";
import { isValidName } from "../../../shared/validationUtils";
import { useParams } from "react-router-dom";
import { GameContext } from "../../../context/GameContextProvider";
import { GameContextPopup } from "../../../context/GameContextPopupProvider";
import { useContext,useState} from "react";
import { toast } from "react-hot-toast";
import MESSAGES from "../../../shared/messages";

const Popup = ({ onClose}) => {

  const { name } = useParams();
  const { addPlayer, setCurrentUser, currentUser, updatePlayerRole } =
    useContext(GameContext);
  const {
    inputValue,
    handleInputChange,
    selectedRole,
    handleRadioChange,
    player,
    isOtherUser,
    otherUser,
    setSelectedRole

  } = useContext(GameContextPopup);

  const filteredRoles = Object.entries(ROLES).filter(([, roleValue]) => {
    const roleNumber = parseInt(roleValue, 10);
    if (isOtherUser) {
      return roleNumber <= 2;
    }
    if (player && (player.role === ROLES.Jugador || player.role === ROLES.Espectador)) {
      return roleNumber >= 2;
    }
    return true;
  });

  const [selectedRoleOtherUser, setSelectedRoleOtherUser] = useState(
    otherUser.role
  );
  const handleonChangeOtherUser = (e) => {
    setSelectedRoleOtherUser(e.target.value);
  };

 const onClick = (e) => {
    e.preventDefault();

    if (!selectedRole) {
      toast.error(MESSAGES.SELECTED_ROLES);

      return;
    }

    if (!isValidName(inputValue)) {
 
      toast.error(MESSAGES.INVALID_NAME);
      return;
    }
    toast.success(`${MESSAGES.USER_CREATED} ${inputValue}`);
    addPlayer({ partyName: name, userName: inputValue, role: selectedRole });
    setCurrentUser(inputValue);
    onClose();
};

  const handlerChangeEditOtherUser = () => {
    if(selectedRoleOtherUser !== ROLES.Admin){
      return;
    }
    setSelectedRole(ROLES.Espectador)
    updatePlayerRole(player.id, ROLES.Espectador);
    updatePlayerRole(otherUser.id, selectedRoleOtherUser);
    toast.success(MESSAGES.USER_EDITED + " " + otherUser.userName);
  }
  

  const onEditRole = (e) => {
    e.preventDefault();
    if (!selectedRole) {
      toast.error(MESSAGES.SELECTED_ROLES);
      return;
    }

    if (isOtherUser) {
      handlerChangeEditOtherUser()
    } else {
      updatePlayerRole(player.id, selectedRole);
      toast.success(MESSAGES.USER_EDITED + " " + currentUser);
    }
    onClose();
  };
  return (
    <form className="popup-user-style ">
      <section className="flex flex-col gap-1">
        <h1 className="text-sm text-white font-bold">
          {isOtherUser ? "Su nombre :" : "Tu Nombre :"}
        </h1>
        {currentUser ? (
          <p className="pharagraph-homePage">
            {isOtherUser ? otherUser.userName.toUpperCase() : currentUser.toUpperCase()}
          </p>
        ) : (
          <Input
            holder={"Santiago"}
            onChange={handleInputChange}
            bgColor={"bg-[#240f4a]"}
          />
        )}
      </section>

   <fieldset className="flex flex-row space-x-4">
      {filteredRoles.map(([key, value]) => (
        <label key={key}>
          <span className="mr-2 text-sm text-white">{key}</span>
          <RadioButton
            checked={
              isOtherUser
                ? selectedRoleOtherUser === value
                : selectedRole === value
            }
            value={value}
            onChange={
              isOtherUser ? handleonChangeOtherUser : handleRadioChange
            }
          />
        </label>
      ))}
    </fieldset>
      <div className="mt-5">
        <Button
          text={currentUser ? "Editar" : "Ingresar"}
          textSize={"text-sm"}
          size={"w-24"}
          pxSize={"px-4"}
          pySize={"py-1"}
          disabled={currentUser ? false : inputValue === ""}
          onClick={(e) => (currentUser ? onEditRole(e) : onClick(e))}
        ></Button>
      </div>
    </form>
  );
};
Popup.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default Popup;
