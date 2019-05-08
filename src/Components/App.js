import React from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom'

//Pages
import Badges from '../Pages/Badges'
import BadgeNew from '../Pages/BadgeNew'


function App(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/badges/new' component={BadgeNew}/>
                <Route exact path='/badges' component={Badges}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App