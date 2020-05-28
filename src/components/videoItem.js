import React from 'react';
import { Grid, Paper, Typography} from '@material-ui/core';
import { findByLabelText } from '@testing-library/react';
 
const VideoItem = ({video, onVideoSelect}) => {
    return(
        <Grid item xs={12}>
        <Paper elevation={6} style={{display: "flex", alignItems: "center", curser: "pointer"}} onClick={() => onVideoSelect(video)}>
        <img style={{ marginRight: "20px"}} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
        <Typography variant="subtitle1" style={{ padding: "10px"}}>
        <b>{video.snippet.title}</b><br />{video.snippet.channelTitle}
        </Typography>
        </Paper>
        </Grid>
    )
}

export default VideoItem