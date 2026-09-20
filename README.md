# Wedding Invitation

## 실행

Node.js 24 LTS와 pnpm이 필요합니다.

```bash
pnpm install
pnpm dev
```

청첩장 정보는 `src/config.ts`에서 관리합니다. 갤러리 사진은 `src/assets/gallery/`에 추가하고, 본문 사진은 `gallery.previewFiles`에 파일명을 원하는 순서로 지정합니다. 전체보기는 본문 선택과 관계없이 파일 번호순을 유지합니다.

## Supabase 설정

새 Supabase 프로젝트의 SQL Editor에서 `supabase/guestbook.sql`과 `supabase/rsvp.sql`을 각각 실행합니다. 테이블, 제약 조건, RLS 정책, 권한과 함수를 함께 설정합니다.

각 스크립트는 트랜잭션으로 실행됩니다. 기존 테이블과 데이터는 유지하지만, 기존 테이블의 열이나 제약 조건을 변경하는 마이그레이션은 아닙니다. 스키마 정의만 저장하며 실제 방명록·참석 응답이나 비밀 키는 저장소에 포함하지 않습니다.

기존 프로젝트에 대인·소인 구분을 추가할 때는 **프런트엔드 배포 전에** `supabase/migrations/001_rsvp_child_count.sql`을 SQL Editor에서 한 번 실행합니다. 기존 응답은 소인 0명으로 유지됩니다. `party_size`는 총인원, `child_count`는 소인 인원이며 대인은 두 값의 차이입니다. 구버전 청첩장에서 보낸 응답도 소인 0명으로 저장됩니다. 인원 집계는 `attending = true`인 응답만 대상으로 합니다.

설정 후 SQL Editor에서 `tests/schema.sql`을 실행하면 데이터 조회·변경 없이 스키마와 주요 권한을 점검할 수 있습니다. 이 검사는 `pnpm test`와 별도로 실행합니다.

`.env.local`에 다음 값을 넣습니다.

```env
VITE_SUPABASE_URL=프로젝트 URL
VITE_SUPABASE_PUBLISHABLE_KEY=Publishable key
```

배포할 때는 같은 이름의 GitHub Actions 변수를 등록합니다.

## 빌드 확인

```bash
pnpm test
pnpm build
pnpm preview
```

RSVP 인원 검사는 `pnpm dev` 실행 후 `http://localhost:5173/tests/rsvp.html`을 엽니다. 대인·소인 합계, 인원 제한, 불참 정규화를 모의 요청으로 검사합니다.

갤러리 동작 검사는 `pnpm dev` 실행 후 `http://localhost:5173/tests/gallery.html`을 브라우저에서 엽니다. 테스트용 이미지만 사용하며 Supabase에 연결하지 않습니다.

## 배포

`main` 브랜치에 푸시하면 GitHub Pages에 자동 배포됩니다.
