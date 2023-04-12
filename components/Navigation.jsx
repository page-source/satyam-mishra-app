import React from 'react';
import classNames from 'classnames';
import HomeStyles from '../styles/Home.module.css'
import Home from '../pages';
import Link from 'next/link';

const Navigation = ({onClick}) => {
  return (
    <ul className={HomeStyles.ulStyles}>
      <Link href="" className={HomeStyles.navigationTab} onClick={() => onClick(1)}>Introduction</Link>
      <Link href="" className={HomeStyles.navigationTab} onClick={() => onClick(2)}>Experience</Link>
      <Link href="" className={HomeStyles.navigationTab} onClick={() => onClick(3)}>Projects</Link>
      <Link href="" className={HomeStyles.navigationTab} onClick={() => onClick(4)}>Contact</Link>
    </ul>
  )
}

export default Navigation;