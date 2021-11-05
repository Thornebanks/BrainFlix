import './videoDetails.scss';
import React , { Component } from 'react';
import axios from 'axios';

class VideoDetails extends Component {
  state = {
    video: [],
    activeVideo: {}
  };
  

  getVideo = (id) => {
    axios
      .get(`https://project-2-api.herokuapp.com/videos/${id}?api_key=beed580c-9037-40b1-a6a4-878d40459c3e`)
      .then((response) => {
        this.setState({
          video: response.data
        })
      })
      .catch((error) => console.log(error));
  }

  componentDidMount(){
    this.getVideo();
  }
  

  render(){
    const date = new Date(Number(this.state.video.timestamp)).toLocaleDateString()

    return (
      <div key={video.id}>
      <section className="video">
        <h1 className="video__title">{this.state.title}</h1>
        <div className="video__art">
            <p className="video__artist">{"By " + this.state.video.channel}</p>
            <p className="video__date">{date}</p>
        </div>
      </section>
      </div>
    )
  }

}

// function VideoDetails(props){
//   const date = new Date(Number(props.video.timestamp)).toLocaleDateString();
//   console.log(props.timestamp)
    
//     return (
//         <section className="video">
//         <h1 className="video__title">{props.video.title}</h1>
//         <div className="video__art">
//           <p className="video__artist">{"By " + props.video.channel}</p>
//           <p className="video__date">{date}</p>
//         </div>
//         <article className="video__description">
//           {props.video.description}
//         </article>
//       </section>
     
//     );
// }
export default VideoDetails;