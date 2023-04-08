import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ArticleIcon from "@mui/icons-material/Article";
import Post from "./Post";
import { db } from "../firebase";
import {
  collection,
  orderBy,
  addDoc,
  serverTimestamp,
  query,
  onSnapshot,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser); // pull user from dL - here it's null (initial value)

  // Pushing to DB
  const sendPost = (e) => {
    e.preventDefault();
    addDoc(collection(db, "posts"), {
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: serverTimestamp(),
    });
    setInput("");
  };

  // Reading from DB and pushing to screen
  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));

    const getPosts = onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return () => getPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <img className="feed__avatar" src={user.photoUrl} alt="avatar" />
          <div className="feed__inputBox">
            <form>
              <button onClick={sendPost} className="feed__button">
                <CreateIcon color={"#357a38"} />
              </button>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                className="feed_inputField"
                placeholder="Start a post"
              />
            </form>
          </div>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={InsertPhotoIcon} color={"#3d5afe"} title="Photo" />
          <InputOption
            Icon={VideoLibraryIcon}
            color={"#357a38"}
            title="Video"
          />
          <InputOption
            Icon={EventAvailableIcon}
            color={"#b26500"}
            title="Event"
          />
          <InputOption
            Icon={ArticleIcon}
            color={"#f44336"}
            title="Write article"
          />
        </div>
      </div>

      {/* Posts */}
      <div className="feed__post">
        {posts.map(
          ({
            id,
            data: { name, description, message, photoUrl, timestamp },
          }) => (
            <FlipMove>
              <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
                // timestamp={timestamp}
              />
            </FlipMove>
          )
        )}
      </div>
    </div>
  );
}

export default Feed;
