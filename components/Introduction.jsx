import classnames from 'classnames';
import HomeStyles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'

const Intro = () => {
  return (
    <div className={classnames(HomeStyles.mainContent, utilStyles.headingMd, utilStyles.padding1px)}>
      <p>Hi I am Satyam Mishra</p>
        <p>
          I am a Front End Developer with 7 years of experience working as a Senior Front End Engineer at  
          <a href="https://newfold.com" className={utilStyles.postTitle} target="_blank"> Newfold Digital</a>
        </p>
    </div>
  )
}

export default Intro;