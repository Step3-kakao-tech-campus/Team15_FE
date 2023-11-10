# 전남대 15조 [빌리지]🏘️ _ 보로미(BorrowMe)
대학생을 위한 B2C 기반 대여 서비스 웹/앱
<br/><br/>


## 보로미(BorrowMe)란?
  > 대학생들을 위한 쉽고 빠른 대여 서비스, Borrow Me

🏫 필요한 대여물품을 **학교 내에서** 간편하게 대여
- 보로미에서는 전공책, 전자기기, 정장 등의 대여물품을 학교 내에서 빠르게 대여할 수 있어요.
- 원하는 카테고리를 선택하면, 카테고리 별로 상품들을 확인해볼 수 있어요.
- 대여물품의 정가를 함께 알려주어 더욱 합리적인 선택을 도와요 !

🗓️ 원하는 대여날짜를 **1일 간격**으로 정할 수 있어요
- 비싼 노트북을 구매하기 전 며칠동안만 사용해보고 싶다면 ?? 대여기간을 하루부터 설정가능하기 때문에 원하는 기간만 대여할 수 있어요.
- 다른 대여 플랫폼은 최소 한달이던데, 우와 !
 
✅ **버튼 한 번**으로 반납 신청도 빠르게 ~
- 대여 종료일이 되면 [마이페이지]>[대여내역]>['반납하기'] 버튼을 통해 반납 신청을 할 수 있어요 !

💬 **리뷰를 확인**하고 상품에 대한 다양한 의견도 바로 확인 가능
- 원하는 상품을 클릭하면, 다른 사람들의 리뷰를 확인할 수 있어요 ~ 참고해서 더 좋은 선택을 해보시는 건 어떨까요 ?
</br>

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
|학생인증으로 회원가입|<img src="https://github.com/Step3-kakao-tech-campus/Team15_FE/assets/102536227/61600c72-4f87-427b-bea6-61fa0f35bb9e" width="120" height="200"/>|학생증을 사진 촬영하여, <br>학생인증이 가능합니다.|
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
<br/><br/>

## 15조 기타 링크
- [비공식 노션](https://www.notion.so/loopy-lim/Kakao-Team-15-2f7a7a7b9c0049a5afdbc7933452083a/)
- [공식 노션](https://www.notion.so/ad7ae2629b6d4267acc52fb4e4fa22bc?v=c78021d44a9641c9b54ef9c20d8202a1)
- [BE_API](https://loopy-lim.notion.site/BE_API-c02e5946141b45f889a22cb909d0d617)
- [FE 깃헙](https://github.com/Step3-kakao-tech-campus/Team15_FE)
- [BE 깃헙](https://github.com/Step3-kakao-tech-campus/Team15_BE)
- [Figma](https://www.figma.com/file/CoUEoS5JYZz78AYT5c4Oq1/%EC%99%80%EC%9D%B4%EC%96%B4-%ED%94%84%EB%A0%88%EC%9E%84?type=design&node-id=0-1&mode=design)
<br/><br/>

## 기술 stack
[![stackticon](https://firebasestorage.googleapis.com/v0/b/stackticon-81399.appspot.com/o/images%2F1699619628378?alt=media&token=e8256fb5-1c4c-4b5a-9ea0-2000db39685f)](https://github.com/msdio/stackticon)
<br/><br/>

## ☑️ 시작가이드
파일을 클론 한 후 아래의 명령어를 입력해 프로젝트를 직접 실행 해 볼 수 있습니다.
```
pnpm install
pnpm dev
```

## capatitor 실행과 관련하여

```sh
ionic cap run ios -l --external
ionic cap run android -l --external
```

을 이용하여 실행합니다. 만약 -g로 ionic이 설치가 안되어 있다면 다음과 같은 명령어로 설치합니다.

```sh
npm install -g @ionic/cli native-run
```
