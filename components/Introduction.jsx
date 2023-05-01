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
        I am a Front End Developer with 8 years of experience working as a
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
      <p>I have seen some months of jQuery in the beginning of my career but post that it was all about React, Redux, Next etc which continues till date. </p>
      <p>Is your application loading slow? Or you want to migrate out of complex legacy systems? - I might be your guy!</p>
      <p>I can lead a small team too and train them to unlock their full potential.</p>
    </div>
  );
};

export default Intro;
