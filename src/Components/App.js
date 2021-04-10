import React from 'react'
import Home from './home/Home'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar.js/Navbar'
import Footer from './Footer/Footer'
import About1 from './About/About1'
import About from './About/About'
import Home2 from './home/Home2'

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
                        <About1 title='About us'/>
                        <About/>
                    </Route>
                    <Route exact path='/services'>
                        <About1 title='Services'/>
                        <Home2/>
                    </Route>
                    <Route exact path='/pages'>
                        <About1 title='Pages'/>
                        <Home2/>
                    </Route>
                    <Route exact path='/contact'>
                        <About1 title='Contact'/>
                    </Route>
                    
                </Switch>
                <Footer/>
            </Router>
        </div>
    )
}

export default App
