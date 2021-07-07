import styles from "./projects.module.css";
import PageHeader from "../PageHeader/PageHeader";
import Marvel from "../../images/Marvel-Eye.gif";
import Blog from "../../images/TechBlog.gif";
import TeamGen from "../../images/TeamGen.gif";

const projectClip = (url, thumbnail, description) => {
  return (
    <div className={styles.VideoContainer}>
      <div className={styles.Thumbnail}>
        <img src={thumbnail} alt="thumbail"></img>
      </div>
      <div className={styles.Text}>
        <p>{description}</p>
      </div>
    </div>
  );
};

const marvelProjectDescription = `Marvel Eye takes the user through an interactive journey to select and review some of Marvels most popular characters, watch movie trailers and explore marvels entire character database.`;

const blogProjectDescription = `The MVC Tech Blog is designed to allow the user to sign up and login in to essentially a blog post application. You can create new posts, edit/delete post or comment on posts that have already been made.`;

const teamProjectDescription = `This web application allows the user to create, modify and delete notes. It utilizes Express.js backend that saves/retrieves files from a JSON file.`;

const project = () => {
  return (
    <div className={styles.project}>
      <PageHeader title={"PROJECTS"} />
      <div className={styles.projectcontent}>
        <div className={styles.Paragraph}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div className={styles.Videos}></div>
          {projectClip(
            "https://github.com/JuliaKiser/Marvel.Eye",
            Marvel,
            marvelProjectDescription
          )}
          {projectClip(
            "https://github.com/JuliaKiser/MVC_Tech_Blog",
            Blog,
            blogProjectDescription
          )}
          {projectClip(
            "https://github.com/JuliaKiser/Team.Generator",
            TeamGen,
            teamProjectDescription
          )}
        </div>
      </div>
    </div>
  );
};

export default project;
