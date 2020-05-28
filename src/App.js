import React, { Component} from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import {SearchBar, VideoList, VideoDetail} from './components';

class App extends Component{
  state={
     videos: [],
     selectedVideo: null
  }

  onFormSubmit = async (searchTerm) => {
      const {data: {items}} = await youtube.get('search',
      { params:{
         part:'snippet',
         maxReasults: 5,
         key: 'AIzaSyA7irBDIhNMcLToborDdHXyLWFjIKWyvj8',
         q: searchTerm
          }});
      this.setState({
        videos: items,
        selectedVideo: items[0]
      });

  }

  componentDidMount(){
    this.onFormSubmit('Me taylor swift');
  }
  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  }

  render(){
    const {selectedVideo, videos} = this.state;
  return (
    <Grid container style={{justifyContent: "center"}} spacing={10} xs={12}>
    <Grid item xs={11} >
    <Grid container spacing={10}>
    <Grid item xs={12}>
    <SearchBar onFormSubmit={this.onFormSubmit}/>
    </Grid>
    <Grid item xs={8}>
    <VideoDetail video={selectedVideo} />
    </Grid>
    <Grid item xs={4}>
    <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
    </Grid>
    </Grid>
    </Grid>
    </Grid>
  );
 }
}

export default App;
