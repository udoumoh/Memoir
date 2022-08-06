import React from 'react'
import {Container} from '@material-ui/core'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar.js'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth.js'

const App = () => {
     
    return (
        <BrowserRouter>
       <Container maxwidth='lg'>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/auth" exact component={Auth} />
            </Switch>
        </Container>
        </BrowserRouter>
    )
}

export default App