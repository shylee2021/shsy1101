import { useState } from 'react'
import hero from './assets/hero.jpg'
import heroSmall from './assets/hero-small.jpg'
import { copyText, downloadCalendar, shareInvitation } from './actions'
import { CalendarGrid, GalleryViewer, Icon, Reveal, Toast, useToast, type GalleryImage } from './components'
import { invitation, kakaoMapUrl, naverMapUrl } from './config'

const gallery = Object.entries(import.meta.glob<string>('./assets/gallery/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  query: '?url',
  import: 'default',
}))
  .sort(([left], [right]) => left.localeCompare(right, undefined, { numeric: true }))
  .map(([, src], index): GalleryImage => ({
    src,
    alt: `${invitation.couple.groom.shortName}과 ${invitation.couple.bride.shortName}의 웨딩 사진 ${index + 1}`,
  }))

export default function App() {
  const [viewerIndex, setViewerIndex] = useState<number | null>(null)
  const toast = useToast()
  const { couple, wedding, account } = invitation

  async function copyAccount() {
    const copied = await copyText(`${account.bank} ${account.number} ${account.holder}`)
    toast.show(copied ? '신랑측 계좌번호를 복사했습니다.' : '복사하지 못했습니다. 다시 시도해 주세요.')
  }

  return (
    <div className="letter-shell">
      <header className="cover" aria-labelledby="cover-title">
        <div className="cover__folio" aria-hidden="true">A LETTER · 01</div>
        <div className="cover__heading">
          <p className="cover__eyebrow">우리, 같은 길을 걷습니다</p>
          <h1 id="cover-title"><span>{couple.groom.name}</span><i>&amp;</i><span>{couple.bride.name}</span></h1>
        </div>
        <figure className="cover__figure">
          <img src={hero} srcSet={`${heroSmall} 800w, ${hero} 1200w`} sizes="(max-width: 600px) 100vw, 588px" alt={`나란히 서 있는 ${couple.groom.name}과 ${couple.bride.name}`} width="1200" height="1800" fetchPriority="high" />
          <figcaption>01 · NOVEMBER · 2026</figcaption>
        </figure>
        <div className="cover__facts">
          <p>{wedding.date.display}</p>
          <p>{wedding.venue.name}<br />{wedding.venue.hall}</p>
        </div>
        <a className="cover__scroll" href="#invitation">초대의 글 <span aria-hidden="true">↓</span></a>
      </header>

      <main>
        <section className="letter section-pad" id="invitation" aria-labelledby="invitation-title">
          <Reveal>
            <p className="kicker">INVITATION</p>
            <h2 id="invitation-title">소중한 당신께</h2>
          </Reveal>
          <Reveal className="letter__copy" delay={100}>
            {wedding.greeting.map((line, index) => <p key={line} className={index === 3 ? 'letter__new-stanza' : ''}>{line}</p>)}
          </Reveal>
          <Reveal className="letter__signature" delay={160}>
            <span>{couple.groom.shortName}</span><i>그리고</i><span>{couple.bride.shortName}</span>
          </Reveal>
        </section>

        <section className="family section-pad" aria-labelledby="family-title">
          <Reveal>
            <div className="section-index">02 / OUR FAMILIES</div>
            <h2 id="family-title" className="sr-only">혼주와 신랑 신부 소개</h2>
            <div className="family__line">
              <p><strong>{couple.groom.parents.join(' · ')}</strong><span>의 {couple.groom.relation}</span></p>
              <b>{couple.groom.name}</b>
            </div>
            <div className="family__line family__line--bride">
              <p><strong>{couple.bride.parents.join(' · ')}</strong><span>의 {couple.bride.relation}</span></p>
              <b>{couple.bride.name}</b>
            </div>
          </Reveal>
        </section>

        <section className="date-section section-pad" aria-labelledby="date-title">
          <Reveal className="date-section__intro">
            <p className="kicker">THE DAY</p>
            <h2 id="date-title"><span>2026</span>11월의<br />첫 번째 일요일</h2>
            <p>{wedding.date.display}<br />{wedding.venue.name} {wedding.venue.hall}</p>
          </Reveal>
          <Reveal className="date-section__calendar" delay={100}>
            <CalendarGrid />
            <button className="text-action" type="button" onClick={() => { downloadCalendar(); toast.show('캘린더 파일을 저장했습니다.') }}>
              <Icon name="calendar" /> 캘린더에 저장
            </button>
          </Reveal>
        </section>

        <section className="photo-essay" aria-labelledby="gallery-title">
          <Reveal className="photo-essay__heading">
            <span>03</span><h2 id="gallery-title">두 사람의 장면들</h2><p>사진을 누르면 크게 볼 수 있습니다.</p>
          </Reveal>
          <div className="photo-essay__grid">
            {gallery.map((image, index) => (
              <Reveal className={`photo-essay__item item-${index + 1}`} delay={(index % 2) * 90} key={index}>
                <button type="button" onClick={() => setViewerIndex(index)} aria-label={`${index + 1}번 사진 크게 보기`}>
                  <img src={image.src} alt={image.alt} loading="lazy" />
                </button>
                <span>SCENE {String(index + 1).padStart(2, '0')}</span>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="venue section-pad" aria-labelledby="venue-title">
          <Reveal>
            <p className="kicker">LOCATION</p>
            <h2 id="venue-title">오시는 길</h2>
            <div className="venue__name"><strong>{wedding.venue.name}</strong><span>{wedding.venue.hall}</span></div>
            <address>{wedding.venue.address}</address>
            <p className="venue__transit">{wedding.venue.transport}</p>
            <nav className="venue__links" aria-label="지도 서비스">
              <a href={naverMapUrl} target="_blank" rel="noreferrer"><Icon name="map" /> 네이버 지도</a>
              <a href={kakaoMapUrl} target="_blank" rel="noreferrer"><Icon name="map" /> 카카오맵</a>
            </nav>
          </Reveal>
        </section>

        <section className="closing section-pad" aria-labelledby="closing-title">
          <Reveal>
            <p className="kicker">WITH GRATITUDE</p>
            <h2 id="closing-title">축하의 마음을<br />오래 간직하겠습니다.</h2>
            <details className="account">
              <summary>신랑측 마음 전하실 곳</summary>
              <div className="account__body">
                <p><span>{account.bank}</span><strong>{account.number}</strong><small>예금주 {account.holder}</small></p>
                <button type="button" onClick={copyAccount}><Icon name="copy" /> 계좌번호 복사</button>
              </div>
            </details>
            <button className="share-action" type="button" onClick={async () => toast.show(await shareInvitation())}><Icon name="share" /> 초대장 공유하기</button>
          </Reveal>
          <p className="closing__names">{couple.groom.shortName} <i>&amp;</i> {couple.bride.shortName}</p>
        </section>
      </main>

      <GalleryViewer images={gallery} index={viewerIndex} onIndexChange={setViewerIndex} onClose={() => setViewerIndex(null)} />
      <Toast message={toast.message} />
    </div>
  )
}
