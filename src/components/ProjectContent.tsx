import { FunctionComponent } from "react"
import { GithubLogo, LinkedinLogo, Envelope, Article } from 'phosphor-react'
import styles from '~/styles/Home.module.css'
import { Project } from "~/pages";

const ProjectContent: FunctionComponent<Project> = (project) => {
      return (
        <>
        <h3 className={styles.header}>{project.title}</h3>
                  <p className={styles.featuredContainer_technology}>
                    {project.technology.toString().replaceAll(",", ", ")}
                  </p>
                  <p>{project.description}</p>
                  <div>
                    {project.github && (
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={project.github}
                        className={styles.link}
                      >
                        Github
                      </a>
                    )}
                    {project.demo && (
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={project.demo}
                        className={styles.link}
                      >
                        Demo
                      </a>
                    )}
                  </div>
        </>
      )
    };

export default ProjectContent;