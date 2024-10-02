import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

/**
 * 개발중에 잠시 꺼두자
 * 프로덕션에서는 문제 없음: 실제 배포 버전에서는 StrictMode의 동작이 제거되기 때문에 useEffect가 정상적으로 한 번만 실행됩니다.
 */
