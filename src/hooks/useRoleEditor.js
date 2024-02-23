import toast from "react-hot-toast";
import MESSAGES from "../shared/messages";
import { usePlayerStore } from "../store/PlayerStore";
import { usePopapGameStore } from "../store/popapGameStore";
import { usePopapProfileStore } from "../store/popapProfileStore";

const useRoleEditor = (onClose,handlerChangeEditOtherUser) => {
    const { updatePlayerRole,currentUser } = usePlayerStore();
    const { selectedRole } = usePopapGameStore();
    const { isOtherUser } = usePopapProfileStore();
    const player = usePopapGameStore(state => state.getCurrentPlayer());
  
    const onEditRole = (e) => {
        e.preventDefault();
        if (!selectedRole) {
          toast.error(MESSAGES.SELECTED_ROLES);
          return;
        }
    
        if (isOtherUser) {
          handlerChangeEditOtherUser();
        } else {
          updatePlayerRole(player.id, selectedRole);
          toast.success(MESSAGES.USER_EDITED + " " + currentUser);
        }
        onClose();
      };

      return onEditRole
}

export default useRoleEditor