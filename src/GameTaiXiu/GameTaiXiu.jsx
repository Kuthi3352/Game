import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { GameTaiXiuActions } from '../store/GameTaiXiuReducer/slice';

const Wrapper = styled.div`
    height: 100vh;
    background-image: url('./bgGame.png');
    background-position: center bottom;
    background-size: cover;
    padding: 48px 0;
`;

const OptionsStyled = styled.button`
    width: 150px;
    height: 150px;
    font-size: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(59 130 246);
    color: #fff;
    border: 1px solid black;
    box-shadow: 0 0 16px rgba(54, 83, 20, 0.8);
`;

const XucXac = styled.img`
    width: 50px;
    height: 50px;
    margin: 0 4px;
`;

const GameTaiXiu = () => {
    const { chooseOptions, dices, totalWins, totalTurns } = useSelector(state => state.GameTaiXiuReducer);
    const dispatch = useDispatch();

    const handleChooseOption = options => {
        dispatch(GameTaiXiuActions.handleChooesOptions(options));
    };

    const handleRandomDices = () => {
        if (chooseOptions) {
            dispatch(GameTaiXiuActions.handleRandomDices());

            setTimeout(() => {
                dispatch(GameTaiXiuActions.handleToggleResultModal(true));
                dispatch(GameTaiXiuActions.handleTotalWins());
            }, 500);
        } else {
            alert('Bạn phải chọn Tài / Xỉu trước lắc xúc xắc!');
        }
    };

    return (
        <Wrapper>
            <div className='max-w-screen-lg mx-auto'>
                <h1 className='text-8xl text-center mb-10'>GAME ĐỔ TÀI XỈU</h1>
                <div className='flex justify-between'>
                    <OptionsStyled onClick={() => handleChooseOption('Tài')}>Tài</OptionsStyled>
                    <div className='flex'>
                        <XucXac src={`/${dices[0]}.png`} alt='' />
                        <XucXac src={`/${dices[1]}.png`} alt='' />
                        <XucXac src={`/${dices[2]}.png`} alt='' />
                    </div>
                    <OptionsStyled onClick={() => handleChooseOption('Xỉu')}>Xỉu</OptionsStyled>
                </div>
                <div className='text-5xl text-center mt-5'>
                    <p className='mb-4'>
                        BẠN CHỌN: <span className='text-red-600'>{chooseOptions}</span>
                    </p>
                    <p className='mb-4'>
                        Số bàn thắng: <span className='text-green-600'>{totalWins}</span>
                    </p>
                    <p className='mb-5'>
                        Tổng số bàn chơi: <span className='text-blue-600'>{totalTurns}</span>
                    </p>
                    <button
                        onClick={handleRandomDices}
                        className='bg-green-400 text-4xl py-3 px-4 rounded-lg text-white hover:bg-green-500 transition'
                    >
                        Play game
                    </button>
                </div>
            </div>
        </Wrapper>
    );
};

export default GameTaiXiu;
