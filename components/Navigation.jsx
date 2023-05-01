import React, { useState } from 'react';
import HomeStyles from '../styles/Home.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classnames from 'classnames';

const navigationItems = [
  { url: 'intro', text: 'Introduction' },
  { url: 'experience', text: 'Experience' },
  { url: 'projects', text: 'Projects' },
  { url: 'contact', text: 'Contact' },
];

const Navbar = () => {
  const router = useRouter();
  return (
    <ul className={HomeStyles.ulStyles}>
      {navigationItems.map((singleRoute) => {
        return (
          <li>
            <NavigationLink
              key={singleRoute}
              href={`/${singleRoute.url}`}
              text={singleRoute.text}
              router={router}
            />
          </li>
        );
      })}
    </ul>
  );
};

const NavigationLink = ({ href, text, router }) => {
  const isActive = router.pathname === (href === '/intro' ? '/' : href);
  return (
    <Link
      href={href === '/intro' ? '/' : href}
      passHref
      className={classnames(
        HomeStyles.navigationTab,
        isActive && HomeStyles.activeTab
      )}
    >
      {text}
    </Link>
  );
};

export default Navbar;
