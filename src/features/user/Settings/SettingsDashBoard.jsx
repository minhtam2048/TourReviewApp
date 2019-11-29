import React from 'react'
import { Grid } from 'semantic-ui-react'
import SettingsNav from './SettingsNav'
import { Route, Redirect, Switch } from 'react-router-dom';
import BasicPage from './BasicPage';
import AboutPage from './AboutPage';
import GalleryPage from './GalleryPage';
import AccountPage from './AccountPage';

const SettingsDashBoard = () => {
    return (
        <Grid>
            <Grid.Column width={12}>
                <Switch>
                    <Redirect exact from='/settings' to='/settings/basic' />
                    <Route path='/settings/basic' component={BasicPage} />
                    <Route path='/settings/about' component={AboutPage} />
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


