import Link from "next/link";
import HomeStyles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";

const Contact = () => {
  return (
    <div className={HomeStyles.mainContent}>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Contact</h2>
        <ul className={utilStyles.list}>
          <li>{`Email: satyam.mishra333[at]gmail.com`}</li>
          <li>{`+91-9711 757809`}</li>

          <li>
            <Link
              className={utilStyles.link}
              href="https://www.linkedin.com/in/satyam-mishra-front-end/"
              target="_blank"
              alt="linkedin profile"
            >
              My LinkedIn Profile
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;
