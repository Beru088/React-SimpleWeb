import nav from "./Navbar.module.css"

export default function Header() {
  return (
    <nav>
      <div id={nav.logo}>
        <a href="/">Beru088</a>
      </div>
      <div className={nav.pages}>
        <ul>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/about.html">About</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
