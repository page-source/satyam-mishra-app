import Link from 'next/link';
import HomeStyles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css';
import projects from '../components/textJson/projects';
import classnames from 'classnames';

const Projects = () => {
  return (
      <div className={classnames(HomeStyles.mainContent, utilStyles.headingMd)}>
        <ul>
          {projects.map((item) => {
            return (
              <li>
                <p>{item.heading}</p>
                <Link
                  className={utilStyles.link}
                  href={item.link}
                  target="_blank"
                >
                  Check out the extension
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
  );
};

export default Projects;
