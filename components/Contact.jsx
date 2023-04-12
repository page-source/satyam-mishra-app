import HomeStyles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css';


const Contact = () => {
  return (
    <div className={HomeStyles.mainContent}>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Contact</h2>
        <ul className={utilStyles.list}>
          {`Email: satyam.mishra333@gmail.com`}
          <br />
          {`Mobile: +91-9711757809`}
          <br />
          <a
            className={utilStyles.postTitle}
            href="https://www.linkedin.com/in/satyam-mishra-front-end/"
            target="_blank"
            alt="linkedin profile"
          >
            My LinkedIn Profile
          </a>
        </ul>
      </section>
    </div>
  );
};

export default Contact;
