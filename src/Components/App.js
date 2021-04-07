import React from 'react'
import Home from './home/Home'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar.js/Navbar'

function App() {
    return (
        <div>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                    <Route exact path='/about'>
                        <h1>
                            about
                        </h1>
                    </Route>
                    <Route exact path='/portfolio'>
                        <h1>
                            portfolio
                        </h1>
                    </Route>
                    <Route exact path='/services'>
                        <h1>
                        services
                        </h1>
                    </Route>
                    <Route exact path='/pages'>
                        <h1>
                        pages
                        </h1>
                    </Route>
                    <Route exact path='/contact'>
                        <h1>
                            contact
                        </h1>
                    </Route>
                    
                </Switch>
            </Router>
        </div>
    )
}

export default App
