import React from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom'

import Layout from '../Components/Layout'
//Pages
import Badges from '../Pages/Badges'
import BadgeNew from '../Pages/BadgeNew'


function App(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/badges/new' component={BadgeNew}/>
                    <Route exact path='/badges' component={Badges}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App