import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom';

import {Header} from './components/Header';

import { Home } from './pages/Home';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Route component={Home} path="/" exact/>
        </BrowserRouter>
    );
}

export default Routes;