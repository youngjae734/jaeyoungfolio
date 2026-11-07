# Jaeyoungfolio

> Learning fast, building better.

 포트폴리오 사이트입니다. 지금까지 진행한 프로젝트와 이력, 연락처를 한곳에 모았습니다.

🔗 **https://youngjae734.github.io/**

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
npm run dev      # http://localhost:4321/
npm run build    # dist/ 에 정적 파일 생성
```

`main` 브랜치에 푸시하면 GitHub Actions가 자동으로 빌드하고 배포합니다.

## Contact

- Email: youngjae734@gmail.com
- GitHub: [@youngjae734](https://github.com/youngjae734)
- Blog: [youngjae777.tistory.com](https://youngjae777.tistory.com/)
