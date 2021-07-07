import styles from "./projects.module.css";
import PageHeader from "../PageHeader/PageHeader";
import Marvel from "../../images/Marvel-Eye.gif";
import Blog from "../../images/TechBlog.gif";
import TeamGen from "../../images/TeamGen.gif";

const linkBtnSvg = (url) => {
  return (
    <div
      className={styles.linkButton}
      onClick={(e) => window.open(url, "_blank").focus}
    >
      <svg class="svg-icon" viewBox="0 0 20 20">
        <path
          fill="none"
          d="M19.129,18.164l-4.518-4.52c1.152-1.373,1.852-3.143,1.852-5.077c0-4.361-3.535-7.896-7.896-7.896
								c-4.361,0-7.896,3.535-7.896,7.896s3.535,7.896,7.896,7.896c1.934,0,3.705-0.698,5.078-1.853l4.52,4.519
								c0.266,0.268,0.699,0.268,0.965,0C19.396,18.863,19.396,18.431,19.129,18.164z M8.567,15.028c-3.568,0-6.461-2.893-6.461-6.461
								s2.893-6.461,6.461-6.461c3.568,0,6.46,2.893,6.46,6.461S12.135,15.028,8.567,15.028z"
        ></path>
      </svg>
    </div>
  );
};
const projectClip = (url, thumbnail, description) => {
  return (
    <div className={styles.VideoContainer}>
      <div className={styles.Thumbnail}>
        {linkBtnSvg(url)}
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
      <PageHeader title={"Projects"} />
      <div className={styles.projectcontent}>
        <div className={styles.Paragraph}>
          <p>
            Click the image to view each repository for the following projects.
            There you will also find deployed links for each as well as all my
            other repository and projects located within my GitHub profile. Feel
            free to follow me or reach out with any questions regarding.
          </p>
        </div>
        <div className={styles.Videos}>
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
