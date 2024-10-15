// 関数コンポーネントをまとめたファイルは拡張子「.jsx」とするのがgood
// 関数コンポーネント化して、main.tsxから使用する
// コンポーネント名は大文字始まりのパスカルケースとする
export const App = () => {
  // タグの中で関数が長くなりすぎると良くないので、外で関数を定義する
  const onClickButton = () => alert();
  const h1Style = {
    color: "green",
    // 「hoge-fuga」のようなスタイル指定は「hogeFuga」のようなキャメルケースで表記する
    fontSize: "30px",
    margin: 100
  }
  return (
    <>
      {/* スタイルの「:」の右側はダブルクォーテーションで囲む */}
      <h1 style={{color: "red"}}>こんにちは</h1>
      <p style={h1Style}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};