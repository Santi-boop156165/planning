import { isValidName } from "../shared/validationUtils";
import { toast } from "react-hot-toast";
import MESSAGES from "../shared/messages";
import { usePlayerStore } from "../store/PlayerStore";
import { usePopapGameStore } from "../store/popapGameStore";
const useOnClickPopup = (name,onClose) => {
    const { addPlayer, setCurrentUser, } = usePlayerStore();
    const {
        inputValue,
        selectedRole,
      } = usePopapGameStore();
    const onClick = (e) => {
        e.preventDefault();
    
        if (!selectedRole) {
          toast.error(MESSAGES.SELECTED_ROLES);
    
          return;
        }
    
        if (!isValidName(inputValue)) {
          toast.error(MESSAGES.INVALID_NAME);
          return;
        }
        toast.success(`${MESSAGES.USER_CREATED} ${inputValue}`);
        addPlayer({ partyName: name, userName: inputValue, role: selectedRole });
        setCurrentUser(inputValue);
        onClose();
      };

      return onClick
}

export default useOnClickPopup