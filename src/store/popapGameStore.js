import { usePlayerStore } from "./PlayerStore"; 
import { create } from "zustand";
export const usePopapGameStore = create((set) => ({
        getCurrentPlayer: () => {
                const { players, currentUser } = usePlayerStore.getState();
                return players.find((p) => p.userName === currentUser);
            },
     
        inputValue: "",
        setInputValue: (value) => set({ inputValue: value }),
        handleInputChange: (event) => {
            set({ inputValue: event.target.value });
        },
        selectedRole: null,
        setSelectedRole: (role) => set({ selectedRole: role }),
        handleRadioChange: (e) => {
            set({ selectedRole: e.target.value });
        },
}))