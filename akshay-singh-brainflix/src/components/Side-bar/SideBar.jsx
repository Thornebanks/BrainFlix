import data from "../../assests/Data/video-details.json"

function SideBar(){
 const videos = data.slice(1);
  return (
      <div>
        {videos.map((data) => {
          return (
            <div>
              <img src={data.image} alt="image" />
              <h3>{data.title}</h3>
              <h4>{data.channel}</h4>
              </div>
          );
        })}
      </div>
  )
}

export default SideBar;
