import classnames from 'classnames';
import HomeStyles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css';
import accordion from '../styles/accordion.module.css';

import Link from 'next/link';
import workEx from './workEx';
import { useState } from 'react';

export default function Experience({ allPostsData }) {
  console.log(typeof workEx);

  return (
    <>
      <div
        className={classnames(
          HomeStyles.mainContent,
          utilStyles.headingMd,
          utilStyles.padding1px,
          HomeStyles.experiencePage
        )}
      >
        <h2 className={utilStyles.headingLg}>My Experience</h2>
        <div class={accordion.tabs}>
          {workEx.map(({ title, dateRange, index, contributions }) => (
            <div className={accordion.tab} key={title}>
              <input type="checkbox" id={title} />
              <label className={accordion.tabLabel} for={title}>
                {title}
              </label>
              <small className={utilStyles.lightText}>
                {dateRange}
              </small>
              <div className={accordion.tabContent}>
                {contributions.map((item) => {
                  return <li>{item}</li>;
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
