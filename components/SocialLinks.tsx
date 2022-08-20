import { FunctionComponent } from "react"
import { GithubLogo, LinkedinLogo, Envelope, Article } from 'phosphor-react'
import styles from '../styles/Home.module.css'

const SocialLinks: FunctionComponent = () => {
      return (
        <div className={styles.socialLinks}>
          <a href='https://www.github.com/OlenaMH'><GithubLogo size={24} /></a>
          <a href='https://www.linkedin.com'><LinkedinLogo size={24} /></a>
          <a href='mailto:olenamh@gmail.com'><Envelope size={24} /></a>
          <a href='/somelink.pdf' title='Resume Download' download><Article size={24} /></a>
        </div>
      )
    };

export default SocialLinks;