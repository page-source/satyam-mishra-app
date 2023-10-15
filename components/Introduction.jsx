import classnames from 'classnames';
import HomeStyles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css';

const Intro = () => {
  return (
    <div
      className={classnames(
        HomeStyles.mainContent,
        utilStyles.headingMd,
      )}
    >
      <p>Hi I am Satyam Mishra</p>
      <p>
        I am a Front End Developer with 9 years of experience working as a
        Senior Front End Engineer at
        <a
          href="https://newfold.com"
          className={utilStyles.link}
          target="_blank"
        >
          {' '}
          Newfold Digital
        </a>
      </p>
      <p>I have been working as a Front End Developer since the beginning of my career.</p>
      <p>My skillsets include JavaScript, React, Redux, Next, HTML, CSS and much more.</p>
      <p>I have worked on projects belonging to e-commerce, web hosting domains.</p>
      <p>Some of my experience also involves migrating old projects to React, Redux stack.</p>
    </div>
  );
};

export default Intro;
