import React from 'react'
import Home from './home/Home'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar.js/Navbar'
import Footer from './Footer/Footer'
import About1 from './About/About1'
import About from './About/About'
import Home2 from './home/Home2'
import Contact1 from './Contact/Contact1'
import Service1 from './Services/Service1'
import Home7 from './home/Home7'

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
                        <Service1/>
                    </Route>
                    <Route exact path='/pages'>
                        <About1 title='Pages'/>
                        <Home2/>
                        <Service1/>
                    </Route>
                    <Route exact path='/contact'>
                        <About1 title='Contact'/>
                        <Contact1/>
                        <Home7/>
                    </Route>
                    
                </Switch>
                <Footer/>
            </Router>
        </div>
    )
}

export default App
