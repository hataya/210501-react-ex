/*eslint react-hooks/exhaustive-deps: off*/
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [showFlag, setshowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickShowFlag = () => {
    setshowFlag(!showFlag);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      showFlag || setshowFlag(true);
    } else {
      showFlag && setshowFlag(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickShowFlag}>om/off</button>
      <p>{num}</p>
      {showFlag && <p>しぇ～～～～</p>}
    </>
  );
};

export default App;
