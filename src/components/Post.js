import React, { forwardRef } from "react";
import "./Post.css";
import InputOption from "./InputOption";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <img src={photoUrl} alt="avatar" />
        <div className="post__info">
          <p>{name}</p>
          <p>{description}</p>
          {/* <p>{timestamp.toLocaleString("en-GB", { timeZone: "UTC" })}</p> */}
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption
          Icon={ThumbUpOffAltOutlinedIcon}
          color={"#455a64"}
          title="Like"
        />
        <InputOption Icon={CommentIcon} color={"#455a64"} title="Comment" />
        <InputOption Icon={ShareIcon} color={"#455a64"} title="Share" />
        <InputOption Icon={SendIcon} color={"#455a64"} title="Send" />
      </div>
    </div>
  );
});

export default Post;
