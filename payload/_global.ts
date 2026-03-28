import { GlobalPayload } from '../types/global';

const favicon = '/favicon.ico';
const previewImage = '/preview.jpg';

const title = 'Resume: Yejun Kim';
const description = '백엔드 및 프론트엔드 웹 개발자 김예준의 이력서입니다.';

export const _global: GlobalPayload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: '김예준 이력서',
        },
      ],
      type: 'profile',
      profile: {
        firstName: '예준',
        lastName: '김',
        username: 'yejun95',
        gender: 'male',
      },
    },
  },
  jsonLd: {
    name: '김예준',
    jobTitle: '웹 개발자',
    worksFor: '이엑스메이트',
    url: 'https://github.com/yejun95',
    sameAs: ['https://github.com/yejun95'],
    knowsAbout: [
      'Java',
      'Spring Boot',
      'Vue.js',
      'React',
      'TypeScript',
      'Next.js',
      'Docker',
      'AWS',
    ],
  },
  sectionOrder: [
    'introduce',
    'highlight',
    'experience',
    'project',
    'skill',
    'education',
    'presentation',
    'etc',
  ],
};
