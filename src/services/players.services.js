import _api from "./api"

export const addPlayersEp = (data,idGame)=> _api.post(`/players/add-players/${idGame}`,data);
export const editPlayersEp = (idGame,idPlayers,data)=> _api.patch(`/players/edit-players/${idGame}/${idPlayers}`,data);


/**
 * 
 * /add-players/:idGame
 * /edit-players/:idGame/:idPlayers
 */