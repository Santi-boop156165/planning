import Input from "../atoms/Iinput/Input";
import PropTypes from 'prop-types';
import ROLES from "../../shared/roles";
import RadioButton from "../atoms/Buttons/RadioButton";
import MESSAGES from "../../shared/messages";
import { useParams } from "react-router-dom"
import Button from "../atoms/Buttons/Button";
import { toast } from "react-hot-toast";
import { isValidName } from "../../shared/validationUtils";
import { useState,useContext } from "react";
import { GameContext } from "../../context/GameContextProvider";


const Popup = ({ onClose }) => {
  const { name } = useParams();
  const { addPlayer  } = useContext(GameContext);
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  const [selectedRole, setSelectedRole] = useState();
  const handleRadioChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();
    if (!selectedRole) {
      toast.error(MESSAGES.SELECTED_ROLES);
      return;
    }
    if (isValidName(inputValue)) {
      toast.success(MESSAGES.USER_CREATED + " " +  inputValue  );
      addPlayer({ partyName: name, userName: inputValue, role: selectedRole});
      onClose();
    } else {
      toast.error(MESSAGES.INVALID_NAME);
    }
  };

  return (
    <form className="bg-[#1f0d3f] w-[420px] h-48 rounded-2xl 
    py-32 shadow-md shadow-purple-600 border border-purple-500 
    flex flex-col items-center justify-center ">
      <section className="flex flex-col gap-1">
        <h1 className="text-sm text-white font-bold">Tu Nombre</h1>
        <Input holder={"Santiago"} onChange={handleInputChange} bgColor={"bg-[#240f4a]"} />
      </section>

      <fieldset className="flex flex-row  space-x-4">
        {Object.entries(ROLES).map(([key, value]) => (
          <label key={key}>
            <span className="mr-2 text-sm text-white">{value}</span>
            <RadioButton
              value={key}
              onChange={handleRadioChange}
            />
          </label>
        ))}
      </fieldset>
      <div className="mt-5">
        <Button
          text="Continuar"
          textSize={"text-sm"}
          size={"w-24"}
          pxSize={"px-4"}
          pySize={"py-1"}
          disabled={inputValue === ""}
          onClick={(e) => onClick(e)}
        ></Button>
      </div>
    </form>
  );
};
Popup.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default Popup;
