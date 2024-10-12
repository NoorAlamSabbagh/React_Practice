// Lecture 3
/*
import './App.css';
import Video from './components/Video';
import videos from './data/data'
function App() {
  
  return (
    <div className="App">
      {
        videos.map((video)=><Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
          image= {video.image}
        ></Video>)
      }
    
    </div>
  );
}

export default App;

//
import './Video.css';

function Video({title,id,channel="Coder Dost",views,time,verified,image}) {
   
  
  return (
      <>
      <div className='container'>
      <div className="pic">
      { <img src={`https://picsum.photos/id/${id}/160/90`} alt="Katherine Johnson" /> }
    //   <img src={image} alt="Katherine Johnson" />
      </div>
      <div className="title">{title}</div>
      <div className="channel">{channel} {verified && '✅'} </div>
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
      </div>
      </>
  );
}

export default Video;


*/


//Lecture4 
/*
//App
import "./App.css";
import Video from "./components/Video";
import PlayButton from "./components/PlayButton";
import videos from "./data/data";

function App() {
  return (
    <div className="App" onClick={()=>console.log("Noor Alam")}>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
          image={video.image}
        >
          <PlayButton
            message="Play-Msg"
            onPlay={() => console.log("Playing...", video.title)}
            onPause={() => console.log("Pause...", video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
    </div>
  );
}

export default App;

//
import './Video.css';

function Video({title,id,channel="Coder Dost",views,time,verified,image, children}) {//children yaha pe playButton ka ha
  
  
  return (
    <>
    <div className='container'>
    <div className="pic">
    //<img src={`https://picsum.photos/id/${id}/160/90`} alt="Katherine Johnson" /> 
      <img src={image} alt="Katherine Johnson" />
      </div>
      <div className="title">{title}</div>
      <div className="channel">{channel} {verified && '✅'} </div>
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
      <div>{children}</div>
      </div>
      </>
  );
}

export default Video;


//
//Lecture 4

import "./PlayButton.css";

function PlayButton({ children, onPlay, onPause }) {//play aur pause hi children props ha
  let playing = false; // don't use this approach;

  function handleClick(e) {
      playing = !playing;
    if(playing) onPause()
    else onPlay();
    e.stopPropagation();//prevent event bubling
  }

  return <button onClick={handleClick}>{children}:{playing?">" : "||"}</button>;
}

export default PlayButton;

*/