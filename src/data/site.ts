import type { ImageMetadata } from 'astro';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3-crop.png';

/** base 경로(/jaeyoungfolio)를 붙여주는 헬퍼 */
export const url = (path: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;

export const profile = {
  name: 'JaeYoung Jung',
  firstName: 'Jaeyoung',
  tagline: 'Learning fast, building better',
  headline: 'Always learning, always improving',
  motto: '작은 기능 하나에도 사용자와 팀을 먼저 생각합니다.',
  email: 'youngjae734@gmail.com',
  github: 'https://github.com/youngjae734',
  blog: 'https://youngjae777.tistory.com/',
  /** 이력서 PDF를 public/assets에 넣고 경로를 적으면 Download 버튼이 생깁니다. 예: 'assets/resume.pdf' */
  resumePdf: null as string | null,
};

export type Project = {
  slug: string;
  title: string;
  label: string;
  summary: string;
  /** 상세 페이지 본문 (HTML 허용: <strong>) */
  body: string[];
  image: ImageMetadata;
  imageAlt: string;
  pdf: string;
};

export const projects: Project[] = [
  {
    slug: 'oddo',
    title: 'OddO (오또)',
    label: 'AI · 4인 팀 프로젝트 · 진행 중',
    summary: '표정, 음성, 텍스트를 함께 분석해 하루를 대화로 기록해주는 AI 감정 영상 일기',
    body: [
      '<strong>OddO</strong>는 멀티모달 실시간 감정 분석을 기반으로 사용자의 하루를 대화형으로 기록해주는 AI 감정 영상 일기 시스템입니다.',
      '표정, 음성, 텍스트 등 다양한 입력을 통합 분석하여 감정 변화를 실시간으로 추적하고, 심리학 기반 인지행동치료 CBT 이론에 기반한 SFT 상담 모듈을 통해 사용자의 정서적 회고를 돕습니다.',
      '<strong>4인 팀 프로젝트로 진행 중</strong>이며, 본인은 멀티모달 감정 분석 및 대화형 일기 구현을 담당하고 있습니다.',
    ],
    image: project3,
    imageAlt: 'OddO 앱 화면',
    pdf: 'assets/Oddo.pdf',
  },
  {
    slug: 'campus-link',
    title: 'Campus Link',
    label: 'WEB · DATABASE',
    summary: '캠퍼스 활동, 일정, 공간 예약을 한 곳에서 관리하는 웹 서비스',
    body: [
      '<strong>Campus Link</strong>는 대학 캠퍼스 내 활동, 일정, 공간 예약을 하나의 플랫폼에서 통합 관리하기 위한 웹 서비스입니다.',
      'Oracle 데이터베이스를 기반으로 사용자, 활동, 공간, 예약, 일정, 커뮤니티 기능을 설계하고, PHP를 활용해 웹 페이지와 데이터베이스를 연동하여 실제 서비스 흐름을 구현했습니다.',
      '단순한 기능 구현에 그치지 않고, <strong>데이터 무결성과 확장성</strong>을 고려한 DDL 설계와 실제 사용 시나리오를 반영한 테이블 관계 설계에 중점을 두었습니다.',
    ],
    image: project1,
    imageAlt: 'Campus Link 메인 화면',
    pdf: 'assets/Campus Link.pdf',
  },
  {
    slug: 'lifelog',
    title: 'LifeLog Productivity Predictor',
    label: 'DATA · MACHINE LEARNING',
    summary: '수면, 스트레스, 번아웃 데이터로 개인의 생산성을 예측하는 분석 프로젝트',
    body: [
      '<strong>LifeLog Productivity Predictor</strong>는 수면 시간, 스트레스 지수, 번아웃 수준 등 다양한 라이프로그 데이터를 통합·전처리하여 개인의 생산성을 예측하는 데이터 분석 프로젝트입니다.',
      'Linear Regression, Decision Tree, Lasso, Polynomial Regression 등 여러 머신러닝 모델을 학습·비교하여 예측 성능을 분석하고 최적의 모델을 도출했습니다.',
    ],
    image: project2,
    imageAlt: 'Stress Level vs Productivity 회귀 그래프',
    pdf: 'assets/LifeLog Productivity Predictor.pdf',
  },
];

export const education = [
  {
    period: '2023 –',
    school: 'Hongik University',
    location: 'Sejong, KR',
    dept: ['과학기술대학', '소프트웨어융합학과'],
    points: [
      '자료구조, 운영체제, 데이터베이스 등 컴퓨터 공학 기초 과목 이수',
      'Java 기반 객체지향 프로그래밍 및 웹 개발 실습',
      '팀 프로젝트를 통한 요구사항 분석 및 협업 경험',
      '문제 해결 중심의 논리적 사고와 설계 역량 강화',
    ],
  },
  {
    period: '2026 –',
    school: '메타버스 6기',
    location: 'Hongik University',
    dept: ['Educating', 'Software Engineering'],
    points: [
      '웹 개발 전반에 대한 실습 중심 교육 과정 이수',
      '백엔드 개발 흐름 이해 및 기초 설계 경험',
      '개인·팀 프로젝트 수행을 통한 개발 경험',
      'Git 기반 협업 및 코드 관리 경험',
    ],
  },
];

/** 경력이 생기면 여기에 추가하세요. 비어 있으면 Resume 페이지에서 Experience 섹션이 숨겨집니다. */
export const experience: { period: string; role: string; org: string; points: string[] }[] = [];

export const skills = ['Web Development', 'Network Security'];
export const languages = ['Python', 'Java', 'HTML', 'CSS', 'JavaScript', 'SQL'];
