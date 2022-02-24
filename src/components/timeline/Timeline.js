import React from "react";
import "./Timeline.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "../../firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import FlipMove from "react-flip-move";

function Timeline() {
  const [posts, setPosts] = useState([]);

  //マウント時だけデータを取得
  useEffect(() => {
    const postData = collection(db, "posts");
    const postOrder = query(postData, orderBy("timestamp", "desc"));

    //データを取得
    // getDocs(postOrder).then((querySnapshot) => {
    // setPosts(querySnapshot.docs.map((doc) => doc.data()));
    // });

    // リアルタイムでデータを取得
    onSnapshot(postOrder, (querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="timeline">
      {/* Header */}
      <div className="timeline_header">
        <h2>ホーム</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />

      {/* Post */}
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text} //仮置き
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Timeline;
