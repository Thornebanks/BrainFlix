import './videoDetails.scss';
import React from 'react';


function VideoDetails({activeVideo}) {
  
    const date = new Date(Number(activeVideo.timestamp)).toLocaleDateString()

    return (
     <section className="video">
        <h1 className="video__title">{activeVideo.title}</h1>
        <div className="video__art">
            <p className="video__artist">{"By " + activeVideo.channel}</p>
            <p className="video__date">{date}</p>
        </div>
        <article className="video__description">
          {activeVideo.description}
         </article>
      </section>
      
    )
  }


export default VideoDetails;