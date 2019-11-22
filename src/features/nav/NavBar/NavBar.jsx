import React, { Component } from 'react'
import { Menu, Button, Container } from 'semantic-ui-react'
import { NavLink, Link } from 'react-router-dom'
import SignedOutMenu from '../menu/SignedOutMenu'
import SignedInMenu from '../menu/SignedInMenu'

class NavBar extends Component {
    render() {
        return (
            <Menu inverted>
                <Container>
                    <Menu.Item as={NavLink} to = '/' header>
                        <img src="assets/logo.png" alt="logo"/>
                        DoraTourist
                    </Menu.Item>
                    <Menu.Item as={NavLink} to='/blogs' name="Blogs"/>
                    <Menu.Item>
                        <Button as={Link} to='/createBlog' floated="right" positive inverted content="Create Blog" />
                    </Menu.Item>
                    <SignedInMenu />
                    <SignedOutMenu />
                </Container>
            </Menu>
        )
    }
}

export default NavBar;
