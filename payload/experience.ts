import { ExperiencePayload } from '../types/experience';

const experience: ExperiencePayload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '이엑스메이트 (Exmate)',
      positions: [
        {
          title: '개발팀 · 사원',
          startedAt: '2025-07',
          descriptions: [
            { content: 'OMS/WMS 시스템 백엔드·프론트엔드 개발' },
            { content: '오픈마켓 주문 수집부터 출고까지의 프로세스 설계·구현' },
            { content: '대량 데이터 인덱싱 전략을 통한 쿼리 최적화' },
            { content: '엑셀 기반 배치 등록 시스템 개발 (청크 단위 등록)' },
            { content: 'AWS 인프라 운영 및 CloudWatch + Lambda 기반 모니터링·자동화 구축' },
            { content: 'n8n을 활용한 데일리 리포트 자동화 프로세스 구축' },
            { content: 'Claude 서브에이전트를 활용한 코드 리뷰 자동화 및 코딩 컨벤션 도입' },
            { content: '사내 NAS 관리 (공용 폴더, 팀 폴더, 메신저 등)' },
          ],
          skillKeywords: [
            'Java',
            'Spring Boot',
            'Next.js',
            'TypeScript',
            'MSSQL',
            'AWS (EC2, RDS, S3, Lambda, CloudWatch, ALB)',
          ],
        },
      ],
    },
    {
      title: '티엔아이정보 (구 비제이시스템즈)',
      positions: [
        {
          title: '기술개발부 · 사원',
          startedAt: '2023-07',
          endedAt: '2025-07',
          descriptions: [
            { content: '비제이시스템즈 재직 중, 2025년 4월 1일에 모회사인 티엔아이정보로 흡수합병' },
            { content: '김앤장 : 필라2 추가세액 계산 솔루션 개발 (2023.11 ~ 2024.01)' },
            { content: 'SK Broadband admin 시스템 유지보수 (2023.07 ~ 2023.10, 2024.05 ~ 2024.10)' },
            { content: 'WBS (Work Breakdown Structure) 시스템 개발 (2024.05 ~ 2025.07)' },
            { content: 'K사(공공기관) : 핸디소프트 그룹웨어(포털) 고도화 (2024.11 ~ 2025.04)' },
          ],
          skillKeywords: [
            'Java',
            'Spring Boot',
            'Vue',
            'React',
            'TypeScript',
            'Node.js',
            'Express.js',
            'JSP',
            'MySQL',
            'Oracle',
            'SQLite',
            'Docker',
            'Jenkins',
            'NHN Cloud',
          ],
        },
      ],
    },
  ],
};

export default experience;
