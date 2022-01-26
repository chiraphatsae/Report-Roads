import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Login from './component/Login/login';
import Sidebar from './component/sidebar/Sidebar';

import Dashboard from './Dashboard';

const Routing = () => {
    return (

        <Router>
            <div className="container-flex">
                <Sidebar />
                <div className='others'>
                    <Switch>
                        <Route path="/auth/login" exact>
                            <Login />
                        </Route>
                        <Route path="/" exact>
                            <Dashboard />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router >
    )

};

export default Routing;
