import React, {useState, useEffect} from 'react'
import {Grow, Grid, Container, Paper, AppBar, TextField, Button} from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'   
import ChipInput from 'material-ui-chip-input'

import Posts from '../Posts/posts'
import Form from '../Form/form'
import { getPosts } from '../../actions/posts'
import Paginate from '../Paginate/Paginate'
import useStyles from './styles'

function useQuery(){
    return new URLSearchParams(useLocation().search)
}

const Home = () => {
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch()
    const classes = useStyles()
    const query = useQuery()
    const history = useHistory()
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const [search, setSearch] = useState('')

    useEffect(() => {
        dispatch(getPosts())
    }, [currentId, dispatch])

  return (
      <Grow in>
          <Container maxWidth="xl">
              <Grid  container justifyContent='space-between' alignItems='stretch' spacing={3} className={classes.gridContainer}>
                  <Grid item xs={12} sm={6} md={8}>
                      <Posts setCurrentId={setCurrentId} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <AppBar className={classes.appBarSearch} position='static' color='inherit'>
                        <TextField name='search' variant='outlined' label='Search Memories' fullWidth value={search} onChange={(e) => {setSearch(e.target.value)}}/>
                    </AppBar>
                      <Form currentId={currentId} setCurrentId={setCurrentId} />
                      <Paper elevation={6}>
                        <Paginate/>
                      </Paper>
                  </Grid>
              </Grid>
          </Container>
      </Grow>
  )
}

export default Home