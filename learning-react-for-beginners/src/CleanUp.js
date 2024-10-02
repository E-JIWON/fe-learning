import React from "react";
import { useEffect, useState } from "react";

function Hello() {
  useEffect(() => {
    console.log("Hi :)"); // 마운트될 때 실행

    return () => {
      console.log("Bye :("); // 언마운트될 때 실행
    };
  }, []); // 빈 배열을 사용해 마운트/언마운트 시에만 실행되도록 설정

  // 강의와 동일하게 나오지 않아서 확인해보니
  // 현재 나타나는 현상은 React가 컴포넌트를 다시 렌더링할 때 발생하는 현상으로,
  // React.StrictMode로 인해 개발 모드에서 컴포넌트가 두 번 마운트 및 언마운트 되는 문제일 가능성이 큽니다.
  // React.StrictMode는 개발 중 특정한 문제가 발생할 수 있는 패턴을 감지하기 위해
  // 일부 컴포넌트의 useEffect 훅을 의도적으로 두 번 실행합니다.
  // 따라서 마운트 시 Hi :)가 두 번, 언마운트 시 Bye :(가 두 번 찍히는 상황이 발생할 수 있습니다.

  return <h1>Hello</h1>;
}

function CleanUp() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default CleanUp;
