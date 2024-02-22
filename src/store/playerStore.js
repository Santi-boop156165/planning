import { create } from "zustand";

export const usePlayerStore = create((set) => ({
    players: [
        {
            id : 0,
            partyName : 'game1',
            userName : 'user1',
            role : "2"
        }
    ],
    currentUser : null,
    setPlayers: (player) => set(({ players: player })),
    addPlayer: (player) => set(state => ({
        players: [
          ...state.players,
          {
            id: state.players.length + 1,
            partyName: player.partyName,
            userName: player.userName,
            role: player.role,
          },
        ],
      })),
    setCurrentUser: (user) => set(({ currentUser: user })),
    updatePlayerRole: (id, newRole) => set(state => ({
        players: state.players.map(player =>
            player.id === id ? { ...player, role: newRole } : player
        )
    })),
}))
