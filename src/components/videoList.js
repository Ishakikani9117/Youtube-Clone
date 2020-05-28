import React from 'react';
import VideoItem from './videoItem';
import { Grid } from '@material-ui/core';

const VideoList = ({videos, onVideoSelect}) => {
    const list = videos.map((video, i) => <VideoItem key={i} video={video} onVideoSelect={onVideoSelect}/> )
    return (
        <Grid container spacing={6}>
            {list}
        </Grid>
    )
}

export default VideoList;
