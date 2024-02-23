import HeaderPopup from "../Headers/HeaderPopup";
import PropTypes from "prop-types";
import { useState } from 'react';
import useHandleChangeEditRole from "../../../hooks/useHandlerChangeEdit";
import RadioButtonList from "../ChecksOrganism/RadioButtonList";
import Button from "../../atoms/Buttons/Button";
import { useParams } from "react-router-dom";
import { usePlayerStore } from "../../../store/PlayerStore";
import { usePopapGameStore } from "../../../store/popapGameStore";
import { usePopapProfileStore } from "../../../store/popapProfileStore";
import useRoleEditor from "../../../hooks/useRoleEditor";
import useOnClickPopup from "../../../hooks/useOnclickPopup";

const Popup = ({ onClose }) => {
  const { name } = useParams();
  const {  currentUser } = usePlayerStore();
  const {
    inputValue,
  } = usePopapGameStore();
 

  const {  otherUser } = usePopapProfileStore();

  const [selectedRoleOtherUser, setSelectedRoleOtherUser] = useState(
    otherUser.role
  );


  const onClick = useOnClickPopup(name,onClose);
  const handlerChangeEditOtherUser = useHandleChangeEditRole(selectedRoleOtherUser, otherUser);
  const onEditRole = useRoleEditor(onClose,handlerChangeEditOtherUser);


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
