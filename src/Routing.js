import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Dashboard from './component/Dashboard';
import Footer from './component/Footer/Footer';
import CreateInspect from './component/Inspect/CreateInspect';
import EditInspect from './component/Inspect/EditInspect';
import Login from './component/Login/login';
import Sidebar from './component/sidebar/Sidebar';



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
                        <Route path="/form/createInspect" exact>
                            <CreateInspect/>
                        </Route>
                        <Route path="/form/editInspect" exact>
                            <EditInspect/>
                        </Route>
                        <Route path="/" exact>
                            <Dashboard />
                        </Route>
                    </Switch>
                    <Footer/>
                </div>
            </div>
        </Router >
    )

};

export default Routing;
