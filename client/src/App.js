import React from 'react'
import {Container} from '@material-ui/core'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import PostDetails from './components/PostDetails/PostDetails.js'
import Navbar from './components/navbar/Navbar.js'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth.js'
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'))

    return (
        <GoogleOAuthProvider clientId={process.env.REACT_APP_OAUTH_CLIENT_ID}>
        <BrowserRouter>
       <Container maxwidth='xl'>    
            <Navbar />
            <Switch>
                <Route path="/" exact component={() => <Redirect to='/posts'/>}/>
                <Route path='/posts' exact component={Home}/>
                <Route path='/posts/search' exact component={Home}/>
                <Route path='/posts/:id' component={PostDetails}/>
                <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to='/posts'/>)} />
            </Switch>
        </Container>
        </BrowserRouter>
        </GoogleOAuthProvider>
    )
}

export default App