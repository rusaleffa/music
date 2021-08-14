import {PlayerAction, PlayerActionTypes} from "../../types/player";
import {ITrack} from "../../types/track";

export const playTrack = (): PlayerAction => {
    return {type: PlayerActionTypes.PLAY}
}
export const pauseTrack = (): PlayerAction => {
    return {type: PlayerActionTypes.PAUSE}
}
export const setDuration = (data: number): PlayerAction => {
    return {type: PlayerActionTypes.SET_DURATION, payload: data}
}
export const setVolume = (data: number): PlayerAction => {
    return {type: PlayerActionTypes.SET_VOLUME, payload: data}
}
export const setCurrentTime = (data: number): PlayerAction => {
    return {type: PlayerActionTypes.SET_CURRENT_TIME, payload: data}
}
export const setActiveTrack = (data: ITrack): PlayerAction => {
    return {type: PlayerActionTypes.SET_ACTIVE, payload: data}
}
