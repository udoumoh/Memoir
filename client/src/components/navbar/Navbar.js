import React, { useState, useEffect} from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { AppBar, Button, Toolbar, Typography, Avatar } from '@material-ui/core'
import useStyles from './styles'
import memories from '../../images/imgg.png'
import {useDispatch} from 'react-redux'

const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile'))) 
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()

    const logout = () => {
      dispatch({ type: 'LOGOUT' })

      history.push('/')

      setUser(null);
    }

    useEffect(() => {
      // const token = user?.token;
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])


  return (
      <AppBar className={classes.appBar} position='static' color=''>
        <div className={classes.brandContainer}>
          <img className={classes.image} src={memories} alt='memories' height='60' />
        </div>
        <Toolbar className={classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.picture}>{user.result.name?.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                    <Button variant="contained" className={classes.logout} color="secondary" onClick={logout} >Log out</Button>
                </div>
            ) : (
                <Button component={Link} to='/auth' variant="contained" color="primary">Sign in</Button>
            )}
        </Toolbar>
      </AppBar>
  )
}

export default Navbar