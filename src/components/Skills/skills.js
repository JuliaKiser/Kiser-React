import styles from "./skills.module.css";
import PageHeader from "../PageHeader/PageHeader";

const backendSkills = (
  <ul>
    <li>BACKEND </li>
    <li>Javascript-mySQL-Node.js</li>
    <li>Express.js-PHP-Python</li>
  </ul>
);

const frontendSkills = (
  <ul>
    <li>FRONTEND</li>
    <li>HTML - ReactJS - CSS</li>
  </ul>
);

const otherSkills = 
  <ul>
    <li>OTHER PROGRAMMING APPS</li>
    <li>Github - Heroku - Squarespace</li>
  </ul>

const microsoftSkills = 
  <ul>
    <li>MICROSOFT</li>
    <li>Word - Powerpoint - Access Database</li>
    <li>Excel - Outlook</li>
  </ul>


const applicationSkills = 
  <ul>
    <li>OTHER APPLICATIONS</li>
    <li>Customer Relationship Management CRM - Apex - WebMenu</li>
    <li>Peoplesoft - Oracle - Deltek Timekeeping</li>
  </ul>

const moreSkills = 
  <ul>
    <li>MORE</li>
  </ul>

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
      <PageHeader title={"What about the Skills?"} />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. 
      </p>
      <div className={styles.container}>
        {totalSkills.map(skills => {
          return <div className={styles.list}>{skills}</div>;
        })}
      </div>
    </div>
  );
};

export default Skills;
