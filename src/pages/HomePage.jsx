import toast from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router";
import { isValidName } from "../shared/validationUtils";
import Button from "../components/atoms/Buttons/Button";
import Input from "../components/atoms/Inputs/Input";
import MESSAGES from "../shared/messages";
import pragma from "../assets/pragma.png";

const HomePage = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onClick = () => {
    if (isValidName(inputValue)) {
      toast.success(MESSAGES.GAME_CREATED);
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
      <header className="header-homePage">
        <div className="flex items-center ">
          <img src={pragma} className="w-[120px] y h-[100px]" />
          <p className="text-white text-2xl font-semibold">Crear Partida</p>
        </div>
      </header>
      <div className="container-homePage">
        <h1 className="h1-homePage">Nombra la partida</h1>
        <Input
          holder={"Sprint 32"}
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <Button
        higth={"h-10"}
        pySize={"px-4"}
        text={"Crear Partida"}
        disabled={inputValue === ""}
        onClick={onClick}
      />
    </main>
  );
};

export default HomePage;
