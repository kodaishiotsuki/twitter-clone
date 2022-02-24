import {
  VerifiedUser,
  ChatBubbleOutline,
  Repeat,
  FavoriteBorder,
  PublishOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import "./Post.css";

const Post = forwardRef(
  ({ displayName, username, verified, text, avatar, image }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post_avatar">
          <Avatar scr={avatar} />
        </div>
        <div className="post_body">
          <div className="post_header">
            <div className="post_headerText">
              <h3>
                {displayName}
                <span className="post_headerSpecial">
                  <VerifiedUser className="post_badge" />@{username}
                </span>
              </h3>
            </div>
            <div className="post_headerDescription">
              <p>{text}</p>
            </div>
          </div>
          {/* 画像表示 */}
          <img src={image} alt="" />
          <div className="post_footer">
            <ChatBubbleOutline fontSize="small" />
            <Repeat fontSize="small" />
            <FavoriteBorder fontSize="small" />
            <PublishOutlined fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
