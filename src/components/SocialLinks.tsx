import { FunctionComponent } from "react"
import { GithubLogo, LinkedinLogo, Envelope, Article } from 'phosphor-react'
import styles from '../styles/Home.module.css'

const SocialLinks: FunctionComponent = () => {
      return (
        <div className={styles.socialLinks}>
          <a target="_blank" rel="noreferrer" href='https://www.github.com/OlenaMH'><GithubLogo size={24} /></a>
          <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/olena-pitcher-6b3908126/'><LinkedinLogo size={24} /></a>
          <a href='mailto:olenamh@gmail.com'><Envelope size={24} /></a>
          <a href='/resume.pdf' title='Resume Download' download><Article size={24} /></a>
        </div>
      )
    };

export default SocialLinks;