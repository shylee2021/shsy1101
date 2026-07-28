# 상혁과 서윤의 모바일 청첩장

React, TypeScript, Vite로 만든 GitHub Pages용 정적 사이트입니다. 현재는 준비 중 화면만 제공합니다.

## 실행

```bash
pnpm install
pnpm dev
```

## 검사 및 빌드

```bash
pnpm typecheck
pnpm build
pnpm preview
```

`main` 브랜치가 GitHub에 푸시되면 `.github/workflows/deploy-pages.yml`이 `dist`를 GitHub Pages에 배포합니다. 저장소의 **Settings → Pages → Source**는 **GitHub Actions**로 설정해야 합니다.
