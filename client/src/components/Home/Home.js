import React, {useState, useEffect} from 'react'
import {Grow, Grid, Container, Paper} from '@material-ui/core'
import { useDispatch } from 'react-redux'

import Posts from '../Posts/posts'
import Form from '../Form/form'
import { getPosts } from '../../actions/posts'
import Paginate from '../Paginate/Paginate'

const Home = () => {
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [currentId, dispatch])

  return (
      <Grow in>
          <Container>
              <Grid  container justifyContent='space-between' alignItems='stretch' spacing={3}>
                  <Grid item xs={12} sm={7}>
                      <Posts setCurrentId={setCurrentId} />
                  </Grid>
                  <Grid item xs={12} sm={4}>
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