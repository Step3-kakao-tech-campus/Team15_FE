export const universities = [{ name: "부산대학교" }, { name: "전남대학교" }];

export const locations = [
  {
    name: "전남대학교 제 1학생회관",
    universityPk: 1,
    latitude: "123",
    longitute: "123",
  },
];

export const categories = [
  { name: "IT" },
  { name: "도서" },
  { name: "양복" },
  { name: "악기" },
];

export const users = [
  {
    universityPk: 1,
    email: "admin@borrowme.kr",
    password: "1234",
    nickname: "admin",
    role: "USER",
    idCardImagePath: "https://placehold.co/600x400",
    profileImagePath: "https://placeimg.com/400",
  },
];

export const companies = [
  { name: "렌탈.kr", companyImagePath: "https://placeimg.com/400" },
  { name: "위시 렌탈", companyImagePath: "https://placeimg.com/400" },
];

export const products = [
  {
    locationPk: 1,
    categoryPk: 1,
    name: "Apple 2023 맥북프로 14 M2 Pro ●장기렌탈+상품권증정",
    rentalPrice: 5_000,
    regularPrice: 2_790_000,
    review: 0,
    companyPk: 1,
    content:
      "모델명  : MPHE3KH/A\n(10C CPU 16C GPU) 512GB\n색 상 :  스페이스 그레이\n무상A/S : 제조사 기준\n렌탈 종료 후 제품 고객소유\n10만상품권증정(예고없이변경,종료될수 있으므로 렌탈상담/접수시 꼭확인해주세요)",
  },
  {
    locationPk: 1,
    categoryPk: 1,
    name: "LG 그램 노트북 16인치 i5-1340P [이니렌탈]",
    rentalPrice: 3_000,
    regularPrice: 1_920_000,
    review: 0,
    companyPk: 1,
    content:
      "모델명  :  16Z90R-GAFWK\n\n렌탈료 외 추가비용 NO\n무상 AS: 제조사기준\n렌탈기 간 종료 후 제품 소유권 자동 이전\n20만상품권증정\n사은행사는 예고없이 변경 또는 종료될 수 있으니 렌탈상담 시 꼭 확인해주세요\n법인렌탈불가",
  },
  {
    locationPk: 1,
    categoryPk: 1,
    name: "LG 그램 노트북 17인치 i5-1340P [이니렌탈]",
    rentalPrice: 2_900,
    regularPrice: 2_650_000,
    review: 0,
    companyPk: 1,
    content:
      "모델명  :  17Z90R-GAFWK\n렌탈료 외 추가비용 NO\n무상 AS: 제조사기준\n렌탈기 간 종료 후 제품 소유권 자동 이전\n20만상품권증정\n사은행사는 예고없이 변경 또는 종료될 수 있으니 렌탈상담 시 꼭 확인해주세요\n법인렌탈불가",
  },
  {
    locationPk: 1,
    categoryPk: 1,
    name: "갤럭시북2 Pro /15.6인치 Core™ i7/512GB ●상품권증정",
    rentalPrice: 3_200,
    regularPrice: 2_099_000,
    review: 0,
    companyPk: 1,
    content:
      "1년무상A/S\n법인렌탈불가\n13만상품권증정\n사은품은 예고없이 변경 또는 종료될 수 있으니 렌탈상담/접수시 꼭 확인해주세요",
  },
  {
    locationPk: 1,
    categoryPk: 1,
    name: "LG 그램 Style 노트북 14인치ㅣ13세대 인텔® 코어™ i5-1340P[이니렌탈] 20만증정",
    rentalPrice: 2_700,
    regularPrice: 3_000_000,
    review: 0,
    companyPk: 1,
    content:
      "모델명  :  14Z90RS-GAFWK\n렌탈료 외 추가비용 NO\n무상 AS: 제조사기준\n렌탈기 간 종료 후 제품 소유권 자동 이전\n20만상품권증정\n사은행사는 예고없이 변경 또는 종료될 수 있으니 렌탈상담 시 꼭 확인해주세요 \n법인렌탈불가",
  },
  {
    locationPk: 1,
    categoryPk: 1,
    name: "Apple 맥북 에어 2022년형 M2 256G 실버 MLXY3KH/A",
    rentalPrice: 2_800,
    regularPrice: 1_590_000,
    review: 0,
    companyPk: 2,
    content:
      "모델명MLXY3KH/A\n브랜드애플 I APPLE자체품목코드P500000APLCPU모델명 x GPU모델명 x 저장용량 x RAM용량M2 8코어 x GPU 8코어 x 256GB x 8GB x 30W x 한글운영체제MAC OSCPU 모델 번호M2그래픽카드 형태미장착저장장치SSD저장장치 인터페이스M.2 NVMe인치13",
  },
  {
    locationPk: 1,
    categoryPk: 1,
    name: "Apple 맥북 프로 2022년형 M2 256G 스페이스 그레이 MNEH3KH/A",
    rentalPrice: 3_000,
    regularPrice: 1_990_000,
    review: 0,
    companyPk: 2,
    content:
      "모델명MNEH3KH/A\n브랜드애플 I APPLE자체품목코드P500000APLCPU모델명 x GPU모델명 x 저장용량 x RAM용량M2 8코어 x GPU 10코어 x 256GB x 8GB운영체제MAC OS그래픽카드 형태장착저장장치SSD저장장치 인터페이스M.2 NVMe색상계열그레이인치13",
  },
  {
    locationPk: 1,
    categoryPk: 1,
    name: "Apple 맥북 에어 2022년형 M2 256G 스페이스 그레이 MLXW3KH/A",
    rentalPrice: 2_900,
    regularPrice: 1_590_000,
    review: 0,
    companyPk: 2,
    content:
      "모델명MLXW3KH/A\n브랜드애플 I APPLE자체품목코드P500000APLCPU모델명 x GPU모델명 x 저장용량 x RAM용량M2 8코어 x GPU 8코어 x 256GB x 8GB x 30W x 한글운영체제MAC OSCPU 모델 번호M2그래픽카드 형태미장착저장장치SSD저장장치 인터페이스M.2 NVMe인치13",
  },
  {
    locationPk: 1,
    categoryPk: 1,
    name: "[삼성] 갤럭시북2 PRO 15.6인치 i5 SSD 256G",
    rentalPrice: 3_300,
    regularPrice: 1_299_000,
    review: 0,
    companyPk: 2,
    content: "모델명NT951XED-KR51S 브랜드삼성자체품목코드P500000LIV",
  },
  {
    locationPk: 1,
    categoryPk: 1,
    name: "[삼성] 갤럭시북2 PRO 13.3인치 i5 SSD 256G",
    rentalPrice: 3_000,
    regularPrice: 1_049_000,
    review: 0,
    companyPk: 2,
    content: "모델명NT931XED-KR58S\n브랜드삼성자체품목코드P500000LIV",
  },
];

export const coins = [{ userPk: 1, piece: 1_000_000_000_000 }];
export const coinLogs = [
  { coinPk: 1, piece: 1_000_000_000_000, coinType: "충전" },
];
