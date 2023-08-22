import React from "react";
import Card from "./Card";

import styles from "./Post.module.css";

const Post = ({ postList }) => {
  return (
    <div className={styles.container}>
      {postList?.map((post) => (
        <Card key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Post;
