import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';
import { GameTaiXiuActions } from '../store/GameTaiXiuReducer/slice';

const ResultGameModal = () => {
    const { openModalResult, dices, chooseOptions } = useSelector(state => state.GameTaiXiuReducer);
    const dispatch = useDispatch();

    const handleCancel = () => {
        dispatch(GameTaiXiuActions.handleToggleResultModal(false));
        dispatch(GameTaiXiuActions.handleChooesOptions(''));
    };

    const points = dices.reduce((points, dice) => {
        return (points += dice);
    }, 0);

    return (
        <Modal
            style={{ fontFamily: 'Pony', top: '250px', borderRadius: 10, overflow: 'hidden' }}
            open={openModalResult}
            onCancel={handleCancel}
            footer={null}
            bodyStyle={{borderRadius: 10, overflow: 'hidden'}}
        >
            <div className='bg-blue-200 p-10 text-center text-4xl'>
                {chooseOptions === 'Tài' && points >= 11 ? (
                    <div>
                        <p className='mb-4'>{points} điểm. Bạn chọn Tài</p>
                        <p>Bạn đã thắng !</p>
                    </div>
                ) : chooseOptions === 'Tài' && points < 11 ? (
                    <div>
                        <p className='mb-4'>{points} điểm. Bạn chọn Tài</p>
                        <p>Bạn Thua Rồi !</p>
                    </div>
                ) : chooseOptions === 'Xỉu' && points < 11 ? (
                    <div>
                        <p className='mb-4'>{points} điểm. Bạn chọn Xỉu</p>
                        <p>Bạn đã thắng !</p>
                    </div>
                ) : (
                    <div>
                        <p className='mb-4'>{points} điểm. Bạn chọn Xỉu</p>
                        <p>Bạn Thua Rồi !</p>
                    </div>
                )}
            </div>
        </Modal>
    );
};

export default ResultGameModal;
