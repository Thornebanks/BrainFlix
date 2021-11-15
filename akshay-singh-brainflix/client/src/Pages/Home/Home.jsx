import React from "react";
import Header from "../../components/Header/Header";
import Video from "../../components/Video/Video";
import VideoDetails from "../../components/Video-details/Video-details";
import NewComments from "../../components/New-comments/NewComments";
import Comments from "../../components/comments/Comments";
import SideBar from "../../components/Side-bar/SideBar";
import axios from "axios";

class Home extends React.Component {
  state = {
    videos: [],
    activeVideo: null,
  };

  getVideos = () => {
    axios
      .get(
        // "https://project-2-api.herokuapp.com/videos?api_key=beed580c-9037-40b1-a6a4-878d40459c3e"
        "http://localhost:8081/videos"
      )
      .then((response) => {
        this.setState({
          videos: response.data
        }, () => {
          this.getVideoDetailsById(this.state.videos[0].id)
          
        });
      })
      .catch((error) => console.log(error));
  };


  getVideoDetailsById = (id) => {
    console.log({ id });
    axios
      .get(
        // `https://project-2-api.herokuapp.com/videos/${id}?api_key=beed580c-9037-40b1-a6a4-878d40459c3e`
        `http://localhost:8081/videos/${id}`
      )
      .then((response) => {
        console.log("hello", response.data);
        this.setState({
          activeVideo: response.data,
        });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.getVideos();
  }

  componentDidUpdate(prevProps, prevState) {
    const { id } = this.props.match.params;

    if (id) {
      if (!prevState.activeVideo ||  prevState.activeVideo.id !== id) {
        this.getVideoDetailsById(id);
        }
    }
  }

  

  render() {
    if(this.state.activeVideo === null){
      return <h2>Loading</h2>
    }
    return (
      <div className="app">
        <Header />
        <Video video={this.state.activeVideo} />
        <div className="app__display">
          <div>
            <VideoDetails activeVideo={this.state.activeVideo} />
            <NewComments />
            <Comments activeVideo={this.state.activeVideo} />
          </div>
          <SideBar video={this.state.videos} activeVideo={this.state.activeVideo} />
        </div>
      </div>
    );
  }
}

export default Home;
