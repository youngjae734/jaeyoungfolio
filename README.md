# JaeYoung-Jung.dev

> Learning fast, building better.

정재영의 개인 포트폴리오 사이트입니다. 지금까지 진행한 프로젝트와 이력, 연락처를 한곳에 모았습니다.

🔗 **https://youngjae734.github.io/jaeyoungfolio/**

<!-- 사이트 스크린샷을 docs/ 폴더에 넣고 아래 주석을 풀면 README 상단에 미리보기가 나옵니다. -->
<!-- ![미리보기](docs/preview.png) -->

## 프로젝트

| 프로젝트 | 분야 | 설명 |
|---|---|---|
| [OddO (오또)](https://jaeyoung27.notion.site/Oddo-dad990ba135e8260a82581f0aa088f28) | AI · 4인 팀 | 표정·음성·텍스트를 함께 분석해 하루를 대화로 기록하는 AI 감정 영상 일기 |
| [Campus Link](https://jaeyoung27.notion.site/Campus-Link-4f8990ba135e83fe98ba8110f7aae102) | Web · Database | 캠퍼스 활동, 일정, 공간 예약을 한곳에서 관리하는 웹 서비스 |
| [LifeLog Productivity Predictor](https://jaeyoung27.notion.site/Data-Science-a50990ba135e827da43801c4dde51374) | Data · ML | 수면, 스트레스, 번아웃 데이터로 개인의 생산성을 예측하는 분석 프로젝트 |
| [UE5 가상 패션 팝업스토어](https://jaeyoung27.notion.site/UE5-747990ba135e82e6ba788166670c20d1) | UE5 · 1인 | 체형을 고르고 옷을 입어보며 실제 브랜드 사이트로 이어지는 몰입형 가상 매장 |

각 프로젝트의 자세한 내용은 노션 페이지에 정리되어 있습니다.

## 기술 스택

- **Framework**: [Astro](https://astro.build/) (정적 사이트)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Motion](https://motion.dev/) (스크롤 등장, 스프링 애니메이션)
- **Font**: Pretendard, Instrument Serif
- **Deploy**: GitHub Actions → GitHub Pages

## 주요 기능

- 첫 화면 순차 등장 애니메이션과 천천히 움직이는 그라데이션 배경
- 스크롤하면 나타나는 네비게이션 바
- 크기가 엇갈리는 프로젝트 카드 레이아웃
- 모바일 대응, `prefers-reduced-motion` 설정 시 애니메이션 꺼짐
- 테마 색상을 CSS 변수 한곳에서 관리

## 폴더 구조

```
src/
├── data/site.ts        # 프로필, 프로젝트, 학력 등 사이트 내용
├── styles/global.css   # 테마 색상(:root)과 공통 스타일
├── pages/              # Home, Projects, Resume, Contact 페이지
├── components/         # Nav, Glow(배경 효과), Collage 등
├── layouts/Base.astro  # 공통 레이아웃 + 애니메이션 스크립트
└── assets/             # 프로젝트·프로필 이미지
```

## 수정하는 법

- **내용**(프로젝트, 학력, 기술 등): `src/data/site.ts`
- **색상**: `src/styles/global.css` 맨 위 `:root`의 값만 바꾸면 사이트 전체 색이 바뀝니다.
- **프로젝트 추가**: 이미지를 `src/assets/`에 넣고 `site.ts`의 `projects` 배열에 항목을 추가합니다.

## 로컬에서 실행

```bash
npm install
npm run dev      # http://localhost:4321/jaeyoungfolio/
npm run build    # dist/ 에 정적 파일 생성
```

`main` 브랜치에 푸시하면 GitHub Actions가 자동으로 빌드하고 배포합니다.

## Contact

- Email: youngjae734@gmail.com
- GitHub: [@youngjae734](https://github.com/youngjae734)
- Blog: [youngjae777.tistory.com](https://youngjae777.tistory.com/)

---

디자인 참고: [dharmeshnayak.com](https://dharmeshnayak.com/)
