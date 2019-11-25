import React, { Component, Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import BlogDashboard from '../../features/blog/BlogDashboard/BlogDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Route, Switch, withRouter } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import BlogDetailedPage from '../../features/blog/BlogDetail/BlogDetailedPage';
import BlogForm from '../../features/blog/BlogForm/BlogForm';
import {UserDetailedPage} from '../../features/user/UserDetailed/UserDetailedpage';
import SettingsDashBoard from '../../features/user/Settings/SettingsDashBoard';
import TestComponent from '../../features/testarea/TestComponent';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Route exact path='/' component={HomePage}/>
                <Route
                path='/(.+)'
                render={() => (
                <Fragment>
                    <NavBar />
                    <Container className="main">
                        <Switch key={this.props.location.key}>
                            <Route exact path='/blogs' component={BlogDashboard} />
                            <Route path='/blogs/:id' component={BlogDetailedPage} />
                            <Route path='/profile/:id' component={UserDetailedPage}/>
                            <Route path={['/createBlog', '/manage/:id']}component={BlogForm} />
                            <Route path='/settings' component={SettingsDashBoard} />
                            <Route path='/test' component={TestComponent}/> 
                        </Switch>
                    </Container>
                </Fragment>
                )} 
            />
            </Fragment>
        );
    }
}

export default withRouter(App);