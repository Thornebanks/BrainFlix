import React from 'react';
import Header from './components/Header/Header';
import Video from './components/Video/Video';
import VideoDetails from './components/Video-details/Video-details';
import NewComments from './components/New-comments/NewComments';
import Comments from './components/comments/Comments';
import SideBar from './components/Side-bar/SideBar';
import data from './assests/Data/video-details.json';
import './App.scss';



class App extends React.Component {
  state = {
    video: data[0]
  }
  render(){
  return (
    <div className="app">
      <Header />
        <Video  video={this.state.video}/>
        <div className="app__display">
          <div>
            <VideoDetails video={this.state.video}/>
            <NewComments />
            <Comments video={this.state.video}/>
          </div>
                <SideBar />
        </div>
    </div>
  );}
}

export default App;

// https://project-2-api.herokuapp.com
// "api_key": "beed580c-9037-40b1-a6a4-878d40459c3e"