import classnames from 'classnames';
import HomeStyles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css';
import accordion from '../styles/accordion.module.css';
import workEx from '../components/textJson/workEx';
import Layout from '../components/layout';


export default function Experience({ allPostsData }) {

  return (
    <Layout>
      <div
        className={classnames(
          HomeStyles.mainContent,
          utilStyles.headingMd,
          HomeStyles.experiencePage
        )}
      >
        <ul className={accordion.tabs}>
          {workEx.map(({ title, dateRange, index, contributions }) => (
            <li className={accordion.tab} key={title}>
              <input type="checkbox" id={title} />
              <label className={accordion.tabLabel} for={title}>
                {title}
              </label>
              <small className={classnames(utilStyles.lightText, accordion.durationText)}>{dateRange}</small>
              <div className={accordion.tabContent}>
                <ul>
                  {contributions.map((item) => {
                    return (
                      <li className={accordion.experienceListItem}>{item}</li>
                    );
                  })}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
