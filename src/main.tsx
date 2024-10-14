import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Reactで画面を表す関数をコンポーネントという。
// コンポーネントは大文字始まり。
const App = () => {
  // ・複数要素を表現したい場合は、丸括弧()で囲む
  // ・複数要素を任意の要素で囲む
  //   ・任意の要素で囲みたくない場合は、<>を使用する。
  //.    以前は<>に相当する<React.Fragment>があった。
  return (
    <>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
    </>
  )
}

root.render(
  // 公式が推奨しているStrictModeを使用する
  <StrictMode>
    <App />
  </StrictMode>,
)