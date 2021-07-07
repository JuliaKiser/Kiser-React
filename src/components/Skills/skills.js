import styles from "./skills.module.css";
import PageHeader from "../PageHeader/PageHeader";

const listTitleStyle = {
  fontWeight: 900,
  color: "#9B1FE8",
  marginBottom: "4px",
};
const backendSkills = (
  <ul>
    <li style={listTitleStyle}>BACKEND </li>
    <li>Javascript-mySQL-Node.js</li>
    <li>Express.js-PHP-Python</li>
  </ul>
);

const frontendSkills = (
  <ul>
    <li style={listTitleStyle}>FRONTEND</li>
    <li>HTML - ReactJS - CSS</li>
  </ul>
);

const otherSkills = (
  <ul>
    <li style={listTitleStyle}>OTHER PROGRAMMING APPS</li>
    <li>Github - Heroku - Squarespace</li>
  </ul>
);

const microsoftSkills = (
  <ul>
    <li style={listTitleStyle}>MICROSOFT SKILLS</li>
    <li>Word - Powerpoint - Access Database</li>
    <li>Excel - Outlook</li>
  </ul>
);

const applicationSkills = (
  <ul>
    <li style={listTitleStyle}>OTHER APPLICATIONS</li>
    <li>Customer Relationship Management CRM</li>
    <li>Apex - Web Menu Fringe</li>
    <li>Peoplesoft - Oracle - Deltek Timekeeping</li>
  </ul>
);

const moreSkills = (
  <ul>
    <li style={listTitleStyle}>MORE SKILLS</li>
    <li> VP/Employee Resource Group</li>
    <li>Leadership - Organization Skills</li>
    <li>Effective Communication - Interpersonal Skills</li>
  </ul>
);

const totalSkills = [
  backendSkills,
  frontendSkills,
  microsoftSkills,
  otherSkills,
  applicationSkills,
  moreSkills,
];

const Skills = () => {
  return (
    <div className={styles.Skills}>
      <PageHeader title={"Check out all my skills!"} />
      <p>
        Full Stack Web Developer leveraging background in Finance and Shared
        Services operations to apply problem solving and creativity to develop
        user friendly web applications. Versatile, results oriented, and
        analytical in resolving issues in fast paced environments with the
        ability to work independently. Self-starter, personally committed to
        continuous learning and proven leadership skills.
      </p>
      <div className={styles.container}>
        {totalSkills.map((skills, index) => {
          return (
            <div key="{index}" className={styles.list}>
              {skills}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
