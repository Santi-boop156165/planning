import Profile from "../../atoms/Profile/Profile";

import { usePlayerStore } from "../../../store/PlayerStore";
const CheckVieweProfile = () => {
  const { players, currentUser } = usePlayerStore();
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
