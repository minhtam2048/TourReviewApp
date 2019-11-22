import React from 'react'
import { Menu, Image, Dropdown } from 'semantic-ui-react'

const SignedInMenu = () => {
    return (
        <Menu.Item position='right'>
            <Image avatar spaced='right' src='/assets/user.png' />
            <Dropdown pointing='top left' text='Username'>
                <Dropdown.Menu>
                    <Dropdown.Item text='Create Blog' icon='plus' />
                    <Dropdown.Item text='Booking' icon='calendar' />
                    <Dropdown.Item text='My Profile' icon='user'/>
                    <Dropdown.Item text='Sign Out' icon='power'/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    );
};

export default SignedInMenu;
