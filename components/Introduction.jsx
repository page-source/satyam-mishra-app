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
        I am a Front End Developer with 10 years of experience working in the Front End side of web.
        I am currently working as a Lead Front End Engineer at
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
      <p>My skillsets include JavaScript, React, Redux, Node, Next, Webpack, Micro Frontends and much more.</p>
      <p>I have always worked on customer facing projects such as an e-commerce application or a web hosting platform.</p>
      <p>Some of my experience also involves migrating old projects to React, Redux stack.</p>
    </div>
  );
};

export default Intro;
