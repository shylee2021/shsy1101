export const invitation = {
  couple: {
    groom: {
      name: '이상혁',
      shortName: '상혁',
      parents: ['이현우', '길은희'],
      relation: '장남',
    },
    bride: {
      name: '이서윤',
      shortName: '서윤',
      parents: ['이성철', '고재미'],
      relation: '장녀',
    },
  },
  wedding: {
    date: {
      dateOnly: '2026-11-01',
      display: '2026년 11월 1일 일요일 오후 2시',
    },
    venue: {
      name: '더채플앳논현',
      hall: '5층 라메르홀',
      address: '서울특별시 강남구 논현로 549',
      transport: '지하철 9호선 언주역 7번 출구 도보 3분',
      flowerNotice: '축하 화환은 정중히 사양합니다. 따뜻한 마음만 감사히 받겠습니다.',
      parkingNotice: '주차 및 출차 대기가 길어질 수 있으니, 가급적 대중교통 이용을 부탁드립니다.',
      // Parking and shuttle: https://www.weddingbook.com/review/532?reviewType=BLOG_REVIEW
      parkingGuide: '내부 주차 공간이 협소하여 대부분의 차량은 외부 주차장으로 안내될 예정입니다. 외부 주차장 이용 시, 현장 주차요원의 안내에 따라 본관 2층 주차장에서 차량을 맡겨 주세요. 발렛 직원이 외부 주차장으로 이동하여 주차해 드립니다.',
      departureGuide: '외부 주차장을 이용하신 경우, 귀가 시 본관 1층 건물 앞에서 셔틀버스를 타고 차량이 주차된 곳으로 이동해 주세요. 셔틀버스는 약 5~10분 간격으로 운행하며, 교통 상황에 따라 대기 시간이 길어질 수 있습니다.',
      // Facility locations: https://blog.naver.com/grb_080913/224222429219
      // Free parking: venue sign photographed in https://blog.naver.com/qjawls17/224404203234
      mainParkingPayment: '본관 주차: 주차할인권 적용 시 90분 무료. 할인권은 각 층에서 받으실 수 있으며, 주차 정산기는 본관 2층 또는 지하 1층에 있습니다.',
      externalParkingPayment: '외부 발렛주차: 150분 무료 자동 적용. 주차 정산기는 역삼 SI타워 1층 또는 지하 2층에 있습니다.',
      atm: '본관 2층 주차정산기 옆에 ATM이 마련되어 있습니다.',
      nearbyAtm: '예식장 외부에는 언주역 방향에 하나은행 ATM, 역삼역 방향에 국민은행 ATM이 있습니다.',
    },
    greeting: [
      '11월의 첫날,',
      '따뜻한 햇살과 깊은 하늘을 닮은 두\u00a0사람이\u00a0만나',
      '평생의 계절을 함께하려고 합니다.',
      '늘 곁에서 아껴주신 소중한\u00a0분들을\u00a0모시오니',
      '귀한 걸음으로 자리를 빛내주시면 감사하겠습니다.',
    ],
  },
  gallery: {
    previewFiles: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '11.jpg'],
  },
  accounts: [
    {
      label: '신랑 측',
      entries: [
        {
          label: '신랑',
          bank: '국민은행',
          number: '445302-04-127854',
          holder: '이상혁',
        },
        {
          label: '아버지',
          bank: '하나은행',
          number: '132-891106-23207',
          holder: '이현우',
        },
      ],
    },
    {
      label: '신부 측',
      entries: [
        {
          label: '신부',
          bank: '하나은행',
          number: '203-910528-23707',
          holder: '이서윤',
        },
        {
          label: '아버지',
          bank: '카카오뱅크',
          number: '3333-31-8591010',
          holder: '이성철',
        },
        {
          label: '어머니',
          bank: '신한은행',
          number: '110-011-136219',
          holder: '고재미',
        },
      ],
    },
  ],
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

const locationQuery = encodeURIComponent(invitation.wedding.venue.address)
export const naverMapUrl = `https://map.naver.com/p/search/${locationQuery}`
export const kakaoMapUrl = `https://map.kakao.com/link/search/${locationQuery}`
export const tmapAndroidMapUrl = `tmap://search?name=${locationQuery}`
export const tmapIosMapUrl = `tmap://?search=${locationQuery}`
