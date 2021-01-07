import styles from "./PageBody.module.css";
import Posts from "./Posts/Posts";
import UserInfoBlock from "./UserInfoBlock/UserInfoBlock";
import UserPostBlock from "./UserPostBlock/UserPostBlock";

const PageBody = () => {
  return (
    <div className={styles.content}>
      <UserInfoBlock />
      <UserPostBlock />
      <Posts />
    </div>
  );
};

export default PageBody;
