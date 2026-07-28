export const invitation = {
  couple: {
    groom: {
      name: '이상혁',
      shortName: '상혁',
      englishName: 'SANGHYUK LEE',
      parents: ['이현우', '길은희'],
      relation: '장남',
    },
    bride: {
      name: '이서윤',
      shortName: '서윤',
      englishName: 'SEOYOON LEE',
      parents: ['이성철', '고재미'],
      relation: '장녀',
    },
  },
  wedding: {
    date: {
      iso: '2026-11-01T14:00:00+09:00',
      dateOnly: '2026-11-01',
      display: '2026년 11월 1일 일요일 오후 2시',
      compact: '2026. 11. 01  SUN  2:00 PM',
    },
    venue: {
      name: '더채플앳논현',
      hall: '5층 라메르홀',
      address: '서울특별시 강남구 논현로 549',
      transport: '지하철 9호선 언주역 7번 출구 도보 3분',
    },
    greeting: [
      '11월의 첫날',
      '밝은 햇살과 깊고 푸른 하늘을 닮은 두 사람이 만나',
      '평생의 계절을 함께하려 합니다',
      '오늘의 저희를 있게 해주신 소중한 분들을 모시고',
      '새로운 시작의 기쁨을 나누고자 하오니',
      '함께하시어 따뜻한 축복을 더해주시기 바랍니다',
    ],
  },
  account: {
    bank: '국민은행',
    number: '445302-04-127854',
    holder: '이상혁',
  },
  share: {
    title: '상혁 ❤️ 서윤 결혼합니다',
  },
} as const

export const calendarDays: Array<number | null> = [
  1, 2, 3, 4, 5, 6, 7,
  8, 9, 10, 11, 12, 13, 14,
  15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28,
  29, 30, null, null, null, null, null,
]

const locationQuery = encodeURIComponent(`${invitation.wedding.venue.name} ${invitation.wedding.venue.address}`)
export const naverMapUrl = `https://map.naver.com/p/search/${locationQuery}`
export const kakaoMapUrl = `https://map.kakao.com/link/search/${locationQuery}`
