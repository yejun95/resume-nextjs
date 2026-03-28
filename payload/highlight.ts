import { HighlightPayload } from '../types/highlight';

const highlight: HighlightPayload = {
  disable: false,
  list: [
    {
      title: 'OMS/WMS 시스템 구축',
      description:
        '오픈마켓 주문 수집부터 출고까지 전 프로세스를 설계·구현하고, AWS 인프라 운영 및 자동화 구축',
      keywords: ['Java', 'Spring Boot', 'Next.js', 'AWS'],
    },
    {
      title: '다양한 SI/SM 프로젝트 경험',
      description:
        '김앤장, SK Broadband, 공공기관 등 다양한 도메인의 프로젝트에서 백엔드·프론트엔드 개발 및 고객사 대응',
      keywords: ['Vue.js', 'React', 'Node.js', 'TypeScript'],
    },
    {
      title: 'DevOps & 인프라 운영',
      description:
        'Docker, Jenkins CI/CD 파이프라인 구축, AWS 인프라 운영 및 CloudWatch + Lambda 기반 모니터링·자동화',
      keywords: ['Docker', 'Jenkins', 'AWS', 'NHN Cloud'],
    },
  ],
};

export default highlight;
