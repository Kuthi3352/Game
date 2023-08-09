import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    chooseOptions: '',
    dices: [1, 2, 3],
    openModalResult: false,
    totalWins: 0,
    totalTurns: 0
};

const GameTaiXiuSlice = createSlice({
    name: 'GameTaiXiuReducer',
    initialState,
    reducers: {
        handleChooesOptions: (state, { payload }) => {
            state.chooseOptions = payload;
        },
        handleRandomDices: (state, { payload }) => {
            const randomDices = [];
            state.dices.forEach((_, index) => {
                randomDices[index] = Math.floor(Math.random() * 6 + 1);
            });
            state.dices = [...randomDices];
        },
        handleToggleResultModal: (state, { payload }) => {
            state.openModalResult = payload;
        },
        handleTotalWins: (state, { payload }) => {
            const points = state.dices.reduce((points, dice) => {
                return (points += dice);
            }, 0);

            if ((points >= 11 && state.chooseOptions === 'Tài') || (points < 11 && state.chooseOptions === 'Xỉu')) {
                state.totalWins++;
            }
            state.totalTurns++;
        },
    },
});

export const { reducer: GameTaiXiuReducer, actions: GameTaiXiuActions } = GameTaiXiuSlice;
