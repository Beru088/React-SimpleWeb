import header from "./Header.module.css"

export default function Header() {
  return (
    <div className={header.hero}>
      <div className={header.content}>
        <h1>MIKHAIL YUWAN KHO, B.Sc</h1>
        <p>Fullstack Web Developer</p>
        <a href="/portfolio">See My Portfolio</a>
      </div>
    </div>
  )
}
