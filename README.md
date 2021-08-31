# to-do-list

바닐라js 공부를 시작했다면 개발하는게 국룰인 투두리스트

## Mission

1. js로 html 요소를 동적으로 제어하는데 익숙해지기
2. 마크다운 사용해서 리드미 파일 작성하기  
   -> [마크다운 작성법](https://gist.github.com/ihoneymon/652be052a0727ad59601)
3. 커밋 메시지 신경써서 작성하기  
   -> [커밋 메시지 컨벤션](https://overcome-the-limits.tistory.com/entry/%ED%98%91%EC%97%85-%ED%98%91%EC%97%85%EC%9D%84-%EC%9C%84%ED%95%9C-%EA%B8%B0%EB%B3%B8%EC%A0%81%EC%9D%B8-git-%EC%BB%A4%EB%B0%8B%EC%BB%A8%EB%B2%A4%EC%85%98-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)
4. 깃허브 호스팅

## Features

1. 일정 추가
2. 일정 삭제
3. 일정 완료 체크 / 체크 해제
4. 완료/미완료 일정 분리해서 보기

## Result

👉🏻 [완성된 페이지](https://o5sy.github.io/to-do-list/)


## 프로젝트 구조

```
todo-list
├─ css
│  ├─ index.css
│  └─ scss
│     ├─ common
│     │  ├─ _base.scss
│     │  ├─ _color.scss
│     │  ├─ _font.scss
│     │  ├─ _mixin.scss
│     │  ├─ _reset.scss
│     │  └─ _size.scss
│     └─ index.scss
├─ index.html
├─ js
│  ├─ index.js
│  └─ item
│     └─ todo.item.js
└─ res
   ├─ font
   └─ img
```

## 배운 점

1. @font-face로 글꼴 설정하는 법
2. sass에서 @import로 다른 파일 가져오는 법
3. css 가상 클래스에 content:''으로 할 경우 display를 block이나 inline-block으로 설정해야 컨텐츠(배경 이미지)가 보임
4. css 가상 클래스 선택자는 콜론 한개만 사용하길 권장(더블 콜론 사용할 경우 ie8 이하 버전에서 적용되지 않음)
5. svg 파일 재활용하는 법
6. sass 코딩 컨벤션 (mixin, 변수 네이밍 규칙 등)
7. 깃허브 호스팅 시 리소스들은 코드에서 상대경로로 불러와야 로드됨

## 소감

- ts 쓰다가 js 쓰니까 런타임에서 오류 확인해야 되는 부분이 불편하다
- css에서 궁금했던 부분 찾아볼 수 있어서 좋았다
- 모르는게 있을 때 검색만 하지 말고 오픈채팅 등을 활용해 적극적으로 물어보자
