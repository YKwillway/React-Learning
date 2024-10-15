// 関数コンポーネントをまとめたファイルは拡張子「.jsx」とするのがgood
// 関数コンポーネント化して、main.tsxから使用する
// コンポーネント名は大文字始まりのパスカルケースとする
export const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1>こんにちは</h1>
      <p>お元気ですか？</p>
      {console.log('hoge')}
      <button onClick={() => alert('hoge')}>ボタン</button>
    </>
  );
};