import React from 'react';

import styles from './WorkExperience.module.css';
import { TicomLogo, NativAppsLogo, FslLogo } from '../../@components/@atoms';
import { IdeawareLogo } from '../../@components/@atoms';

export let experiences = [
  {
    companyName: 'TICOM S.A',
    companyLogo: <TicomLogo className={styles.pastLogo} />,
    companyUrl: 'http://ticom.co/wordpress/la-empresa',
    jobTitles: ['Full Stack Developer'],
    employmentPeriod: 'Jan 2016 - Jul 2016'
  },
  {
    companyName: 'NativApps',
    companyLogo: <NativAppsLogo className={styles.pastLogo} />,
    companyUrl: 'https://nativapps.com/',
    jobTitles: ['Back-End Developer', 'Front-End Developer'],
    employmentPeriod: 'Feb 2017 - Mar 2018'
  },
  {
    companyName: 'FullStack Labs',
    companyLogo: <FslLogo className={styles.pastLogo} />,
    companyUrl: 'https://fullstacklabs.co/',
    jobTitles: ['Front-End Developer'],
    employmentPeriod: 'Mar 2018 - May 2018'
  },
  {
    companyName: 'Ideaware',
    companyLogo: <IdeawareLogo />,
    companyUrl: 'http://ideaware.co/',
    jobTitles: ['Front-End Developer'],
    employmentPeriod: 'Jul 2018 - Present'
  }
];
