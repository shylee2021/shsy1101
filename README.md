# Wedding Invitation

## 실행

Node.js 24 LTS와 pnpm이 필요합니다.

```bash
pnpm install
pnpm dev
```

청첩장 정보는 `src/config.ts`에서 관리합니다. 갤러리 사진은 `src/assets/gallery/`에 번호순으로 추가하고, 본문에 먼저 보일 사진 수는 `gallery.previewCount`로 조정합니다. 나머지는 전체보기 화면에 표시됩니다.

## Supabase 설정

Supabase SQL Editor에서 `supabase/guestbook.sql`과 `supabase/rsvp.sql`을 한 번씩 실행하고 `.env.local`에 다음 값을 넣습니다.

```env
VITE_SUPABASE_URL=프로젝트 URL
VITE_SUPABASE_PUBLISHABLE_KEY=Publishable key
```

배포할 때는 같은 이름의 GitHub Actions 변수를 등록합니다.

## 빌드 확인

```bash
pnpm build
pnpm preview
```

## 배포

`main` 브랜치에 푸시하면 GitHub Pages에 자동 배포됩니다.
