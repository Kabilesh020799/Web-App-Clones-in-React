import React, { useState, useEffect } from "react";
import Video from "./components/Video";
import db from "./firebase";
import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    // BEM
    <div className="App">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, share }) => (
            <Video
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              share={share}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;