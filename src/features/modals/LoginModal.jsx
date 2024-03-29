import React from 'react';
import {Modal} from 'semantic-ui-react';
import {useDispatch} from 'react-redux';
import LoginForm from '../auth/Login/LoginForm';
import {closeModal} from './modalActions';

const LoginModal = () => {
    const dispatch = useDispatch();
    return (
        <Modal size='mini' open={true} onClose={() => dispatch(closeModal)}>
                <Modal.Header>
                    Login to this tour review app
                </Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <LoginForm />
                    </Modal.Description>
                </Modal.Content>
            </Modal>
    );    
};

export default LoginModal;