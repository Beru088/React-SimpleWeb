import style from "./Portfolio.module.css"
import me from "./../assets/images/me.jpg"
import whatsapp from "./../assets/images/icons/whatsapp.png"
import email from "./../assets/images/icons/email.png"
import discord from "./../assets/images/icons/discord.png"
import location from "./../assets/images/icons/location.png"

export default function Portfolio() {
  return (
    <div className={style.background}>
      <div className={style.portfolio}>
        <div id={style.biodata}>
          <div className={style.me}>
            <img src={me} alt="My picture" />
            <h2>MIKHAIL YUWAN KHO, B.Sc</h2>
            <p>FULLSTACK WEB DEVELOPER</p>
          </div>
          <div className={style.contact}>
            <h2>Contact Info</h2>
            <ul>
              <li>
                <div>
                  <img src={whatsapp} alt="Whatsapp" />
                  <p>+62 812-1022-5619</p>
                </div>
              </li>
              <li>
                <div>
                  <img src={email} alt="Email" />
                  <p>mikhailyuwankho@gmail.com</p>
                </div>
              </li>
              <li>
                <div>
                  <img src={discord} alt="Discord" />
                  <p>beru088</p>
                </div>
              </li>
              <li>
                <div>
                  <img src={location} alt="Location" />
                  <p>Kalideres, Jakarta Barat</p>
                </div>
              </li>
            </ul>
          </div>
          <div className={style.education}>
            <h2>Education</h2>
            <ul>
              <li>
                <h3>SMA Cinta Kasih Tzu Chi</h3>
                <p>2016 - 2019</p>
                <p>Natural Science</p>
              </li>
              <li>
                <h3>Tzu Chi University of Science and Technology</h3>
                <p>2019 - 2023</p>
                <p>Bachelor degree, Information Technology and Management</p>
              </li>
              <li>
                <h3>Purwadhika</h3>
                <p>2023 - Present</p>
                <p>Full-Stack Web Developer</p>
              </li>
            </ul>
          </div>
          <div className={style.languages}>
            <h2>Languages</h2>
            <ul>
              <li>
                <div className={style.box}>
                  <div className={style.content}>
                    <h3>Indonesia</h3>
                  </div>
                  <div className={style.info}>
                    <p>Native Proficiency</p>
                  </div>
                </div>
              </li>
              <li>
                <div className={style.box}>
                  <div className={style.content}>
                    <h3>English</h3>
                  </div>
                  <div className={style.info}>
                    <p>Professional Working Proficiency</p>
                  </div>
                </div>
              </li>
              <li>
                <div className={style.box}>
                  <div className={style.content}>
                    <h3>Chinese</h3>
                  </div>
                  <div className={style.info}>
                    <p>Professional Working Proficiency</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div id={style.content}>
          <div className={style.profile}>
            <h2>Profile</h2>
            <p>
              Fresh graduate student in the Department of Information Technology
              and Management at Tzu Chi University of Science and Technology,
              and have been honored to receive a 4-year financial aid
              scholarship program offered by the university. interested in going
              into the professional world where I can test my limit and hone my
              skills by having as much experience and portfolio as my goals, and
              open to work where I can contribute to the growth and success of
              organizations while furthering my personal and professional
              development.
            </p>
          </div>
          <div className={style.experience}>
            <h2>Experience</h2>
            <div className={style.box}>
              <div className={style.content}>
                <h3>System Developer (Internship)</h3>
                <h4>Tzu Chi Foundation</h4>
              </div>
              <div className={style.info}>
                <p>June 2022 - August 2022</p>
              </div>
            </div>
            <ul>
              <li>
                <p>
                  System Developer at Tzu Chi Buddhist Foundation team with
                  day-to-day work of studying real integrated System in real
                  life case, doing frontend integration, as well as design
                  high-fidelity user interfaces.
                </p>
              </li>
              <li>
                <p>
                  Built the whole frontend of digital form that can help
                  interview process from scratch using ReactJS.
                </p>
              </li>
              <li>
                <p>
                  Ensured maintainability by implementing the best practices of
                  clean code architecture and creating technical specifications
                  that were well-documented.
                </p>
              </li>
              <li>
                <p>
                  Build a Dataflow based on real life system of canteen and
                  accounting workflow in university environment.
                </p>
              </li>
            </ul>
          </div>
          <div className={style.project}>
            <h2>Projects</h2>
            <div className={style.wrapper}>
              <div className={style.box}>
                <div className={style.content}>
                  <h3>AI-based Resource Recycling and Education Application</h3>
                  <h4>
                    Role : <u>Back End Developer</u>
                  </h4>
                </div>
                <div className={style.info}>
                  <p>September 2021 - December 2022</p>
                </div>
              </div>
              <ul>
                <li>
                  <p>
                    Designed and implemented an AI object detection and AIoT
                    project to detect and separate various types of recyclable
                    waste and make an educational videos based on the detected
                    waste.
                  </p>
                </li>
                <li>
                  <p>
                    Used OpenCV for making a real-life object simulation photos
                    using data augmentation method and labeled photos into
                    different classes using LabelImg by Tzutalin.
                  </p>
                </li>
                <li>
                  <p>
                    Trained the classified photos with YOLOv4 and Darknet,
                    achieving a 90% accuracy rate for object detection.
                  </p>
                </li>
                <li>
                  <p>
                    Developed a simple app with PySimpleGUI and python, and also
                    using OpenCV to display the object detection results.
                    Additionally, an AIoT system was created using Arduino and a
                    handmade conveyor with a NEMA 17 stepper motor and a camera
                    to facilitate recycling program into recycling machine.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className={style.certificate}>
            <h2>Certifications</h2>
            <div className={style.box}>
              <div className={style.content}>
                <h3>Adobe Photoshop</h3>
              </div>
              <div className={style.info}>
                <p>October 2022 - October 2025</p>
              </div>
            </div>
            <div className={style.box}>
              <div className={style.content}>
                <h3>TOCFL</h3>
                <h4>Certificate Level 3, Total Score 1035</h4>
              </div>
              <div className={style.info}>
                <p>May 2023 - May 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
