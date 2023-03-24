import _api from "./api"


export const createEp = (data)=> _api.post("/game/create",data);
export const defaultEp = (id)=> _api.get(`/game/play-default/${id}`);
export const gamesCreEp = () => _api.get("/game/games-created");