import  { useContext } from 'react'
import CardUser from '../../atoms/Cards/CardUser'
import { GameContext } from '../../../context/GameContextProvider'
import { GameContextPopup } from '../../../context/GameContextPopupProvider'
import { GameContextCard } from '../../../context/GameContextCardProvider'
import CheckVieweProfile from './CheckVieweProfile'

import ROLES from '../../../shared/roles';
const CardUserList = () => {
    const { players, currentUser} = useContext(GameContext);
    const { player,  showPopupOtherUser, } = useContext(GameContextPopup);
    const { selectedCard } = useContext(GameContextCard);
    const handlerShowPopupPlayer = (user) => {
      if(player.role !== ROLES.Admin ){
        return;  
      }
      if(selectedCard!==null){
        return;
      }
      showPopupOtherUser(user);
     
    };
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


export default CardUserList