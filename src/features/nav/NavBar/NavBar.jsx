import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import { Menu, Button, Container } from 'semantic-ui-react'
import { NavLink, Link, withRouter } from 'react-router-dom'
import SignedOutMenu from '../Menus/SignedOutMenu'
import SignedInMenu from '../Menus/SignedInMenu'


const NavBar = ({history}) => {
    const firebase = useFirebase();
    const auth = useSelector(state => state.firebase.auth, []);

    const handleLogout = () => {
        firebase.auth().signOut().then(() => {
            history.push('/');
        });
    };

    const authenticated = auth.isLoaded && !auth.isEmpty;

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' header>
                    <img src="assets/logo.png" alt="logo"/>
                    DoraTourist
                </Menu.Item>
                <Menu.Item as={NavLink} exact to='/blogs' name="Blogs"/>
                {authenticated  && (
                    <Fragment>
                        <Menu.Item as={NavLink} to='/test' name="Test Area"/>
                        <Menu.Item>
                            <Button as={Link} to='/createBlog' floated="right" positive inverted content="Create Blog" />
                        </Menu.Item>
                    </Fragment>
                )}

                {authenticated ? 
                    (<SignedInMenu signOut={handleLogout} />) : 
                    (<SignedOutMenu />)
                }
                 </Container>
             </Menu>
    )

}

export default withRouter(NavBar);