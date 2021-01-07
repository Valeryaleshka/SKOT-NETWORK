import styles from "./UserInfoBlock.module.css";

const UserInfoBlock = () => {
  return (
    <div className={styles.content}>
      <img src="https://upload.wikimedia.org/wikipedia/ru/0/00/The_Child_aka_Baby_Yoda_%28Star_Wars%29.jpg"></img>
      <div>Profile Info</div>
    </div>
  );
};

export default UserInfoBlock;
