import './sideBar.scss'
import React  from 'react';
import { Link } from 'react-router-dom';


 function SideBar({video}){
    const videos = video.slice(1);
    return (
            <div className="side-bar">
              <h3 className="side-bar__videos">next video</h3>
                <div className="side-bar__section">
                  {videos.map((data) => {
                    return (
                      <Link  className="side-bar__link" to={data.id}> 
                      <div key={data.id}></div>
                      <div className="side-bar__container">
                        <img className="side-bar__img" src={data.image}  alt="image" />
                        <h3 className="side-bar__title">{data.title}</h3>
                        <h4 className="side-bar__artist">{data.channel}</h4>
                        </div>
                        </Link>
                    );
                  })}
                </div>
            </div>
    )
  }


export default SideBar;
