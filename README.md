# X_Clone 프로젝트

## **🌐 배포 주소**

배포 링크 : https://zcom-tawny.vercel.app/home

## **⚙ 실행 방법**

.env

```bash
 NEXT_PUBLIC_BASE_URL=http://localhost:9090
 AUTH_SECRET=dsfasfsf
```

.env.local

```bash
NEXT_PUBLIC_API_MOCKING=enabled
NEXT_PUBLIC_BASE_URL=http://localhost:9090
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_MODE=local
```

실행

```bash
npm run mock // auth확인시 필수
npm run dev
```

## 🙇‍♂️프로젝트 설명

이 프로젝트는 `Next.js`에 대한 지식 강화와 `TanstackQuery`에 대한 경험을 쌓기 위해 제로초님의 X 사이트 클론 강의를 시청하면서 시작되었습니다. 이전에 X사이트의 디자인을 모티브로 인자강이라는 프로젝트를 진행한 경험이 있습니다. 당시에는 감탄만 했던 X사이트 핵심 디자인은 시도 조차 하지못했던 과거를 떠올리게 되어 그동안의 성장을 스스로 증명하고자 강의 코드가 아닌 대부분 저의 코드로 클론 코딩을 진행했습니다.

## 💁‍♂️핵심 구현 사항

- MSW 서비스워커 방식을 기반으로 API 활용
- TanstackQuery를 이용한 무한 스크롤링
- URL이동 방식의 포토 슬라이드 모달구현(캐싱 적용)
- 포스트 작성 파일업로드 이미지 미리보기
- 파일업로드 이미지 미리보기 & 스케일링 다중 편집
- 포스트 작성시 자동 높이 조절
- 자연스러운 비율의 화면 확대, 축소
- 3개의 테마 설정 ( 글꼴 크기, 색상, 배경 )

## 💡채택한 기술 스택

### Next.js 14

- 강의 과정이 `Next14`와 `Next13` 선택할 수 있었는데, 이전에 인자강 프로젝트 에서 `Next.js13`을 사용한 경험이 있어 `Next.js 14`를 선택하였습니다.
- 라우팅 방식은 이전 프로젝트에서 페이지 라우팅을 이용했으나, 레이아웃을 최적화 했음에도 페이지 이동 시마다 어쩔 수 없는 레이아웃의 불필요한 렌더링 문제를 고려하여 `App Routing` 방식을 선택하였습니다.

### Styled-Component

- 강의에서는 `SSR`의 호환성 문제로 기본 CSS를 활용했지만, 다양한 환경에서 CSS-in-JS 라이브러리 연마의 필요성을 느껴 `Styled-Compoents`를 선택하였습니다.
- 컴포넌트의 다양한 활용 측면이나, X사이트의 동적 UI를 표현하는데 CSS-in-JS 기반의 스타일링이 효율적이라 판단하였습니다.

### Zustand

- 이전 프로젝트에서 `Redux`를 활용하여 비동기 처리 상태, 클라이언트 상태 관리에 활용해봤으나, 보일러플레이트로 인한 문제 때문에 매번 비효율적이라 생각이들어 `Zustand`를 선택하였습니다.
- `TanstackQuery`를 이용하는 점에서 스토어 관리에도 문제 없을 거라 판단 하였습니다.
- 배포시 라이브러리 용량도 매우 낮아 자원 활용에 효율적이라 판단 하였습니다.

### TanStack-query

- X클론 강의를 수강한 계기라 선택사항은 없었습니다.
- 이전에 캐싱을 직접 구현해본 경험이 있었는데, 그 과정이 상당히 복잡했으며 특히 키관리 측면에서 어려움을 느꼈습니다.

### eslint

- 강의에는 별다른 언급이 없었지만, 개인적으로 `ESLint`는 선택이 아닌 필수라고 생각했습니다.
- `ESLint` 룰 설정은 에어 비앤비의 기본 형태로 주로 사용하는 룰을 추가 하였습니다.

### SSR과 CSR

- 이전에는 `SSR`과 `CSR`을 적절히 활용하지 못하고 개념만 이해하여 `LightHouse`의 점수를 끌어올리는 데 한계를 느꼈습니다.
- 이번 프로젝트에서는 `SSR` (서버 사이드 렌더링)과 `CSR` (클라이언트 사이드 렌더링)을 적절히 활용하여 성능 최적화를 목표로 하였습니다.
- `SSR`을 통해 초기 로딩 속도를 개선하고 SEO를 강화하며, `CSR`을 통해 사용자 상호작용을 최적화하였습니다.

## 개발 기간 및 작업 간략 설명

### 전체 개발 기간 : 2022. 04. 14 ~ ing

## 주요 구현 기능

### 포스트 작성 높낮이 조절

