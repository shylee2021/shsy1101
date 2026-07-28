export default function App() {
  return (
    <main className="site">
      <article className="notice" aria-labelledby="notice-title">
        <p className="folio">WEDDING INVITATION · 2026</p>

        <div className="monogram" aria-hidden="true">
          <span />
          <b>S <i>&amp;</i> S</b>
          <span />
        </div>

        <div className="message">
          <p>소중한 분들께 전할</p>
          <h1 id="notice-title">
            <span>상혁과 서윤의</span>
            초대장을 준비하고 있습니다.
          </h1>
          <p className="description">
            두 사람의 새로운 시작을 담아<br />곧 인사드리겠습니다.
          </p>
        </div>

        <time dateTime="2026-11-01T14:00:00+09:00">
          <span>2026. 11. 01</span>
          일요일 오후 2시
        </time>

        <p className="names">SANGHYUK LEE · SEOYOON LEE</p>
      </article>
    </main>
  )
}
