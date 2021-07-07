import styles from "./projects.module.css";
import PageHeader from "../PageHeader/PageHeader";
import Marvel from "../../images/Marvel-Eye.gif";
import Blog from "../../images/TechBlog.gif";
import TeamGen from "../../images/TeamGen.gif";

const projectClip = (url, thumbnail, description) => {
  return (
    <div className={styles.ClipContainer}>
      <div className={styles.thumbnail}>
        <img src={thumbnail} alt="thumbail"></img>
      </div>
      <div className={styles.Text}>
        <p>{description}</p>
      </div>
    </div>
  );
};

const marvelProjectDescription = `text text text`;

const blogProjectDescription = `text text text`;

const teamProjectDescription = `text text text`;

const project = () => {
  return (
    <div className={styles.project}>
      <PageHeader title={"PROJECTS"} />
      <div className={styles.projectcontent}>
        <div className={styles.paragraph}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div className={styles.gifs}></div>
          {projectClip("https://github.com/JuliaKiser/Marvel.Eye", Marvel, marvelProjectDescription)}
          {projectClip("https://github.com/JuliaKiser/MVC_Tech_Blog", Blog, blogProjectDescription)}
          {projectClip("https://github.com/JuliaKiser/Team.Generator", TeamGen, teamProjectDescription)}
        </div>
      </div>
    </div>
  );
};

export default project;
