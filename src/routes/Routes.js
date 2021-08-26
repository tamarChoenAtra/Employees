import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import Employees from '../components/employees/Employees';
import NavBar from '../components/navBar/NavBar';
import Home from '../components/home/Home';
import Setting from '../components/setting/Setting';

export const Routes = () => {

    return (
        <Router>
            <NavBar />
            <Switch>

                <Route path="/Employees">
                    <Employees />
                </Route>

                <Route path="/Setting">
                    <Setting />
                </Route>

                <Route>
                    <Home path="/Employees" />
                </Route>
            </Switch>
        </Router>
    )

}
