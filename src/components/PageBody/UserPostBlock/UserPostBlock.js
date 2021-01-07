import styles from "./UserPostBlock.module.css";

const UserPostBlock = () => {
  return (
    <div className={styles.content}>
      <textarea></textarea>
      <button>Add Post</button>
    </div>
  );
};

export default UserPostBlock;
