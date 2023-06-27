import Link from 'next/link';
import React from 'react';
import styles from '../header.module.css'

type HeaderLinkProps = {
  title: string;
  url: string;
};

const HeaderLink: React.FC<HeaderLinkProps> = ({ title, url }) => {
  return <Link href={url} className={styles.headerLink}>{title}</Link>;
};

export default HeaderLink;