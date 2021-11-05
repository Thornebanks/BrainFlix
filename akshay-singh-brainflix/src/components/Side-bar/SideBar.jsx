// import data from "../../assests/Data/video-details.json"
import './sideBar.scss'
import React , { Component } from 'react';
import axios from 'axios';

class SideBar extends Component {
  state = {
    videos: [],
    activeVideo: {}
  };

  getVideos = () => {
    axios
      .get("https://project-2-api.herokuapp.com/videos?api_key=beed580c-9037-40b1-a6a4-878d40459c3e")
      .then((response) => {
        this.setState({
          video: response.data
        })
      })
      .catch((error) => console.log(error));
  };

  componentDidMount(){
    this.getVideos();
  }

  render() {
    const videos = data.slice(1);
    return (
            <div className="side-bar">
              <h3 className="side-bar__videos">next video</h3>
                <div className="side-bar__section">
                  {this.state.videos.map((data) => {
                    return (
                      <div key={data.id}>
                      <div className="side-bar__container">
                        <img className="side-bar__img" src={data.image}  alt="image" />
                        <h3 className="side-bar__title">{data.title}</h3>
                        <h4 className="side-bar__artist">{data.channel}</h4>
                        </div>
                        </div>
                    );
                  })}
                </div>
            </div>
    )
  }
}



// function SideBar(){
//  const videos = data.slice(1);
//   return (
//     <div className="side-bar">
//       <h3 className="side-bar__videos">next video</h3>
//         <div className="side-bar__section">
//           {videos.map((data) => {
//             return (
//               <div className="side-bar__container">
//                 <img className="side-bar__img" src={data.image}            alt="image" />
//                 <h3 className="side-bar__title">{data.title}</h3>
//                 <h4 className="side-bar__artist">{data.channel}</h4>
//                 </div>
//             );
//           })}
//         </div>
//     </div>
//   )
// }

export default SideBar;
