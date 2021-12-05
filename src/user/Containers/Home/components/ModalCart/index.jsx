import React from 'react';
import * as S from './styled';
import home_shoe_3 from '../../images/home-shoe-3.png';
import Modal from '../../../../components/common/Modal';

export default function index({visible, onCancel}) {
    return (
        <Modal title='gio hang' visible={visible} onCancel={onCancel}>
            <S.CartWrap>
                <S.Box>
                    <img src={home_shoe_3} alt="" />
                    <S.Content>
                        <h2>Nike Shoes</h2>
                        <p>1 X $18.99</p>
                    </S.Content>
                    <i class="fas fa-times"></i>
                </S.Box>
            </S.CartWrap>
        </Modal>
    )
}
