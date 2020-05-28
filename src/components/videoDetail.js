import React from 'react';
import { Paper, Typography} from '@material-ui/core';

const VideoDetail = ({video}) => {
    if(!video) return <div>Loading...</div>;
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    const channelSrc = `https://www.youtube.com/channel/${video.snippet.channelId}`
    console.log(video);
    return(
        <React.Fragment>
        <Paper elevation={6} style={{height: "600px"}}>
        <iframe frameBorder="0" width="100%" height="100%" title="video player" src={videoSrc}/>
        </Paper> 
        <Paper elevation={6} style={{ padding: "15px"}} >
        <Typography variant="h4">{video.snippet.title}</Typography>
        <Typography variant="subtitle1"><a href={channelSrc} target="_blank">{video.snippet.channelTitle}</a></Typography>
        <Typography>{video.snippet.description}</Typography>
        </Paper>
        </React.Fragment>
    )
}

export default VideoDetail;