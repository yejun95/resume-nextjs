import { ProjectPayload } from '../types/project';

const project: ProjectPayload = {
  disable: false,
  list: [
    {
      title: '이엑스메이트 (Exmate) OMS/WMS 개발 및 인프라 운영',
      startedAt: '2025-07',
      where: '이엑스메이트',
      descriptions: [
        {
          content:
            'Qoo10, Rakuten 등 오픈마켓 API 연동을 통한 주문 자동 수집 체계 구축 및 WMS 입고/출고 프로세스 연동',
        },
        {
          content:
            '상품 마스터 등록 로직 설계로 SKU 단위 재고 관리 체계 구축, 주문 상태별 처리 플로우 구현 (주문 수집 → 출고 → 피킹 → 출고)',
        },
        {
          content:
            '대량 데이터 조회 시 복합 인덱스 설계로 주요 조회 응답 시간 70% 개선\n(5초 → 1.5초)',
          weight: 'MEDIUM',
        },
        {
          content:
            '엑셀 기반 상품/재고 데이터 일괄 등록 기능 개발, 청크 단위 분할 처리로 대량 업로드 안정성 확보',
        },
        {
          content:
            'CloudWatch + Lambda 기반 RDS 모니터링 구축 및 Lambda를 활용한 인스턴스 자동 스케일링으로 비용 최적화',
        },
        {
          content: 'GitHub Actions를 활용한 자동 배포 파이프라인 구축',
        },
        {
          content: 'ALB + ACM 기반 HTTPS 환경 구성, Synology NAS 사내 인프라 운영',
        },
      ],
    },
    {
      title: 'K사(공공기관) 핸디소프트 그룹웨어 고도화',
      startedAt: '2024-11',
      endedAt: '2025-04',
      where: '티엔아이정보 (구 비제이시스템즈)',
      descriptions: [
        { content: '기술 스택 : Java, JSP, Oracle' },
        { content: '핸디소프트 그룹웨어의 게시판 및 포털 관리 영역 고도화' },
        { content: '신고 게시판 개발 — 게시물 블라인드 처리 및 신고 해제 기능 구현' },
        { content: '게시물 예약 발행 기능 구현 (지정 일시에 자동 게시되도록 스케줄링 처리)' },
        { content: '직책 순번 자동 채번 배치 개발 (조직 변경 시 순번 자동 재정렬)' },
      ],
    },
    {
      title: 'WBS (Work Breakdown Structure) 시스템 개발',
      startedAt: '2024-05',
      endedAt: '2025-07',
      where: '티엔아이정보 (구 비제이시스템즈)',
      descriptions: [
        {
          content:
            '기술 스택 : Node.js, Express.js, Vue3, Pinia, SQLite, Docker, Jenkins, NHN Cloud',
        },
        {
          content:
            '프로젝트 업무를 카테고리·세부 작업 단위로 분류하여 추적·관리하는 사내 시스템 개발',
        },
        { content: 'Weekly Todo 관리 화면 및 백엔드 REST API 개발' },
        { content: 'Task 등록 시 고유번호 자동 채번 로직 구현 및 트랜잭션 처리로 정합성 확보' },
        { content: 'Mattermost Webhook을 활용한 Todo 완료 시 자동 알림 스케줄러 구현' },
        { content: 'GitHub — Jenkins 연동 CI/CD 파이프라인 구축 및 NHN Cloud 환경 배포·운영' },
      ],
    },
    {
      title: 'SK Broadband 어드민 시스템 유지보수',
      startedAt: '2023-07',
      endedAt: '2024-10',
      where: '티엔아이정보 (구 비제이시스템즈)',
      descriptions: [
        { content: '기술 스택 : Java, Spring Boot, Vue2, Vuex, MySQL, Docker, Jenkins' },
        {
          content:
            'PC 제어 및 원격 케어 서비스의 회원·상담 통합 관리 어드민 시스템 유지보수 (총 약 11개월)',
        },
        { content: '고객사와 직접 소통하며 요구사항 접수 후 프론트엔드/백엔드 반영' },
        { content: '에러 로그 분석을 통한 장애 원인 파악 및 수정' },
        { content: 'DB 쿼리를 통한 월 단위 운영 데이터 추출 및 정제' },
      ],
    },
    {
      title: '김앤장 필라2 세액 계산 솔루션 개발',
      startedAt: '2023-11',
      endedAt: '2024-01',
      where: '티엔아이정보 (구 비제이시스템즈)',
      descriptions: [
        { content: '기술 스택 : Java, Spring Boot, Vue3, TypeScript, Pinia, SQLite, Docker' },
        {
          content:
            '글로벌 최저한세(필라2) 세액 계산을 위해 김앤장의 엑셀 기반 계산 체계를 웹으로 전환',
        },
        { content: '자사 프레임워크를 프로젝트에 맞게 포팅하여 개발 기반 구성' },
        { content: 'Vue3 기반 프론트엔드 전체 화면 개발 및 페이지 라우팅 적용' },
        { content: '백엔드 응답 데이터에 맞는 TypeScript 타입 정의로 프론트-백 간 정합성 확보' },
        { content: '주 2회 고객사(김앤장) 미팅 참여, 회의록 작성 및 요구사항 정리' },
      ],
    },
  ],
};

export default project;
