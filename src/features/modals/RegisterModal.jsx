import React, {Component} from 'react';
import {Modal} from 'semantic-ui-react';
import {connect} from 'react-redux';
import RegisterForm from "../auth/Register/RegisterForm";
import {closeModal} from "./modalActions";

const mapDispatchToProps = {closeModal};



class RegisterModal extends Component {
    render() {
        return (
            <Modal size='mini' open={true} onClose={this.props.closeModal}>
                <Modal.Header>
                    Sign Up to dora!
                </Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <RegisterForm />
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }
}

export default connect(null, mapDispatchToProps)(RegisterModal);