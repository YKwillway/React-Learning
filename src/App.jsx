// 関数コンポーネントをまとめたファイルは拡張子「.jsx」とするのがgood
// 関数コンポーネント化して、main.tsxから使用する

import { ColorfulMessage } from "./components/ColorfulMessage";

// コンポーネント名は大文字始まりのパスカルケースとする
export const App = () => {
  // タグの中で関数が長くなりすぎると良くないので、外で関数を定義する
  const onClickButton = () => alert();
  const contentStyle = {
    color: "green",
    // 「hoge-fuga」のようなスタイル指定は「hogeFuga」のようなキャメルケースで表記する
    fontSize: "18px",
  }
  return (
    <>
      {/* スタイルの「:」の右側はダブルクォーテーションで囲む */}
      <h1 style={{color: "red"}}>こんにちは</h1>

      {/* <ColorfulMessage color="green" message="元気ですか！(猪木風)"></ColorfulMessage>
      <ColorfulMessage color="orange" message="元気ですか！(2回目)"></ColorfulMessage>
      <ColorfulMessage color="blue" message="元気です"></ColorfulMessage> */}
      <ColorfulMessage color="green">元気ですか！(猪木風)</ColorfulMessage>
      <ColorfulMessage color="orange">元気ですか！(2回目)</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};