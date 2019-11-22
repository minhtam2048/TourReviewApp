import React from 'react';
import { Segment, Container, Header, Button, Icon, Image } from 'semantic-ui-react';

const HomePage = ({history}) => {
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/logo.png' alt='logo'
                     style={{ marginBottom: 12}} 
                    />
                    DoraTourist
                </Header>
                <Button onClick={() => history.push('/blogs')} size='huge' inverted>
                    Get Started
                    <Icon name='right arrow' inverted />
                </Button>
            </Container>
        </Segment>
    )
}

export default HomePage;
