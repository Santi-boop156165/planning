import { create } from "zustand";
import { usePlayerStore } from "./PlayerStore";
export const useGameCardStore = create((set,get) => ({
  cards: [
    {
      id: 0,
      userId: 0,
      numberSelected: "13",
    },
  ],
  isReveal: false,
  average: 0,
  selectCard : null,
  setCards: (card) => set({ cards: card }),
  revealCards: (reveal) => set({ isReveal: reveal }),
  setAverage: (avg) => set({ average: avg }),
  handlerAverageClick: () =>
    set((state) => {
      const selectedCards = state.cards.map((card) =>
        parseInt(card.numberSelected, 10)
      );
      const average =
        selectedCards.reduce((acc, value) => acc + value, 0) /
        selectedCards.length;

      return { average: average, isReveal: true };
    }),
    addCard: (userName, selectedNumber) => {
        const { players } = usePlayerStore.getState(); 
        const player = players.find(p => p.userName === userName);
        if (!player) return;
    
        set(state => {
            const existingCardIndex = state.cards.findIndex(card => card.userId === player.id);
    
            if (existingCardIndex >= 0) {
                const updatedCards = [...state.cards];
                updatedCards[existingCardIndex] = { ...state.cards[existingCardIndex], numberSelected: selectedNumber };
                return { cards: updatedCards };
            } else {
                const newSelection = { id: state.cards.length, userId: player.id, numberSelected: selectedNumber };
                return { cards: [...state.cards, newSelection] };
            }
        });
    },
    handlerCardClick: (number) => {
        const { currentUser } = usePlayerStore.getState(); 
        if (!currentUser) return;
    
        set({ selectedCard: number });
        get().addCard(currentUser, number); 
    },
    handlerRestarGame: () => {
        set({ cards: [{ id: 0, userId: 0, numberSelected: "13" }], isReveal: false, average: 0, selectedCard: undefined });
    }
}));
