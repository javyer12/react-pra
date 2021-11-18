import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home, Checkouts, Information, Payments, Success, NotFound } from '../container';
import sowTips from '../container/browser/sowTips';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

import Layout from '../components/Layout';

const App = ()=> {
        const initialState = useInitialState();
        const isEmpty = Object.keys(initialState.state).length;

        return (
                <>
                {isEmpty > 0 ? (
                <AppContext.Provider value={initialState}>
                <BrowserRouter>
                <Layout> 
                <Switch>
                        <Route exact path='/' component= {Home} />
                        <Route exact path='/sowTips' component= {sowTips} />
                        <Route exact path='/checkout' component= {Checkouts} />
                        <Route exact path='/checkout/information' component= {Information} />
                        <Route exact path='/payments' component= {Payments} />
                        <Route exact path='/checkout/success' component= {Success} />
                        <Route component= {NotFound} />
                </Switch>
                </Layout>
                </BrowserRouter>
                </AppContext.Provider>
                ) : <h1>Loading...</h1>}
                </>
        )
}
export default App;

