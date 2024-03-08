# React-TypeScript

### level 5

- json-server , axios를 이용한 db통신
- react-query 를 이용한 CRUD 통신

### 핵심 구현 사항

- CRUD, branch 이름 관리

### 스크린샷

![alt text](image.png)

### hooks를 통한 CRUD 분리

![alt text](image-1.png)

- 공용으로 사용하는 queryKeys를 key.constant.ts로 분리

---

### 주요 문제 및 해결

- 기존에 자바스크립트로 작성된 부분에 각각 타입을 입력하는 과정에서 문제가 발생, 주된 문제는 커스텀 훅을 재사용하는 과정에서 타입 설정에 대한 오류였습니다.

  - 기존의 Todo 타입에서 유틸리티 타입 Pick을 이용하여 별도의 타입을 생성,
    ![alt text](image-2.png)
