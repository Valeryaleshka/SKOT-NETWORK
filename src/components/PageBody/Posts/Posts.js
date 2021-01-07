import styles from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = () => {
  const comments = [
    "hello",
    "arrr",
    "What an idiot",
    "hello",
    "arrr",
    "hello",
    "arrr",
    "hello",
    "arrr",
  ];

  return (
    <div className={styles.post}>
      {comments.map((post) => (
        <Post comment={post} />
      ))}
    </div>
  );
};

export default Posts;
