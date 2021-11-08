import './videoDetails.scss';
import React from 'react';


function VideoDetails() {
  
    // const date = new Date(Number(props.activeVideo.timestamp)).toLocaleDateString()

    return (
     <section className="video">
        {/* <h1 className="video__title">{props.activeVideo.title}</h1>
        <div className="video__art">
            <p className="video__artist">{"By " + props.activeVideo.channel}</p>
            <p className="video__date">{date}</p>
        </div> */}
      </section>
      
    )
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