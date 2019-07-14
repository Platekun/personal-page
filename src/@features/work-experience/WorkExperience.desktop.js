import React from 'react';
import clsx from 'clsx';

import sharedStyles from './WorkExperience.module.css';
import styles from './WorkExperience.desktop.module.css';
import { experiences } from './experiences';

function renderPastExperiences(experience, idx) {
  return (
    <li className={sharedStyles.experienceEntry}>
      <a
        href={experience.companyUrl}
        className={sharedStyles.companyLogoContainer}
      >
        {experience.companyLogo}
      </a>

      <div
        className={clsx([
          styles.timeSegment,
          idx === 0 && styles.firstTimeSegment
        ])}
      >
        <div
          className={clsx([styles.timelineEvent, styles.pastTimelineEvent])}
        />
      </div>

      <div
        className={clsx([sharedStyles.experienceDetails, sharedStyles.past])}
      >
        <h3 hidden>Worked at {experience.companyName}</h3>

        {experience.jobTitles.map(jobTitle => (
          <h4 className={sharedStyles.jobTitle}>{jobTitle}</h4>
        ))}

        <span className={sharedStyles.employmentPeriod}>
          {experience.employmentPeriod}
        </span>
      </div>
    </li>
  );
}

function renderCurrentExperience(experience) {
  return (
    <li className={sharedStyles.experienceEntry}>
      <a
        href={experience.companyUrl}
        className={sharedStyles.companyLogoContainer}
      >
        <div className={sharedStyles.currentJob}>{experience.companyLogo}</div>
      </a>

      <div className={clsx([styles.timeSegment, styles.presentTimeSegment])}>
        <div className={styles.timelineEvent} />
      </div>

      <div className={sharedStyles.experienceDetails}>
        <h3 hidden>Currently working at {experience.companyName}</h3>

        {experience.jobTitles.map(jobTitle => (
          <h4 className={sharedStyles.jobTitle}>{jobTitle}</h4>
        ))}

        <span className={sharedStyles.employmentPeriod}>
          {experience.employmentPeriod}
        </span>
      </div>
    </li>
  );
}

export function DesktopWorkExperience() {
  return (
    <ul className={sharedStyles.jobs}>
      {experiences.map((experience, idx) =>
        idx === experiences.length - 1
          ? renderCurrentExperience(experience)
          : renderPastExperiences(experience, idx)
      )}
    </ul>
  );
}
