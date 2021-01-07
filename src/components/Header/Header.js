import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <img
        className={styles.img}
        src="https://st2.depositphotos.com/4841797/7448/i/600/depositphotos_74484829-stock-photo-bodybuilder-gym-logo.jpg"
      ></img>
    </div>
  );
};

export default Header;
