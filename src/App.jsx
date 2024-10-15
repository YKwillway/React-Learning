import { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

// コンポーネント名は大文字始まりのパスカルケースとする
export const App = () => {
  // Reactの機能を接続するための関数を「フック」と呼ぶ
  // useStateはStateを利用するための「フック」
  // スコープの最上位階層でないとuseState(初期値)は使用できない
  const [num, setNum] = useState(0);
  const onClickCountUp = () => {
    // Reactのstate更新は特定の関数の中だとバッチ化されて実行される
    // setNum(num + 1)を2行記述していても、ボタンを押下した際、1カウントアップされる
    // setNum(num + 1);
    // setNum(num + 1);

    // set〇〇は引数に関数を受けることもできる。この場合はボタンを押下した際、2カウントアップされる
    // 変数prevにはsetNum実行時点のnumの値が入ってくる
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
  };
  const contentStyle = {
    color: "green",
    // 「hoge-fuga」のようなスタイル指定は「hogeFuga」のようなキャメルケースで表記する
    fontSize: "18px",
  };
  return (
    <>
      {/* スタイルの「:」の右側はダブルクォーテーションで囲む */}
      <h1 style={{color: "red"}}>こんにちは</h1>

      {/* <ColorfulMessage color="green" message="元気ですか！(猪木風)"></ColorfulMessage>
      <ColorfulMessage color="orange" message="元気ですか！(2回目)"></ColorfulMessage>
      <ColorfulMessage color="blue" message="元気です"></ColorfulMessage> */}
      <ColorfulMessage color="green">元気ですか！(猪木風)</ColorfulMessage>
      <ColorfulMessage color="orange">元気ですか！(2回目)</ColorfulMessage>
      <button onClick={onClickCountUp}>ボタン</button>
      <p>{num}</p>
    </>
  );
};