# My React App 2026

### 1) 의존성 설치

```bash
npm install
```

### 2) 개발 서버

```bash
npm run dev
```

브라우저에서 **http://localhost:5173** (기본 포트)로 접속하면 앱을 확인할 수 있습니다.

## 스크립트

| 명령 | 설명 |
|------|------|
| `npm run dev` / `npm start` | 개발 서버 (HMR) |
| `npm run build` | 프로덕션 빌드 → `dist/` |
| `npm run preview` | 빌드 결과 미리보기 |
| `npm test` | Vitest 실행 |


### 3) 폴더구조

## `<src>`

```
src/
├── components/      # 공통 UI 컴포넌트
├── pages/           # 라우팅 되는 페이지 컴포넌트
├── hooks/           # 커스텀 훅
├── assets/          # 이미지,폰트 등
├── utils/           # 공통 유틸 함수
├── App.tsx          # 루트 컴포넌트
├── main.tsx         # 진입점
```