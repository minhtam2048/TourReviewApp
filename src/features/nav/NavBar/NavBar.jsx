import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';
import { Menu, Button, Container } from 'semantic-ui-react'
import { NavLink, Link, withRouter } from 'react-router-dom'
import SignedOutMenu from '../Menus/SignedOutMenu'
import SignedInMenu from '../Menus/SignedInMenu'
import { openModal } from '../../modals/modalActions';
import { logout } from '../../auth/authActions'  

const mapStateToProps = (state) => ({
    auth: state.firebase.auth
})

const mapDispatchToProps = {
    openModal,
    logout
}

class NavBar extends Component {
    
    handleSignIn = () => {
        this.props.openModal('LoginModal')
    }

    handleRegister = () => {
        this.props.openModal('RegisterModal')
    }

    handleSignOut = () => { 
        this.props.firebase.logout();
        this.props.history.push('/');
    }

    render() {
        const {auth} = this.props;
        const authenticated = auth.isLoaded && !auth.isEmpty;
        return (
            <Menu inverted>
                <Container>
                    <Menu.Item as={NavLink} to = '/' header>
                        <img src="assets/logo.png" alt="logo"/>
                        DoraTourist
                    </Menu.Item>
                    <Menu.Item as={NavLink} exact to='/blogs' name="Blogs"/>

                    {authenticated  &&
                    <Fragment>
                        <Menu.Item as={NavLink} to='/test' name="Test Area"/>
                        <Menu.Item>
                            <Button as={Link} to='/createBlog' floated="right" positive inverted content="Create Blog" />
                        </Menu.Item>
                    </Fragment>
                    }
                    {authenticated ? <SignedInMenu signOut={this.handleSignOut} auth={auth} /> : 
                    <SignedOutMenu signIn={this.handleSignIn} register={this.handleRegister} />}
                </Container>
            </Menu>
        )
    }
}

// High Order Component => return new NavBar component
export default withRouter(withFirebase(connect(mapStateToProps, mapDispatchToProps)(NavBar)));
