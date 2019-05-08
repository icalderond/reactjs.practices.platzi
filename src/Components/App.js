import React from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom'

import Layout from '../Components/Layout'
//Pages
import Badges from '../Pages/Badges'
import BadgeNew from '../Pages/BadgeNew'
import NotFound from '../Pages/NotFound';
import Home from '../Pages/Home';


function App(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/badges/new' component={BadgeNew}/>
                    <Route exact path='/badges' component={Badges}/>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App