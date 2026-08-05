import { invitation } from './config'

export default function App() {
  return (
    <main className="site">
      <article className="notice" aria-labelledby="notice-title">
        <header className="folio">
          <span>WEDDING INVITATION · 2026</span>
          <b>S <i>&amp;</i> S</b>
        </header>

        <div className="message">
          <p>소중한 분들께 전할</p>
          <h1 id="notice-title">
            <span>{invitation.couple.groom.shortName}과 {invitation.couple.bride.shortName}의</span>
            초대장을 준비하고 있습니다.
          </h1>
          <p className="description">
            두 사람의 새로운 시작을 담아<br />곧 인사드리겠습니다.
          </p>
        </div>

        <time dateTime={invitation.wedding.dateTime}>
          <span>{invitation.wedding.date}</span>
          {invitation.wedding.time}
        </time>

        <p className="names">{invitation.couple.groom.englishName} · {invitation.couple.bride.englishName}</p>
      </article>
    </main>
  )
}
