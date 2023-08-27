import "./Footer.module.css"
import insta from "./../../assets/images/icons/insta.png"
import linkedin from "./../../assets/images/icons/linkedin.png"
import github from "./../../assets/images/icons/github.png"

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://www.instagram.com/beru088/">
            <img src={insta} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mikhailyuwankho">
            <img src={linkedin} alt="Linked In" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Beru088">
            <img src={github} alt="GitHub" />
          </a>
        </li>
      </ul>
    </footer>
  )
}
