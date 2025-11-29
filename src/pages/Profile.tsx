import {
  EnvelopeClosedIcon,
  GlobeIcon,
  LinkedInLogoIcon,
  MobileIcon,
} from '@radix-ui/react-icons';
import { Box } from '@ui/components/Box';
import { Card } from '@ui/components/Card';
import { Chip } from '@ui/components/Chip';
import { Text } from '@ui/components/Text';
import resumeData from '../data/resume.json';
import {
  contactItem,
  educationItem,
  experienceHeader,
  experienceHighlights,
  experienceItem,
  leftColumn,
  nameSection,
  profileContainer,
  rightColumn,
  section,
  sectionTitle,
  skillCategory,
  skillsGrid,
  skillsSection,
} from './Profile.css';

export const Profile = () => {
  const { basics, work, education, skills } = resumeData;

  return (
    <Box as="section" className={profileContainer} scrollable>
      <div className={leftColumn}>
        <Box className={section}>
          <Text as="h1" size="h2" className={sectionTitle}>
            {basics.name}
          </Text>
          <Card className={nameSection}>
            <Text>{basics.label}</Text>

            <div>
              <a href={`mailto:${basics.email}`} className={contactItem}>
                <EnvelopeClosedIcon />
                <Text as="span">
                  {basics.email}
                </Text>
              </a>
              <a href={`tel:${basics.phone}`} className={contactItem}>
                <MobileIcon />
                <Text as="span">
                  {basics.phone}
                </Text>
              </a>
              <div className={contactItem}>
                <GlobeIcon />
                <Text as="span">
                  {basics.location.city}, {basics.location.region}
                </Text>
              </div>
              {basics.profiles?.map((profile) => (
                <a
                  key={profile.network}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactItem}
                >
                  <LinkedInLogoIcon />
                  <Text as="span">
                    {profile.network}
                  </Text>
                </a>
              ))}
            </div>
          </Card>
        </Box>

        <Box className={section}>
          <Text as="h2" size="h3" className={sectionTitle}>
            Skills
          </Text>
          {skills.map((skillGroup) => (
            <Card key={skillGroup.name} className={skillsSection}>
              <div className={skillCategory}>
                <Text as="h3" size="h6">
                  {skillGroup.name}
                </Text>
                <div className={skillsGrid}>
                  {skillGroup.keywords.map((skill) => (
                    <Chip key={skill} variant="default">
                      {skill}
                    </Chip>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </Box>
      </div>

      <div className={rightColumn}>
        <Box className={section}>
          <Text as="h2" size="h3" className={sectionTitle}>
            About Me
          </Text>
          <Card>
            <Text>{basics.summary}</Text>
          </Card>
        </Box>

        <Box className={section}>
          <Text as="h2" size="h3" className={sectionTitle}>
            Experience
          </Text>
          {work.map((job) => (
            <Card key={`${job.name}-${job.position}`}>
              <div className={experienceItem}>
                <div className={experienceHeader}>
                  <div>
                    <Text as="h3" size="h5">
                      {job.position}
                    </Text>
                    <Text>
                      {job.name} • {job.location}
                    </Text>
                  </div>
                  <Text>
                    {new Date(job.startDate).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric',
                    })}{' '}
                    -{' '}
                    {job.endDate
                      ? new Date(job.endDate).toLocaleDateString('en-US', {
                          month: 'short',
                          year: 'numeric',
                        })
                      : 'Present'}
                  </Text>
                </div>
                <Text>{job.summary}</Text>
                {job.highlights && job.highlights.length > 0 && (
                  <ul className={experienceHighlights}>
                    {job.highlights.map((highlight) => (
                      <li key={highlight}>
                        <Text as="span">{highlight}</Text>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Card>
          ))}
        </Box>

        <Box className={section}>
          <Text as="h2" size="h3" className={sectionTitle}>
            Education
          </Text>
          {education.map((edu) => (
            <Card
              key={`${edu.institution}-${edu.area}`}
            >
              <div className={educationItem}>
                <Text as="h3" size="h5">
                  {edu.area}
                </Text>
                <Text>
                  {edu.studyType} • {edu.institution}
                </Text>
                <Text>
                  {edu.location} • {new Date(edu.endDate).getFullYear()}
                </Text>
              </div>
            </Card>
          ))}
        </Box>
      </div>
    </Box>
  );
};
