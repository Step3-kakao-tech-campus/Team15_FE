# 전남대 15조 [빌리지]🏘️ \_ 보로미(BorrowMe)

<img src="https://i.postimg.cc/GhPt3vVh/001-1.png"><br/>

**대학생을 위한 B2C 기반 대여 서비스 웹/앱**
<br/><br/>

## 💡 보로미(BorrowMe)란?

> 대학생들을 위한 쉽고 빠른 대여 서비스, Borrow Me

🏫 필요한 대여물품을 **학교 내에서** 간편하게 대여

- 보로미에서는 전공책, 전자기기, 정장 등의 대여물품을 학교 내에서 빠르게 대여할 수 있어요.
- 원하는 카테고리를 선택하면, 카테고리 별로 상품들을 확인해볼 수 있어요.
- 대여물품의 정가를 함께 알려주어 더욱 합리적인 선택을 도와요!

🗓️ 원하는 대여날짜를 **1일 간격**으로 정할 수 있어요

- 비싼 노트북을 구매하기 전 며칠동안만 사용해보고 싶다면 ?? 대여기간을 하루부터 설정가능하기 때문에 원하는 기간만 대여할 수 있어요.
- 다른 대여 플랫폼은 최소 한달이던데, 우와!

✅ **버튼 한 번**으로 반납 신청도 빠르게 ~

- 대여 종료일이 되면 [마이페이지]>[대여내역]>['반납하기'] 버튼을 통해 반납 신청을 할 수 있어요!

💬 **리뷰를 확인**하고 상품에 대한 다양한 의견도 바로 확인 가능

- 상품을 클릭하면, 다른 사람들의 리뷰를 확인 할 수 있어요! 참고해서 더 좋은 선택을 해보시는 건 어떨까요?
  </br>

## 🕐 개발기간

- 23.08.25일 - 23.11.11일
  <br/>

## 👩‍👩‍👧‍👦 멤버구성

### FE

| <img src="https://github.com/loopy-lim.png"  width="150" height="150"/> | <img src="https://github.com/mlnwns.png"  width="150" height="150"/> | <img src="https://github.com/minkonging.png"  width="150" height="150"/> |
| :---------------------------------------------------------------------: | :------------------------------------------------------------------: | :----------------------------------------------------------------------: |
|                 [임채승](https://github.com/loopy-lim)                  |                 [곽민준](https://github.com/mlnwns)                  |                 [소민경](https://github.com/minkonging)                  |

<br/>

## 🧐 주안점을 두고 개발한 기능

- 코드의 재사용성을 높이기 위해 만들 수 있는 거의 모든 컴포넌트들을 'src/components'에 따로 생성을 해두고,
  필요한 컴포넌트들을 가져다 쓰는 식으로 구현하였습니다! 😎
- 사용자가 **최소한의 경로로 최대한 간편하게 대여** 할수있도록 고민하여 불필요한 로직들을 없앴습니다!

<br/><br/>

## ⚙️ 기술 stack

[![stackticon](https://firebasestorage.googleapis.com/v0/b/stackticon-81399.appspot.com/o/images%2F1699624370376?alt=media&token=c29b1847-20e1-4610-8479-40d0b0d37290)](https://github.com/msdio/stackticon)

## ⭐️ 시작가이드

파일을 클론 한 후 아래의 명령어를 입력해 프로젝트를 직접 실행 해 볼 수 있습니다.

```sh
$ pnpm install --lockfile
$ pnpm run dev
```

임시로 BE를 실행해보고 싶다면 다음과 같은 코드를 사용하면 됩니다.

```sh
$ cd borrow-me
$ pnpm install --lockfile
$ pnpm run seed:run # 초기 데이터를 넣는 실행 명령어입니다.
$ pnpm run start:dev
```

## ⭐️ capatitor 실행과 관련하여

```sh
$ ionic cap run ios -l --external
$ ionic cap run android -l --external
```

을 이용하여 실행합니다. 만약 ionic이 설치가 안되어 있다면 다음과 같은 명령어로 설치합니다.

```sh
$ pnpm install -g @ionic/cli native-run
```
