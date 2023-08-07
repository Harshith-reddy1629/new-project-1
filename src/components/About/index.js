import './index.css'
import SkillsList from '../SkillsList'
import SkillItem from '../SkillItem'

const About = () => (
  <div className="about-container">
    <p className="viewer-text">Hello VIEWER,</p>
    <p className="about-name-text">
      This is <span className="span-element">Harshith Reddy</span>.
    </p>
    <p className="section-text">
      In this section,
      <br />
      I will provide you with an overview of
      <br />
      my <span className="span-element">Education</span>, my{' '}
      <span className="span-element">Work</span>, and
      <span className="span-element"> Skills</span>.
      <br /> I have carefully curated a collection of projects
      <br />
      that showcase my abilities and demonstrate my passion for{' '}
      <span className="span-element">IT Industry</span>.
    </p>
    <div className="education-container">
      <h1 className="education-heading">Education</h1>
      <hr className="horizantal-br" />
      <div className="cont">
        <a
          className="inst-anchor"
          href="https://anurag.edu.in/"
          rel="noreferrer"
          target="_blank"
        >
          <h4 className="institute-name">
            Anurag Group of Institutions{' '}
            {/* <span className="location-span">, Hyderabad</span> */}
          </h4>{' '}
        </a>

        <ul className="education-list-container">
          <li className="education-list-item">
            BTech (Bachelor of Technology)
          </li>
          <li className="education-list-item">Mechanical Engineering</li>
          <li className="education-list-item">2018 - 2022</li>
        </ul>
        <a
          className="inst-anchor"
          href="https://srichaitanya.net/"
          rel="noreferrer"
          target="_blank"
        >
          {' '}
          <h4 className="institute-name">
            Sri Chaitanya junior college
            {/* <span className="location-span">, Hyderabad</span> */}
          </h4>
        </a>

        <ul className="education-list-container">
          <li className="education-list-item">Intermediate</li>
          <li className="education-list-item">MPC</li>
          <li className="education-list-item">2016 - 2018</li>
        </ul>
        <a
          className="inst-anchor"
          href="https://www.sprresidentialschoolyellapur.com/"
          rel="noreferrer"
          target="_blank"
        >
          <h4 className="institute-name">
            SPR School of Excellence
            {/* <span className="location-span">, Hyderabad</span> */}
          </h4>
        </a>

        <ul className="education-list-container">
          <li className="education-list-item">
            Secondary School Of Certificate
          </li>

          <li className="education-list-item">2015 - 2016</li>
        </ul>
      </div>
    </div>
    <div className="skills-info-container">
      <h1 className="skills-heading">Skills</h1> <hr className="skills-br" />
      <ul className="skills-container">
        {SkillsList.map(each => (
          <SkillItem key={each.id} item={each} />
        ))}
      </ul>
    </div>
  </div>
)

export default About
// Anurag group of institutions, Hyderabad
// B Tech (Bachelor of Technology)_Mechanical Engineering (ME) (6.5 CGPA)
// 2018 - 2022
// Sri Chaitanya junior college, Hyderabad
// Intermediate_MPC (91.5%)
// 2016 - 2018
// SPR School of Excellence, Warangal
// Secondary School Of Certificate (9.2 CGPA)
// 2015 - 2016
