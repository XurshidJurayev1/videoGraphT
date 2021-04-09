import React from 'react'
import Home from './home/Home'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar.js/Navbar'
import Footer from './Footer/Footer'
import About1 from './About/About1'
import About from './About/About'

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
                    <Route exact path='/portfolio'>
                        <About1 title='Portfolio'/>
                    </Route>
                    <Route exact path='/services'>
                        <About1 title='Services'/>
                    </Route>
                    <Route exact path='/pages'>
                        <About1 title='Pages'/>
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
