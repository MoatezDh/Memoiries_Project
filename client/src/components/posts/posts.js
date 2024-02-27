import React from 'react';
import Post from './Post/post.js';
import useStyles from './styles.js';
import { useSelector } from 'react-redux';
import { Grid,CircularProgress } from '@material-ui/core';
export default function Posts() { // Renamed 'posts' to 'Posts'
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);
  return (
    !posts.length ?<CircularProgress/>:(
      <Grid  className={classes.container} container alignItems='stretch' spacing={3}>
            {posts.map((post)=>(
              <Grid key={post.id} item xs={12} sm={6}>
                <Post post={post}/>
              </Grid>
            ))}
      </Grid>
    )
  );
}
