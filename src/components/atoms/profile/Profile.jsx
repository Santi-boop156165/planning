import { useContext } from "react";
import { GameContext } from "../../../context/GameContextProvider";
import PropTypes from 'prop-types';
const Profile = ({onClick, isViewer}) => {
    const { currentUser } = useContext(GameContext);
    let firstLetter = currentUser ? currentUser[0].toUpperCase() : '';
  return (
    <p className={isViewer ? "viewer-style" : "profile-style"} onClick={onClick}>
        {firstLetter}
    </p>
  );
};
Profile.propTypes = {
  onClick: PropTypes.func,
  isViewer: PropTypes.bool
};
export default Profile;
