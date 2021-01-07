import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.post}>
      <img
        src="https://avatars.mds.yandex.net/get-ott/374297/2a000001616b87458162c9216ccd5144e94d/678x380"
        alt="Avatar"
      ></img>
      <p>{props.comment}</p>
    </div>
  );
};

export default Post;
