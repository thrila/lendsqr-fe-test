import styles from "./Header.module.scss";
import LogoIcon from "@/icons/Union.svg";
import SearchIcon from "@/icons/search.svg";
import NotificationIcon from "@/icons/notification.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Left: Logo */}
      <div className={styles.left}>
        <LogoIcon className={styles.logo} />
        <h1>Lendsqr</h1>
      </div>

      {/* Center: Search */}
      <div className={styles.center}>
        <div className={styles.searchWrapper}>
          <input type="text" placeholder="Search for anything" className={styles.searchInput} />
          <button className={styles.searchButton}>
            <SearchIcon />
          </button>
        </div>
      </div>

      {/* Right: Notifications + Profile */}
      <div className={styles.right}>
        <p>
          <Link href="docs">Docs</Link>
        </p>
        <NotificationIcon className={styles.icon} />

        <div className={styles.profileWrapper}>
          <div className={styles.profile}>
            <img src="/images/user.png" alt="User" className={styles.profileImg} />
          </div>
          <span className={styles.profileName}>John Doe</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
