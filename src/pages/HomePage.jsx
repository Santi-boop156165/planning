import toast from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router";
import { isValidName } from "../payloads/validationUtils";
import Button from "../components/atoms/Button";
import Input from "../components/atoms/Input";
import MESSAGES from "../payloads/messages";

const HomePage = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  const onClick = () => {
    if (isValidName(inputValue)) {
      toast.success(MESSAGES.GAME_CREATED);
      console.log(inputValue);
      navigate(`/game/${inputValue}`);
    } else {
      toast.error(MESSAGES.INVALID_NAME);
    }
  };
  
  return (
    <main
      className="bg-radial-gradient from-start via-almost-end
     to-end h-screen w-screen flex flex-col items-center justify-center
     "
    >
      <div className="flex flex-col gap-1">
        <h1 className=" text-sm text-white font-bold ">Nombra la partida</h1>
        <Input
          holder={"Sprint 32"}
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <Button text={"Crear Partida"} disabled={inputValue === ""} onClick={onClick}/>
    </main>
  );
};

export default HomePage;
