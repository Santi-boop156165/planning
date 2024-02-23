import toast from "react-hot-toast";
import MESSAGES from "../shared/messages";
import ROLES from "../shared/roles";
import { usePlayerStore } from "../store/PlayerStore";
import { usePopapGameStore } from "../store/popapGameStore";
const useHandleChangeEditRole = (selectedRoleOtherUser, otherUser) => {
    const {
        setSelectedRole,
      } = usePopapGameStore();
      const {  updatePlayerRole, } = usePlayerStore();
      const player =  usePopapGameStore(state => state.getCurrentPlayer());
    const handlerChange = () => {
        if (selectedRoleOtherUser !== ROLES.Admin) {
          return;
        }
        setSelectedRole(ROLES.Espectador);
        updatePlayerRole(player.id, ROLES.Espectador);
        updatePlayerRole(otherUser.id, selectedRoleOtherUser);
        toast.success(MESSAGES.USER_EDITED + " " + otherUser.userName);
      };

        return handlerChange
}

export default useHandleChangeEditRole
