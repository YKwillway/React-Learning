import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App';
// ↑import文では拡張子は省略できる。

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // 公式が推奨しているStrictModeを使用する
  // 開発時にStrictModeを使用しているとレンダリングが2回行われる
  <StrictMode>
    {/* 外部に作成したコンポーネントを使用する。import文は自動的に追加される */}
    <App></App>
  </StrictMode>,
)