![height](https://github.com/Minsoek96/zcom/assets/125581005/3b758939-59cf-46a6-aeda-c4f7fdca61da)

### URL 이동 방식의 포토 슬라이드 효과 모달

- URL이 변하면서 이미지 슬라이드 효과
- 페이지 변동시 데이터는 캐싱 상태에서 가져올것
- 액션 버튼 특정 조건 활성

![photoModal](https://github.com/Minsoek96/zcom/assets/125581005/66c43489-84b4-47b2-80d2-535724dc9deb)

### 3개의 테마설정 ( 글꼴크기, 색상 , 배경 )

- 글꼴의 크기 변화
- 페이지 디자인 메인 색상 선택
- 메인 테마 배경 색상 선택 ( 기본 , 어둡게 , 완전 어둡게 )

![theme](https://github.com/Minsoek96/zcom/assets/125581005/8e85491d-81b0-4ad2-a079-97798a41f4e1)

### 파일업로드 이미지 미리보기 슬라이드( 다중 지원 )

- 멀티 이미지 업로드
- 기본형 이미지 슬라이드
- 단일 이미지, 다중 이미지 크기 조절

![mediaCut](https://github.com/Minsoek96/zcom/assets/125581005/0a3dacfc-c089-4140-b0f4-e0ebeb79874d)

### 업로드 이미지 스케일 설정, 다중 편집

- 이미지 스케일 상태 조절바
- 자연스러운 스케일링 효과 유지와 상태 저장은 최소화 (디바운스 활용)
- 이미지 편집 상태 임시 저장 편집 일괄 적용

![mediaCut](https://github.com/Minsoek96/zcom/assets/125581005/0a3dacfc-c089-4140-b0f4-e0ebeb79874d)

### 자연스러운 비율의 화면 확대 축소

- 마우스 스크롤시 비율을 유지하면서 확대, 축소
- 저시각자 사용성을 고려

![scroll](https://github.com/Minsoek96/zcom/assets/125581005/d8cdea61-9ef4-40b1-8bef-70b20e15833d)

### 인피니티 스크롤링

![infinity](https://github.com/Minsoek96/zcom/assets/125581005/3bd42090-4dac-4013-9420-53f424b45ca3)

## 후기

이전 인자강 프로젝트를 시작할 당시, 프로젝트 디자인에 대해 많은 고민을 하며 여러 사이트를 탐방하다가 X 사이트에 매료되었던 기억이 납니다. 특히 X 사이트의 사이드바와 테마 설정이 인상 깊었습니다. 일반적인 사이트들은 다크테마와 기본테마 두개로 나뉘는 경우가 많았지만, X 사이트는 글꼴, 메인 색상, 배경등 여러 가지 테마 선택권을 제공하여 사용자 경험을 고려한 점이 돋보였습니다. 당시에는 테마 설정에 대한 기본지식 조차 부족하여 단독으로 프로젝트를 진행해야 했던 점에서 효율성을 핑계로 그저 바라만 보았던 기억이 납니다.

그렇게 인자강 프로젝트를 통해 Redux를 이용한 상태관리와 테마 설정에 대한 경험을 축적했습니다. 돌이켜보면 당시 다양한 프로젝트 경험이 있어 자신감은 있었지만, 기능을 구현하기에 급급했고, 검색의 연속이었던 기억이 납니다. 이후 프리온보딩와 메가테라 과정을 통해 클린 코드의 형태, 컴포넌트의 활용성, 코드의 가독성 및 유지보수성에 대한 개념을 익힌후, X사이트의 클론 코딩을 진행과정은 확실히 이전와 달랐습니다.

같은 스타일 컴포넌트를 사용하더라도 디자인 시스템에 대해 생각하게되었고, 상속을 이용하여 중복 코드를 줄였습니다. 타입스크립트를 사용할 떄는 제네릭을 활용하여 컴포너트의 활용성을 높일 수 있었습니다. 가장 큰 성장은 느꼈던 순간은 컴포넌트를 구상할때 SPA원칙에 의해 어떻게 분리해야할지 생각하고, 컴포넌트에 대한 추상화를 고려하게 된 점 입니다. 기능 구현에만 급급했던 지난날과 다르게 우선 기능을 구현하고 하나씩 리팩토링하며 발전시켜 나가는 여유를 익혔습니다.

아직 많이 부족하지만, 프론트엔드로 성장하기 위한 기본 틀을 갖추게 되어 보람을 느꼈습니다. 풋내기의 코드에 지나지 않을 수 있지만, 스스로 커다란 성장을 이루었다고 생각하며 앞으로의 성장이 기대됩니다.



## 🤦‍♂️아쉬운점

테스트 코드의 부재가 아쉽다는 생각이 들었습니다. 프로젝트 초반에는 단순히 강의 수강 목적에서 시작했기 때문에 테스트 코드에 대한 생각을 하지 못했습니다. 코드 작성에는 최대한 고민하며 배운 것을 활용하려고 노력했지만, 해당 기능들에 대한 체계적인 테스트나 다양한 케이스의 테스트를 직접 하는 것에는 분명 한계가 있음을 느꼈습니다. 테스트 코드 작성의 부재를 깨달았을 당시에는 이미 프로젝트가 많이 진행된 상태라 외면할 수 밖에 없었습니다. 만약 프로젝트 초기로 되돌아 간다면 TDD 방식을 도입하여 코드를 작성했을 것입니다.

## 🛠Tech Stack

<div>

Area| Tech Stack|
:--------:|:------------------------------:|
**Frontend** |<img src="https://img.shields.io/badge/next.js-000000.svg?&style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js"> <img src="https://img.shields.io/badge/typescript-3178C6.svg?&style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"> <img src="https://img.shields.io/badge/styled-DB7093.svg?&style=for-the-badge&logo=styled-components&logoColor=white" alt="Styled Components"> <img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" alt="React Query"><img src="https://img.shields.io/badge/zustand-000000.svg?&style=for-the-badge&logo=zustand&logoColor=white" alt="Zustand"><img src="https://img.shields.io/badge/nextauth-000000.svg?&style=for-the-badge&logo=next.js&logoColor=white" alt="NextAuth">
**Backend** |<img src="https://img.shields.io/badge/msw-FF4154?style=for-the-badge&logo=msw&logoColor=white" alt="MSW">

</div>