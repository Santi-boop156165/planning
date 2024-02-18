import Profile from "../../atoms/Profile/Profile";
import { useContext } from "react";
import { GameContext } from "../../../context/GameContextProvider";
const CheckVieweProfile = () => {
  const { players, currentUser } = useContext(GameContext);
  let player = players.find((p) => p.userName === currentUser);
  return (
    <>
      {player && player.role === "3" && (
        <div className="ml-16">
          <Profile isViewer={true}/>
        </div>
      )}
    </>
  );
};

export default CheckVieweProfile;
