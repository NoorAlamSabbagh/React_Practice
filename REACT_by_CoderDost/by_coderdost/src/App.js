import "./App.css";
import Video from "./components/Video";
import PlayButton from "./components/PlayButton";
import videoDB from "./data/data";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  console.log("Render App");
  const [videos, setVideos] = useState(videoDB);
  return (
    <div className="App" onClick={() => console.log("Noor Alam")}>
      <div>
        <button
          onClick={() =>
            setVideos([
              ...videos,
              {
                id: videos.length + 1,
                title: "MongoDb Tutorial",
                views: "200K",
                time: "6 months ago",
                channel: "Coder Dost",
                verified: true,
              },
            ])
          }
        >
          Add Video
        </button>
      </div>
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
      <Counter />
    </div>
  );
}

export default App;
