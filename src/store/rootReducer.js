import { combineReducers } from '@reduxjs/toolkit';
import { GameTaiXiuReducer } from './GameTaiXiuReducer/slice';

export const rootReducer = combineReducers({
    GameTaiXiuReducer,
});
