import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import useStyles from './styles'
import moment from 'moment';
import {useDispatch} from 'react-redux'
import { deletePost, likePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))
    // console.log(user);

    const Likes = () => {
      if (post.likes.length > 0){
        return post.likes.find((like) => like === (user?.result?.sub || user?.result?._id))
        ? (
            <>
            <FavoriteIcon  color="secondary"/> &nbsp; {post.likes.length}
            </>
        ) : (
          <>
              <FavoriteBorderOutlinedIcon color="primary"/> &nbsp; {post.likes.length}
          </>
        )
      }
      return(
        <><FavoriteBorderOutlinedIcon color="primary" /> &nbsp; { post.likes.length }</>
      )
    }

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
      <div className={classes.overlay}>
        <Typography variant='h6'>{post.name}</Typography>
        <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
      </div>
      {(user?.result?.sub === post?.creator || user?.result?._id === post?.creator) && (
      <div className={classes.overlay2}>
        <Button style={{color:'white'}} size='small' onClick={() => setCurrentId(post._id)}>
          <MoreHorizIcon fontSize='medium'/>
        </Button>
      </div>
      )}
      <div className={classes.details}>
          <Typography variant='body2' color='textSecondary'>{post.tags.map(tag => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} variant='h5' gutterBottom>{post.title}</Typography>
      <CardContent>
      <Typography variant='body2' color='textSecondary' component='p' >{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size='small' disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
          <Likes />
        </Button>
        {(user?.result?.sub === post?.creator || user?.result?._id === post?.creator) && (
        <Button size='small' color='primary' onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon />
        </Button>
        )}
      </CardActions>
    </Card>
  )
}

export default Post