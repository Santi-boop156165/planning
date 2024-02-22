import { create } from "zustand";
import { useGameCardStore } from "./gameCardStore";
import { usePlayerStore } from "./PlayerStore";
export const usePopapProfileStore = create((set,get) => ({
    isPopupVisible: true,
    setIsPopupVisible: (value) => set({ isPopupVisible: value }),
    isSharedLinkPopupVisible: false,
    setIsSharedLinkPopupVisible: (value) => set({ isSharedLinkPopupVisible: value }),
    isOtherUser: false,
    setIsOtherUser: (value) => set({ isOtherUser: value }),
    otherUser: {},
    setOtherUser: (value) => set({ otherUser: value }),
    showPopupProfile: () => {
        const { isReveal } = useGameCardStore.getState();
        if (isReveal) {
            return;
        }
        get().setIsSharedLinkPopupVisible(false);
        get().setIsPopupVisible(true);
    },

    showPopupSharedLink: () => {
        const { isReveal } = useGameCardStore.getState();
        if (isReveal) {
            return;
        }
        get().setIsPopupVisible(true);
        get().setIsSharedLinkPopupVisible(true);
    },

    showPopupOtherUser: (player) => {
        const { currentUser } = usePlayerStore.getState();
        if (currentUser === player.userName) {
            return;
        }
        get().setIsOtherUser(true);
        get().setOtherUser(player);
        get().setIsPopupVisible(true);
    },
    hidePopup: () => {
        get().setIsOtherUser(false);
        get().setIsSharedLinkPopupVisible(false);
        get().setIsPopupVisible(false);
    },
}))
