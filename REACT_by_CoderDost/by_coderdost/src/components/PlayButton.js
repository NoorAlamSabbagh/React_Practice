//Lecture 4
//Lecture 5 useState

import { useState } from "react";
import "./PlayButton.css";

function PlayButton({ children, onPlay, onPause }) {//play aur pause hi children props ha
  // let playing = false; // don't use this approach;
  const [playing, setPlaying] = useState(false);

  function handleClick(e) {
    // console.log(e);
    e.stopPropagation();//prevent event bubling

    if(playing) onPause()
    else onPlay();
  setPlaying(!playing);
  }

  return  <button onClick={handleClick}>{children} : {playing?'⏸️':'⏯️'}</button>
}

export default PlayButton;
