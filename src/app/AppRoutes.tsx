import { inject } from 'mobx-react';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomeContainer from '../containers/Home/HomeContainer';

export const Routes = (props) => {
    console.log(props)
    return (
        <Switch>
            <Redirect exact from='/' to='home' />
            <Route path="/home" component={HomeContainer} />
            <Redirect to="/404" />
        </Switch>
    );
};

export const AppRoutes = inject('routing')(Routes);
