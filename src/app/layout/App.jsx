import React, { Component, Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import BlogDashboard from '../../features/blog/BlogDashboard/BlogDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Route, Switch, withRouter } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import BlogDetailedPage from '../../features/blog/BlogDetail/BlogDetailedPage';
import BlogForm from '../../features/blog/BlogForm/BlogForm';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import SettingsDashBoard from '../../features/user/Settings/SettingsDashBoard';
import TestComponent from '../../features/testarea/TestComponent';
import ModalManager from '../../features/modals/ModalManager';
import LoadingComponent from './LoadingComponent';
import {useSelector} from 'react-redux';

const App = () => {
    const auth = useSelector(state => state.firebase.auth, []);
    if(!auth.isLoaded && auth.isEmpty) return <LoadingComponent />
    
    return (
        <Fragment>
            <ModalManager />
            <Switch>
                <Route exact path='/' component={HomePage}/>
            </Switch>
            <Route path='/(.+)' render={() => (
                <Fragment>
                    <NavBar />
                    <Container className="main">
                        <Switch>
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

export default withRouter(App);