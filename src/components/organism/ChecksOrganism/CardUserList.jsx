import CardUser from '../../atoms/Cards/CardUser'
import { usePlayerStore } from '../../../store/PlayerStore'
import { usePopapGameStore } from '../../../store/popapGameStore'
import { useGameCardStore } from '../../../store/gameCardStore'
import CheckVieweProfile from './CheckVieweProfile'
import { usePopapProfileStore } from '../../../store/popapProfileStore'
import ROLES from '../../../shared/roles';
const CardUserList = () => {
    const { players, currentUser } = usePlayerStore();
    const player =  usePopapGameStore(state => state.getCurrentPlayer());
    const { showPopupOtherUser } = usePopapProfileStore()
    const { selectedCard } =  useGameCardStore()

    const handlerShowPopupPlayer = (user) => {
      if(player.role !== ROLES.Admin ){
        return;  
      }
      if(selectedCard!==undefined){
      
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