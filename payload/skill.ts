import { SkillPayload } from '../types/skill';

const skill: SkillPayload = {
  disable: false,
  skills: [
    {
      category: 'Languages',
      items: [
        { title: 'Java' },
        { title: 'JavaScript' },
        { title: 'TypeScript' },
        { title: 'HTML/CSS' },
      ],
    },
    {
      category: 'Frameworks & Libraries',
      items: [
        { title: 'Spring Boot' },
        { title: 'Vue.js' },
        { title: 'React' },
        { title: 'Next.js' },
        { title: 'Node.js' },
        { title: 'Express.js' },
        { title: 'JSP' },
      ],
    },
    {
      category: 'Infrastructure & Databases',
      items: [
        { title: 'AWS' },
        { title: 'NHN Cloud' },
        { title: 'Docker' },
        { title: 'Jenkins' },
        { title: 'MySQL' },
        { title: 'SQLite' },
      ],
    },
    {
      category: 'Tools & IDEs',
      items: [
        { title: 'IntelliJ IDEA' },
        { title: 'WebStorm' },
        { title: 'Claude' },
        { title: 'Git' },
        { title: 'GitHub' },
        { title: 'GitHub Actions' },
        { title: 'Notion' },
        { title: 'Mattermost' },
      ],
    },
  ],
};

export default skill;
