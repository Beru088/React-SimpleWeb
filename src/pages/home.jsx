import style from "./Home.module.css"
import Header from "./../components/Header"
import university from "./../assets/images/university.jpg"
import project from "./../assets/images/project.jpg"
import intern from "./../assets/images/intern.jpg"

export default function Home() {
  return (
    <>
      <Header />
      <div className={style.highlights}>
        <h2>Highlights</h2>
        <ul id={style.contents}>
          <li className={style.content}>
            <img src={university} alt="My experience in university" />
            <p>
              <strong>Tzu Chi</strong> University of Science and Technology
            </p>
          </li>
          <li className={style.content}>
            <img src={project} alt="My project" />
            <p>
              My <strong>Final Project</strong> in 2022 With My Teams
            </p>
          </li>
          <li className={style.content}>
            <img src={intern} alt="My internship" />
            <p>
              My Internship in <strong>Tzu Chi Buddhist Foundation</strong>
            </p>
          </li>
        </ul>
      </div>
    </>
  )
}
