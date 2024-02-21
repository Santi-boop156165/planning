import HeaderPopup from "../Headers/HeaderPopup";
import PropTypes from "prop-types";
import ROLES from "../../../shared/roles";
import RadioButtonList from "../ChecksOrganism/RadioButtonList";
import Button from "../../atoms/Buttons/Button";
import { isValidName } from "../../../shared/validationUtils";
import { useParams } from "react-router-dom";
import { GameContext } from "../../../context/GameContextProvider";
import { GameContextPopup } from "../../../context/GameContextPopupProvider";
import { GameContextPopupSecondary } from "../../../context/GameContextPopupSecondary";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import MESSAGES from "../../../shared/messages";

const Popup = ({ onClose }) => {
  const { name } = useParams();
  const { addPlayer, setCurrentUser, currentUser, updatePlayerRole } =
    useContext(GameContext);
  const {
    inputValue,
    selectedRole,
    player,

    setSelectedRole,
  } = useContext(GameContextPopup);

  const { isOtherUser, otherUser } = useContext(GameContextPopupSecondary);

  const [selectedRoleOtherUser, setSelectedRoleOtherUser] = useState(
    otherUser.role
  );

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
    if (selectedRoleOtherUser !== ROLES.Admin) {
      return;
    }
    setSelectedRole(ROLES.Espectador);
    updatePlayerRole(player.id, ROLES.Espectador);
    updatePlayerRole(otherUser.id, selectedRoleOtherUser);
    toast.success(MESSAGES.USER_EDITED + " " + otherUser.userName);
  };

  const onEditRole = (e) => {
    e.preventDefault();
    if (!selectedRole) {
      toast.error(MESSAGES.SELECTED_ROLES);
      return;
    }

    if (isOtherUser) {
      handlerChangeEditOtherUser();
    } else {
      updatePlayerRole(player.id, selectedRole);
      toast.success(MESSAGES.USER_EDITED + " " + currentUser);
    }
    onClose();
  };
  return (
    <form className="popup-user-style ">
      <HeaderPopup />
      <RadioButtonList
        selectedRoleOtherUser={selectedRoleOtherUser}
        setSelectedRoleOtherUser={setSelectedRoleOtherUser}
      />
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
