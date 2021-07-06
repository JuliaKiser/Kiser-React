import styles from "./projects.module.css";
import PageHeader from "../PageHeader/PageHeader";

const project = () => {
  return (
    <div>
      <div className={styles.project}></div>
      <PageHeader title={"PROJECTS"} />
    </div>
  );
};

export default project;
