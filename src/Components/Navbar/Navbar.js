import Item from "./component/Item.js";
import Logo from "./component/Logo";
import styles from "./navbar.module.sass";
import Right from "./component/Right.js";

function Navbar() {
  return (
    <div className={styles.nav}>
      <div className={styles.nav_box}>
        <Logo />
        <Item />
        <Right/>
      </div>
    </div>
  );
}

export default Navbar;
