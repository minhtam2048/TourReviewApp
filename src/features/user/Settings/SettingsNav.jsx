import React, {Fragment} from 'react'
import { Menu, Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const SettingsNav = () => {
    return (
        <Fragment>
            <Menu vertical>
                <Header icon="user" attached inverted color="grey" content="Profile" />
                <Menu.Item as={NavLink} to='/settings/basic'>Basic Informations</Menu.Item>
                <Menu.Item as={NavLink} to='/settings/about'>About me</Menu.Item>
                <Menu.Item as={NavLink} to='/settings/gallery'>My Gallery</Menu.Item>
            </Menu>
            <Menu vertical>
                <Header icon="settings" attached inverted color="grey" content="Account" />
                <Menu.Item as={NavLink} to='/settings/account'>My account</Menu.Item>
            </Menu>
        </Fragment>
        
    );
}

export default SettingsNav;
