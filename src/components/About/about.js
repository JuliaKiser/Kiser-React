import styles from "./about.module.css";
import PageHeader from "../PageHeader/PageHeader";
import me from "../../images/jkiser.JPG"

const about = () => {
  return (
    <div className={styles.AboutMe}>
      <PageHeader title={"About Me"} />
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>Hello, I am Julia Kiser</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
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
