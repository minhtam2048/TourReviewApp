import React, { Component } from 'react'
import { Menu, Button, Container } from 'semantic-ui-react'
import { NavLink, Link, withRouter } from 'react-router-dom'
import SignedOutMenu from '../Menus/SignedOutMenu'
import SignedInMenu from '../Menus/SignedInMenu'

class NavBar extends Component {
    state = {
        authenticated: true
    };

    handleSignIn = () => this.setState({authenticated : true });
    handleSignOut = () => { 
        this.setState({ authenticated : false }); 
        this.props.history.push('/');
    }

    render() {
        const {authenticated} = this.state;
        return (
            <Menu inverted>
                <Container>
                    <Menu.Item as={NavLink} to = '/' header>
                        <img src="assets/logo.png" alt="logo"/>
                        DoraTourist
                    </Menu.Item>
                    <Menu.Item as={NavLink} exact to='/blogs' name="Blogs"/>
                    <Menu.Item as={NavLink} to='/test' name="Test Area"/>
                    <Menu.Item>
                        <Button as={Link} to='/createBlog' floated="right" positive inverted content="Create Blog" />
                    </Menu.Item>
                    {authenticated ? <SignedInMenu signOut={this.handleSignOut} /> : 
                    <SignedOutMenu signIn={this.handleSignIn} />}
                </Container>
            </Menu>
        )
    }
}

// High Order Component => return new NavBar component
export default withRouter(NavBar);
