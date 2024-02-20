import  { useContext } from 'react'
import CardUser from '../../atoms/Cards/CardUser'
import { GameContext } from '../../../context/GameContextProvider'
import CheckVieweProfile from '../ChecksOrganism/CheckVieweProfile'
import PropTypes from 'prop-types';
import ROLES from '../../../shared/roles';
const CardUserList = ({handlerShowPopupPlayer}) => {
    const { players, currentUser } = useContext(GameContext);
  return (
    <div className="cardUser-gamePage">
    {currentUser &&
      players
        .filter((player) => player.role !== ROLES.Espectador)
        .map((player) => (
          <CardUser
            key={player.userName}
            onClick={() => handlerShowPopupPlayer(player)}
            player={player}
          />
        ))}
    <CheckVieweProfile />
  </div>
  )
}
CardUserList.propTypes = {
  handlerShowPopupPlayer: PropTypes.func.isRequired,
};


export default CardUserList