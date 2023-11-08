# 전남대 15조 [빌리지]🏘️ _ 보로미(BorrowMe)
대학생을 위한 B2C 기반 대여 서비스 웹/앱
<br/><br/>


## 보로미(BorrowMe)란?
  대학생을 위한 B2C 기반 대여 서비스 웹/앱으로 고가의 맥북이나 한학기만 필요한 전공서적들을 정해진 대여비로부터 원하는 기간동안만 대여할 수 있는 시스템. 사전에 학생회관(생협)과 연계하여 학교 내 건물에서 수령 및 반납이 가능해 편리힘.
  또한 원하는 물건을 쉽고 가볍게 빌리기(UX Goal)위한 목표를 설정함.
<br/><br/>

## 🕐 개발기간
- 23.08.25일 - 23.11.11일
<br/>

## 👩‍👩‍👧‍👦 멤버구성
### FE
|<img src="https://github.com/loopy-lim.png"  width="150" height="150"/>|<img src="https://github.com/mlnwns.png"  width="150" height="150"/>|<img src="https://github.com/minkonging.png"  width="150" height="150"/>|
|:---:|:---:|:---:|
|[임채승](https://github.com/loopy-lim)|[곽민준](https://github.com/mlnwns)|[소민경](https://github.com/minkonging)|

### BE
|<img src="https://github.com/geunho00.png"  width="150" height="150"/>|<img src="https://github.com/zxc88kr.png"  width="150" height="150"/>|<img src="https://github.com/C0Zl.png"  width="150" height="150"/>|
|:---:|:---:|:---:|
|[김근호](https://github.com/geunho00)|[박찬](https://github.com/zxc88kr)|[이지혜](https://github.com/C0Zl)|
<br/>

## 서비스 소개
|기능|디자인|상세 설명|
|:---:|:---:|:---:|
|학생인증으로 회원가입|![image](https://github.com/Step3-kakao-tech-campus/Team15_FE/assets/102536227/61600c72-4f87-427b-bea6-61fa0f35bb9e)|학생증을 사진 촬영하여, <br>학생인증이 가능합니다.|
|상품 조회하기|<a href="https://ibb.co/Tqz6ytG"><img src="https://i.ibb.co/1JH1cTN/image.png" alt="image" border="0"></a>|상품 전체를 스크롤로 조회하고, <br>개별 상품을 선택하여 조회합니다.|
|대여 날짜 선택하기|<a href="https://ibb.co/MZ9mVBk"><img src="https://i.ibb.co/JmC973j/image.png" alt="image" border="0"></a>|원하는 대여 날짜를 선택합니다.|
|상품 검색하기|<a href="https://ibb.co/mRyqNwm"><img src="https://i.ibb.co/10Xqz53/image.png" alt="image" border="0"></a>|검색을 통해 원하는 상품을 찾을 수 있습니다.|
|페이머니 충전 및 결제하기|<a href="https://ibb.co/GkywM49"><img src="https://i.ibb.co/Y8m9dFX/image.png" alt="image" border="0"></a>|페이머니를 통해 결제를 진행합니다. <br>충전된 페이머니 잔액이 부족하면 충전페이지로 바로 이동합니다.|
|대여내역 조회 및 리뷰 작성하기|<a href="https://ibb.co/znFRXbn"><img src="https://i.ibb.co/cgwF6tg/image.png" alt="image" border="0"></a>|대여내역을 조회하여 리뷰를 작성할 수 있습니다.|
<br/>

## 주요 Flow(흐름)
웹/앱 시작시 보로미 splash 화면이 나오고, 사용자는 로그인(email 및 비밀번호 입력)할 수 있다. 회원이 아니라면 회원가입 및 학교인증 순서를 거쳐 로그인이 가능하다.
메인화면에서 카테고리나 리스트 혹은 캐러셀을 통해 원하는 물건의 유무를 확인 가능하고, 해당 물품을 누르면 상세 정보 페이지가 떠 상품 대여 가격, 기간, 상품에 대한 스펙, 회사 등에 대한 정보 열람이 가능하다. 하단의 대여하기 버튼을 클릭하면
대여날짜를 선택할 수 있는 캘린더가 나오고 원하는 대여 날짜 기간을 선택하면 결제하기 버튼이 활성화된다.
하단의 결제하기 버튼을 누르면 결제 페이지로 이동하여 페이머니 잔액이 대여 금액 이상일때에 결제하기 버튼이 활성화되어 최종 결제가 진행된다.
대여 내역 페이지에서 대여 해왔던 기록들 및 현재 대여 상태에 대한 조회 및 리뷰 작성이 가능하다.
검색 탭에서 물품 검색이 가능하다.
마이페이지에서 페이머니 잔액 및 충전이 가능하다.
<br/>

## 주요 기능
### 로그인
- 사용자의 email 및 비밀번호 입력
### 회원가입 및 학교 인증 페이지
<br/>

## 15조 기타 링크
[비공식 노션](https://www.notion.so/loopy-lim/Kakao-Team-15-2f7a7a7b9c0049a5afdbc7933452083a/)
[공식 노션](https://www.notion.so/ad7ae2629b6d4267acc52fb4e4fa22bc?v=c78021d44a9641c9b54ef9c20d8202a1)
[BE_API](https://loopy-lim.notion.site/BE_API-c02e5946141b45f889a22cb909d0d617)
[FE 깃헙](https://github.com/Step3-kakao-tech-campus/Team15_FE)
[BE 깃헙](https://github.com/Step3-kakao-tech-campus/Team15_BE)
[Figma](https://www.figma.com/file/CoUEoS5JYZz78AYT5c4Oq1/%EC%99%80%EC%9D%B4%EC%96%B4-%ED%94%84%EB%A0%88%EC%9E%84?type=design&node-id=0-1&mode=design)
<br/>

## 기술 stack
### WEB
- React.js
- Capacitor.js
### SERVER
- Spring
- Mysql
### Deploy
- Docker
- Nginx
<br/>


## capatitor 실행과 관련하여

```sh
ionic cap run ios -l --external
ionic cap run android -l --external
```

을 이용하여 실행합니다. 만약 -g로 ionic이 설치가 안되어 있다면 다음과 같은 명령어로 설치합니다.

```sh
npm install -g @ionic/cli native-run
```
