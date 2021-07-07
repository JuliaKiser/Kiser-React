import styles from "./about.module.css";
import PageHeader from "../PageHeader/PageHeader";
import me from "../../images/jkiser.JPG";

const about = () => {
  return (
    <div className={styles.AboutMe} id="about">
      <PageHeader title={"About Me"} />
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>Hello, I am Julia Kiser</h2>
          <p>
            I am a full stack web developer, passionate about web development
            and ready to join your team. I have a Masters degree in Business
            Adminstration and certified through UNC Charlottes Coding Bootcamp,
            with a final grade of an A+. In addition to my education, I have
            years of corporate experience working in various functions of
            finance as well as spending any spare time doing volunteer efforts
            with the company. I have a knack for leadership, and a drive to
            connect with people across all areas of a business. I am eager to
            continue growing as a web developer, utilizing my communication, my
            drive, my creativity and my hard work to excel in this career.
          </p>
        </div>
        <div className={styles.photo}>
          <img className={styles.me} src={me} alt="me"></img>
        </div>
      </div>
    </div>
  );
};

export default about;
