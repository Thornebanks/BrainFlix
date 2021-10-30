import React from 'react';
import Header from './components/Header/Header';
import Video from './components/Video/Video';
import VideoDetails from './components/Video-details/Video-details';
import NewComments from './components/New-comments/NewComments';
import Comments from './components/comments/Comments';
import SideBar from './components/Side-bar/SideBar';
import data from './assests/Data/video-details.json';



class App extends React.Component {
  state = {
    video: data[0]
  }
  render(){
  return (
    <div>
      <Header />
        <Video  video={this.state.video}/>
        <VideoDetails video={this.state.video}/>
        <NewComments />
        <Comments video={this.state.video}/>
      <SideBar />
    </div>
  );}
}

export default App;
