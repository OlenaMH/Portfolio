import { FunctionComponent } from "react"
import { GithubLogo, LinkedinLogo, Envelope, Article } from 'phosphor-react'
import styles from '~/styles/Home.module.css'
import { Project } from "~/pages";
import ProjectContent from "~/components/ProjectContent";

const ProjectsContainer: FunctionComponent<{ project:Project }> = ({ project }) => {
    if (project.isFeatured)
      return (
        <div  className={styles.featuredContainer}>
                <div className={styles.featuredContainer_content}>
                  <ProjectContent {...project} />
                </div>
                <div className={styles.featuredContainer_imageContainer}>
                  <img src={project.img} alt="Project Image" />
                </div>
              </div>
      )
      return(
        <div className={styles.projectContainer}>
                <ProjectContent {...project} />
              </div>
      )
    };

export default ProjectsContainer;