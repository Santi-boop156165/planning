/* eslint-disable react/prop-types */
import { useContext } from "react";
import { GameContextPopup } from "../../../context/GameContextPopupProvider";
import { GameContextPopupSecondary } from "../../../context/GameContextPopupSecondary";
import RadioButton from "../../atoms/Buttons/RadioButton";
import ROLES from "../../../shared/roles";

const RadioButtonList = ({selectedRoleOtherUser,setSelectedRoleOtherUser}) => {
    const {
        selectedRole,
        handleRadioChange,
        player,

      } = useContext(GameContextPopup);
      const { isOtherUser } = useContext(GameContextPopupSecondary);
    const handleonChangeOtherUser = (e) => {
        setSelectedRoleOtherUser(e.target.value);
      };

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
    
  return (
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
  )
}

export default RadioButtonList