import React from 'react';
import {useSelector} from 'react-redux';
import { Grid } from 'semantic-ui-react';
import SettingsNav from './SettingsNav';
import { Route, Redirect, Switch } from 'react-router-dom';
import BasicPage from './BasicPage';
import AboutPage from './AboutPage';
import GalleryPage from './GalleryPage';
import AccountPage from './AccountPage';



const SettingsDashBoard = () => {
    const profile = useSelector(state => state.firebase.profile);
    return (
        <Grid>
            <Grid.Column width={12}>
                <Switch>
                    <Redirect exact from='/settings' to='/settings/basic' />
                    <Route path='/settings/basic' render={() => <BasicPage initialValues ={profile} />}/>
                    <Route path='/settings/about' render={() => <AboutPage initialValues ={profile} /> } />
                    <Route path='/settings/gallery' component={GalleryPage} />
                    <Route path='/settings/account' component={AccountPage} />
                </Switch>
            </Grid.Column>
            <Grid.Column width={3}>
                <SettingsNav />
            </Grid.Column>
        </Grid>
    );
}

export default SettingsDashBoard;


