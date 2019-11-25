import React, { Fragment } from 'react'
import { Segment, Header, Comment, Form, Button } from 'semantic-ui-react'

const BlogDetailedChat = () => {
    return (
        <Fragment>
            <Segment textAlign="center" attached="top" inverted color="teal" style={{border: 'none'}}>
                <Header>Chat about this post</Header>
            </Segment>
            
            <Segment attached>
                <Comment.Group>
                    <Comment>
                        <Comment.Avatar src ="/assets/saber.jpg" />
                        <Comment.Content>
                            <Comment.Author as="a">Saber</Comment.Author>
                            <Comment.Metadata>
                                <div>Today at 10:52 PM</div>
                            </Comment.Metadata>
                            <Comment.Text>Well, a wall of text...</Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                        <Comment.Group>
                            <Comment>
                                <Comment.Avatar src ="/assets/nezuko.jpg" />
                                <Comment.Content>
                                    <Comment.Author as="a">Nezuko</Comment.Author>
                                    <Comment.Metadata>
                                        <div>Today at 10:52 PM</div>
                                    </Comment.Metadata>
                                    <Comment.Text>It's not that bad</Comment.Text>
                                    <Comment.Actions>
                                        <Comment.Action>Reply</Comment.Action>
                                    </Comment.Actions>
                                </Comment.Content>
                            </Comment>
                        </Comment.Group>
                    </Comment>

                    <Comment>
                        <Comment.Avatar src ="/assets/emilia.jpg" />
                        <Comment.Content>
                            <Comment.Author as="a">Emilia</Comment.Author>
                            <Comment.Metadata>
                                <div>Today at 10:52 PM</div>
                            </Comment.Metadata>
                            <Comment.Text>pretty good</Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>

                    </Comment>

                    <Comment>
                        <Comment.Avatar src ="/assets/Rem.jpg" />
                        <Comment.Content>
                            <Comment.Author as="a">Rem</Comment.Author>
                            <Comment.Metadata>
                                <div>Just now</div>
                            </Comment.Metadata>
                            <Comment.Text>Well, a wall of text...</Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>
                    
                    <Form reply>
                        <Form.TextArea />
                        <Button Content="Add Reply" content="write" labelPosition="left" icon="edit" primary />
                    </Form>
                </Comment.Group>
            </Segment>
        </Fragment>
    )
}

export default BlogDetailedChat;
