import Link from "next/link";
import style from "../styles/Nav.module.css";

function Nav() {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/latestNews">Latest News</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
