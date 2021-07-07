import styles from "./skills.module.css";
import PageHeader from "../PageHeader/PageHeader";

const listTitleStyle = { fontWeight: 900, color: '#9B1FE8', marginBottom: '4px'}
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
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <div className={styles.container}>
        {totalSkills.map((skills, index) => {
          return <div key="{index}" className={styles.list}>
            {skills}
          </div>;
        })}
      </div>
    </div>
  );
};

export default Skills;
