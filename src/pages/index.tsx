import type { NextPage } from "next";
import Head from "next/head";
import styles from "~/styles/Home.module.css";
import SocialLinks from "~/components/SocialLinks";
import ProjectsContainer from "~/components/ProjectsContainer";

export type Project = {
  title: string;
  description: string;
  github?: string;
  demo?: string;
  img?: string;
  technology: string[];
  isFeatured?: boolean;
};
/**
 *  Only featured projects require an image
 */
const projects: Project[] = [
  {
    title: "OKCandles",
    description: "description tbd",
    github: "github link",
    demo: "demolink",
    img: "https://via.placeholder.com/400x200?text=Project+Image",
    technology: ["ReactJS", "React-Query", "Strapi"],
    isFeatured: true
  },
  {
    title: "Portfolio",
    description: "description tbd",
    github: "github link",
    demo: "demolink",
    img: "https://via.placeholder.com/400x200?text=Project+Image",
    technology: ["ReactJS", "React-Query", "Strapi"],
    isFeatured: true
  },
];

/**
 *  Don't define an image when adding a project
 */

const work = [
  {
    title: "Work",
    basis: "Contractual",
    dates: "01-2020",
    img: "https://via.placeholder.com/100x100?text=Project+Image",
  },
  {
    title: "Work2",
    basis: "Contractual",
    dates: "01-2020",
    img: "https://via.placeholder.com/100x100?text=Project+Image",
  },
  {
    title: "Work3",
    basis: "Contractual",
    dates: "01-2020",
    img: "https://via.placeholder.com/100x100?text=Project+Image",
  },
];

const Home: NextPage = () => {
  const nonFeatured = projects.filter(f => !f.isFeatured);
  return (
    <div className={styles.container}>
      <Head>
        <title>Olena Pitcher Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.headerContainer}>
          <div className={styles.headerContainer_image}>
            <img src="/me.jpg" alt="Portfolio Pic" width={300} height={300} />
          </div>
          <div className={styles.headerContainer_content}>
            <h1 className={styles.title}>Olena Pitcher</h1>
            <span className={styles.subtitle}>Introvert</span>
            <p>
              I currently do not know how to do anything or be an asset to any
              company. Thanks for nothing. I do my best.
            </p>
            <SocialLinks />
          </div>
        </section>

        <h2 className={styles.sectionHeader}>Projects</h2>
        <section className={styles.featured}>
          {projects &&
            projects.filter(f => f.isFeatured === true).map((item, i) => (
              <ProjectsContainer project={item} key={i} /> 
            ))}
        </section>

        {nonFeatured && nonFeatured.length > 0 && (
          <section className={styles.nonFeatured}>
            {nonFeatured.map((item, i) => (
              <ProjectsContainer project={item} key={i} /> 
            ))}
          </section>
        )}

        <h2 className={styles.sectionHeader}>Employment</h2>
        <section className={styles.work}>
          {work &&
            work.map((item, i) => (
              <div key={i} className={styles.workContainer}>
                <img src={item.title} alt={item.title} />
                <div className={styles.workContainer_content}>
                  <h3 className={styles.header}>{item.title}</h3>
                  <p className={styles.workContainer_details}>
                    {item.basis}: {item.dates}
                  </p>
                </div>
              </div>
            ))}
        </section>

        <section></section>
      </main>

      <footer className={styles.footer}>
        <p>Olena Pitcher - Perry, UT</p>
        <SocialLinks />
      </footer>
    </div>
  );
};

export default Home;
